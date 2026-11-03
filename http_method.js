// import http from 'node:http';

import http from 'http';
import fs from 'fs';
const data = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }
});

server.listen(3000);
console.log("Server is running at http://127.0.0.1:3000");  