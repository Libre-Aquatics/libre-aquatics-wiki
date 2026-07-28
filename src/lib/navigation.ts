// Helpers over the nav tree in src/data/nav.ts: the flattened reading order
// (for prev/next, matching Material's footer navigation), id conversion, and
// the active trail used to open the right <details> groups in the sidebar.
import { nav, isGroup, type NavNode } from '../data/nav';
import { docPathToRoute } from './routes';

export interface FlatNavEntry {
  title: string;
  page: string;
  id: string;
  route: string;
}

/** docs-relative source path ('a/b.md') -> content collection entry id ('a/b').
    The glob loader drops a trailing '/index' from ids ('a/index.md' -> 'a'),
    so section index pages must be stripped the same way to match. */
export function pageToId(page: string): string {
  return page.replace(/\.md$/i, '').replace(/\/index$/, '');
}

function collect(nodes: NavNode[], out: FlatNavEntry[]): void {
  for (const node of nodes) {
    if (isGroup(node)) {
      if (node.index) {
        out.push({
          title: node.indexTitle ?? node.title,
          page: node.index,
          id: pageToId(node.index),
          route: docPathToRoute(node.index),
        });
      }
      collect(node.children, out);
    } else {
      out.push({
        title: node.title,
        page: node.page,
        id: pageToId(node.page),
        route: docPathToRoute(node.page),
      });
    }
  }
}

let flatCache: FlatNavEntry[] | undefined;

/** All nav pages in depth-first order (a group's index page precedes its children). */
export function flattenNav(): FlatNavEntry[] {
  if (!flatCache) {
    flatCache = [];
    collect(nav, flatCache);
  }
  return flatCache;
}

/** Previous and next pages in reading order for the given entry id. */
export function prevNext(currentId: string): {
  prev?: FlatNavEntry;
  next?: FlatNavEntry;
} {
  const flat = flattenNav();
  const i = flat.findIndex((entry) => entry.id === currentId);
  if (i === -1) return {};
  return { prev: flat[i - 1], next: flat[i + 1] };
}

export interface Breadcrumb {
  title: string;
  route: string;
}

/**
 * Ancestor sections of the given entry id, outermost first, for the
 * BreadcrumbList structured data. Only groups with an index page appear
 * (a crumb needs a URL); grouping-only labels like vendor names are skipped.
 * The current page itself is not included.
 */
export function breadcrumbTrail(currentId: string): Breadcrumb[] {
  let trail: Breadcrumb[] = [];
  const walk = (nodes: NavNode[], ancestors: Breadcrumb[]): boolean =>
    nodes.some((node) => {
      if (isGroup(node)) {
        if (node.index && pageToId(node.index) === currentId) {
          trail = ancestors;
          return true;
        }
        const next = node.index
          ? [...ancestors, { title: node.title, route: docPathToRoute(node.index) }]
          : ancestors;
        return walk(node.children, next);
      }
      if (pageToId(node.page) === currentId) {
        trail = ancestors;
        return true;
      }
      return false;
    });
  walk(nav, []);
  return trail;
}

/** True when the node is, or contains, the page with the given entry id. */
export function isOnTrail(node: NavNode, currentId: string): boolean {
  if (isGroup(node)) {
    if (node.index && pageToId(node.index) === currentId) return true;
    return node.children.some((child) => isOnTrail(child, currentId));
  }
  return pageToId(node.page) === currentId;
}
