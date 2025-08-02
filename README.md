# 聚财众发网站

聚财众发网站是一个基于 Astro 框架构建的现代化网站，专注于提供金融资讯、播客内容和相关服务。网站采用响应式设计，确保在各种设备上都能提供良好的用户体验。

## 🚀 项目结构

项目采用模块化设计，主要包含以下目录和文件：

```text
/
├── .astro/                  # Astro 配置和生成文件
├── .gitignore               # Git 忽略文件
├── .vercel/                 # Vercel 部署配置和输出
├── .vscode/                 # VS Code 配置
├── README.md                # 项目自述文件
├── astro.config.mjs         # Astro 主配置文件
├── compare-sizes.cjs        # 目录大小比较脚本
├── compress-images.cjs      # 图片压缩脚本
├── dist/                    # 构建输出目录
├── package-lock.json        # 依赖锁文件
├── package.json             # 项目依赖和脚本
├── public/                  # 静态资源目录
│   ├── audio/               # 音频文件
│   ├── chat-widget/         # 智能客服测试页面
│   ├── images/              # 原始图片
│   ├── images-optimized/    # 优化后的图片
│   ├── robots.txt           # 爬虫规则
│   └── sitemap.xml          # 网站地图
├── remove-duplicate-images.cjs  # 重复图片移除脚本
├── src/                     # 源代码目录
│   ├── api/                 # API 接口
│   ├── components/          # 可复用组件
│   │   ├── ChatWidget.astro # 智能客服组件
│   │   ├── ContentList.astro # 内容列表组件
│   │   ├── PodcastCard.astro # 播客卡片组件
│   │   ├── ResponsiveImage.astro # 响应式图片组件
│   │   └── types.d.ts       # 类型定义
│   ├── config/              # 配置文件
│   ├── content/             # 内容管理
│   │   ├── articles/        # 文章内容
│   │   ├── config.ts        # 内容配置
│   │   └── podcasts/        # 播客内容
│   ├── env.d.ts             # 环境类型定义
│   ├── layouts/             # 布局组件
│   │   └── BaseLayout.astro # 基础布局
│   ├── lib/                 # 工具函数
│   │   └── wordpress.js     # WordPress 集成工具
│   ├── middleware.ts        # 中间件
│   ├── pages/               # 页面组件
│   └── styles/              # 样式文件
├── tailwind.config.mjs      # Tailwind CSS 配置
├── test-article.js          # 文章测试脚本
├── test-slugs.js            # Slug 测试脚本
├── tsconfig.json            # TypeScript 配置
├── vercel.json              # Vercel 特定配置
├── 网站使用手册.md           # 网站使用文档
└── 网站维护指南.md           # 网站维护文档
```

## 🧞 命令

所有命令在项目根目录的终端中运行：

| 命令                   | 作用                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装项目依赖                                      |
| `npm run dev`             | 启动本地开发服务器，访问地址 `localhost:4321`     |
| `npm run build`           | 构建生产环境代码到 `./dist/` 目录                 |
| `npm run preview`         | 本地预览构建后的网站                               |
| `npm run astro ...`       | 运行 Astro CLI 命令，如 `astro add`, `astro check` |
| `node compress-images.cjs`| 压缩图片资源                                      |
| `node remove-duplicate-images.cjs` | 移除重复图片                           |
| `node compare-sizes.cjs`  | 比较目录大小                                      |

## 🔧 技术栈

- 框架: [Astro](https://astro.build/) - 构建高性能网站的现代框架
- UI 框架: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- 类型系统: [TypeScript](https://www.typescriptlang.org/) - 为 JavaScript 增加类型安全
- 部署平台: [Vercel](https://vercel.com/) - 快速、可靠的静态网站部署平台
- 脚本语言: JavaScript - 网站交互和功能实现

## 📚 维护指南

请参考 [网站维护指南.md](网站维护指南.md) 获取详细的维护信息，包括：
- 项目结构概述
- 日常维护任务
- 常见问题排查
- 性能优化建议
- 部署流程
- 维护成功点记录

另有 [网站使用手册.md](网站使用手册.md) 提供网站使用相关信息。

## 🚀 部署

项目通过 Vercel 自动部署，详细部署流程请参考维护指南。

## 👥 贡献

欢迎团队成员贡献代码，提交前请确保通过所有测试。

## 📞 联系

如有问题，请联系技术团队。
telegram：@GuanYu_432Hz
