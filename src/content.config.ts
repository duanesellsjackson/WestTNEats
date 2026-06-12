import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Layer 3: SEO blog posts. City + food type keywords, every post links to the map.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    city: z.string().optional(),
  }),
});

export const collections = { blog };
