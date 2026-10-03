/**
 * ============================================================================
 *  站点配置 —— 绝大部分要改的内容都在这个文件里
 * ============================================================================
 */

export const SITE = {
  /** 网站标题（浏览器标签页、页脚） */
  title: '朵朵哥',
  /** 署名 / 昵称 */
  name: '朵朵哥',
  /** 真实姓名，用于简历页抬头 */
  realName: '廖亚铎',
  /** 英文代号，用于 logo、域名感的小字 */
  handle: 'LYD',
  /** 一句话定位，显示在首屏大字下方 */
  slogan: '听得懂客户，也写得动代码 —— 做能落地的 AI 应用',
  /** SEO 描述 */
  description:
    '廖亚铎（朵朵哥）的个人网站 —— 南昌航空大学科技学院计算机专业在读，三年校园业务一线 + 自建 AI 提效系统。记录 LangChain / LangGraph 实战、AI 落地方法论与创业复盘。',
  /** 首屏打字机滚动的多重身份 */
  typingRoles: [
    'AI 应用工程师',
    'LangChain / LangGraph 实践者',
    '三年校园业务一线',
    '从 5 人做到 120 人的团队建立者',
    '把想法做成有人真的在用的东西',
  ],
  /** 首屏按钮文案 */
  enterText: 'ENTER',
  /** 页脚版权起始年份 */
  sinceYear: 2026,
  /** 备案信息（没有就留空字符串） */
  icp: '',
};

/** 顶部导航 + 首屏主屏卡片（两者共用） */
export const NAV_ITEMS = [
  {
    label: '博客',
    desc: '文章归档，按板块和标签浏览',
    href: '/blog',
    icon: 'book',
    color: 'pink',
  },
  {
    label: '项目',
    desc: '做过的东西，带截图和链接',
    href: '/projects',
    icon: 'rocket',
    color: 'mint',
  },
  {
    label: '关于我',
    desc: '经历、技能栈与联系方式',
    href: '/about',
    icon: 'user',
    color: 'purple',
  },
  {
    label: '友链',
    desc: '朋友们和常逛的站点',
    href: '/links',
    icon: 'link',
    color: 'blue',
  },
];

/** 内容板块（对应文章 frontmatter 的 category） */
export const CATEGORIES = [
  {
    id: 'tech',
    label: '技术笔记',
    desc: 'AI / Agent / Python 工程实践与踩坑记录',
    color: 'purple',
    icon: 'code',
  },
  {
    id: 'startup',
    label: '创业手记',
    desc: '校园市场、获客转化与团队管理复盘',
    color: 'pink',
    icon: 'flame',
  },
  {
    id: 'life',
    label: '生活随笔',
    desc: '想法碎片、读书笔记与日常记录',
    color: 'mint',
    icon: 'leaf',
  },
  {
    id: 'note',
    label: '随手记',
    desc: '短内容、灵感与临时想法',
    color: 'yellow',
    icon: 'pen',
  },
] as const;

/** 社交链接 —— 不需要的整行删掉即可 */
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/LYD0908', icon: 'github' },
  { label: '邮箱', href: 'mailto:liaoyaduo@163.com', icon: 'mail' },
  { label: '微信', href: '#wechat', icon: 'wechat' },
];

/**
 * Giscus 评论配置
 * ---------------------------------------------------------------------------
 * 启用步骤：
 *   1. 仓库必须是 public
 *   2. 打开 https://github.com/apps/giscus 给仓库安装 Giscus
 *   3. 打开仓库 Settings → Features → 勾选 Discussions
 *   4. 到 https://giscus.app/zh-CN 填入仓库，复制生成的 data-repo / data-repo-id
 *      / data-category / data-category-id，填到下面
 *   5. 把 enabled 改成 true
 */
export const COMMENT = {
  enabled: false,
  repo: 'yourname/yourname.github.io',
  repoId: '',
  category: 'Announcements',
  categoryId: '',
  lang: 'zh-CN',
};

/** 打赏 / 赞助（把图片放到 public/ 下，不需要就把 enabled 设为 false） */
export const SPONSOR = {
  enabled: false,
  wechat: '/sponsor-wechat.png',
  alipay: '/sponsor-alipay.png',
  tip: '如果文章对你有帮助，欢迎请我喝杯咖啡 ☕',
};

/** 友链数据 */
export const FRIEND_LINKS = [
  {
    name: '示例好友',
    url: 'https://example.com',
    desc: '这是一个友链示例，删掉换成你自己的',
    avatar: '',
  },
];

/** 项目作品集数据 */
export const PROJECTS = [
  {
    name: '自适应 RAG 问答系统',
    desc: '技术含量最高的项目：面向企业知识库的确定性 AI 编排中间件。LangGraph 六节点状态机（意图识别 / 查询重写 / 向量检索 / 动态模型路由 / 溯源生成 / 置信度评估），Pydantic 严格数据契约，云端超时毫秒级优雅降级到本地模型，全链路分布式追踪。',
    tags: ['LangGraph', 'FastAPI', 'FAISS', 'Redis', 'LangSmith'],
    link: '',
    status: '进行中',
    color: 'purple',
  },
  {
    name: '校园电话卡 AI 提效系统',
    desc: '产品负责人兼主开发。访谈一线销售后定位「内容产能不足、话术不统一」两大痛点，设计内容生成 / 话术推荐 / 知识问答三类 Agent，LangGraph 编排、FastAPI 封装，团队 120+ 人全员试用。验收标准只有一个：真的在用。',
    tags: ['LangChain', 'LangGraph', 'FastAPI', 'DeepSeek'],
    link: '',
    status: '进行中',
    color: 'pink',
  },
  {
    name: '朵喵 · 桌面悬浮小猫',
    desc: '第一个桌面应用。Electron 透明置顶窗口，主进程 40ms 轮询鼠标位置做缓动跟随，双击唤起 AI 对话（无密钥时降级到本地台词库）。关键词匹配顺序特意设计成「先关后开」，避免「别跟着我」被误判成「跟着我」。',
    tags: ['Electron', 'Node.js', 'DeepSeek'],
    link: '',
    status: '已完成',
    color: 'yellow',
  },
  {
    name: 'AI-match 乡村振兴专家智能匹配系统',
    desc: '大创杯项目。专家端 / 村集体端 / 管理端三端分离，JWT 双 Token 认证，设计「规则算法 + AI 语义匹配」双路机制实现专家与村集体需求精准对接，配套数据可视化看板。测试通过率 100%，已完成部署。',
    tags: ['Vue3', 'Python', 'MySQL', 'AI 匹配'],
    link: '',
    status: '已完成',
    color: 'mint',
  },
  {
    name: 'FloatingWorkbench 悬浮工作台',
    desc: 'Windows 桌面效率工具。.NET 10 + MVVM 分层，Core 层与 UI 层解耦并配单元测试。集成剪贴板历史、文件秒搜、快速启动、定时任务、便签、系统监控与设置备份。',
    tags: ['C#', '.NET 10', 'WinUI', 'MVVM'],
    link: '',
    status: '进行中',
    color: 'blue',
  },
  {
    name: 'GLM Vision MCP Server',
    desc: '让 Agent 真正能「看」东西的 MCP 服务器。封装智谱 GLM-4.6V-Flash，提供 analyze_image / analyze_video / analyze_file / vision_chat 四个工具，支持 URL、base64 与本地文件路径。',
    tags: ['TypeScript', 'MCP', 'GLM-4.6V'],
    link: '',
    status: '已完成',
    color: 'pink',
  },
  {
    name: '智能图书管理系统',
    desc: 'B/S 架构图书借还平台。Flask 搭建后端、MySQL 持久化，完成图书 / 读者 / 借阅记录核心表设计，实现完整 CRUD 接口与基于角色的权限校验。',
    tags: ['Flask', 'MySQL', 'RESTful'],
    link: '',
    status: '已完成',
    color: 'yellow',
  },
];

/** 关于我页面 —— 经历时间线（从最新到最早） */
export const TIMELINE = [
  {
    year: '2026.10',
    title: '搭起个人网站与「第二大脑」知识库',
    desc: '把三年攒下的 194 份资料交给大模型增量编译成 77 页互链 wiki，自己只负责提问和拍板。校园业务同期结项，转为经历资产。',
  },
  {
    year: '2026.09',
    title: '2026 秋开季发展用户 350+ 户，业绩居校区第一',
    desc: '建立「新人带教 + 周度复盘」机制，用制度而不是个人英雄主义拿结果。',
  },
  {
    year: '2025.10',
    title: 'AI-match 乡村振兴专家智能匹配系统（大创杯）',
    desc: 'Vue3 + Python + MySQL，三端分离。「规则算法 + AI 语义匹配」双路机制，测试通过率 100% 已部署。',
  },
  {
    year: '2025.09',
    title: '主导「校园电话卡 AI 提效系统」落地',
    desc: 'LangChain + LangGraph + FastAPI + DeepSeek，把一线的真实痛点做成 Agent 服务并推动团队实际使用。',
  },
  {
    year: '2025.06',
    title: '独立开发智能图书管理系统',
    desc: 'Flask + MySQL + PyMySQL，B/S 架构借还平台，含基于角色的权限校验。',
  },
  {
    year: '2024.09',
    title: '出任天翼创业社社长，团队从 5 人做到 120+ 人',
    desc: '中国电信校园创业社团，覆盖共青城 6 所高校。沉淀新人带教 + 周度复盘、分层分润、标准话术、三级梯队四套机制，累计服务新生 3000+。',
  },
  {
    year: '2024 / 2025',
    title: '连续两年获评中国电信共青城分公司「优秀销售」',
    desc: '从一线兼职做到校区业绩第一，也攒下了后来做 AI 提效系统的第一手需求。',
  },
  {
    year: '2023.09',
    title: '入学南昌航空大学科技学院 · 计算机科学与技术',
    desc: '加入电信产业社开始做校园经济。同年第一次高考 408 分选择复读，第二年 469 分上岸本科。',
  },
];

/** 关于我页面 —— 技能栈 */
export const SKILLS = [
  { name: 'Python', level: 90, color: 'blue' },
  { name: 'LangChain / LangGraph', level: 88, color: 'purple' },
  { name: 'Prompt Engineering', level: 88, color: 'pink' },
  { name: 'RAG / Agent 开发', level: 85, color: 'mint' },
  { name: 'FastAPI / Flask 后端', level: 80, color: 'blue' },
  { name: '向量检索（BGE / FAISS / Chroma）', level: 75, color: 'mint' },
  { name: 'Vue3 / 前端', level: 70, color: 'yellow' },
  { name: '方案设计与需求访谈', level: 85, color: 'purple' },
  { name: '获客转化与团队管理', level: 90, color: 'pink' },
];
