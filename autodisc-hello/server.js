const http = require('http');
const port = process.env.PORT || 3000;
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Hello, world!</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#fff;color:#111}h1{font-size:clamp(3rem,12vw,8rem);margin:0;letter-spacing:-.06em}</style></head><body><h1>Hello, world!</h1></body></html>`;
http.createServer((req,res)=>{res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});res.end(html);}).listen(port, '0.0.0.0', ()=>console.log(`Listening on ${port}`));
