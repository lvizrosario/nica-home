import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.ttf':'font/ttf'};
http.createServer((req,res)=>{
  let pathname; try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
  const filename=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!filename.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  fs.readFile(filename,(error,data)=>{if(error){res.writeHead(404);res.end('Não encontrado');return;}res.writeHead(200,{'Content-Type':types[path.extname(filename)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);});
}).listen(4173,'0.0.0.0',()=>console.log('NICA local: http://127.0.0.1:4173 — acesso pela rede local habilitado'));
