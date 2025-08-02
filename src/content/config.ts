// 内容集合配置文件
import { defineCollection, z } from 'astro:content';

// 定义播客集合
const podcasts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.string(),
        duration: z.string().optional(),
        coverImage: z.string().optional(),
        audioUrl: z.string().optional(),
        column: z.enum(['日斗专栏', '聚财策略', '聚财播客']), // 分栏归属
    }),
});

// 定义文章集合
const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.string(),
        coverImage: z.string().optional(),
        column: z.enum(['日斗专栏', '聚财策略', '聚财播客']), // 分栏归属
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

// 导出配置
export const collections = {
    podcasts,
    articles,
};

// 为了向后兼容，保留posts集合的定义
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

export const legacyCollections = {
  posts,
};