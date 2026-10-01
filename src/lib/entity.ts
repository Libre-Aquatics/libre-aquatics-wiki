// The thing an article is about, as schema.org structured data. BaseLayout.astro
// nests it under the TechArticle's `about`, so a search engine reads "this page
// describes Daktronics, an Organization founded in 1968" rather than only "this
// page is an article". Everything is derived from what the page already
// carries (its section, its infobox rows, its lead), so nothing new has to be
// written per article.
//
// Products and programs are typed as a Thing with an additionalType of
// Product or SoftwareApplication, never as Product or SoftwareApplication
// themselves. Google validates any Product or SoftwareApplication it finds,
// nested or not, for offers and ratings, and a reference page about mostly
// discontinued equipment has neither and must not invent them. additionalType
// keeps the meaning without inviting that validation. Properties a Thing does
// not take are left out: the maker or author moves to the TechArticle's
// `mentions` (subjectMentions() below), and brand, mpn, releaseDate and
// applicationCategory are dropped. scripts/check-seo.mjs fails the build if a
// Product or SoftwareApplication node reappears.
//
// Type by section, unless front matter sets `schemaType:`:
//   vendors/*          -> Organization
//   equipment/**       -> Product, when the infobox names a Manufacturer
//   software/*         -> SoftwareApplication (formats set `schemaType: none`)
//   section overviews (index.md) and everything else -> none
import path from 'node:path';
import type { CollectionEntry } from 'astro:content';
import { docPathToRoute } from './routes';
import { flattenNav } from './navigation';

type Article = CollectionEntry<'articles'>;
type Row = Article['data']['infobox'][number];

export type SchemaType = 'Organization' | 'Product' | 'SoftwareApplication' | 'none';

/** Text of an infobox value with Markdown links, code spans and quotes removed. */
function plain(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/** The first internal .md target an infobox row points at (docs-root-relative). */
function rowTarget(row: Row): string | undefined {
  if (row.href && row.href.endsWith('.md')) return row.href;
  return row.value.match(/\]\(([^)]+\.md)\)/)?.[1];
}

/** The @id an entity described on the page at `docPath` carries. */
function subjectId(docPath: string, site: URL): string {
  return `${new URL(docPathToRoute(docPath), site).href}#subject`;
}

const UNKNOWN = /^(not (established|disclosed|known)|unknown|none|n\/a)\b/i;

let vendorPages: Map<string, string> | undefined;

/** Vendor name as the nav lists it ('Colorado Time Systems') -> its doc path. */
function vendorByName(name: string): string | undefined {
  if (!vendorPages) {
    vendorPages = new Map(
      flattenNav()
        .filter((entry) => entry.page.startsWith('vendors/') && entry.page !== 'vendors/index.md')
        .map((entry) => [entry.title, entry.page]),
    );
  }
  return vendorPages.get(name);
}

/**
 * A reference to an organization named in an infobox row: its own name, plus
 * an @id tying it to the entity on its vendor page. The row may link there
 * itself; most Manufacturer rows are plain text, so a name that matches a
 * vendor page's nav title exactly is resolved too.
 */
function orgRef(row: Row, site: URL): object | undefined {
  // "[The Active Network](...), since 2008" -> the link text alone;
  // "PlayCore (EverActive Brands)" -> the name before the aside.
  const linked = row.value.match(/\[([^\]]+)\]\([^)]+\.md\)/)?.[1];
  const name = linked ?? plain(row.value).split(/\s*[(,;]/)[0];
  // Rows that record the absence of an answer rather than a company.
  if (UNKNOWN.test(name)) return undefined;
  const linkedTarget = rowTarget(row);
  const target = linkedTarget?.startsWith('vendors/') ? linkedTarget : vendorByName(name);
  return {
    '@type': 'Organization',
    ...(target ? { '@id': subjectId(target, site) } : {}),
    name,
  };
}

/** A bare four-digit year or ISO date, or undefined for prose like "Attested from 1995". */
function isoDate(value: string | undefined): string | undefined {
  const text = value ? plain(value) : '';
  return /^\d{4}(-\d{2}(-\d{2})?)?$/.test(text) ? text : undefined;
}

/**
 * The organization a software page's lead names by linking to its vendor
 * page ("a Windows program from [Colorado Time Systems](../vendors/...)"), or
 * undefined. Only the lead paragraph is read, so a vendor merely mentioned
 * further down is never taken for the author.
 */
function leadVendor(article: Article, site: URL): object | undefined {
  const body = (article.body ?? '').replace(/<!--[\s\S]*?-->/g, '');
  const lead = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !p.startsWith('<') && !p.startsWith('#'));
  const link = lead?.match(/\[([^\]]+)\]\(([^)#]+\.md)\)/);
  if (!link || !article.filePath) return undefined;
  const fromDir = path.posix.dirname(article.filePath.replace(/\\/g, '/').replace(/^docs\//, ''));
  const target = path.posix.normalize(path.posix.join(fromDir, link[2]));
  if (!target.startsWith('vendors/') || target === 'vendors/index.md') return undefined;
  return { '@type': 'Organization', '@id': subjectId(target, site), name: link[1] };
}

function defaultType(article: Article): SchemaType {
  const file = (article.filePath ?? '').replace(/\\/g, '/');
  if (file.endsWith('/index.md')) return 'none';
  const has = (label: string) => article.data.infobox.some((row) => row.label === label);
  if (article.id.startsWith('vendors/')) return 'Organization';
  if (article.id.startsWith('equipment/') && has('Manufacturer')) return 'Product';
  if (article.id.startsWith('software/')) return 'SoftwareApplication';
  return 'none';
}

function schemaType(article: Article): SchemaType {
  return article.data.schemaType ?? defaultType(article);
}

/** The schema.org entity the article describes, or undefined when it has none. */
export function aboutEntity(article: Article, site: URL | string): object | undefined {
  const siteUrl = new URL(site);
  const type = schemaType(article);
  if (type === 'none') return undefined;

  const { title, infoboxTitle, infobox, sameAs } = article.data;
  const row = (label: string) => infobox.find((r) => r.label === label);
  const base = {
    '@id': subjectId(`${article.id}.md`, siteUrl),
    name: infoboxTitle ?? title,
    ...(sameAs?.length ? { sameAs } : {}),
  };

  if (type === 'Organization') {
    const website = row('Website')?.href;
    const parent = row('Parent') ?? row('Owner');
    const founded = isoDate(row('Founded')?.value);
    const headquarters = row('Headquarters');
    return {
      '@type': 'Organization',
      ...base,
      ...(website && /^https?:/.test(website) ? { url: website } : {}),
      ...(founded ? { foundingDate: founded } : {}),
      ...(headquarters ? { address: plain(headquarters.value) } : {}),
      ...(parent ? { parentOrganization: orgRef(parent, siteUrl) } : {}),
    };
  }

  const thing = { '@type': 'Thing', additionalType: `https://schema.org/${type}`, ...base };
  if (type === 'Product') {
    const kind = row('Type');
    return { ...thing, ...(kind ? { category: plain(kind.value) } : {}) };
  }
  return thing;
}

/**
 * Organizations the TechArticle mentions on the subject's behalf: a product's
 * manufacturer or a program's author, which a Thing cannot carry itself. Empty
 * for vendor pages, whose Organization entity is unchanged, and for pages with
 * no subject.
 */
export function subjectMentions(article: Article, site: URL | string): object[] {
  const siteUrl = new URL(site);
  const type = schemaType(article);
  if (type === 'Product') {
    const maker = article.data.infobox.find((r) => r.label === 'Manufacturer');
    const manufacturer = maker ? orgRef(maker, siteUrl) : undefined;
    return manufacturer ? [manufacturer] : [];
  }
  if (type === 'SoftwareApplication') {
    const author = leadVendor(article, siteUrl);
    return author ? [author] : [];
  }
  return [];
}
