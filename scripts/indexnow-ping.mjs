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
import { setTimeout as delay } from 'node:timers/promises';

const HOST = 'wiki.libreaquatics.org';
const KEY = '8378246d318446cd9f6d16aa0ac7392c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function warn(message) {
  console.warn(`indexnow: ${message}`);
  if (process.env.GITHUB_ACTIONS === 'true') {
    const escaped = message.replaceAll('%', '%25').replaceAll('\r', '%0D').replaceAll('\n', '%0A');
    console.warn(`::warning title=IndexNow::${escaped}`);
  }
}

// Pages may report a completed deployment before every edge serves its files.
async function verifyKey() {
  const builtKey = readFileSync(`dist/${KEY}.txt`, 'utf8').trim();
  if (builtKey !== KEY) throw new Error('built key file does not match the submission key');
  let problem;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(KEY_LOCATION, {
        redirect: 'error',
        cache: 'no-store',
        signal: AbortSignal.timeout(15000),
      });
      const body = await response.text();
      if (response.status === 200 && body.trim() === KEY) {
        console.log(`indexnow: verified public key at ${KEY_LOCATION}`);
        return;
      }
      problem = `HTTP ${response.status}, ${body.trim() === KEY ? 'matching' : 'unexpected'} key contents`;
    } catch (error) {
      problem = error.message;
    }
    console.log(`indexnow: key check ${attempt}/3 failed (${problem})`);
    if (attempt < 3) await delay(10000);
  }
  throw new Error(`cannot verify ${KEY_LOCATION}: ${problem}`);
}

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
  await verifyKey();
  for (let attempt = 1; attempt <= 2; attempt++) {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      signal: AbortSignal.timeout(30000),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList,
      }),
    });
    const detail = (await response.text()).trim().slice(0, 2000);
    if (response.status === 200 || response.status === 202) {
      console.log(`indexnow: accepted ${urlList.length} URLs, HTTP ${response.status}${response.status === 202 ? ' (key validation pending)' : ''}`);
      for (const url of urlList) console.log(`  ${url}`);
      break;
    }
    // A single retry allows for a temporary verification failure after deploy.
    // Do not retry rate limits or malformed submissions.
    if (response.status === 403 && attempt === 1) {
      console.log(`indexnow: key verification rejected, retrying once in 15 seconds${detail ? `: ${detail}` : ''}`);
      await delay(15000);
      continue;
    }
    warn(`submission rejected for ${urlList.length} URLs, HTTP ${response.status}${detail ? `: ${detail}` : ''}`);
    if (response.status === 403) {
      warn(`IndexNow could not verify the key although our public check passed. Check crawler access to ${KEY_LOCATION}, then rerun the deployment workflow manually to resubmit sitemap URLs.`);
    }
  }
} catch (error) {
  warn(`ping failed, continuing anyway (${error.message})`);
}
