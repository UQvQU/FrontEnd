const fs = require('fs');
// 文件压缩
const zlib = require('zlib');
// 返回一个压缩对象
const gzip = zlib.createGzip();
// 创建可读流
const inFile = fs.createReadStream('./sample.txt');
// 创建可写流
const outFile = fs.createWriteStream('./sample.txt.gz');
// 内容压缩输出到sample.txt.gz
inFile.pipe(gzip).pipe(outFile);