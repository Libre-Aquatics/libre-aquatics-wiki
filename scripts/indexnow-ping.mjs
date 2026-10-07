// Notifies IndexNow (Bing, DuckDuckGo, and friends) of changed pages after a
// deploy, so updates are picked up in minutes instead of on the next crawl.
// Google does not use IndexNow; it follows the sitemap on its own schedule.
// The key is public by design: the <key>.txt file in public/ proves domain
// ownership, so the two must stay in step. Failures only warn, because a
// dead ping endpoint should never fail a deploy.
//
// Only pages whose docs/ file changed between BEFORE and AFTER are sent:
// IndexNow is for changed URLs, and resending an unchanged site on every
// deploy risks being throttled. Deleted pages are sent too, so engines drop
// them. INDEXNOW_ALL=true (a manual workflow run) sends every sitemap URL.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const HOST = 'wiki.libreaquatics.org';
const KEY = '04431f2e1de2a0eaaf0d8eb43b6c2bf9';

const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// docs/a/b.md -> https://host/a/b/, docs/a/index.md -> https://host/a/
function docUrl(file) {
  const route = file.replace(/^docs\//, '').replace(/\.md$/, '').replace(/(^|\/)index$/, '');
  return `https://${HOST}/${route ? `${route}/` : ''}`;
}

function changedUrls(before, after) {
  const diff = execFileSync(
    'git',
    ['diff', '--name-status', '--no-renames', before, after, '--', 'docs/*.md', 'docs/**/*.md'],
    { encoding: 'utf8' },
  ).trim();
  if (!diff) return [];
  const indexed = new Set(sitemapUrls);
  const urls = new Set();
  for (const line of diff.split('\n')) {
    const [status, file] = line.split('\t');
    const url = docUrl(file);
    // A deleted page is sent so engines drop it; a live one only if it is in
    // the sitemap, which already leaves out noindex pages and stubs.
    if (status === 'D' || indexed.has(url)) urls.add(url);
  }
  return [...urls];
}

const { BEFORE, AFTER = 'HEAD', INDEXNOW_ALL } = process.env;
let urlList;
if (INDEXNOW_ALL === 'true') {
  urlList = sitemapUrls;
} else if (!BEFORE || /^0+$/.test(BEFORE)) {
  console.warn('indexnow: no previous commit to diff against, skipping ping');
  process.exit(0);
} else {
  try {
    urlList = changedUrls(BEFORE, AFTER);
  } catch (error) {
    console.warn(`indexnow: git diff failed, skipping ping (${error.message})`);
    process.exit(0);
  }
}

if (urlList.length === 0) {
  console.log('indexnow: no changed pages, nothing to submit');
  process.exit(0);
}

try {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });
  // 200 and 202 are success (202: key not yet verified). 403 means the key
  // file did not match, 422 a URL outside the host, 429 too many requests.
  const ok = response.status === 200 || response.status === 202;
  const log = ok ? console.log : console.warn;
  log(`indexnow: submitted ${urlList.length} URLs, HTTP ${response.status}`);
  for (const url of urlList) log(`  ${url}`);
} catch (error) {
  console.warn(`indexnow: ping failed, continuing anyway (${error.message})`);
}
