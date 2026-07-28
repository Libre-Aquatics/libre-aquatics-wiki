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
