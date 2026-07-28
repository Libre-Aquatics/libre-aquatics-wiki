/*
 * Strict internal-link check, the `mkdocs build --strict` replacement. Walks
 * every Markdown file under docs/ and verifies that each relative `.md` link
 * target exists; exits 1 listing every broken link. Runs before `astro build`
 * (see the build script in package.json) so CI fails fast and deterministically
 * regardless of Astro's content-layer cache.
 *
 * Kept separate from src/plugins/remark-wiki-links.mjs on purpose: an error
 * thrown inside a content-collection remark plugin is logged by the loader but
 * does not fail the build (the loader falls back to its cached render), so
 * strictness has to live outside the pipeline.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import matter from 'gray-matter';

const rootDir = path.resolve('docs');

// Routes that exist as Astro pages rather than Markdown files; articles may
// still link to them by their old source paths. Keep in sync with
// src/plugins/remark-wiki-links.mjs.
const VIRTUAL_PAGES = new Set(['index.md', 'categories.md']);

function mdFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...mdFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

const broken = [];
let checked = 0;

for (const file of mdFiles(rootDir)) {
  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);

  // Infobox front-matter hrefs and mixed values hold docs-root-relative
  // source paths (that is the convention Infobox.astro resolves them by).
  const rows = Array.isArray(parsed.data.infobox) ? parsed.data.infobox : [];
  for (const row of rows) {
    const rowTargets = [];
    if (row.href) rowTargets.push(row.href);
    for (const m of String(row.value ?? '').matchAll(/\]\(([^)\s]+\.md(?:#[^)\s]*)?)\)/gi)) {
      rowTargets.push(m[1]);
    }
    for (const target of rowTargets) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('/')) continue;
      const [p] = target.split('#');
      if (!/\.md$/i.test(p)) continue;
      checked += 1;
      if (!fs.existsSync(path.join(rootDir, p)) && !VIRTUAL_PAGES.has(p)) {
        broken.push(`${path.relative(process.cwd(), file)} (infobox) -> ${target}`);
      }
    }
  }

  // Body links resolve relative to the file, as in the articles themselves.
  // Drop fenced code blocks and inline code so example links are not checked.
  const text = parsed.content.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  // Inline links [t](url) and reference definitions [id]: url
  const targets = [];
  for (const m of text.matchAll(/\]\(([^)\s]+(?:\([^)]*\)[^)\s]*)?)\)/g)) targets.push(m[1]);
  for (const m of text.matchAll(/^\[[^\]]+\]:\s*(\S+)/gm)) targets.push(m[1]);

  for (const url of targets) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('/') || url.startsWith('#')) continue;
    const match = url.match(/^([^#?]+\.md)(#.*)?$/i);
    if (!match) continue;
    checked += 1;
    const target = path.resolve(path.dirname(file), decodeURI(match[1]));
    const rel = path.relative(rootDir, target).split(path.sep).join('/');
    if (rel.startsWith('..') || (!fs.existsSync(target) && !VIRTUAL_PAGES.has(rel))) {
      broken.push(`${path.relative(process.cwd(), file)} -> ${url}`);
    }
  }
}

if (broken.length > 0) {
  console.error(`Broken internal link${broken.length > 1 ? 's' : ''} (${broken.length}):`);
  for (const b of broken) console.error(`  ${b}`);
  process.exit(1);
}
console.log(`Link check passed: ${checked} internal .md links resolve.`);
