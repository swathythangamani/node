const http = require('http');
const server = http.createServer((req,res)=> {
    if (req.url=== '/'){
        res.end('welcome to the renga pharmacy');
    }else if(req.url==='/about'){
        res.end('all medicine are available');
    }else if(req.url==='/product'){
        res.end('cipla,sunpharma product are available');
    }else if(req.url==='/contact'){
        res.end('mannachanallur,trichy');
    }else{
        res.statuscode=404;
        res.end('page not found');
    }
});

server.listen(3000);