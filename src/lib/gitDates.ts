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

export function lastUpdated(filePath: string | undefined): string {
  return formatDate(lastUpdatedISO(filePath));
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

/** An ISO date as the long US form the article footers use; build date if empty. */
export function formatDate(iso: string): string {
  const date = iso ? new Date(iso) : new Date();
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
}
