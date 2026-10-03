# 项目长期约定：个人网站（朵朵哥的博客）

## 项目性质
Astro 5 + Tailwind 4 静态博客站，部署到 GitHub Pages。参考站风格：simonaking.com
（双屏：全屏 Hero → 主屏卡片导航）。

## 设计约定
- **配色**：马卡龙系（樱花粉 / 薰衣草紫 / 薄荷绿 / 天空蓝 / 奶油黄），深浅双主题
- 色板与语义色统一定义在 `src/styles/global.css` 顶部 `:root` 和 `.dark`，改这两处即可换肤
- 组件用 Card 风格：大圆角 + 柔和阴影 + hover 上浮 + 紫色描边

## 改动入口（重要）
- **站点级配置全部集中在 `src/consts.ts`**：名称、slogan、导航、板块、社交、评论、打赏、友链、项目、简历时间线、技能条
- 改视觉找 `global.css`，改数据找 `consts.ts`，两者不要混

## 本机构建命令（Windows）
```bash
npm run dev                      # 本地开发
CODEBUDDY_SAFE_DELETE_ENABLED=0 npm run build   # 构建 + Pagefind 索引，必须加环境变量，否则最后清理 dist/pages 会被拦截
npm run preview
```
安装/重装依赖：
```bash
npm install --ignore-scripts --registry=https://registry.npmmirror.com
npm install pagefind@1.5.2 --registry=https://registry.npmmirror.com  # 补齐搜索二进制
```

## 内容约定
- 文章放 `src/content/blog/*.md`，frontmatter 字段见 `src/content.config.ts`
- 板块固定四类：`tech` / `startup` / `life` / `note`
- 正文容器带 `data-pagefind-body`，Pagefind 只索引文章正文

## 事实口径（以 `D:\桌面\朵子的第二大脑` 知识库为准，勿用旧数字）
- 天翼创业社团队规模：**5 人 → 120+ 人**（旧说 20-30 / 50+ 均已作废）
- 覆盖共青城 6 所高校，累计服务新生 3000+，2026 秋开季发展 350+ 户居校区第一
- 署名廖亚铎（朵朵哥），邮箱 liaoyaduo@163.com，GitHub github.com/LYD0908
- 2026-10-02 起校园业务已结项，转为经历资产；当前主线求职（AI 应用 / 解决方案工程师 + FDE）

## 素材来源（写文章时优先来这里挖）
- `D:\桌面\朵子的第二大脑\知识库\` —— LLM 维基模式维护的 77 页 wiki：概念 / 实体 / 专题 / 来源 / 问答
- 入口：`目录.md`（总索引）、`总览.md`（认知地图与演化结论）
- 高价值未写素材：企业级智能体六大特性、智能体方案设计方法、FDE 能力路线、银发回忆录、
  AI 漫剧行业、ComfyUI 工作流、角色一致性、合作的本质
