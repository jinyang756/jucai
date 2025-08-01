import fs from 'node:fs';
import path from 'node:path';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
function getStaticPaths() {
  const audioDir = path.join(process.cwd(), "public", "audio");
  try {
    const files = fs.readdirSync(audioDir);
    const paths = files.filter((file) => file.endsWith(".mp3")).map((file) => ({
      params: { slug: file.replace(".mp3", "") }
    }));
    console.log("生成的音频路径:", paths);
    return paths;
  } catch (error) {
    console.error("读取音频目录出错:", error);
    return [];
  }
}
const GET = async ({ params }) => {
  const { slug } = params;
  const audioPath = path.join(process.cwd(), "public", "audio", `${slug}.mp3`);
  try {
    if (!fs.existsSync(audioPath)) {
      return new Response("音频文件不存在", { status: 404 });
    }
    const audioBuffer = fs.readFileSync(audioPath);
    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString()
      },
      status: 200
    });
  } catch (error) {
    console.error("提供音频文件时出错:", error);
    return new Response("服务器内部错误", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
