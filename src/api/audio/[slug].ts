import type { APIContext } from 'astro';
import fs from 'fs';
import path from 'path';

// 设为不预渲染，作为服务器端路由处理
export const prerender = false;

export async function get({ params }: APIContext) {
    const { slug } = params;
    const audioPath = path.join(process.cwd(), 'public', 'audio', `${slug}.mp3`);

    try {
        // 检查文件是否存在
        if (!fs.existsSync(audioPath)) {
            return new Response('音频文件不存在', { status: 404 });
        }

        // 获取文件信息
        const stats = fs.statSync(audioPath);

        // 创建可读流
        const readableStream = fs.createReadStream(audioPath);

        // 将Node.js ReadStream转换为Web ReadableStream
        const webStream = new ReadableStream({
            start(controller) {
                readableStream.on('data', (chunk) => {
                    controller.enqueue(chunk);
                });
                readableStream.on('end', () => {
                    controller.close();
                });
                readableStream.on('error', (err) => {
                    controller.error(err);
                });
            },
            cancel() {
                readableStream.destroy();
            }
        });

        // 返回音频流
        return new Response(webStream, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'Content-Length': stats.size.toString(),
                'Accept-Ranges': 'bytes',
            },
            status: 200
        });
    } catch (error) {
        console.error('提供音频文件时出错:', error);
        return new Response('服务器内部错误', { status: 500 });
    }
}