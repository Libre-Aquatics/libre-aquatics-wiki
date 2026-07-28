// Tag anchors on the Categories page. The producer (categories.astro h2 ids)
// and the consumer (Tags.astro chip links) both use this, so the slugs only
// need to be internally consistent.
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
