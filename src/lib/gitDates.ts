import { execFileSync } from 'node:child_process';

// Last-updated dates from git history, replacing the MkDocs
// git-revision-date-localized plugin (date only, fallback to build date).
// CI must check out with fetch-depth: 0 or every date becomes the build date.
const cache = new Map<string, string>();

/** ISO 8601 date of the file's last commit, or '' when git has none. */
export function lastUpdatedISO(filePath: string | undefined): string {
  const key = filePath ?? '';
  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  let iso = '';
  if (filePath) {
    try {
      iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', filePath], {
        encoding: 'utf8',
      }).trim();
    } catch {
      iso = '';
    }
  }
  cache.set(key, iso);
  return iso;
}

const firstCache = new Map<string, string>();

/**
 * ISO 8601 date of the commit that added the file, or '' when git has none.
 * Used by the Main Page's "New articles" list. `--follow` keeps a moved
 * article's original date rather than the date of the move.
 */
export function firstCommittedISO(filePath: string | undefined): string {
  const key = filePath ?? '';
  const hit = firstCache.get(key);
  if (hit !== undefined) return hit;

  let iso = '';
  if (filePath) {
    try {
      const dates = execFileSync(
        'git',
        ['log', '--follow', '--diff-filter=A', '--format=%cI', '--', filePath],
        { encoding: 'utf8' },
      ).trim();
      // Newest first; the last line is the original addition.
      iso = dates.split('\n').pop() ?? '';
    } catch {
      iso = '';
    }
  }
  firstCache.set(key, iso);
  return iso;
}

/**
 * ISO date of the article's last content change, the date every "modified"
 * signal uses (dateModified, article:modified_time, the visible "Last updated"
 * line; astro.config.mjs applies the same rule to the sitemap). Front-matter
 * `updated` wins when set, as UTC midnight of that day in full ISO 8601
 * (2026-10-01T00:00:00.000Z), because structured data requires a time and an
 * offset; otherwise it is the date the file was first committed, or '' when
 * git has none. The latest commit is deliberately not used: a typo fix or a
 * bulk reformat touches every file without changing what a page says.
 */
export function contentModifiedISO(updated: Date | undefined, filePath: string | undefined): string {
  if (updated) return updated.toISOString();
  return firstCommittedISO(filePath);
}

/** An ISO date as the long US form the article footers use; build date if empty. */
export function formatDate(iso: string): string {
  const date = iso ? new Date(iso) : new Date();
  // Front-matter dates arrive as UTC midnight (a bare YYYY-MM-DD, or the Z form
  // contentModifiedISO() returns), which a US time zone would show as the day
  // before; format those in UTC so the calendar date is kept. Git dates carry
  // their own offset and are left in local time.
  const timeZone = /^\d{4}-\d{2}-\d{2}$|Z$/.test(iso) ? 'UTC' : undefined;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone }).format(date);
}
