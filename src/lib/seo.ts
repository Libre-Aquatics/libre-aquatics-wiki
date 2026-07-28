// Site metadata and the derived-description logic behind the head tags in
// BaseLayout.astro. Articles are authored by people writing prose, not
// metadata, so summarize() builds a meta description out of an article's own
// lead paragraph. An article can override it with `description:` in front
// matter when the derived text reads badly.

export const SITE_NAME = 'Libre Aquatics Wiki';

export const SITE_DESCRIPTION =
  'A free reference for the equipment, timing hardware, and meet operations behind ' +
  'competitive aquatics: swimming, diving, water polo, and open water.';

// Meta descriptions for the four pages that are not Markdown articles. The
// Main Page and tag index are Astro pages (src/pages/index.astro,
// categories.astro), so there is no front matter to derive these from.
export const PAGE_META = {
  home: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
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

/** Cut to length on a sentence boundary where possible, else a word boundary. */
function truncate(text: string, max: number): string {
  if (text.length <= max) return text;

  const window = text.slice(0, max);
  const sentenceEnd = Math.max(
    window.lastIndexOf('. '),
    window.lastIndexOf('? '),
    window.lastIndexOf('! '),
  );
  if (sentenceEnd >= max * 0.6) return window.slice(0, sentenceEnd + 1);

  const wordEnd = window.lastIndexOf(' ');
  const cut = window.slice(0, wordEnd > 0 ? wordEnd : max);
  return `${cut.replace(/[,;:]$/, '')}…`;
}

/**
 * Derive a meta description from an article's raw Markdown body. Stays within
 * the lead section: a heading ends the description rather than letting it run
 * into unrelated prose.
 */
export function summarize(body: string | undefined): string {
  if (!body) return SITE_DESCRIPTION;

  const paragraphs = stripLeadingBlocks(body.replace(/\r\n/g, '\n')).split(/\n\s*\n/);

  let description = '';
  for (const paragraph of paragraphs) {
    if (paragraph.trimStart().startsWith('#')) break;

    const plain = toPlainText(stripLeadingBlocks(paragraph));
    if (!plain) continue;

    description = description ? `${description} ${plain}` : plain;
    if (description.length >= MIN_LENGTH) break;
  }

  return description ? truncate(description, MAX_LENGTH) : SITE_DESCRIPTION;
}
