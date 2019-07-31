/** 实现live-server的功能
 *  1. 提供 http 访问的支持 
 *  2. 创建一个网络服务 web server 一直伺服 
 *     req：请求对象
 *     res：响应对象
 **/ 
const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html');
const server = http.createServer((req,res) => {
    // res.end('hello world');
    // 显示出index.html
    //  / : localhost:1315
    if(req.url == '/'){
        // res.end('index page');
        // 无法多次访问index.html
        index.pipe(res);
    }else if(req.url == '/userinfo'){
        const info = {
            'name': '纪墨',
            'desc': '吊儿郎当'
        }
        // 设置状态
        res.writeHead(200,{'Content-Type':'text/plain;Charset=utf8'});
        // 传入string类型的info
        res.end(JSON.stringify(info));
    }
    else {
        res.end('hello world');
    }
});

server.listen(1314);

