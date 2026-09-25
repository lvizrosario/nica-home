import { build } from 'esbuild';
await build({entryPoints:['src/novidades.tsx'],bundle:true,minify:true,outfile:'dist/carousel.js',format:'iife',platform:'browser',target:['es2020'],define:{'process.env.NODE_ENV':'"production"'},legalComments:'eof'});
