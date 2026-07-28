// Notifies IndexNow (Bing, DuckDuckGo, and friends) of every page after a
// deploy, so updates are picked up in minutes instead of on the next crawl.
// Google does not use IndexNow; it follows the sitemap on its own schedule.
// The key is public by design: the <key>.txt file in public/ proves domain
// ownership, so the two must stay in step. Failures only warn, because a
// dead ping endpoint should never fail a deploy.
import { readFileSync } from 'node:fs';

const HOST = 'wiki.libreaquatics.org';
const KEY = '04431f2e1de2a0eaaf0d8eb43b6c2bf9';

const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.warn('indexnow: no URLs found in dist/sitemap-0.xml, skipping ping');
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
  console.log(`indexnow: submitted ${urlList.length} URLs, HTTP ${response.status}`);
} catch (error) {
  console.warn(`indexnow: ping failed, continuing anyway (${error.message})`);
}
