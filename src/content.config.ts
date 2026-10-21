import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), slug: z.string() }),
});

export const collections = { posts, pages };
