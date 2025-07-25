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
    }),
});

// 导出配置
export const collections = {
    podcasts,
    articles,
};