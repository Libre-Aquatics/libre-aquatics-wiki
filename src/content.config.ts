import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// All wiki articles live in docs/ as Markdown. The root index.md (Main Page)
// and categories.md (tag index) are rendered by dedicated pages in src/pages/,
// not by the collection, so they are excluded here.
const articles = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!index.md', '!categories.md'], base: './docs' }),
  schema: z.object({
    title: z.string(),
    // Optional meta-description override. Left unset, src/lib/seo.ts derives
    // one from the article's lead paragraph; set it only when that reads badly.
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Keeps the page out of search results while still passing links on.
    // The sitemap filter in astro.config.mjs reads this same key straight
    // from the file's front matter, so a noindex page is also dropped from
    // sitemap-0.xml; set both or neither, never one alone.
    noindex: z.boolean().default(false),
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
