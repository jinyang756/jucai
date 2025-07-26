import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // 移除了国际化相关代码
  // 继续处理请求
  return next();
});