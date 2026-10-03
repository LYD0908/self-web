import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Astro 5 的 content collections 用 `id` 取代了旧的 `slug`。
 * 这里统一补一个 slug 字段，组件里继续用 post.slug 即可。
 */
export type Post = CollectionEntry<'blog'> & { slug: string };

/** 获取所有已发布文章，按置顶 + 日期倒序 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  // 用 Object.assign 而不是展开运算符 —— 展开会丢掉 entry 原型上的 render()
  return posts
    .map((p) => Object.assign(p, { slug: p.id }))
    .sort((a, b) => {
      if (!!b.data.pinned !== !!a.data.pinned) return b.data.pinned ? 1 : -1;
      return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
    });
}

/** 中文按字数、英文按词数估算阅读时间（分钟） */
export function readingTime(body: string): number {
  if (!body) return 1;
  const plain = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/!?\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/[#>*_~|-]/g, '');
  const cjk = (plain.match(/[\u4e00-\u9fa5]/g) || []).length;
  const words = (plain.match(/[a-zA-Z0-9]+/g) || []).length;
  const minutes = cjk / 350 + words / 220;
  return Math.max(1, Math.round(minutes));
}

/** 收集全部标签及其文章数 */
export function collectTags(posts: Post[]): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      map.set(t, (map.get(t) || 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** 按板块分组 */
export function groupByCategory(posts: Post[]) {
  const map = new Map<string, Post[]>();
  for (const p of posts) {
    const key = p.data.category;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p);
  }
  return map;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
