#!/usr/bin/env node
// 链接检查脚本，用于预防404错误
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 检查PodcastCard组件中的链接生成逻辑
function checkPodcastCard() {
    const filePath = path.join(__dirname, 'src', 'components', 'PodcastCard.astro');
    const content = fs.readFileSync(filePath, 'utf-8');

    // 检查是否包含正确的链接前缀逻辑
    if (!content.includes("const basePath = type === '文章' ? '/articles/' : '/podcasts/'")) {
        console.error('❌ 错误: PodcastCard组件中缺少正确的链接前缀逻辑');
        console.error('   这可能导致文章或播客链接404错误');
        process.exit(1);
    }

    console.log('✅ 成功: PodcastCard组件中的链接生成逻辑正确');
}

// 检查文章路由配置
function checkArticleRoute() {
    const filePath = path.join(__dirname, 'src', 'pages', 'articles', '[slug].astro');
    const content = fs.readFileSync(filePath, 'utf-8');

    // 检查是否使用getStaticPaths且没有设置prerender=false
    if (content.includes('getStaticPaths') && content.includes('prerender = false')) {
        console.error('❌ 错误: 文章路由同时使用getStaticPaths和prerender=false');
        console.error('   这可能导致文章页面404错误');
        process.exit(1);
    }

    console.log('✅ 成功: 文章路由配置正确');
}

// 运行检查
console.log('开始链接检查...');
checkPodcastCard();
checkArticleRoute();
console.log('所有检查通过!');