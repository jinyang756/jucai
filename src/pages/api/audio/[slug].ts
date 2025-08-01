import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

// 设为不预渲染，作为服务器端路由处理
export const prerender = false;

// 读取音频目录并生成静态路径
export function getStaticPaths() {
  const audioDir = path.join(process.cwd(), 'public', 'audio');
  try {
    const files = fs.readdirSync(audioDir);
    
    // 过滤出mp3文件并生成路径
    const paths = files
      .filter(file => file.endsWith('.mp3'))
      .map(file => ({
        params: { slug: file.replace('.mp3', '') }
      }));
    
    console.log('生成的音频路径:', paths);
    return paths;
  } catch (error) {
    console.error('读取音频目录出错:', error);
    return [];
  }
}

export const GET: APIRoute = async ({ params }) => {
    const { slug } = params;
    const audioPath = path.join(process.cwd(), 'public', 'audio', `${slug}.mp3`);

    try {
        // 检查文件是否存在
        if (!fs.existsSync(audioPath)) {
            return new Response('音频文件不存在', { status: 404 });
        }

        // 读取文件内容
        const audioBuffer = fs.readFileSync(audioPath);

        // 返回音频文件
        return new Response(audioBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'Content-Length': audioBuffer.length.toString(),
            },
            status: 200
        });
    } catch (error) {
        console.error('提供音频文件时出错:', error);
        return new Response('服务器内部错误', { status: 500 });
    }
}