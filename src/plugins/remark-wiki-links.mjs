/*
 * Resolves relative `.md` links in article Markdown to site routes at build
 * time. Authors keep writing links to source files
 * (`../../vendors/colorado-time-systems.md`), which GitHub's file viewer and
 * editors also understand. Strict failure on broken links is enforced by
 * scripts/check-links.mjs, which runs before astro build; see the note at the
 * bottom of this file for why it cannot live here.
 *
 * Mapping (mirrored by src/lib/routes.ts for non-Markdown callers):
 *   docs/<path>/<name>.md  -> <base>/<path>/<name>/
 *   docs/<path>/index.md   -> <base>/<path>/
 *   docs/index.md          -> <base>/
 * Anchors (`file.md#section`) are preserved.
 *
 * Also prefixes the deploy base onto site-absolute asset paths
 * (`/assets/photo.jpg`), so articles can reference files in public/assets/
 * without hard-coding the base, the Markdown equivalent of withBase().
 */
import path from 'node:path';
import { existsSync } from 'node:fs';
import { visit } from 'unist-util-visit';

// The Main Page and tag index are Astro pages (src/pages/index.astro,
// categories.astro), not Markdown files, but articles still link to them by
// their old source paths; both resolve to real routes.
const VIRTUAL_PAGES = new Set(['index.md', 'categories.md']);

export default function remarkWikiLinks({ docsDir, base }) {
  const docsRoot = path.resolve(docsDir);
  const cleanBase = base.replace(/\/$/, '');

  return function transform(tree, file) {
    const sourcePath = file.history[0] ?? file.path;
    if (!sourcePath) return;

    const broken = [];

    visit(tree, ['link', 'definition'], (node) => {
      const url = node.url ?? '';
      // Only touch relative links to .md files (with optional #anchor).
      // Absolute URLs, site-absolute paths, and bare anchors pass through.
      if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('/') || url.startsWith('#')) return;
      const match = url.match(/^([^#?]+\.md)(#.*)?$/i);
      if (!match) return;

      const [, mdPath, anchor = ''] = match;
      const target = path.resolve(path.dirname(sourcePath), decodeURI(mdPath));
      const rel = path.relative(docsRoot, target).split(path.sep).join('/');

      if (rel.startsWith('..') || (!existsSync(target) && !VIRTUAL_PAGES.has(rel))) {
        broken.push(`${path.relative(process.cwd(), sourcePath)} -> ${url}`);
        return;
      }

      let route = rel.replace(/\.md$/i, '');
      if (route === 'index') route = '';
      else route = route.replace(/\/index$/, '');
      node.url = `${cleanBase}/${route ? route + '/' : ''}${anchor}`;
    });

    // Asset paths: `![alt](/assets/x.jpg)` and the `<img src="/assets/x.jpg">`
    // inside a raw figure block both become `<base>/assets/x.jpg`.
    visit(tree, 'image', (node) => {
      if (node.url?.startsWith('/assets/')) node.url = `${cleanBase}${node.url}`;
    });
    visit(tree, 'html', (node) => {
      node.value = node.value.replace(/(\ssrc=")\/assets\//g, `$1${cleanBase}/assets/`);
    });

    // Broken links are only warned about here: an error thrown inside a
    // content-collection plugin is logged by the loader without failing the
    // build (it falls back to the cached render). Strict failure is enforced
    // by scripts/check-links.mjs, which runs before astro build.
    if (broken.length > 0) {
      console.warn(
        `[wiki-links] broken internal link${broken.length > 1 ? 's' : ''}:\n  ${broken.join('\n  ')}`,
      );
    }
  };
}
