const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 源目录和目标目录
const sourceDir = path.join(__dirname, 'public', 'images');
const targetDir = path.join(__dirname, 'public', 'images-optimized');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 读取源目录中的所有文件
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('读取目录失败:', err);
    return;
  }

  // 处理每个文件
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // 检查文件是否为图片
    const ext = path.extname(file).toLowerCase();
    if ([ '.jpg', '.jpeg', '.png', '.webp', '.svg' ].includes(ext)) {
      console.log(`正在压缩: ${file}`);

      // 根据文件类型进行不同的压缩处理
      if (ext === '.svg') {
        // 对于SVG文件，我们只复制它们，因为sharp不直接支持SVG压缩
        fs.copyFile(sourcePath, targetPath, (err) => {
          if (err) {
            console.error(`复制SVG文件失败: ${file}`, err);
          } else {
            console.log(`已复制SVG文件: ${file}`);
          }
        });
      } else {
        // 对于其他图片类型，使用sharp进行压缩
        sharp(sourcePath)
          .toFile(targetPath, (err) => {
            if (err) {
              console.error(`压缩失败: ${file}`, err);
            } else {
              console.log(`已压缩: ${file}`);
            }
          });
      }
    } else {
      console.log(`跳过非图片文件: ${file}`);
    }
  });
});