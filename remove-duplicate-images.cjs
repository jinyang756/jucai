const fs = require('fs');
const path = require('path');

// 源目录(将被清理)和目标目录(保留)
const sourceDir = path.join(__dirname, 'public', 'images');
const targetDir = path.join(__dirname, 'public', 'images-optimized');

// 读取目标目录中的所有文件名
fs.readdir(targetDir, (err, targetFiles) => {
  if (err) {
    console.error('读取目标目录失败:', err);
    return;
  }

  // 读取源目录中的所有文件名
  fs.readdir(sourceDir, (err, sourceFiles) => {
    if (err) {
      console.error('读取源目录失败:', err);
      return;
    }

    // 找出源目录中与目标目录重复的文件名
    const duplicateFiles = sourceFiles.filter(file => targetFiles.includes(file));
    console.log(`找到 ${duplicateFiles.length} 个重复文件:`);
    duplicateFiles.forEach(file => console.log(`- ${file}`));

    // 删除重复文件
    duplicateFiles.forEach(file => {
      const sourceFilePath = path.join(sourceDir, file);
      fs.unlink(sourceFilePath, (err) => {
        if (err) {
          console.error(`删除文件失败: ${file}`, err);
        } else {
          console.log(`已删除重复文件: ${file}`);
        }
      });
    });
  });
});