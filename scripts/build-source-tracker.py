#!/usr/bin/env python3
"""
Build sources/_tracking/source-tracker.xlsx: one row per research document.

  python scripts/build-source-tracker.py                # dry run, reports only
  python scripts/build-source-tracker.py --apply        # write the workbook

Three columns:

  source              corpus-relative path of the document
  scanned             FALSE until someone has gone through it
  products mentioned  filled in by hand while scanning; blank to start

`scanned` and `products mentioned` belong to whoever is working the sheet. Every run
reads them back out of the workbook before rewriting it, so regenerating refreshes the
file list without destroying an edit. Rows key on the path in column one, so renaming
a document starts its row over.

The workbook is the only file: there is no state or cache alongside it.
"""

import argparse
import csv
import os
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
CORPUS = REPO / "sources"
TRACKING = CORPUS / "_tracking"
WORKBOOK = TRACKING / "source-tracker.xlsx"

SKIP_DIRS = {"_tracking"}

COL_SOURCE = "source"
COL_SCANNED = "scanned"
COL_PRODUCTS = "products mentioned"
COLUMNS = [(COL_SOURCE, 78), (COL_SCANNED, 10), (COL_PRODUCTS, 90)]

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
            if not all(k in header for k in (COL_SOURCE, COL_SCANNED, COL_PRODUCTS)):
                return {}

            edits = {}
            for row in rows[1:]:
                cells = {}
                for c in row:
                    m = re.match(r"([A-Z]+)", c.get("r", ""))
                    if m:
                        cells[m.group(1)] = value(c)
                source = (cells.get(header[COL_SOURCE], "") or "").strip()
                if not source:
                    continue
                scanned = str(cells.get(header[COL_SCANNED], "")).strip().upper()
                edits[source] = {
                    "scanned": scanned in ("TRUE", "1", "YES"),
                    "products": cells.get(header[COL_PRODUCTS], "") or "",
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
                    "scanned": str(row.get(COL_SCANNED, "")).strip().upper()
                    in ("TRUE", "1", "YES"),
                    "products": row.get(COL_PRODUCTS, "") or "",
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

    ws = book.add_worksheet("Sources")
    for i, (title, width) in enumerate(COLUMNS):
        ws.set_column(i, i, width, body_fmt)
        ws.write(0, i, title, header_fmt)
    for r, record in enumerate(rows, start=1):
        for c, (title, _) in enumerate(COLUMNS):
            val = record.get(title, "")
            if isinstance(val, str) and len(val) > CELL_LIMIT:
                val = val[:CELL_LIMIT] + " truncated"
            ws.write(r, c, val)
    ws.freeze_panes(1, 0)
    if rows:
        ws.autofilter(0, 0, len(rows), len(COLUMNS) - 1)
        ws.data_validation(1, 1, len(rows), 1,
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
            carried = sum(1 for e in edits.values() if e["scanned"] or e["products"].strip())
            print(f"read {len(edits)} rows from "
                  f"{'CSV' if args.import_csv else WORKBOOK.name} ({carried} with edits)")

    rows = []
    on_disk = set()
    for path in documents:
        rel = path.relative_to(CORPUS).as_posix()
        on_disk.add(rel)
        edit = edits.get(rel, {})
        rows.append({
            COL_SOURCE: rel,
            COL_SCANNED: "TRUE" if edit.get("scanned") else "FALSE",
            COL_PRODUCTS: edit.get("products", ""),
        })

    added = sorted(on_disk - set(edits)) if edits else []
    missing = sorted(set(edits) - on_disk)
    for gone in missing[:10]:
        print(f"  gone from disk: {gone}")
    if len(missing) > 10:
        print(f"  ... and {len(missing) - 10} more")

    scanned = sum(1 for r in rows if r[COL_SCANNED] == "TRUE")
    filled = sum(1 for r in rows if r[COL_PRODUCTS].strip())
    print(f"\n{len(rows)} documents ({len(added)} new, {len(missing)} gone) · "
          f"{scanned} scanned · {filled} with products listed")

    if not args.apply:
        print("dry run, nothing written. Pass --apply to write.")
        return

    written = write_workbook(WORKBOOK, rows)
    print(f"wrote {written.relative_to(REPO)}")


if __name__ == "__main__":
    main()
