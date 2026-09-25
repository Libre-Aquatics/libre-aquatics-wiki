// Tag slugs, used for the per-tag pages at /categories/<slug>/ and their
// links (Tags.astro chips, the Main Page chips, the Categories index). Plain
// .mjs so astro.config.mjs can use it too: the sitemap filter has to build the
// same URLs to know which tag pages are kept out of results.

/** 'Water polo' -> 'water-polo' */
export function tagSlug(tag) {
  return tag
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
