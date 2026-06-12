import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Layer 3: SEO blog posts. City + food type keywords, every post links to the map.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    city: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
