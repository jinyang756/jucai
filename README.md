# 聚财众发网站

聚财众发网站是一个基于 Astro 框架构建的现代化金融资讯平台，专注于提供高质量的金融分析、市场洞察、投资策略和播客内容。网站采用响应式设计和现代化 UI，确保在各种设备上都能提供卓越的用户体验。

主要栏目包括：
- 市场洞察：最新金融市场分析和评论
- 投资策略：专业的投资建议和策略分享
- 寓言哲思：金融相关的哲理故事和思考
- 聚财播客：音频形式的深度分析和访谈
- 金融日历：重要经济事件和数据发布提醒

网站采用内容驱动架构，支持多种内容格式和交互体验，旨在为用户提供有价值的金融信息和见解。

## 🚀 项目结构

项目采用模块化设计，主要包含以下目录和文件：

```text
/
├── .gitignore               # Git 忽略文件
├── README.md                # 项目自述文件
├── astro.config.mjs         # Astro 主配置文件
├── check-links.cjs          # 链接检查脚本
├── compare-sizes.cjs        # 目录大小比较脚本
├── compress-images.cjs      # 图片压缩脚本
├── dist/                    # 构建输出目录
├── package-lock.json        # 依赖锁文件
├── package.json             # 项目依赖和脚本
├── pre-dev-check.cjs        # 开发前检查脚本
├── public/                  # 静态资源目录
│   ├── audio/               # 播客音频文件
│   ├── chat-widget/         # 智能客服测试页面
│   ├── images/              # 原始图片资源
│   ├── images-optimized/    # 优化后的图片
│   ├── robots.txt           # 爬虫规则
│   └── sitemap.xml          # 网站地图
├── remove-duplicate-images.cjs  # 重复图片移除脚本
├── src/                     # 源代码目录
│   ├── api/                 # API 接口
│   │   ├── audio/           # 音频服务接口
│   │   └── feishu-callback.ts # 飞书回调接口
│   ├── components/          # 可复用组件
│   │   ├── ChatWidget.astro # 智能客服组件
│   │   ├── ContentList.astro # 内容列表组件
│   │   ├── PodcastCard.astro # 播客卡片组件
│   │   ├── ResponsiveImage.astro # 响应式图片组件
│   │   └── types.d.ts       # 类型定义
│   ├── config/              # 配置文件
│   │   └── columns.ts       # 栏目配置
│   ├── content/             # 内容管理
│   │   ├── articles/        # 文章内容
│   │   ├── config.ts        # 内容配置
│   │   └── podcasts/        # 播客内容
│   ├── env.d.ts             # 环境类型定义
│   ├── layouts/             # 布局组件
│   │   └── BaseLayout.astro # 基础布局
│   ├── lib/                 # 工具函数
│   │   ├── api.ts           # API 工具
│   │   └── wordpress.js     # WordPress 集成工具
│   ├── middleware.ts        # 中间件
│   ├── pages/               # 页面组件
│   │   ├── about.astro      # 关于我们
│   │   ├── articles/        # 文章页面
│   │   ├── contact.astro    # 联系我们
│   │   ├── index.astro      # 首页
│   │   ├── insights.astro   # 市场洞察
│   │   ├── podcasts/        # 播客页面
│   │   ├── strategies.astro # 投资策略
│   │   ├── ritou.astro      # 金融日历
│   │   └── yuyan.astro      # 寓言哲思
│   └── styles/              # 样式文件
│       └── nav-fix.css      # 导航栏修复样式
├── tailwind.config.mjs      # Tailwind CSS 配置
├── test-article.js          # 文章测试脚本
├── test-slugs.js            # Slug 测试脚本
├── tsconfig.json            # TypeScript 配置
├── update-logger.cjs        # 更新日志脚本
├── vercel.json              # Vercel 特定配置
├── 网站使用手册.md           # 网站使用文档
├── 网站维护指南.md           # 网站维护文档
└── 聚财众发网站2.0升级方案.md   # 网站升级方案文档
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
| `node check-links.cjs`    | 检查网站链接是否有效                              |
| `node compress-images.cjs`| 压缩图片资源                                      |
| `node compare-sizes.cjs`  | 比较目录大小                                      |
| `node pre-dev-check.cjs`  | 开发前环境检查                                    |
| `node remove-duplicate-images.cjs` | 移除重复图片                           |
| `node update-logger.cjs`  | 更新项目日志                                      |

## 🔧 技术栈

- 框架: [Astro](https://astro.build/) - 构建高性能网站的现代框架
- UI 框架: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- 类型系统: [TypeScript](https://www.typescriptlang.org/) - 为 JavaScript 增加类型安全
- 部署平台: [Vercel](https://vercel.com/) - 快速、可靠的静态网站部署平台
- 脚本语言: JavaScript/TypeScript - 网站交互和功能实现
- 音频处理: 原生 HTML5 Audio API - 播客播放功能
- 内容管理: 基于 Astro Content Collections 的静态内容管理
- 图像处理: 自定义脚本优化和压缩图片资源

## 📚 维护指南

请参考 [网站维护指南.md](网站维护指南.md) 获取详细的维护信息，包括：
- 项目结构概述
- 日常维护任务
- 内容更新流程
- 常见问题排查
- 性能优化建议
- 部署流程
- 维护成功点记录

另有 [网站使用手册.md](网站使用手册.md) 提供网站使用相关信息。

## 🚀 部署

项目通过 Vercel 自动部署，配置文件为 `vercel.json`。详细部署流程请参考维护指南。

主要部署步骤：
1. 将代码提交到 GitHub 仓库
2. Vercel 自动检测代码变更并触发部署
3. 部署完成后，可通过分配的域名访问网站
4. 部署状态可在 Vercel 控制台查看

## 👥 贡献

欢迎团队成员贡献代码。提交前请确保：
1. 通过所有测试和代码检查
2. 遵循项目的代码风格和规范
3. 提交清晰的变更说明
4. 确保代码不会破坏现有功能
5. 对于重大变更，请先与团队讨论

贡献流程：
1. 创建分支：`git checkout -b feature/your-feature`
2. 提交更改：`git commit -m "描述你的更改"`
3. 推送分支：`git push origin feature/your-feature`
4. 创建合并请求并等待审核

## 📞 联系

如有问题或建议，请联系技术团队：
- Telegram：@GuanYu_432Hz
- 邮箱：tech@jucaizhongfa.com
- 工作群：企业微信 - 聚财众发技术群

我们欢迎任何形式的反馈和建议，帮助我们改进网站和服务。
