const fs = require('fs');
const path = require('path');

// 源目录和目标目录
const sourceDir = path.join(__dirname, 'public', 'images');
const targetDir = path.join(__dirname, 'public', 'images-optimized');

// 计算目录大小的函数
function getDirectorySize(dir) {
  let totalSize = 0;
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
  });

  return totalSize;
}

// 计算源目录和目标目录的大小
const sourceSize = getDirectorySize(sourceDir);
const targetSize = getDirectorySize(targetDir);

// 输出结果
console.log(`原始图片目录大小: ${(sourceSize / 1024).toFixed(2)} KB`);
console.log(`压缩后图片目录大小: ${(targetSize / 1024).toFixed(2)} KB`);
console.log(`节省的空间: ${((sourceSize - targetSize) / 1024).toFixed(2)} KB`);
console.log(`压缩率: ${((1 - targetSize / sourceSize) * 100).toFixed(2)}%`);