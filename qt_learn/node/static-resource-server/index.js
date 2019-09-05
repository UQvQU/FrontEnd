const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req,res) => {
    console.log(req.url);
    // if(req.url === '/static/demo.jpg'){   //若请求图片
    //     // 读取图片
    //     fs.readFile('./static/demo.jpg', 'binary', (err, file) => {
    //         res.write(file, 'binary');
    //         res.end();
    //     });
    //     return false;
    // }
    // 处理大量static静态资源
    const reqUrl = req.url;
    // ^ /static/
    if(/^\/static\//.test(reqUrl)){
        staticServer(req, res);
        return false;
    }

    fs.readFile('./index1.html', 'binary', (err, file) => {  //读取HTML文件
        res.write(file, 'binary');
        res.end();
    });
}).listen(9090, () => {
    console.log('server is running 9090');
});
function staticServer(req, res){
    const reqUrl = req.url;  // /static/demo.jpg
    const filePath = path.join(__dirname, reqUrl);  //补全路径
    console.log(reqUrl, filePath);
    fs.exists(filePath, exists => {
        if(!exists){    // 资源存在
            res.writeHead(404);
            res.end();
            return false;
        }
        fs.readFile(filePath, 'binary', (err, file) => {
            res.write(file, 'binary');
            res.end();
        });
        return false;
    })
}