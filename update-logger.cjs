const fs = require('fs');
const path = require('path');
const readline = require('readline');
const fs = require('fs');

// 维护指南文件路径
const maintenanceGuidePath = path.join(__dirname, '网站维护指南.md');

// 创建readline接口用于获取用户输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示用户输入维护信息
console.log('=== 自动更新日志记录工具 ===');
rl.question('请输入维护人员姓名/昵称: ', (maintainer) => {
  rl.question('请输入维护内容简要描述: ', (content) => {
    rl.question('请输入本次维护的成功点(多项用逗号分隔): ', (successPoints) => {
      rl.question('请输入本次维护的经验总结(多项用逗号分隔): ', (experience) => {
        // 生成日志记录
        const today = new Date();
        const dateStr = today.toISOString().split('T')[0]; // 格式: YYYY-MM-DD

        // 格式化成功点和经验总结
        const successPointsList = successPoints.split(',').map(point => `- ${point.trim()}`).join('\n');
        const experienceList = experience.split(',').map(point => `- ${point.trim()}`).join('\n');

        // 构建日志条目
        const logEntry = `\n**日期：** ${dateStr}\n**维护人员：** ${maintainer}\n**维护内容：** ${content}\n**成功点：** \n${successPointsList}\n**经验总结：** \n${experienceList}`;

        // 读取维护指南文件
        fs.readFile(maintenanceGuidePath, 'utf8', (err, data) => {
          if (err) {
            console.error('读取维护指南文件失败:', err);
            rl.close();
            return;
          }

          // 查找插入位置 (在最后一个经验总结之后，更新日期之前)
          const insertPosition = data.lastIndexOf('**经验总结：**') + data.slice(data.lastIndexOf('**经验总结：**')).indexOf('\n\n维护负责人:');

          // 插入新的日志条目
          const updatedContent = data.slice(0, insertPosition) + logEntry + data.slice(insertPosition);

          // 更新文档末尾的更新日期
          const updatedDateContent = updatedContent.replace(/更新日期: \d{4}-\d{2}-\d{2}/, `更新日期: ${dateStr}`);

          // 写入文件
          fs.writeFile(maintenanceGuidePath, updatedDateContent, 'utf8', (err) => {
            if (err) {
              console.error('写入维护指南文件失败:', err);
            } else {
              console.log('更新日志记录成功!');
              console.log('日志内容:\n', logEntry);
            }
            rl.close();
          });
        });
      });
    });
  });
});