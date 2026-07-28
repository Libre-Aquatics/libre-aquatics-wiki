// Route mapping shared by pages and components. Mirrors the mapping in
// src/plugins/remark-wiki-links.mjs; keep the two in sync.
//
//   docs/<path>/<name>.md -> <base>/<path>/<name>/
//   docs/<path>/index.md  -> <base>/<path>/
//   docs/index.md         -> <base>/

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site-relative path ('/categories/') with the deploy base. */
export function withBase(sitePath: string): string {
  return `${BASE}${sitePath}`;
}

/** Collection entry id ('equipment/swimming/timers/index') -> slug used in [...slug]. */
export function idToSlug(id: string): string {
  return id === 'index' ? '' : id.replace(/\/index$/, '');
}

/** docs-relative source path ('vendors/daktronics.md') -> full route with base. */
export function docPathToRoute(docPath: string): string {
  let route = docPath.replace(/\.md$/i, '');
  if (route === 'index') route = '';
  else route = route.replace(/\/index$/, '');
  return `${BASE}/${route ? route + '/' : ''}`;
}
