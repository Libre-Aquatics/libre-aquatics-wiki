#!/usr/bin/env node
// Bins a check-copying report so only the runs that need a human get read.
// See CLAUDE.md, "No verbatim copying".
//
//   node scripts/check-copying.mjs 6 --include-periodicals > report.txt
//   node scripts/triage-copying.mjs report.txt
//   node scripts/check-copying.mjs | node scripts/triage-copying.mjs -
//
// check-copying reports every shared run of N+ words, and on a mature corpus most
// of them are unavoidable: citation titles, part numbers, rule names. Reading that
// list end to end each time is how a real lift gets skimmed past. This sorts each
// run into one bin and prints file:line, so the REVIEW bin is the only one that has
// to be read. The other bins are not "safe" by proof, they are "safe by shape", so
// spot-check them when a page is written from a single heavy source.
//
// Locating a run is the fiddly part. check-copying reports NORMALIZED text (lowercased,
// punctuation stripped, links flattened to their text, front matter and footnote markers
// removed), which appears nowhere in the .md file. So the normalization is replayed here
// with every dropped character blanked to a space instead of deleted. That keeps offsets
// aligned with the original file, which is what makes a real line number possible.

import { readFileSync, existsSync } from 'node:fs';

const arg = process.argv[2];
if (!arg) {
  console.error('usage: triage-copying.mjs <report.txt|->   (- reads stdin)');
  process.exit(2);
}
const reportText =
  arg === '-' ? readFileSync(0, 'utf8') : existsSync(arg) ? readFileSync(arg, 'utf8') : null;
if (reportText === null) {
  console.error(`triage-copying: no such report file: ${arg}`);
  process.exit(2);
}

// --- parse the report ------------------------------------------------------

const entries = [];
let page = null;
let pending = null;
for (const line of reportText.split(/\r?\n/)) {
  const head = line.match(/^--- (.+?)\s{2,}\(longest \d+/);
  if (head) {
    page = head[1];
    continue;
  }
  const run = line.match(/^\s+\[(\d+)\] (.+)$/);
  if (run && page) {
    pending = { page, len: Number(run[1]), text: run[2] };
    entries.push(pending);
    continue;
  }
  const src = line.match(/^\s+src: (.+)$/);
  if (src && pending) {
    pending.src = src[1].trim();
    pending = null;
  }
}

if (entries.length === 0) {
  console.log('triage-copying: no runs found in the report. Nothing to bin.');
  process.exit(0);
}

// --- replay check-copying's normalization, keeping offsets -----------------

const blanked = (s) => s.replace(/[^\n]/g, ' ');

function tokenize(text, stripComments) {
  let t = text.toLowerCase();
  if (stripComments) t = t.replace(/<!--[\s\S]*?-->/g, blanked);
  t = t.replace(/^---[\s\S]*?^---/m, blanked);
  t = t.replace(/\[\^[a-z0-9-]+\]/g, blanked);
  // links -> link text, blanking the brackets and the target
  t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, (m, txt) => ' ' + txt + blanked(m.slice(1 + txt.length)));
  t = t.replace(/https?:\/\/\S+/g, blanked);

  const toks = [];
  for (const m of t.matchAll(/[a-z0-9]+/g)) toks.push({ w: m[0], at: m.index });
  return toks;
}

const lineStartsCache = new Map();
function lineAt(text, offset) {
  let starts = lineStartsCache.get(text);
  if (!starts) {
    starts = [0];
    for (let i = 0; i < text.length; i++) if (text[i] === '\n') starts.push(i + 1);
    lineStartsCache.set(text, starts);
  }
  let lo = 0;
  let hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= offset) lo = mid;
    else hi = mid - 1;
  }
  return lo + 1;
}

const fileCache = new Map();
function loadPage(p) {
  const key = p.replace(/\\/g, '/');
  if (fileCache.has(key)) return fileCache.get(key);
  let data = null;
  if (existsSync(key)) {
    const raw = readFileSync(key, 'utf8');
    // The report may come from a run with or without --include-comments. Index both
    // ways and prefer whichever actually contains the run.
    data = { raw, stripped: tokenize(raw, true), withComments: tokenize(raw, false) };
  }
  fileCache.set(key, data);
  return data;
}

// Find the run's token span in a page. Returns {start, end} char offsets, or null.
function locate(pageData, runText) {
  const target = runText.split(' ');
  for (const toks of [pageData.stripped, pageData.withComments]) {
    outer: for (let i = 0; i + target.length <= toks.length; i++) {
      for (let j = 0; j < target.length; j++) if (toks[i + j].w !== target[j]) continue outer;
      const last = toks[i + target.length - 1];
      return { start: toks[i].at, end: last.at + last.w.length };
    }
  }
  return null;
}

// --- classification --------------------------------------------------------

const TITLE_WORDS = [
  'user guide',
  'owner s manual',
  'operation manual',
  'operating manual',
  'installation and operation',
  'official report',
  'facilities rules',
  'competition regulations',
  'rules book',
  'architectural guidelines',
  'product specifications',
  'user instructions',
  'assembly instructions',
  'quick guide',
  'revision histories',
];
// Form and document numbers: CTS F147, Daktronics P1240 / ED-13312 / DD3679410.
const DOC_NUMBER = /^(f|p|dd|ed|tm|sl)\d{3,}$/;
const UNIT_WORDS = new Set([
  'mm', 'cm', 'm', 'in', 'ft', 'lb', 'lbs', 'kg', 'g', 'oz',
  'v', 'vdc', 'vac', 'w', 'hz', 'khz', 'psi', 'kpa', 'mpa', 'c', 'f',
  'db', 'ma', 'ah', 'mhz', 'pin', 'pins',
]);

function classify(e, pageData) {
  const words = e.text.split(' ');
  const loc = pageData ? locate(pageData, e.text) : null;
  const raw = pageData ? pageData.raw : '';
  const line = loc ? lineAt(raw, loc.start) : 0;
  const lineText = loc ? raw.slice(raw.lastIndexOf('\n', loc.start) + 1).split('\n')[0] : '';
  const span = loc ? raw.slice(loc.start, loc.end) : '';

  let bin = 'REVIEW';
  if (!loc) {
    bin = 'REVIEW'; // could not place it; a human should look
  } else if (/^\s*#{1,6}\s/.test(lineText)) {
    bin = 'HEADING';
  } else if (/^\s*\[\^[a-z0-9-]+\]:/i.test(lineText)) {
    bin = 'CITATION';
  } else if (inCodeSpan(raw, loc)) {
    bin = 'CODE';
  } else if (inQuotes(lineText, loc.start - (raw.lastIndexOf('\n', loc.start) + 1))) {
    bin = 'QUOTED';
  } else if (looksLikeDocTitle(e.text, words)) {
    bin = 'DOCTITLE';
  } else if (looksLikeIdentifier(words, span)) {
    bin = 'IDENTIFIER';
  }
  return { ...e, line, bin, lineText: lineText.trim() };
}

function inCodeSpan(raw, loc) {
  const before = raw.slice(0, loc.start);
  const fence = (before.match(/^```/gm) || []).length;
  if (fence % 2 === 1) return true; // inside a fenced block
  const lineStart = raw.lastIndexOf('\n', loc.start) + 1;
  const ticksBefore = (raw.slice(lineStart, loc.start).match(/`/g) || []).length;
  return ticksBefore % 2 === 1;
}

function inQuotes(lineText, col) {
  const before = lineText.slice(0, col);
  const straight = (before.match(/"/g) || []).length;
  const curlyOpen = (before.match(/“/g) || []).length;
  const curlyClose = (before.match(/”/g) || []).length;
  return straight % 2 === 1 || curlyOpen > curlyClose;
}

function looksLikeDocTitle(text, words) {
  if (words.some((w) => DOC_NUMBER.test(w))) return true;
  if (TITLE_WORDS.some((p) => text.includes(p))) return true;
  // "fr 2 3 automatic officiating equipment for swimming" and friends
  if (/^(fr|sw|gr|bl|ar|wp|dv)( \d+)+ /.test(text)) return true;
  return false;
}

function looksLikeIdentifier(words, span) {
  const meaty = words.filter((w) => w.length > 1);
  if (meaty.length === 0) return true;
  const identifierish = words.filter(
    (w) => /\d/.test(w) || UNIT_WORDS.has(w) || DOC_NUMBER.test(w),
  ).length;
  if (identifierish / words.length >= 0.4) return true;
  // A run that is mostly backticked part numbers in the source line.
  const ticks = (span.match(/`/g) || []).length;
  return ticks >= 2;
}

// --- report ----------------------------------------------------------------

const ORDER = ['REVIEW', 'DOCTITLE', 'CITATION', 'IDENTIFIER', 'QUOTED', 'CODE', 'HEADING'];
const binned = new Map(ORDER.map((b) => [b, []]));
let unplaced = 0;
for (const e of entries) {
  const pageData = loadPage(e.page);
  if (!pageData) {
    binned.get('REVIEW').push({ ...e, line: 0, bin: 'REVIEW', lineText: '(page not found)' });
    unplaced++;
    continue;
  }
  const c = classify(e, pageData);
  if (c.line === 0) unplaced++;
  binned.get(c.bin).push(c);
}

const counts = ORDER.map((b) => `${b} ${binned.get(b).length}`).join('  ');
console.log(`triage-copying: ${entries.length} run(s) from ${new Set(entries.map((e) => e.page)).size} page(s)`);
console.log(counts);
if (unplaced) {
  console.log(`${unplaced} run(s) could not be located in their page; they are in REVIEW.`);
}
console.log('');

for (const bin of ORDER) {
  const rows = binned.get(bin);
  if (rows.length === 0) continue;
  const note = bin === 'REVIEW' ? '  <-- read this bin' : '';
  console.log(`=== ${bin} (${rows.length})${note}`);
  rows.sort((a, b) => b.len - a.len || a.page.localeCompare(b.page));
  for (const r of rows) {
    console.log(`  ${r.page}:${r.line}  [${r.len}] ${r.text}`);
    if (bin === 'REVIEW') {
      console.log(`      src: ${r.src || '(unknown)'}`);
      if (r.lineText) console.log(`      line: ${r.lineText}`);
    }
  }
  console.log('');
}

// A triage aid, not a gate: the judgement about an unavoidable identifier belongs
// to the person reading the REVIEW bin.
process.exit(0);
