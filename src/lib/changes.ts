// The dated list behind the Recent changes page (src/pages/recent-changes.astro)
// and the Atom feed (src/pages/feed.xml.ts), so the two cannot disagree. Dates
// come from git, like the article footers and the sitemap: an article's last
// commit is its update, its first commit is when it was added.
import type { CollectionEntry } from 'astro:content';
import { docPathToRoute } from './routes';
import { breadcrumbTrail } from './navigation';
import { firstCommittedISO, lastUpdatedISO } from './gitDates';
import { summarize } from './seo';
import { resolveNoindex } from './stub.mjs';

type Article = CollectionEntry<'articles'>;

export interface Change {
  title: string;
  route: string;
  /** Innermost section the article sits in, for context; '' at the top level. */
  section: string;
  summary: string;
  /** ISO dates from git. */
  updated: string;
  added: string;
  /** Added and last changed on the same day: a new article rather than an edit. */
  isNew: boolean;
  stub: boolean;
}

/** Articles newest-change first. `includeStubs` false leaves out noindexed pages. */
export function recentChanges(
  articles: Article[],
  { limit, includeStubs }: { limit: number; includeStubs: boolean },
): Change[] {
  return articles
    .map((article) => {
      const trail = breadcrumbTrail(article.id);
      const updated = lastUpdatedISO(article.filePath);
      const added = firstCommittedISO(article.filePath);
      return {
        title: article.data.title,
        route: docPathToRoute(`${article.id}.md`),
        section: trail.length > 1 ? trail[trail.length - 1].title : '',
        summary: article.data.description ?? summarize(article.body),
        updated,
        added,
        isNew: Boolean(added) && added.slice(0, 10) === updated.slice(0, 10),
        stub: resolveNoindex(article.data.noindex, article.body),
      };
    })
    .filter((change) => change.updated && (includeStubs || !change.stub))
    .sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title))
    .slice(0, limit);
}
