const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello,college server');
});

server.listen(3000);