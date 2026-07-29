#!/usr/bin/env node
// Detects verbatim copying between the articles in docs/ and the research sources
// staged in manuals/. See CLAUDE.md, "No verbatim copying".
//
//   node scripts/check-copying.mjs [threshold] [paths...] [--include-comments]
//
// Local-only: manuals/ is gitignored, so CI has no corpus and the script exits 0
// with a notice. Sources are every .txt under manuals/ except the staging and
// periodicals subtrees (see SKIP_DIRS below).
//
// Extractions are irreplaceable: some were produced with PyMuPDF and a few were
// OCR'd by hand because pdftotext mangled them (see manuals/notes/
// starter-audit-sources.md). Extract a MISSING one, never regenerate an existing
// one in bulk:
//   node manuals/_tools/extract-text.mjs
//
// The corpus (~1.5M words) dwarfs the articles (~15k), so the index is built over
// the ARTICLES and the corpus is streamed one file at a time. Matches are extended
// by comparing words directly against the source file, which is what makes the
// reported length real. Extending against the n-gram set instead would silently cap
// every match at the threshold and make a 19-word lift look like a 6-word one.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const args = process.argv.slice(2);
const includeComments = args.includes('--include-comments');
const rest = args.filter((a) => !a.startsWith('--'));
const N = Number.parseInt(rest[0], 10) > 0 ? Number.parseInt(rest[0], 10) : 6;
const targets = rest.slice(1).length ? rest.slice(1) : ['docs'];

const SOURCE_DIR = 'manuals';

function normalize(text, stripComments) {
  let t = text.toLowerCase();
  if (stripComments) t = t.replace(/<!--[\s\S]*?-->/g, ' ');
  t = t.replace(/^---[\s\S]*?^---/m, ' ');      // front matter
  t = t.replace(/\[\^[a-z0-9-]+\]/g, ' ');      // footnote markers
  t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1'); // links -> link text
  t = t.replace(/https?:\/\/\S+/g, ' ');
  t = t.replace(/[^a-z0-9 ]+/g, ' ');
  return t.replace(/\s+/g, ' ').trim();
}

function walk(p, out = []) {
  if (!existsSync(p)) return out;
  if (statSync(p).isFile()) {
    if (extname(p) === '.md') out.push(p);
    return out;
  }
  for (const e of readdirSync(p)) walk(join(p, e), out);
  return out;
}

if (!existsSync(SOURCE_DIR)) {
  console.log(`check-copying: no ${SOURCE_DIR}/ directory, skipping (local-only check).`);
  process.exit(0);
}
// Subtrees of manuals/ that are not part of the vetted corpus. periodicals/ is
// bulk-scraped magazine OCR (the swimnews-txt source alone is ~350 files) that
// would swamp the index and manufacture false positives; the underscore dirs are
// staging, quarantine, or duplicate storage rather than sources.
const SKIP_DIRS = new Set(['_tools', '_dump', '_duplicates', '_unsorted', 'periodicals']);

function walkTxt(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) walkTxt(join(dir, e.name), out);
    } else if (e.name.endsWith('.txt')) {
      out.push(join(dir, e.name));
    }
  }
  return out;
}

const sourceFiles = walkTxt(SOURCE_DIR);
if (sourceFiles.length === 0) {
  console.log(`check-copying: no .txt sources in ${SOURCE_DIR}/, skipping.`);
  process.exit(0);
}
// This check reports rather than fails, so a corpus that quietly vanished would
// look exactly like a clean pass. Say so loudly instead.
const EXPECTED_MIN_SOURCES = 260; // 272 as of 2026-07-28
if (sourceFiles.length < EXPECTED_MIN_SOURCES) {
  console.error(
    `check-copying: *** only ${sourceFiles.length} sources found, expected at least ` +
      `${EXPECTED_MIN_SOURCES}. The corpus may have moved. Results are not trustworthy. ***`,
  );
}

const pages = targets.flatMap((t) => walk(t));
if (pages.length === 0) {
  console.error('check-copying: no .md files found in ' + targets.join(', '));
  process.exit(1);
}

// Index the articles: n-gram -> [{page, index}]
const index = new Map();
const words = new Map();
for (const p of pages) {
  const w = normalize(readFileSync(p, 'utf8'), !includeComments).split(' ').filter(Boolean);
  words.set(p, w);
  for (let i = 0; i + N <= w.length; i++) {
    const g = w.slice(i, i + N).join(' ');
    let arr = index.get(g);
    if (!arr) index.set(g, (arr = []));
    arr.push({ page: p, i });
  }
}

// Stream the corpus, extending every hit against the source words themselves.
const runs = new Map(); // page -> Map(startIndex -> {len, srcFile})
let corpusWords = 0;
for (const sf of sourceFiles) {
  const sw = normalize(readFileSync(sf, 'utf8'), false).split(' ').filter(Boolean);
  // A PDF with no text layer extracts to nothing and then silently contributes
  // nothing, which reads the same as "no copying found".
  if (sw.length < 50) {
    console.error(`check-copying: near-empty source ${sf} (${sw.length} words) - extraction likely failed`);
  }
  corpusWords += sw.length;
  for (let i = 0; i + N <= sw.length; i++) {
    const g = sw.slice(i, i + N).join(' ');
    const hits = index.get(g);
    if (!hits) continue;
    for (const { page, i: ai } of hits) {
      const aw = words.get(page);
      let len = N;
      while (ai + len < aw.length && i + len < sw.length && aw[ai + len] === sw[i + len]) len++;
      let m = runs.get(page);
      if (!m) runs.set(page, (m = new Map()));
      const prev = m.get(ai);
      if (!prev || prev.len < len) m.set(ai, { len, srcFile: sf });
    }
  }
}

// Drop runs wholly contained inside a longer run at an earlier start.
const report = [];
for (const [page, m] of runs) {
  const entries = [...m.entries()].sort((a, b) => a[0] - b[0]);
  const kept = [];
  for (const [start, { len, srcFile }] of entries) {
    const covered = kept.some((k) => start >= k.start && start + len <= k.start + k.len);
    if (!covered) kept.push({ start, len, srcFile });
  }
  const aw = words.get(page);
  report.push({
    page,
    longest: Math.max(...kept.map((k) => k.len)),
    runs: kept
      .map((k) => ({ len: k.len, text: aw.slice(k.start, k.start + k.len).join(' '), src: k.srcFile }))
      .sort((a, b) => b.len - a.len),
  });
}
report.sort((a, b) => b.longest - a.longest || b.runs.length - a.runs.length);

console.log(
  `check-copying: ${sourceFiles.length} sources (${corpusWords.toLocaleString()} words) ` +
    `vs ${pages.length} pages, threshold ${N}${includeComments ? ', including comments' : ''}`,
);
console.log(`${report.length} of ${pages.length} pages share a run of ${N}+ words`);
console.log(`longest shared run: ${report.length ? report[0].longest : 0} words\n`);
for (const r of report) {
  console.log(`--- ${r.page}  (longest ${r.longest}, ${r.runs.length} run(s))`);
  for (const run of r.runs) {
    console.log(`      [${run.len}] ${run.text}`);
    console.log(`            src: ${run.src}`);
  }
}
// Reporting tool: never fails the build. Judgement about which runs are
// unavoidable identifiers belongs to the person reading the output.
process.exit(0);
