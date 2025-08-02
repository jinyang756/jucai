// 测试脚本：输出所有文章的slug和路径
import { getCollection } from 'astro:content';

// 模拟Astro环境
const mockAstro = {
  props: {},
};

async function testSlugs() {
  try {
    // 获取所有文章
    const articles = await getCollection('articles');
    console.log(`共找到 ${articles.length} 篇文章`);
    
    // 输出每篇文章的slug和路径
    articles.forEach((article, index) => {
      const slug = article.slug;
      const path = `/articles/${slug}`;
      console.log(`文章 ${index + 1}:`);
      console.log(`  slug: ${slug}`);
      console.log(`  路径: ${path}`);
      console.log(`  封面图: ${article.data.coverImage}`);
      console.log('------------------------');
    });
  } catch (error) {
    console.error('测试失败:', error);
  }
}

testSlugs();