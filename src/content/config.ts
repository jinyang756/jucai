// 内容集合配置文件
import { defineCollection, z } from 'astro:content';

// 定义播客集合
const podcasts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.string(),
        duration: z.string(),
        coverImage: z.string().optional(),
        audioUrl: z.string(),
        column: z.string(), // 专栏分类
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
        column: z.string(), // 专栏分类
    }),
});

// 导出配置
export const collections = {
    podcasts,
    articles,
};