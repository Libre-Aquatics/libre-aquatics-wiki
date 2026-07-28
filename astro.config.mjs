import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds, unified } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkWikiLinks from './src/plugins/remark-wiki-links.mjs';

// Sitemap <lastmod> from git, mirroring src/lib/gitDates.ts (which cannot be
// imported here because the config is evaluated before Astro's TS pipeline).
// Only routes backed by a docs/ Markdown file get a date; the virtual pages
// (Main Page, categories) are left without one. CI must check out with
// fetch-depth: 0 or git reports no date and the entry is skipped.
function docLastmod(url) {
  const route = new URL(url).pathname.replace(/^\/+|\/+$/g, '');
  if (!route) return undefined;
  for (const file of [`docs/${route}.md`, `docs/${route}/index.md`]) {
    if (!existsSync(file)) continue;
    try {
      const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
        encoding: 'utf8',
      }).trim();
      if (iso) return iso;
    } catch {
      // git unavailable: leave the entry without lastmod.
    }
  }
  return undefined;
}

// Served from GitHub Pages at the custom domain in public/CNAME, so the site
// sits at the root of its own host and base is '/'. Changing either of these
// changes every published URL; keep them in step with the CNAME file.
export default defineConfig({
  site: 'https://wiki.libreaquatics.org',
  base: '/',
  trailingSlash: 'always',
  // The pushbutton pages moved under the semi-automatic category after the
  // site went live; these keep the published URLs working (static
  // meta-refresh pages on GitHub Pages).
  redirects: {
    '/equipment/swimming/pushbutton/': '/equipment/swimming/semi-automatic/pushbutton/',
    '/equipment/swimming/pushbutton/cts/': '/equipment/swimming/semi-automatic/pushbutton/cts/',
    '/equipment/swimming/pushbutton/daktronics/': '/equipment/swimming/semi-automatic/pushbutton/daktronics/',
  },
  integrations: [
    react(),
    pagefind(),
    // The search page is an empty Pagefind shell and the Open Graph routes are
    // images, so neither belongs in the sitemap. Astro drops 404/500 itself.
    sitemap({
      filter: (page) => !page.includes('/search/') && !page.includes('/open-graph/'),
      serialize: (item) => {
        const lastmod = docLastmod(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  // Astro 7 renders Markdown with its own Sätteri pipeline by default, which
  // does not run remark/rehype plugins. `unified()` switches back to the
  // remark/rehype processor, which every plugin below is written against.
  markdown: {
    processor: unified({
      remarkPlugins: [
        // Resolves relative .md links to routes and fails the build on broken
        // ones; the replacement for `mkdocs build --strict`.
        [remarkWikiLinks, { docsDir: './docs', base: '/' }],
      ],
      rehypePlugins: [
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { className: ['headerlink'], ariaLabel: 'Permanent link' },
            content: { type: 'text', value: '¶' },
          },
        ],
        // Marks cross-origin links so CSS can draw the "leaves the wiki" arrow;
        // replaces docs/javascripts/external-links.js at build time.
        [rehypeExternalLinks, { properties: { className: ['wiki-external'] } }],
      ],
    }),
  },
});
