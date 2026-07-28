/*
 * One-off migration script: converts the `<div class="infobox" markdown>`
 * block in article Markdown files into structured front matter
 * (`infoboxTitle` + `infobox:` rows) rendered by src/components/Infobox.astro.
 *
 * Usage:
 *   node scripts/convert-infoboxes.mjs [--write] [--dir docs]
 *
 * Without --write this is a dry run: it parses every file, prints what it
 * would do, and modifies nothing. Files without an infobox block are skipped,
 * so a --write run is repeatable.
 *
 * Row value shapes converted:
 *   plain text            -> { label, value }
 *   exactly `[text](url)` -> { label, value: text, href }
 *      a relative .md href is stored as the docs-relative source path
 *      (e.g. vendors/colorado-time-systems.md); Infobox.astro resolves it
 *      to a route at render time; http(s) hrefs pass through unchanged
 *   exactly `` `text` ``  -> { label, value: text, code: true }
 *
 * A value mixing text with code spans or links (part-number and succession
 * rows) is kept as raw inline Markdown in `value`; Infobox.astro tokenizes
 * and renders that subset. Relative .md link targets inside such values are
 * rewritten to docs-relative source paths and checked for existence.
 *
 * Anything else (bold, footnote marks, stray brackets, missing link targets)
 * is reported with its file and line, the file is left unwritten, and the
 * script exits 1 so a human converts those rows by hand.
 *
 * Note: written files are re-serialized by gray-matter, which emits LF line
 * endings; git's autocrlf handles the difference.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import matter from 'gray-matter';

const args = process.argv.slice(2);
const write = args.includes('--write');
const dirFlag = args.indexOf('--dir');
const rootDir = path.resolve(dirFlag !== -1 ? args[dirFlag + 1] : 'docs');

const DIV_OPEN = '<div class="infobox" markdown>';
const DIV_CLOSE = '</div>';
// URL may contain parentheses (e.g. .../(IST)/manual.pdf) but no whitespace.
const LINK_ONLY = /^\[([^\]]+)\]\((\S+)\)$/;
const CODE_ONLY = /^`([^`]+)`$/;

/** Recursively collect .md files. */
function mdFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...mdFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

/** Resolve a relative .md href against the article's docs-relative dir. */
function resolveDocHref(href, fileAbs) {
  const fileDirRel = path.posix.dirname(
    path.relative(rootDir, fileAbs).split(path.sep).join('/'),
  );
  const joined = path.posix.normalize(
    path.posix.join(fileDirRel === '.' ? '' : fileDirRel, href),
  );
  return joined;
}

const problems = [];
let converted = 0;
let skipped = 0;

for (const file of mdFiles(rootDir)) {
  const raw = fs.readFileSync(file, 'utf8');
  if (!raw.includes(DIV_OPEN)) {
    skipped += 1;
    continue;
  }

  const parsed = matter(raw);
  const body = parsed.content;
  const openAt = body.indexOf(DIV_OPEN);
  const closeAt = body.indexOf(DIV_CLOSE, openAt);
  if (openAt === -1 || closeAt === -1) {
    problems.push(`${file}: infobox div found but block boundaries could not be located`);
    continue;
  }

  // Line number offset for reporting: front matter lines + body lines above the block.
  const fmLines = raw.slice(0, raw.indexOf(body)).split(/\r?\n/).length - 1;
  const lineOf = (idx) => fmLines + body.slice(0, idx).split(/\r?\n/).length;

  const block = body.slice(openAt + DIV_OPEN.length, closeAt);
  const blockLines = block.split(/\r?\n/);

  let infoboxTitle;
  const rows = [];
  const fileProblems = [];

  for (let i = 0; i < blockLines.length; i++) {
    const line = blockLines[i].trim();
    if (line === '' || line === '| | |' || /^\|[\s:-]*\|[\s:-]*\|$/.test(line)) continue;

    const bold = line.match(/^\*\*(.+)\*\*$/);
    if (bold) {
      infoboxTitle = bold[1];
      continue;
    }

    const cells = line.match(/^\|(.+)\|(.+)\|$/);
    if (!cells) {
      fileProblems.push(`${file}:${lineOf(openAt) + i} unrecognized line: ${line}`);
      continue;
    }
    const label = cells[1].trim();
    const value = cells[2].trim();
    const report = () =>
      fileProblems.push(`${file}:${lineOf(openAt) + i} unconvertible row: ${line}`);

    const link = value.match(LINK_ONLY);
    const code = value.match(CODE_ONLY);
    if (link) {
      let href = link[2];
      if (!/^[a-z][a-z0-9+.-]*:/i.test(href) && /\.md$/i.test(href)) {
        href = resolveDocHref(href, file);
        if (!fs.existsSync(path.join(rootDir, href))) {
          fileProblems.push(`${file}:${lineOf(openAt) + i} link target missing: ${link[2]}`);
          continue;
        }
      }
      rows.push({ label, value: link[1], href });
    } else if (code) {
      rows.push({ label, value: code[1], code: true });
    } else if (/\*\*|\[\^/.test(value)) {
      // Bold or footnote marks in a fact value stay hand-conversion cases.
      report();
    } else if (/`[^`]+`|\[[^\]]+\]\(/.test(value)) {
      // Mixed inline markdown: keep the raw value for Infobox.astro to
      // render, rewriting relative .md link targets to docs-relative paths.
      let ok = true;
      const rewritten = value.replace(/\]\(([^)\s]+\.md(?:#[^)\s]*)?)\)/gi, (m, target) => {
        if (/^[a-z][a-z0-9+.-]*:/i.test(target)) return m;
        const [p, anchor = ''] = target.split('#');
        const resolved = resolveDocHref(p, file);
        if (!fs.existsSync(path.join(rootDir, resolved))) {
          ok = false;
          return m;
        }
        return `](${resolved}${anchor ? `#${anchor}` : ''})`;
      });
      if (ok) rows.push({ label, value: rewritten });
      else report();
    } else if (/[`[\]]/.test(value)) {
      report();
    } else {
      rows.push({ label, value });
    }
  }

  if (fileProblems.length > 0) {
    problems.push(...fileProblems);
    continue;
  }
  if (!infoboxTitle) {
    problems.push(`${file}: no **title** line found in infobox`);
    continue;
  }

  // Remove the block plus surrounding blank lines, leaving one blank line.
  let start = openAt;
  while (start > 0 && (body[start - 1] === '\n' || body[start - 1] === '\r')) start -= 1;
  let end = closeAt + DIV_CLOSE.length;
  while (end < body.length && (body[end] === '\n' || body[end] === '\r')) end += 1;
  const newBody = `${body.slice(0, start)}\n\n${body.slice(end)}`;

  parsed.data.infoboxTitle = infoboxTitle;
  parsed.data.infobox = rows;

  const rel = path.relative(process.cwd(), file);
  console.log(`\n--- ${rel} (${rows.length} rows) ---`);
  console.log(matter.stringify('', parsed.data).trim());

  if (write) {
    fs.writeFileSync(file, matter.stringify(newBody, parsed.data));
  }
  converted += 1;
}

console.log(
  `\n${write ? 'Converted' : 'Would convert'} ${converted} file(s); ` +
    `${skipped} file(s) had no infobox.`,
);

if (problems.length > 0) {
  console.error(`\n${problems.length} row(s) need hand conversion:`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
