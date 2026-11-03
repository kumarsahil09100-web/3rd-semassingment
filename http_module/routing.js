import http from 'http';
impot fs from 'fs';
const data = fs.readFileSync('index.html');
 const server = http.createServer((req, res) => {
    console.log("hello");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
    if(req.url === "/"){
    res.end("Hello from the home page");
} else if(req.url === "/about"){
    res.end("About page");
} 
else if(req.url === "/contact"){
    res.end("Contact page");  

};   
    


server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running at http://127.0.0.1:3000");
});