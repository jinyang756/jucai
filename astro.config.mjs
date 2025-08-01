// @ts-check
import { defineConfig } from 'astro/config';
// 导入Tailwind CSS集成
import tailwind from '@astrojs/tailwind';
// 导入React集成
import react from '@astrojs/react';
// 导入Vercel适配器
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
 export default defineConfig({
   // 配置Vercel适配器
   adapter: vercel({}),
  // 启用 Markdown 支持
  markdown: {
    shikiConfig: {
      // 选择一个主题
      theme: 'github-dark',
      // 启用自动换行
      wrap: true,
    },
  },
  // 配置国际化
  i18n: {
    // 默认语言
    defaultLocale: 'zh-CN',
    // 支持的语言
    locales: ['zh-CN', 'en'],
    // 路由格式
    routing: 'manual',
  },
  // 配置开发服务器
  server: {
    // 主机
    host: '0.0.0.0',
    // 端口
    port: 4321,
  },
  // 集成Tailwind CSS和React
  integrations: [tailwind(), react()],
});
