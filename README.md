# 朵朵哥 · 个人网站

基于 **Astro 5 + Tailwind 4** 的个人博客站点，马卡龙配色，深浅色双主题，支持全文搜索、标签分类、目录导航与 GitHub Pages 自动部署。

## 快速开始

```bash
npm install
npm run dev        # 本地预览 http://localhost:4321
npm run build      # 构建（含 Pagefind 搜索索引）
npm run preview    # 预览构建产物
```

> Windows 上如果 `npm install` 卡在 esbuild 报 `EBUSY`，改用：
> `npm install --ignore-scripts --registry=https://registry.npmmirror.com`

## 我要改哪些地方？

### 1. 站点信息 —— `src/consts.ts`

99% 的定制都在这一个文件里：

| 配置项 | 说明 |
| --- | --- |
| `SITE` | 昵称、slogan、打字机滚动的身份词、页脚年份、备案号 |
| `NAV_ITEMS` | 顶部导航 + 首页主屏卡片（共用一份数据） |
| `CATEGORIES` | 四个内容板块：技术笔记 / 创业手记 / 生活随笔 / 随手记 |
| `SOCIALS` | GitHub、邮箱、微信、小红书、抖音等社交链接 |
| `COMMENT` | Giscus 评论配置（默认关闭） |
| `SPONSOR` | 打赏二维码（默认关闭） |
| `FRIEND_LINKS` | 友链列表 |
| `PROJECTS` | 项目作品集 |
| `TIMELINE` / `SKILLS` | 关于我页面的经历时间线与技能条 |

### 2. 关于我正文 —— `src/pages/about.astro`

名片下面那段自我介绍目前是提示文字，替换成你自己的。

### 3. 写文章

在 `src/content/blog/` 下新建 `.md` 文件：

```yaml
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-09-29
category: tech          # tech / startup / life / note
tags: ['标签1', '标签2']
coverColor: purple      # pink / purple / mint / blue / yellow
pinned: false
draft: false
---
```

正文正常写 Markdown 即可。

### 4. 配色 —— `src/styles/global.css`

顶部 `:root` 里是马卡龙色板和浅色语义色，`.dark` 里是深色语义色。改这两处就能整体换肤，组件不用动。

## 部署到 GitHub Pages

当前仓库：`LYD0908/self-web`，线上地址 **https://lyd0908.github.io/self-web/**

首次上线需要在 GitHub 上做**一次**设置：

1. 仓库 **Settings → Pages → Source** 选 **GitHub Actions**
2. 推代码到 `main` 分支，Actions 自动构建部署

### 推送命令

```bash
git add -A
git commit -m "你的提交说明"
git push -u origin main
```

推完到仓库的 **Actions** 标签页看构建进度，绿色即成功。首次部署要先跑通一次，Pages 地址才会生效。

### 换仓库名 / 换域名时

`astro.config.mjs` 里的 `site` / `base` 默认值写的是 `self-web`。要改有两种方式，推荐第一种（不用改代码）：

- 仓库 **Settings → Secrets and variables → Actions → Variables** 新建：
  - `SITE_URL` = `https://<用户名>.github.io`
  - `BASE_PATH` = `/<仓库名>`
- 或直接改 `astro.config.mjs` 顶部那两行的默认值

工作流文件：`.github/workflows/deploy.yml`（已内置默认值，不配变量也能跑）

## 开启评论（Giscus）

1. 仓库必须是 **public**
2. 到 https://github.com/apps/giscus 给仓库安装
3. 仓库 **Settings → Features** 勾选 **Discussions**
4. 到 https://giscus.app/zh-CN 填仓库，复制生成的 `data-repo` / `data-repo-id` / `data-category` / `data-category-id`
5. 填进 `src/consts.ts` 的 `COMMENT`，把 `enabled` 改成 `true`

## 目录结构

```
src/
├── components/     # 组件（导航、卡片、目录、主题切换、评论…）
├── content/blog/   # 文章（Markdown）
├── consts.ts       # ★ 站点配置，主要改这里
├── layouts/        # 页面骨架
├── pages/          # 路由：首页 / 博客 / 分类 / 标签 / 关于 / 项目 / 友链 / 搜索 / RSS
├── styles/         # 全局样式与设计 token
└── utils/posts.ts  # 文章查询、阅读时间、标签聚合
```

## 功能清单

- [x] 首页双屏：流体背景首屏（打字机 + ENTER）→ 主屏卡片导航
- [x] 博客列表分页、板块分类、标签聚合
- [x] 文章详情：阅读进度条、TOC 目录、上下篇、标签
- [x] Pagefind 全文搜索
- [x] 深浅色主题切换（记住选择 + 跟随系统）
- [x] 关于我 / 简历页、项目作品集、友链 + 打赏
- [x] RSS 订阅、Sitemap、SEO meta
- [x] 响应式 + 移动端菜单
- [ ] Giscus 评论（配置好 `COMMENT` 后启用）
