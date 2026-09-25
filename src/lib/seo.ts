// Site metadata and the derived-description logic behind the head tags in
// BaseLayout.astro. Articles are authored by people writing prose, not
// metadata, so summarize() builds a meta description out of an article's own
// lead paragraph. An article can override it with `description:` in front
// matter when the derived text reads badly.

import { STUB_MARKER } from './stub.mjs';

export const SITE_NAME = 'Libre Aquatics Wiki';

export const SITE_DESCRIPTION =
  'A free reference for the equipment, timing hardware, and meet operations behind ' +
  'competitive aquatics: swimming, diving, water polo, and open water.';

// Article text is CC BY-SA 4.0, the licence named in the footer
// (src/components/Footer.astro). Kept here so the structured data in
// BaseLayout.astro and the footer cannot drift apart.
export const SITE_LICENSE = 'https://creativecommons.org/licenses/by-sa/4.0/';

// The publishing organization behind the wiki, reused by the TechArticle
// `publisher` and by the Organization block on the Main Page.
export const PUBLISHER = {
  '@type': 'Organization',
  name: 'Libre Aquatics',
  url: 'https://wiki.libreaquatics.org/',
  logo: 'https://wiki.libreaquatics.org/assets/logo.svg',
} as const;

// Meta descriptions for the four pages that are not Markdown articles. The
// Main Page and tag index are Astro pages (src/pages/index.astro,
// categories.astro), so there is no front matter to derive these from.
export const PAGE_META = {
  home: {
    title: SITE_NAME,
    description:
      'A free, cited reference for competitive-aquatics timing consoles, start systems, ' +
      'lane hardware, scoreboards, meet software and results file formats.',
  },
  categories: {
    title: 'Categories',
    description:
      'Every article on Libre Aquatics Wiki indexed by sport, program, and topic, ' +
      'from timing and scoring to officiating and meet management.',
  },
  search: {
    title: 'Search',
    description: `Search ${SITE_NAME} for equipment, timing hardware, vendors, and meet operations.`,
  },
  notFound: {
    title: 'Page not found',
    description: `The requested page does not exist on ${SITE_NAME}.`,
  },
} as const;

/** Route key ('vendors/seiko', '' for the Main Page) -> its card image path. */
export function ogImagePath(key: string): string {
  return `/open-graph/${key || 'index'}.png`;
}

/**
 * Site-absolute path of the first photograph in an article body, or null. The
 * Open Graph card insets it above the title, so a page with its own picture
 * shares with that picture visible.
 */
export function leadImage(body: string | undefined): string | null {
  if (!body) return null;
  const html = body.match(/<img[^>]+src="(\/assets\/[^"]+)"/i);
  if (html) return html[1];
  const markdown = body.match(/!\[[^\]]*\]\((\/assets\/[^)\s]+)\)/);
  return markdown ? markdown[1] : null;
}

// Descriptions read best around 150 characters; below MIN_LENGTH a lead is
// thin enough to be worth extending with the next paragraph of the same
// section.
const MAX_LENGTH = 160;
const MIN_LENGTH = 80;

/**
 * Drop leading block-level HTML, HTML comments, and headings so the extractor
 * starts on real prose. Three articles open with a `wiki-note` aside or a
 * `wiki-figure`; without this their descriptions would be markup, alt text,
 * or "In development".
 */
function stripLeadingBlocks(markdown: string): string {
  let text = markdown.trimStart();

  for (;;) {
    if (text.startsWith('<!--')) {
      const end = text.indexOf('-->');
      if (end === -1) return '';
      text = text.slice(end + 3).trimStart();
      continue;
    }

    const openTag = text.match(/^<([a-zA-Z][\w-]*)\b[^>]*>/);
    if (openTag) {
      // A void or self-closing tag has no matching close to skip past.
      if (openTag[0].endsWith('/>')) {
        text = text.slice(openTag[0].length).trimStart();
        continue;
      }
      const closeTag = new RegExp(`</${openTag[1]}\\s*>`, 'i').exec(text);
      if (!closeTag) return '';
      text = text.slice(closeTag.index + closeTag[0].length).trimStart();
      continue;
    }

    return text;
  }
}

/** Reduce a Markdown paragraph to a single line of plain prose. */
function toPlainText(markdown: string): string {
  return (
    markdown
      // Footnote references first: `[^id]` would otherwise survive the link
      // pass, and leads carry them stacked ("...1881.[^a][^b][^c]").
      .replace(/\[\^[^\]]+\]/g, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      // Keep link text. Several leads open with a link, so dropping the whole
      // construct would decapitate the sentence.
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/`([^`]*)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/<[^>]+>/g, '')
      // Articles hard-wrap at about 90 columns, so collapse the wraps.
      .replace(/\s+/g, ' ')
      .trim()
  );
}

/**
 * Drop trailing function words and punctuation, so that an ellipsis never
 * follows "a", "by" or "and" and leave the reader mid-phrase.
 */
function trimDangling(text: string): string {
  return text
    .replace(
      /(?:\s+(?:a|an|the|of|and|or|in|on|at|to|as|by|for|from|with|its|that|which|made))+$/i,
      '',
    )
    .replace(/[,;:]$/, '');
}

/**
 * Cut to length on a sentence boundary, else a clause boundary, else a word.
 *
 * Leads here are typically a single sentence well past the budget (a product,
 * its maker, that maker's home town and the model's place in the line, all in
 * one breath), so a sentence boundary is usually not available at all and the
 * clause fallback is what actually runs. Ending on a comma reads as a finished
 * statement; ending on a word lands mid-phrase.
 */
function truncate(text: string, max: number): string {
  if (text.length <= max) return text;

  const window = text.slice(0, max);
  const sentenceEnd = Math.max(
    window.lastIndexOf('. '),
    window.lastIndexOf('? '),
    window.lastIndexOf('! '),
  );
  if (sentenceEnd >= max * 0.6) return window.slice(0, sentenceEnd + 1);

  // Trailing punctuation is dropped so the ellipsis does not follow a comma.
  const clauseEnd = Math.max(
    window.lastIndexOf(', '),
    window.lastIndexOf('; '),
    window.lastIndexOf(': '),
  );
  if (clauseEnd >= max * 0.5) return `${trimDangling(window.slice(0, clauseEnd))}…`;

  // Last resort: a word boundary.
  const wordEnd = window.lastIndexOf(' ');
  return `${trimDangling(window.slice(0, wordEnd > 0 ? wordEnd : max))}…`;
}

/**
 * Derive a meta description from an article's raw Markdown body. Stays within
 * the lead section: a heading ends the description rather than letting it run
 * into unrelated prose. The Main Page's featured-article panel passes larger
 * limits to show more of the same lead.
 */
export function summarize(
  body: string | undefined,
  maxLength: number = MAX_LENGTH,
  minLength: number = MIN_LENGTH,
): string {
  if (!body) return SITE_DESCRIPTION;

  const paragraphs = stripLeadingBlocks(body.replace(/\r\n/g, '\n')).split(/\n\s*\n/);

  let description = '';
  for (const paragraph of paragraphs) {
    if (paragraph.trimStart().startsWith('#')) break;

    // A stub's lead opens with the §4.8 marker, which says nothing about the
    // subject and would otherwise take the first 24 characters of the snippet.
    const plain = toPlainText(stripLeadingBlocks(paragraph)).replace(STUB_MARKER, '').trim();
    if (!plain) continue;

    description = description ? `${description} ${plain}` : plain;
    if (description.length >= minLength) break;
  }

  return description ? truncate(description, maxLength) : SITE_DESCRIPTION;
}
