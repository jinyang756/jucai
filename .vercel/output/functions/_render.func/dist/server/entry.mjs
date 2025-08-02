import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bs9zB8qd.mjs';
import { manifest } from './manifest_CwBiN9-t.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/audio/_slug_.astro.mjs');
const _page3 = () => import('./pages/articles/_slug_.astro.mjs');
const _page4 = () => import('./pages/articles.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/image-demo.astro.mjs');
const _page7 = () => import('./pages/insights.astro.mjs');
const _page8 = () => import('./pages/legal.astro.mjs');
const _page9 = () => import('./pages/music-player.astro.mjs');
const _page10 = () => import('./pages/podcasts/_slug_.astro.mjs');
const _page11 = () => import('./pages/podcasts.astro.mjs');
const _page12 = () => import('./pages/privacy.astro.mjs');
const _page13 = () => import('./pages/ritou.astro.mjs');
const _page14 = () => import('./pages/strategies.astro.mjs');
const _page15 = () => import('./pages/test.astro.mjs');
const _page16 = () => import('./pages/test-api-audio.astro.mjs');
const _page17 = () => import('./pages/test-article-collection.astro.mjs');
const _page18 = () => import('./pages/test-article-links.astro.mjs');
const _page19 = () => import('./pages/test-audio.astro.mjs');
const _page20 = () => import('./pages/test-direct-article.astro.mjs');
const _page21 = () => import('./pages/test-image.astro.mjs');
const _page22 = () => import('./pages/test-nav.astro.mjs');
const _page23 = () => import('./pages/test-slugs.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/audio/[slug].ts", _page2],
    ["src/pages/articles/[slug].astro", _page3],
    ["src/pages/articles/index.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/image-demo.astro", _page6],
    ["src/pages/insights.astro", _page7],
    ["src/pages/legal.astro", _page8],
    ["src/pages/music-player.astro", _page9],
    ["src/pages/podcasts/[slug].astro", _page10],
    ["src/pages/podcasts/index.astro", _page11],
    ["src/pages/privacy.astro", _page12],
    ["src/pages/ritou.astro", _page13],
    ["src/pages/strategies.astro", _page14],
    ["src/pages/test.astro", _page15],
    ["src/pages/test-api-audio.astro", _page16],
    ["src/pages/test-article-collection.astro", _page17],
    ["src/pages/test-article-links.astro", _page18],
    ["src/pages/test-audio.astro", _page19],
    ["src/pages/test-direct-article.astro", _page20],
    ["src/pages/test-image.astro", _page21],
    ["src/pages/test-nav.astro", _page22],
    ["src/pages/test-slugs.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "4082db84-962d-438e-a99b-6c976c1142dc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
