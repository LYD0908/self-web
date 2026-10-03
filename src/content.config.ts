import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['tech', 'startup', 'life', 'note']).default('note'),
    tags: z.array(z.string()).default([]),
    /** 置顶 */
    pinned: z.boolean().default(false),
    /** 草稿：生产构建时不会被输出 */
    draft: z.boolean().default(false),
    /** 封面图，放在 public/ 下，如 /cover/xxx.png */
    cover: z.string().optional(),
    /** 封面渐变色 key，没配 cover 时用 */
    coverColor: z
      .enum(['pink', 'purple', 'mint', 'blue', 'yellow'])
      .default('purple'),
  }),
});

export const collections = { blog };
