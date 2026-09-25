// Builds the Main Page model at build time from the nav tree, the content
// collection and git history, so that nothing on the page is a hand-typed
// list that can drift from the articles. Curated picks come from
// src/data/home.ts; everything else is derived here.
import type { CollectionEntry } from 'astro:content';
import { nav, isGroup, type NavNode, type NavGroup } from '../data/nav';
import {
  FEATURED,
  DID_YOU_KNOW,
  DID_YOU_KNOW_SHOWN,
  PORTALS,
  PORTAL_LINKS_SHOWN,
  TAG_GROUPS,
} from '../data/home';
import { docPathToRoute, withBase } from './routes';
import { pageToId, breadcrumbTrail } from './navigation';
import { lastUpdatedISO, firstCommittedISO, formatDate } from './gitDates';
import { leadImage, summarize, findPhotos, type Photo } from './seo';
import { tagSlug } from './tags.mjs';

type Article = CollectionEntry<'articles'>;

export interface HomeLink {
  title: string;
  route: string;
}

/**
 * Week number since the Unix epoch at build time. The featured article, the
 * hooks and the photograph rotate on it, so a weekly rebuild changes them and
 * two builds in the same week agree.
 */
function buildWeek(): number {
  return Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
}

export function buildHome(articles: Article[]) {
  const byId = new Map(articles.map((article) => [article.id, article]));
  const isLive = (page: string) => {
    const article = byId.get(pageToId(page));
    return Boolean(article && !article.data.noindex);
  };
  const week = buildWeek();
  const live = articles.filter((article) => !article.data.noindex);

  // ---- Nav walking -------------------------------------------------------
  const groups: NavGroup[] = [];
  const gather = (nodes: NavNode[]) => {
    for (const node of nodes) {
      if (isGroup(node)) {
        groups.push(node);
        gather(node.children);
      }
    }
  };
  gather(nav);

  /** Leaf pages under a group, in nav order, dropping placeholders. */
  const leaves = (node: NavNode): HomeLink[] =>
    isGroup(node)
      ? node.children.flatMap(leaves)
      : isLive(node.page)
        ? [{ title: node.title, route: docPathToRoute(node.page) }]
        : [];

  const findGroup = (selector: string) =>
    groups.find((group) =>
      selector.endsWith('.md') ? group.index === selector : group.title === selector,
    );

  // ---- Portal boxes --------------------------------------------------------
  const portals = PORTALS.map((portal) => {
    const links = portal.sections.flatMap((selector) => {
      const group = findGroup(selector);
      if (!group) throw new Error(`Main Page portal "${portal.title}": no nav group "${selector}"`);
      return leaves(group);
    });
    return {
      title: portal.title,
      blurb: portal.blurb,
      href: docPathToRoute(portal.href),
      count: links.length,
      links: links.slice(0, PORTAL_LINKS_SHOWN),
    };
  });

  // Sections that exist only as an outline: a placeholder index with no live
  // article anywhere beneath it. Named on the page but not linked.
  const pending = groups
    .filter((group) => group.index && !isLive(group.index) && leaves(group).length === 0)
    .map((group) => group.title);

  // ---- Scope line ----------------------------------------------------------
  const vendorGroup = findGroup('vendors/index.md');
  const scope = {
    articles: live.length,
    companies: vendorGroup ? leaves(vendorGroup).length : 0,
  };

  // ---- Tag chips -----------------------------------------------------------
  // Counted over every article, placeholders included, to match what the
  // Categories page lists under each heading.
  const tagCounts = new Map<string, number>();
  for (const article of articles) {
    for (const tag of article.data.tags) tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }
  const tagGroups = TAG_GROUPS.map((group) => ({
    label: group.label,
    tags: group.tags
      .filter((tag) => tagCounts.get(tag))
      .map((tag) => ({
        tag,
        count: tagCounts.get(tag)!,
        href: withBase(`/categories/${tagSlug(tag)}/`),
      })),
  })).filter((group) => group.tags.length > 0);

  // ---- Featured article ------------------------------------------------------
  const featuredPage = FEATURED[week % FEATURED.length];
  const featuredArticle = byId.get(pageToId(featuredPage));
  if (!featuredArticle) throw new Error(`Main Page featured article not found: ${featuredPage}`);
  const featuredImage = findImages(featuredArticle)[0] ?? null;
  const featured = {
    title: featuredArticle.data.title,
    route: docPathToRoute(featuredPage),
    // A longer cut of the lead than the meta description, which is sized for
    // search results rather than for a panel.
    summary: summarize(featuredArticle.body, 360, 240),
    image: featuredImage,
  };

  // ---- Did you know ------------------------------------------------------------
  const start = (week * DID_YOU_KNOW_SHOWN) % DID_YOU_KNOW.length;
  const hooks = Array.from(
    { length: Math.min(DID_YOU_KNOW_SHOWN, DID_YOU_KNOW.length) },
    (_, i) => parseHook(DID_YOU_KNOW[(start + i) % DID_YOU_KNOW.length]),
  );

  // ---- Photograph --------------------------------------------------------------
  // Every photograph the articles carry, one entry per image file, skipping
  // the featured article's so the page does not show the same picture twice.
  const seen = new Set<string>();
  const photos = articles
    .filter((article) => !article.data.noindex && article !== featuredArticle)
    .flatMap((article) =>
      findImages(article).map((image) => ({
        ...image,
        articleTitle: article.data.title,
        route: docPathToRoute(`${article.id}.md`),
      })),
    )
    .filter((photo) => (seen.has(photo.src) ? false : (seen.add(photo.src), true)))
    .filter((photo) => !featuredImage || photo.src !== featuredImage.src)
    .sort((a, b) => a.src.localeCompare(b.src));
  const photo = photos.length > 0 ? photos[week % photos.length] : null;

  // ---- Recently updated and new articles ---------------------------------------
  const dated = live.map((article) => {
    const trail = breadcrumbTrail(article.id);
    return {
      title: article.data.title,
      route: docPathToRoute(`${article.id}.md`),
      // The innermost section, for context; the Main Page crumb says nothing.
      section: trail.length > 1 ? trail[trail.length - 1].title : '',
      image: leadImage(article.body),
      updated: lastUpdatedISO(article.filePath),
      added: firstCommittedISO(article.filePath),
    };
  });
  const recent = dated
    .filter((entry) => entry.updated)
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, 8)
    .map((entry) => ({ ...entry, iso: entry.updated, shown: formatDate(entry.updated) }));
  const recentRoutes = new Set(recent.map((entry) => entry.route));
  const added = dated
    .filter((entry) => entry.added && !recentRoutes.has(entry.route))
    .sort((a, b) => b.added.localeCompare(a.added) || a.title.localeCompare(b.title))
    .slice(0, 5)
    .map((entry) => ({ ...entry, iso: entry.added, shown: formatDate(entry.added) }));

  return { scope, tagGroups, featured, hooks, photo, portals, pending, recent, added };
}

// ---- Helpers -------------------------------------------------------------------

export type HomeImage = Photo;

/** An article's photographs; the parser is shared with the structured data. */
function findImages(article: Article): HomeImage[] {
  return findPhotos(article.body);
}

export type HookPart = { text: string; route?: string };

/** Split a hook's `[text](path.md)` markup into text and link parts. */
export function parseHook(hook: string): HookPart[] {
  const parts: HookPart[] = [];
  let last = 0;
  for (const match of hook.matchAll(/\[([^\]]+)\]\(([^)]+\.md)\)/g)) {
    if (match.index! > last) parts.push({ text: hook.slice(last, match.index) });
    parts.push({ text: match[1], route: docPathToRoute(match[2]) });
    last = match.index! + match[0].length;
  }
  if (last < hook.length) parts.push({ text: hook.slice(last) });
  return parts;
}
