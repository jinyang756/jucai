// 测试脚本：检查文章是否被正确收集
import { getCollection } from 'astro:content';

async function testArticleCollection() {
  try {
    const articles = await getCollection('articles');
    console.log('总共收集到的文章数量:', articles.length);
    console.log('文章列表:');
    articles.forEach(article => {
      console.log('-', article.slug, ':', article.data.title);
      if (article.slug === '2025-08-02-market-strategy') {
        console.log('✓ 找到目标文章!');
      }
    });
  } catch (error) {
    console.error('获取文章集合失败:', error);
  }
}

testArticleCollection();