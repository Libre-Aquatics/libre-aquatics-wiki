#!/usr/bin/env python3
"""
Build sources/_tracking/source-tracker.xlsx: one row per research document.

  python scripts/build-source-tracker.py                # dry run, reports only
  python scripts/build-source-tracker.py --apply        # write the workbook

Nine columns. The path is taken off disk; every other column starts blank and is
filled in by hand while working through a document. Nothing is populated automatically.

  source              corpus-relative path of the document
  title (page 1)      what page one calls it, filenames being unreliable
  pages               how long the document is
  extraction          state of the `.txt` extraction beside it
  scanned             FALSE until someone has gone through it
  scanned by          who or what read it: a model name, or a person
  scanned on          the date it was read, as YYYY-MM-DD
  products mentioned  what the document covers
  notes               anything else worth recording about the document

Everything but `source` belongs to whoever is working the sheet. Every run reads those
eight columns back out of the workbook before rewriting it, so regenerating refreshes the
file list without destroying an edit. Rows key on the path in column one, so renaming
a document starts its row over.

A sheet written before any of these columns existed still reads: the missing columns
come back blank rather than throwing the edits away.

The workbook is the only file: there is no state or cache alongside it.
"""

import argparse
import csv
import os
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from datetime import datetime, timedelta, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
CORPUS = REPO / "sources"
TRACKING = CORPUS / "_tracking"
WORKBOOK = TRACKING / "source-tracker.xlsx"

SKIP_DIRS = {"_tracking"}

COL_SOURCE = "source"
COL_TITLE = "title (page 1)"
COL_PAGES = "pages"
COL_EXTRACTION = "extraction"
COL_SCANNED = "scanned"
COL_SCANNED_BY = "scanned by"
COL_SCANNED_ON = "scanned on"
COL_PRODUCTS = "products mentioned"
COL_NOTES = "notes"
COLUMNS = [(COL_SOURCE, 78), (COL_TITLE, 46), (COL_PAGES, 8), (COL_EXTRACTION, 14),
           (COL_SCANNED, 10), (COL_SCANNED_BY, 20), (COL_SCANNED_ON, 14),
           (COL_PRODUCTS, 90), (COL_NOTES, 60)]

# Columns the sheet's owner fills in, carried across a regenerate.
EDIT_COLUMNS = [COL_SCANNED, COL_TITLE, COL_PAGES, COL_EXTRACTION, COL_SCANNED_BY,
                COL_SCANNED_ON, COL_PRODUCTS, COL_NOTES]
# Present in every sheet ever written; the rest may be missing from an older one.
REQUIRED_COLUMNS = (COL_SOURCE, COL_SCANNED, COL_PRODUCTS)

CELL_LIMIT = 32000


# -------------------------------------------------------------------------- files


def iter_documents():
    """One entry per PDF, plus .txt that have no PDF.

    A `.txt` beside a PDF is that PDF's extraction, and `_djvu.txt` is a second OCR
    pass over the same scan; neither is a document in its own right.
    """
    pdfs, txts = [], []
    for root, dirnames, filenames in os.walk(CORPUS):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for name in filenames:
            p = Path(root) / name
            if name.lower().endswith(".pdf"):
                pdfs.append(p)
            elif name.lower().endswith(".txt"):
                txts.append(p)

    pdf_stems = {(p.parent, p.stem) for p in pdfs}
    documents = list(pdfs)
    for txt in txts:
        stem = txt.stem
        base = stem[:-5] if stem.endswith("_djvu") else stem
        if (txt.parent, base) not in pdf_stems:
            documents.append(txt)
    return sorted(documents)


# ------------------------------------------------------------------ reading edits


def _strip_ns(tag):
    return tag.split("}", 1)[-1]


def is_true(raw):
    return str(raw or "").strip().upper() in ("TRUE", "1", "YES")


def has_edit(edit):
    """True once someone has typed anything into a row."""
    return bool(edit.get(COL_SCANNED)) or any(
        str(edit.get(title, "")).strip() for title in EDIT_COLUMNS[1:])


def normalize_date(raw):
    """Read `scanned on` back as YYYY-MM-DD however Excel decided to store it.

    We write the column as text, but Excel turns anything that looks like a date into
    a serial number the moment someone edits the cell, so a raw read can come back as
    "46072". Day 1 is 1900-01-01 and Excel keeps Lotus's phantom 1900-02-29, which is
    why the epoch below is the 30th of December rather than the 31st.
    """
    text = str(raw or "").strip()
    if not text:
        return ""
    try:
        serial = float(text)
    except ValueError:
        return text
    if serial < 1:
        return text
    stamp = datetime(1899, 12, 30) + timedelta(days=int(serial))
    return stamp.strftime("%Y-%m-%d")


def read_workbook_edits(path):
    """Harvest source / scanned / products out of a workbook, using only the stdlib.

    An .xlsx is a zip of XML; xlsxwriter cannot read, and this avoids a dependency
    just to round-trip three columns we wrote ourselves.
    """
    if not path.exists():
        return {}
    try:
        with zipfile.ZipFile(path) as z:
            names = z.namelist()
            shared = []
            if "xl/sharedStrings.xml" in names:
                root = ET.fromstring(z.read("xl/sharedStrings.xml"))
                for si in root:
                    shared.append("".join(t.text or "" for t in si.iter()
                                          if _strip_ns(t.tag) == "t"))
            if "xl/worksheets/sheet1.xml" not in names:
                return {}
            root = ET.fromstring(z.read("xl/worksheets/sheet1.xml"))

            def value(c):
                t = c.get("t")
                if t == "inlineStr":
                    return "".join(x.text or "" for x in c.iter()
                                   if _strip_ns(x.tag) == "t")
                v = next((x for x in c if _strip_ns(x.tag) == "v"), None)
                if v is None or v.text is None:
                    return ""
                if t == "s":
                    idx = int(v.text)
                    return shared[idx] if idx < len(shared) else ""
                return v.text

            rows = [r for r in root.iter() if _strip_ns(r.tag) == "row"]
            if not rows:
                return {}
            header = {}
            for c in rows[0]:
                m = re.match(r"([A-Z]+)", c.get("r", ""))
                if m:
                    header[value(c)] = m.group(1)
            if not all(k in header for k in REQUIRED_COLUMNS):
                return {}

            edits = {}
            for row in rows[1:]:
                cells = {}
                for c in row:
                    m = re.match(r"([A-Z]+)", c.get("r", ""))
                    if m:
                        cells[m.group(1)] = value(c)

                def column(title):
                    ref = header.get(title)
                    return cells.get(ref, "") if ref else ""

                source = (column(COL_SOURCE) or "").strip()
                if not source:
                    continue
                edits[source] = {
                    COL_SCANNED: is_true(column(COL_SCANNED)),
                    COL_TITLE: column(COL_TITLE) or "",
                    COL_PAGES: column(COL_PAGES) or "",
                    COL_EXTRACTION: column(COL_EXTRACTION) or "",
                    COL_SCANNED_BY: column(COL_SCANNED_BY) or "",
                    COL_SCANNED_ON: normalize_date(column(COL_SCANNED_ON)),
                    COL_PRODUCTS: column(COL_PRODUCTS) or "",
                    COL_NOTES: column(COL_NOTES) or "",
                }
            return edits
    except (zipfile.BadZipFile, ET.ParseError) as exc:
        sys.exit(f"could not read {path.name} ({exc}). Refusing to overwrite it and "
                 f"lose the edits inside; move it aside to start a fresh sheet.")


def read_csv_edits(path):
    edits = {}
    with open(path, newline="", encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            source = (row.get(COL_SOURCE) or "").strip()
            if source:
                edits[source] = {
                    COL_SCANNED: is_true(row.get(COL_SCANNED)),
                    COL_TITLE: row.get(COL_TITLE) or "",
                    COL_PAGES: row.get(COL_PAGES) or "",
                    COL_EXTRACTION: row.get(COL_EXTRACTION) or "",
                    COL_SCANNED_BY: row.get(COL_SCANNED_BY) or "",
                    COL_SCANNED_ON: normalize_date(row.get(COL_SCANNED_ON)),
                    COL_PRODUCTS: row.get(COL_PRODUCTS) or "",
                    COL_NOTES: row.get(COL_NOTES) or "",
                }
    return edits


# ------------------------------------------------------------------------ workbook


def write_workbook(path, rows):
    import xlsxwriter

    TRACKING.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".xlsx.tmp")
    book = xlsxwriter.Workbook(tmp, {"constant_memory": True})
    header_fmt = book.add_format({"bold": True, "bg_color": "#DDEBF7", "border": 1})
    body_fmt = book.add_format({"valign": "top"})

    text_fmt = book.add_format({"valign": "top", "num_format": "@"})

    ws = book.add_worksheet("Sources")
    for i, (title, width) in enumerate(COLUMNS):
        # `scanned on` is held as text so Excel leaves a typed date alone instead of
        # turning it into a serial number the next read has to undo.
        fmt = text_fmt if title == COL_SCANNED_ON else body_fmt
        ws.set_column(i, i, width, fmt)
        ws.write(0, i, title, header_fmt)
    for r, record in enumerate(rows, start=1):
        for c, (title, _) in enumerate(COLUMNS):
            val = record.get(title, "")
            if isinstance(val, str) and len(val) > CELL_LIMIT:
                val = val[:CELL_LIMIT] + " truncated"
            ws.write(r, c, val)
    ws.freeze_panes(1, 0)
    if rows:
        scanned_col = [t for t, _ in COLUMNS].index(COL_SCANNED)
        ws.autofilter(0, 0, len(rows), len(COLUMNS) - 1)
        ws.data_validation(1, scanned_col, len(rows), scanned_col,
                           {"validate": "list", "source": ["FALSE", "TRUE"]})
    book.close()

    try:
        os.replace(tmp, path)
        return path
    except OSError:
        stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S")
        fallback = path.with_name(f"source-tracker.{stamp}.xlsx")
        os.replace(tmp, fallback)
        print(f"  ! {path.name} is locked (open in Excel?); wrote {fallback.name}")
        return fallback


# ----------------------------------------------------------------------------- run


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--apply", action="store_true", help="write the workbook")
    ap.add_argument("--import-csv", metavar="PATH",
                    help="harvest scanned/products from a CSV export instead of the workbook")
    ap.add_argument("--reset-edits", action="store_true",
                    help="discard every scanned flag and product list, start clean")
    args = ap.parse_args()

    if not CORPUS.exists():
        sys.exit(f"no {CORPUS.relative_to(REPO)}/ directory")

    documents = iter_documents()
    print(f"{len(documents)} documents under {CORPUS.relative_to(REPO)}/")

    if args.reset_edits:
        edits = {}
        print("reset: every scanned flag and product list starts blank")
    else:
        edits = read_csv_edits(Path(args.import_csv)) if args.import_csv \
            else read_workbook_edits(WORKBOOK)
        if edits:
            carried = sum(1 for e in edits.values() if has_edit(e))
            print(f"read {len(edits)} rows from "
                  f"{'CSV' if args.import_csv else WORKBOOK.name} ({carried} with edits)")

    rows = []
    on_disk = set()
    for path in documents:
        rel = path.relative_to(CORPUS).as_posix()
        on_disk.add(rel)
        edit = edits.get(rel, {})
        record = {COL_SOURCE: rel,
                  COL_SCANNED: "TRUE" if edit.get(COL_SCANNED) else "FALSE"}
        for title in EDIT_COLUMNS[1:]:
            record[title] = edit.get(title, "")
        rows.append(record)

    added = sorted(on_disk - set(edits)) if edits else []
    missing = sorted(set(edits) - on_disk)
    for gone in missing[:10]:
        print(f"  gone from disk: {gone}")
    if len(missing) > 10:
        print(f"  ... and {len(missing) - 10} more")

    scanned = sum(1 for r in rows if r[COL_SCANNED] == "TRUE")
    filled = sum(1 for r in rows if r[COL_PRODUCTS].strip())
    noted = sum(1 for r in rows if r[COL_NOTES].strip())
    titled = sum(1 for r in rows if str(r[COL_TITLE]).strip())
    print(f"\n{len(rows)} documents ({len(added)} new, {len(missing)} gone) · "
          f"{scanned} scanned · {filled} with products listed "
          f"· {titled} with a title "
          f"· {noted} with notes")

    if not args.apply:
        print("dry run, nothing written. Pass --apply to write.")
        return

    written = write_workbook(WORKBOOK, rows)
    print(f"wrote {written.relative_to(REPO)}")


if __name__ == "__main__":
    main()
