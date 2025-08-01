import { d as defineMiddleware, s as sequence } from './chunks/index_BD3L4Qa6.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DJO9KyWf.mjs';
import 'kleur/colors';
import './chunks/astro/server_DRnc1qnp.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware((context, next) => {
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
