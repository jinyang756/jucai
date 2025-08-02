// src/lib/api.ts
// 聚财众发智能客服小聚2.0 API服务

import type { Article } from '../components/types.d.ts';

// --- 文章服务接口实现 --- 
const articleService = {
    /**
     * 搜索文章
     * @param params 搜索参数
     * @returns 文章列表
     */
    async searchArticles(params: { title?: string; tags?: string[]; column?: string }): Promise<Article[]> {
        try {
            // 模拟API请求
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 模拟数据
                    const articles: Article[] = [
                        {
                            id: 'article_1',
                            title: '投资策略分析',
                            description: '最新市场投资策略分析',
                            content: '这是一篇关于投资策略的详细分析文章...',
                            publishDate: '2023-05-15',
                            lastModified: '2023-05-15',
                            coverImage: 'https://example.com/cover1.jpg',
                            column: '聚财策略',
                            tags: ['投资', '策略']
                        },
                        {
                            id: 'article_2',
                            title: '市场趋势预测',
                            description: '未来市场趋势预测报告',
                            content: '这是一篇关于市场趋势的预测报告...',
                            publishDate: '2023-05-10',
                            lastModified: '2023-05-10',
                            coverImage: 'https://example.com/cover2.jpg',
                            column: '日斗专栏',
                            tags: ['市场', '预测']
                        }
                    ];

                    // 模拟筛选
                    if (params.title) {
                        resolve(articles.filter(article => 
                            article.title.toLowerCase().includes((params.title || '').toLowerCase())
                        ));
                    } else {
                        resolve(articles);
                    }
                }, 500);
            });
        } catch (error) {
            console.error('Failed to search articles:', error);
            throw error;
        }
    },

    /**
     * 创建文章
     * @param article 文章数据
     * @returns 创建的文章
     */
    async createArticle(article: Article): Promise<Article> {
        try {
            // 模拟API请求
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 模拟创建文章，生成ID和日期
                    const newArticle = {
                        ...article,
                        id: article.id || 'article_' + Date.now(),
                        publishDate: article.publishDate || new Date().toISOString().split('T')[0],
                        lastModified: new Date().toISOString().split('T')[0]
                    };
                    console.log('Article created successfully:', newArticle);
                    resolve(newArticle);
                }, 800);
            });
        } catch (error) {
            console.error('Failed to create article:', error);
            throw error;
        }
    },

    /**
     * 更新文章
     * @param id 文章ID
     * @param article 文章数据
     * @returns 更新后的文章
     */
    async updateArticle(id: string, article: Partial<Article>): Promise<Article> {
        try {
            // 模拟API请求
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 模拟更新文章
                    const updatedArticle = {
                        id,
                        title: article.title || 'Updated Article Title',
                        description: article.description || 'Updated Description',
                        content: article.content || 'Updated Content',
                        publishDate: article.publishDate || new Date().toISOString().split('T')[0],
                        lastModified: new Date().toISOString().split('T')[0],
                        coverImage: article.coverImage || 'https://example.com/default-cover.jpg',
                        column: article.column || '聚财策略',
                        tags: article.tags || []
                    };
                    console.log('Article updated successfully:', updatedArticle);
                    resolve(updatedArticle);
                }, 800);
            });
        } catch (error) {
            console.error('Failed to update article:', error);
            throw error;
        }
    },

    /**
     * 删除文章
     * @param id 文章ID
     * @returns 是否删除成功
     */
    async deleteArticle(id: string): Promise<boolean> {
        try {
            // 模拟API请求
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Article deleted successfully:', id);
                    resolve(true);
                }, 500);
            });
        } catch (error) {
            console.error('Failed to delete article:', error);
            throw error;
        }
    }
};

// --- 认证服务接口实现 --- 
const authService = {
    /**
     * 验证用户身份
     * @param token 用户令牌
     * @returns 用户信息
     */
    async validateUser(token: string): Promise<any> {
        try {
            // 模拟API请求
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 模拟验证成功
                    resolve({
                        userId: 'user_123',
                        name: '聚财用户',
                        role: 'standard',
                        permissions: ['read_articles', 'write_articles']
                    });
                }, 500);
            });
        } catch (error) {
            console.error('Failed to validate user:', error);
            throw error;
        }
    },

    /**
     * 检查权限
     * @param userId 用户ID
     * @param permission 权限名称
     * @returns 是否有权限
     */
    async checkPermission(userId: string, permission: string): Promise<boolean> {
        try {
            // 模拟API请求
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 模拟权限检查
                    resolve(true); // 简化示例，假设所有用户都有所有权限
                }, 300);
            });
        } catch (error) {
            console.error('Failed to check permission:', error);
            throw error;
        }
    }
};

// 导出服务
export { articleService, authService };