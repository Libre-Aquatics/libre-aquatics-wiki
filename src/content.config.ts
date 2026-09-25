import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// All wiki articles live in docs/ as Markdown. The root index.md (Main Page)
// and categories.md (tag index) are rendered by dedicated pages in src/pages/,
// not by the collection, so they are excluded here.
const articles = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!index.md', '!categories.md'], base: './docs' }),
  schema: z.object({
    title: z.string(),
    // Optional <title>/og:title override for a page whose title is too
    // generic to stand alone in a results list ("Timers" -> "Swim timing
    // consoles"). The heading, nav and breadcrumbs keep `title`.
    seoTitle: z.string().optional(),
    // Optional meta-description override. Left unset, src/lib/seo.ts derives
    // one from the article's lead paragraph; set it only when that reads badly.
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Keeps the page out of search results while still passing links on.
    // The sitemap filter in astro.config.mjs reads this same key straight
    // from the file's front matter, so a noindex page is also dropped from
    // sitemap-0.xml. Left unset, stubs are noindexed automatically and other
    // pages are not (src/lib/stub.mjs resolveNoindex); `noindex: false`
    // overrides that for a short page that is complete. Unset stays undefined
    // rather than defaulting to false, so the override can be told apart.
    noindex: z.boolean().optional(),
    infoboxTitle: z.string().optional(),
    infobox: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          href: z.string().optional(),
          code: z.boolean().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { articles };
