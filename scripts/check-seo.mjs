/*
 * SEO check over the built site. Runs after `astro build` (see the build script
 * in package.json) and reads dist/ rather than docs/, because what a crawler
 * sees is the rendered head: the title suffix, the derived description, the
 * resolved noindex, the canonical and the sitemap are all decided at build time.
 *
 * Errors fail the build: a missing or duplicated <title>, a page without
 * exactly one <h1>, a canonical that does not point at the page's own URL, a
 * noindex page listed in the sitemap, and an <img> with no alt attribute
 * (alt="" is a deliberate decorative image and passes).
 *
 * Warnings are printed and never fail: descriptions that fell back to the site
 * description, descriptions shared by two indexable pages, titles long enough
 * to be cut off in a results list, and indexable pages that no other page links
 * to from its content (the nav, header, footer and prev/next links are not
 * counted, since they reach every page by construction).
 *
 * Redirect stubs (meta refresh) and the Pagefind and Open Graph trees are
 * skipped.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const distDir = path.resolve('dist');
const SITE = 'https://wiki.libreaquatics.org';
// Keep in step with SITE_DESCRIPTION in src/lib/seo.ts.
const SITE_DESCRIPTION_START = 'A free reference for the equipment, timing hardware';
// Google truncates a results-list title at roughly 600px, about 60 characters.
const TITLE_WARN_LENGTH = 65;
const SKIP_DIRS = new Set(['pagefind', 'open-graph', '_astro', 'assets']);

function htmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out.push(...htmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

/** dist/a/b/index.html -> /a/b/ ; dist/404.html -> /404.html */
function routeOf(file) {
  const rel = path.relative(distDir, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}=("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? decodeEntities(m[2] ?? m[3] ?? m[4] ?? '') : undefined;
}

/** Normalize an in-site href to a route with a trailing slash, or null. */
function internalRoute(href, fromRoute) {
  if (!href || href.startsWith('#') || /^(mailto|tel|javascript):/i.test(href)) return null;
  let url;
  try {
    url = new URL(href, `${SITE}${fromRoute}`);
  } catch {
    return null;
  }
  if (url.origin !== SITE) return null;
  let route = url.pathname;
  if (!route.endsWith('/') && !/\.[a-z0-9]+$/i.test(route)) route += '/';
  return route;
}

const sitemapFile = path.join(distDir, 'sitemap-0.xml');
if (!fs.existsSync(sitemapFile)) {
  console.error('SEO check: dist/sitemap-0.xml not found; run astro build first.');
  process.exit(1);
}
const sitemapRoutes = new Set(
  [...fs.readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => new URL(m[1]).pathname,
  ),
);

const errors = [];
const warnings = [];
const pages = [];

for (const file of htmlFiles(distDir)) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeOf(file);
  if (/<meta[^>]+http-equiv="refresh"/i.test(html)) continue;

  const head = html.slice(0, html.search(/<\/head>/i) + 1 || html.length);
  const titles = [...head.matchAll(/<title>([^<]*)<\/title>/gi)].map((m) => decodeEntities(m[1]).trim());
  const descTag = head.match(/<meta\s+name="description"[^>]*>/i);
  const canonicalTag = head.match(/<link\s+rel="canonical"[^>]*>/i);
  const robotsTag = head.match(/<meta\s+name="robots"[^>]*>/i);
  const noindex = robotsTag ? /noindex/i.test(attr(robotsTag[0], 'content') ?? '') : false;
  const body = html.slice(html.search(/<body[\s>]/i));
  const h1Count = (body.match(/<h1[\s>]/gi) ?? []).length;

  const page = {
    route,
    title: titles[0] ?? '',
    description: descTag ? (attr(descTag[0], 'content') ?? '') : '',
    noindex,
    is404: route === '/404.html',
  };
  pages.push(page);

  if (titles.length !== 1 || !page.title) {
    errors.push(`${route}: expected one non-empty <title>, found ${titles.length}`);
  }
  if (h1Count !== 1) errors.push(`${route}: expected one <h1>, found ${h1Count}`);

  if (!page.is404) {
    const expected = `${SITE}${route}`;
    const canonical = canonicalTag ? attr(canonicalTag[0], 'href') : undefined;
    if (canonical !== expected) {
      errors.push(`${route}: canonical is ${canonical ?? '(missing)'}, expected ${expected}`);
    }
  }
  if (noindex && sitemapRoutes.has(route)) {
    errors.push(`${route}: carries noindex but is listed in the sitemap`);
  }

  for (const img of body.matchAll(/<img\b[^>]*>/gi)) {
    if (attr(img[0], 'alt') === undefined) {
      errors.push(`${route}: <img src="${attr(img[0], 'src') ?? '?'}"> has no alt attribute`);
    }
  }

  // Content links only: drop the chrome that links every page regardless.
  const content = body
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, '')
    .replace(/<header\b[\s\S]*?<\/header>/gi, '')
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, '');
  page.links = new Set();
  for (const a of content.matchAll(/<a\b[^>]*>/gi)) {
    const target = internalRoute(attr(a[0], 'href'), route);
    if (target && target !== route) page.links.add(target);
  }
}

const indexable = pages.filter((p) => !p.noindex && !p.is404);

const byTitle = new Map();
for (const p of pages.filter((p) => !p.is404)) {
  byTitle.set(p.title, [...(byTitle.get(p.title) ?? []), p.route]);
}
for (const [title, routes] of byTitle) {
  if (routes.length > 1) errors.push(`duplicate <title> "${title}": ${routes.join(', ')}`);
}

const byDescription = new Map();
for (const p of indexable) {
  if (p.route !== '/' && p.description.startsWith(SITE_DESCRIPTION_START)) {
    warnings.push(`${p.route}: description fell back to the site description`);
  }
  byDescription.set(p.description, [...(byDescription.get(p.description) ?? []), p.route]);
  if (p.title.length > TITLE_WARN_LENGTH) {
    warnings.push(`${p.route}: <title> is ${p.title.length} characters, may be cut off in results`);
  }
}
for (const [, routes] of byDescription) {
  if (routes.length > 1) warnings.push(`duplicate description: ${routes.join(', ')}`);
}

const linkedTo = new Set(pages.flatMap((p) => [...p.links]));
for (const p of indexable) {
  if (p.route !== '/' && !linkedTo.has(p.route)) {
    warnings.push(`${p.route}: no other page links to it from article content`);
  }
}

if (warnings.length > 0) {
  console.warn(`SEO warnings (${warnings.length}):`);
  for (const w of warnings) console.warn(`  ${w}`);
}
if (errors.length > 0) {
  console.error(`SEO errors (${errors.length}):`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(
  `SEO check passed: ${pages.length} pages, ${indexable.length} indexable, ` +
    `${sitemapRoutes.size} in the sitemap.`,
);
