// 内容集合配置文件
import { defineCollection, z } from 'astro:content';

// 定义统一的内容集合
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    coverImage: z.string().optional(),
    type: z.enum(['article', 'podcast']), // 内容类型
    column: z.enum(['日斗专栏', '聚财策略', '聚财播客']), // 分栏归属
    // 特定类型的字段
    audioUrl: z.string().optional(), // 仅播客需要
    duration: z.string().optional(), // 仅播客需要
  }),
});

// 导出配置
export const collections = {
  posts,
};