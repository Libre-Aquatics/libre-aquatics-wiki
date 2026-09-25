// Atom feed of the most recently changed articles, advertised by a
// <link rel="alternate"> in every page's head (BaseLayout.astro). Written by
// hand rather than with @astrojs/rss: Atom is a few elements, and this keeps
// the build free of another dependency. Stubs are left out, as they are left
// out of search results; the feed is for readers following the reference
// articles.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { recentChanges } from '../lib/changes';
import { FEED_PATH, SITE_DESCRIPTION, SITE_LICENSE, SITE_NAME } from '../lib/seo';
import { withBase } from '../lib/routes';

const FEED_ENTRIES = 30;

function escape(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const GET: APIRoute = async ({ site }) => {
  const origin = site!;
  const changes = recentChanges(await getCollection('articles'), {
    limit: FEED_ENTRIES,
    includeStubs: false,
  });
  const home = new URL(withBase('/'), origin).href;
  const self = new URL(withBase(FEED_PATH), origin).href;
  const newest = changes[0]?.updated ?? new Date().toISOString();

  const entries = changes.map((change) => {
    const url = new URL(change.route, origin).href;
    return [
      '  <entry>',
      `    <title>${escape(change.title)}</title>`,
      `    <link rel="alternate" type="text/html" href="${escape(url)}"/>`,
      `    <id>${escape(url)}</id>`,
      change.added ? `    <published>${change.added}</published>` : '',
      `    <updated>${change.updated}</updated>`,
      change.section ? `    <category term="${escape(change.section)}"/>` : '',
      `    <summary>${escape(change.summary)}</summary>`,
      '  </entry>',
    ]
      .filter(Boolean)
      .join('\n');
  });

  const body = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en">',
    `  <title>${escape(SITE_NAME)}</title>`,
    `  <subtitle>${escape(SITE_DESCRIPTION)}</subtitle>`,
    `  <link rel="alternate" type="text/html" href="${escape(home)}"/>`,
    `  <link rel="self" type="application/atom+xml" href="${escape(self)}"/>`,
    `  <id>${escape(home)}</id>`,
    `  <updated>${newest}</updated>`,
    '  <author><name>Libre Aquatics</name></author>',
    `  <rights>Text under CC BY-SA 4.0: ${escape(SITE_LICENSE)}</rights>`,
    ...entries,
    '</feed>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
};
