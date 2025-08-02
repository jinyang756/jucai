const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 定义文件路径
const MAINTENANCE_GUIDE = path.join(__dirname, '网站维护指南.md');
const USER_MANUAL = path.join(__dirname, '网站使用手册.md');

// 读取文件内容并提取关键信息
function readFileContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`无法读取文件: ${filePath}`, error);
    return null;
  }
}

// 提取文档结构
function extractDocumentStructure(content, title) {
  console.log(`\n=== ${title} 结构 ===`);
  const headings = content.match(/^#{1,6}\s+.*$/gm) || [];
  headings.forEach(heading => {
    const level = heading.match(/#+/)[0].length;
    const text = heading.replace(/#+/, '').trim();
    console.log('  '.repeat(level - 1) + `- ${text}`);
  });
}

// 提取关键部分
function extractKeySections(content, title) {
  console.log(`\n=== ${title} 关键部分 ===`);

  // 根据不同文档提取不同的关键部分
  if (title.includes('维护指南')) {
    // 提取常见问题排查
    const faqSection = content.match(/## 三、常见问题排查[\s\S]*?(?=##|$)/);
    if (faqSection) {
      console.log('\n常见问题排查:');
      console.log(faqSection[0].replace(/^##+\s+/gm, '  ').substring(0, 500) + '...');
    }

    // 提取维护成功点记录
    const successRecords = content.match(/## 六、维护成功点记录[\s\S]*?(?=##|$)/);
    if (successRecords) {
      console.log('\n维护成功点记录:');
      console.log(successRecords[0].replace(/^##+\s+/gm, '  ').substring(0, 500) + '...');
    }
  } else if (title.includes('使用手册')) {
    // 提取主要页面与功能
    const featuresSection = content.match(/## 二、主要页面与功能[\s\S]*?(?=##|$)/);
    if (featuresSection) {
      console.log('\n主要页面与功能:');
      console.log(featuresSection[0].replace(/^##+\s+/gm, '  ').substring(0, 500) + '...');
    }

    // 提取常见问题
    const faqSection = content.match(/## 六、常见问题[\s\S]*?(?=##|$)/);
    if (faqSection) {
      console.log('\n常见问题:');
      console.log(faqSection[0].replace(/^##+\s+/gm, '  ').substring(0, 500) + '...');
    }
  }
}

// 交互式问答
function startInteractiveQnA() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\n=== 问题排查助手 ===');
  console.log('请选择您要解决的问题类型:');
  console.log('1. 网站加载问题');
  console.log('2. 音频播放问题');
  console.log('3. 文章/播客管理问题');
  console.log('4. 智能客服问题');
  console.log('5. 部署问题');
  console.log('6. 其他问题');

  rl.question('请输入选项编号 (1-6): ', (answer) => {
    switch (answer) {
      case '1':
        console.log('\n网站加载缓慢可能的原因及解决方法:');
        console.log('- 检查网络连接');
        console.log('- 清除浏览器缓存');
        console.log('- 尝试使用其他浏览器');
        console.log('- 检查图片是否经过优化');
        break;
      case '2':
        console.log('\n音频无法播放可能的原因及解决方法:');
        console.log('- 检查网络连接');
        console.log('- 确认浏览器是否支持音频播放');
        console.log('- 尝试刷新页面');
        console.log('- 检查音频文件路径是否正确');
        break;
      case '3':
        console.log('\n文章/播客管理问题:');
        console.log('- 文章存储位置: src/content/articles/');
        console.log('- 播客存储位置: src/content/podcasts/');
        console.log('- 确保元数据格式正确');
        break;
      case '4':
        console.log('\n智能客服问题:');
        console.log('- 检查右下角悬浮窗口是否加载');
        console.log('- 尝试刷新页面重新加载');
        console.log('- 确认相关API是否正常工作');
        break;
      case '5':
        console.log('\n部署问题:');
        console.log('- 确认代码已提交到主分支');
        console.log('- 检查Vercel部署日志');
        console.log('- 确保构建命令正确: npm run build');
        break;
      case '6':
        console.log('\n其他问题:');
        console.log('请参考网站维护指南中的详细内容或联系技术支持');
        break;
      default:
        console.log('\n无效选项，请重新运行脚本并选择正确的选项');
    }

    rl.question('\n是否需要查看更多详细内容? (y/n): ', (viewMore) => {
      if (viewMore.toLowerCase() === 'y') {
        console.log('\n请直接查看以下文件获取详细信息:');
        console.log(`- 网站维护指南: ${MAINTENANCE_GUIDE}`);
        console.log(`- 网站使用手册: ${USER_MANUAL}`);
      }
      rl.close();
    });
  });
}

// 主函数
function main() {
  console.log('====================================');
  console.log('=== 网站开发前检查工具 ===');
  console.log('====================================');

  // 读取网站维护指南
  const maintenanceContent = readFileContent(MAINTENANCE_GUIDE);
  if (maintenanceContent) {
    extractDocumentStructure(maintenanceContent, '网站维护指南');
    extractKeySections(maintenanceContent, '网站维护指南');
  }

  // 读取网站使用手册
  const manualContent = readFileContent(USER_MANUAL);
  if (manualContent) {
    extractDocumentStructure(manualContent, '网站使用手册');
    extractKeySections(manualContent, '网站使用手册');
  }

  // 启动交互式问答
  startInteractiveQnA();
}

// 执行主函数
main();