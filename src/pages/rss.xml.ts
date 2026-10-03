import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../utils/posts';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: `${SITE.title} · ${SITE.slogan}`,
    description: SITE.description,
    site: context.site!,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: [post.data.category, ...post.data.tags],
      link: `${base}/blog/${post.slug}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
