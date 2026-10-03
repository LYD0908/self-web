// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// GitHub Pages 部署配置说明
// ---------------------------------------------------------------------------
// 情况 A：仓库名为 <用户名>.github.io  → site 保持下面的值，base 用 '/'
// 情况 B：仓库名为其它名字（如 blog）→ base 需要改成 '/blog'
//
// 也可以不改动本文件，直接在仓库 Settings → Secrets 里设置环境变量，
// 或在项目根目录放一个 .env 文件：
//   SITE_URL=https://yourname.github.io
//   BASE_PATH=/
// ---------------------------------------------------------------------------

// 仓库 LYD0908/self-web → Pages 地址 https://lyd0908.github.io/self-web/
const site = process.env.SITE_URL || 'https://lyd0908.github.io';
const base = process.env.BASE_PATH || '/self-web';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
