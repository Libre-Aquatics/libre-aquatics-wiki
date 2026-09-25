// Stub detection shared by the article route (the robots meta tag) and
// astro.config.mjs (the sitemap filter). Plain .mjs rather than TypeScript
// because the config is evaluated before Astro's TS pipeline, and one copy of
// the rule is what keeps the tag and the sitemap from disagreeing.
//
// A stub (STYLE.md §4.8) is a research comment plus a two-sentence body that
// opens with STUB_MARKER. That is thin content to a search engine, so a stub is
// kept out of results by default while staying in the nav and passing its links
// on. Building the page out means deleting the marker, which makes it
// indexable with no other step.

export const STUB_MARKER = 'This article is a stub.';

/** True when the article body, research comments aside, opens with the stub marker. */
export function isStub(body) {
  if (!body) return false;
  const prose = body.replace(/<!--[\s\S]*?-->/g, '').trimStart();
  return prose.startsWith(STUB_MARKER);
}

/**
 * Whether a page carries noindex. An explicit `noindex:` in front matter wins
 * either way, so `noindex: false` keeps a short page that is genuinely complete
 * in results; left unset, stubs are noindexed and everything else is not.
 */
export function resolveNoindex(frontMatterNoindex, body) {
  return typeof frontMatterNoindex === 'boolean' ? frontMatterNoindex : isStub(body);
}
