import { d as defineMiddleware, s as sequence } from './chunks/index_D-OEVUw3.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_D4b6VxpG.mjs';
import 'kleur/colors';
import './chunks/astro/server_CobU0cJr.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware((context, next) => {
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
