const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    // res.end('hello world');
    if(req.url == '/'){
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        // res.end('首页'); node启动服务器无法获取到json中的内容
        let stream = fs.createReadStream(__dirname + '/index.html');
        stream.pipe(res);
    }else if(req.url == '/book'){
        // json
        const data = {
            "name": "Node.js 入门示例",
            "description": "学好node，做全栈开发",
            "date": "2019-8-23"
        }
        res.setHeader('Content-Type', 'text/json;charset=utf-8');
        const result = JSON.stringify(data);
        res.end(result);
    }
}).listen(1315);