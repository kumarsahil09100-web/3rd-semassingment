
import http from 'http';
import fs from 'fs';
const data = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {

    fs.readFile('index.html', 'utf8', (err, data) => {

        if (err) {
            res.statusCode = 500;
            res.end("Error reading index.html");
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });

});

server.listen(3000, '127.0.0.1', () => {
    console.log("Server is running at http://127.0.0.1:3000");
});