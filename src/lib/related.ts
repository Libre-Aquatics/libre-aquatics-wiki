// "Related articles" for the block under each article (ArticleLayout.astro).
// Scored from what pages already share, so nothing is curated by hand:
//
//   same section (siblings, or an overview and its own pages)   +3
//   neighbouring section overviews under one parent             +2
//   each shared specific tag (Scoring, Diving, ...)             +2
//   same manufacturer in the infobox                            +1.5
//   each shared broad tag (Equipment, Swimming, ...)            +0.5
//
// A page needs RELATED_MIN_SCORE to be listed, so two pages that only share
// "Equipment" are never paired. Pages the article already links to are left
// out, since the point is to surface links a reader does not have yet, and
// indexable pages are preferred to stubs when scores tie.
import path from 'node:path';
import type { CollectionEntry } from 'astro:content';
import { docPathToRoute } from './routes';
import { flattenNav } from './navigation';
import { resolveNoindex } from './stub.mjs';

type Article = CollectionEntry<'articles'>;

export interface RelatedLink {
  title: string;
  route: string;
}

// Tags carried by most of the wiki, which say little about how close two pages are.
const BROAD_TAGS = new Set(['Equipment', 'Swimming', 'Timing', 'Software', 'Reference']);
const RELATED_MAX = 6;
const RELATED_MIN_SCORE = 2;

interface Prepared {
  id: string;
  title: string;
  route: string;
  isIndex: boolean;
  /** The section a page belongs to: an overview's own id, else its folder. */
  section: string;
  tags: Set<string>;
  maker?: string;
  live: boolean;
  navOrder: number;
  /** Doc ids this page links to from its body or infobox. */
  linksTo: Set<string>;
}

/** 'equipment/foo/index.md' or 'equipment/foo.md' -> collection id. */
function docToId(docPath: string): string {
  return docPath.replace(/\.md$/i, '').replace(/\/index$/, '');
}

function outgoingLinks(article: Article): Set<string> {
  const out = new Set<string>();
  const source = (article.filePath ?? '').replace(/\\/g, '/').replace(/^docs\//, '');
  const fromDir = path.posix.dirname(source);
  const body = (article.body ?? '').replace(/<!--[\s\S]*?-->/g, '');
  for (const m of body.matchAll(/\]\(([^)#\s]+\.md)(?:#[^)\s]*)?\)/g)) {
    out.add(docToId(path.posix.normalize(path.posix.join(fromDir, m[1]))));
  }
  // Infobox paths are docs-root-relative.
  for (const row of article.data.infobox) {
    if (row.href?.endsWith('.md')) out.add(docToId(row.href));
    for (const m of row.value.matchAll(/\]\(([^)#\s]+\.md)\)/g)) out.add(docToId(m[1]));
  }
  return out;
}

let cache: Map<string, Prepared> | undefined;

function prepare(articles: Article[]): Map<string, Prepared> {
  if (cache) return cache;
  const order = new Map(flattenNav().map((entry, i) => [entry.id, i]));
  cache = new Map(
    articles.map((article) => {
      const file = (article.filePath ?? '').replace(/\\/g, '/');
      const isIndex = file.endsWith('/index.md');
      const maker = article.data.infobox.find((row) => row.label === 'Manufacturer')?.value;
      return [
        article.id,
        {
          id: article.id,
          title: article.data.title,
          route: docPathToRoute(`${article.id}.md`),
          isIndex,
          section: isIndex ? article.id : path.posix.dirname(article.id),
          tags: new Set(article.data.tags),
          maker: maker?.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim(),
          live: !resolveNoindex(article.data.noindex, article.body),
          navOrder: order.get(article.id) ?? Number.MAX_SAFE_INTEGER,
          linksTo: outgoingLinks(article),
        },
      ];
    }),
  );
  return cache;
}

function score(a: Prepared, b: Prepared): number {
  let total = 0;
  if (!a.isIndex && !b.isIndex && a.section === b.section) total += 3;
  else if (a.isIndex !== b.isIndex && (a.isIndex ? b.section === a.id : a.section === b.id)) total += 3;
  else if (a.isIndex && b.isIndex && path.posix.dirname(a.id) === path.posix.dirname(b.id)) total += 2;
  for (const tag of a.tags) {
    if (b.tags.has(tag)) total += BROAD_TAGS.has(tag) ? 0.5 : 2;
  }
  if (a.maker && a.maker === b.maker) total += 1.5;
  return total;
}

/** Up to RELATED_MAX pages related to `article`, best first. */
export function relatedArticles(article: Article, articles: Article[]): RelatedLink[] {
  const pages = prepare(articles);
  const self = pages.get(article.id);
  if (!self) return [];
  return [...pages.values()]
    .filter((other) => other.id !== self.id && !self.linksTo.has(other.id))
    .map((other) => ({ other, score: score(self, other) }))
    .filter(({ score }) => score >= RELATED_MIN_SCORE)
    .sort(
      (x, y) =>
        y.score - x.score ||
        Number(y.other.live) - Number(x.other.live) ||
        x.other.navOrder - y.other.navOrder,
    )
    .slice(0, RELATED_MAX)
    .map(({ other }) => ({ title: other.title, route: other.route }));
}
