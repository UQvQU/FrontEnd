// 获取https模块
const https = require('https');
const fs = require('fs');
const path = require('path');
// 获取cheerio  服务端的jquery
const cheerio = require('cheerio');
// GET POST
// http.createServer
// 以get的请求方式访问相应的资源
https.get('https://www.baidu.com/', function(res){
    res.setEncoding('utf-8');
    // console.log(res);
    let html = '';
    // 当收到数据的时候(数据以分段的形式传输)
    res.on('data', function(chunk){
        // 把每段数据拼接起来
        html += chunk;
    })
    // 当数据传输完成时
    res.on('end',function(chunk){
        // 输出所有HTML的源码
        console.log(html);
        const $ = cheerio.load(html,{
            // 不解析entity     decode 解析  
            decodeEntities: false     //html entity--> eg: &nbsp;、&lt;(<)、&gt;(>)
        })
        // 存储数据
        let lists = [];
        // 获取所有商品的html结构, 并对每一个商品
        //只有一个参数代表每次都在整个document中寻找
        $('#wrapper').each(
            function(){
            const _this = this;
            
            //$('.itemName a') --> document.querySelectoor('.itemName a')
            //$('.itemName a', _this) --> $('.list.list_preferential').querySelector('.itemName a')
            let title = $('a.manv', _this).text();
            // let price = $('.red', _this).text();
            // let img = $('.picLeft img', _this).attr('src');
            console.log('title:', title)
            lists.push(title);
            // saveImage('./img/', img);
        })
        saveLists('./data/lists.json', lists);
        
    })
});

function saveImage(imgDir, imgUrl){
    // 获取图片同上获取HTML一样
    https.get(imgUrl, (res) => {
        // 图片为二进制文件
        res.setEncoding('binary');
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        })
        res.on('end', (chunk) => {
            // 获取图片名   url:www.smzdm.com/a.png，  basename:a.png
            const imgName = path.basename(imgUrl);
            // imgDir+imgName : ./img/a.png
            fs.writeFile(imgDir + imgName, data, 'binary', (err) => {
                if(!err){
                    console.log('img saved');
                }
            })
        })

        // 用pipe()代替on()
        // const imgName = path.basename(imgUrl);
        // res.pipe(fs.createWriteStream(imgDir + imgName));
    })
}
// 保存各个商品数据
function saveLists(path, list){
    fs.writeFile(path,
        JSON.stringify(list),
        (err) => {
            console.log(err);
            if(!err){
                console.log('success');
        }
    });
}
