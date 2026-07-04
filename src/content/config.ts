import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['oracle', 'postgres', 'data', 'voip']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
