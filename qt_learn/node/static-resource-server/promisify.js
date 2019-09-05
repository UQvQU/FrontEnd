const fs = require('fs');
const util = require('util');

// 回调风格
fs.readFile('./index.js', 'utf-8', (err, data) => {
    // console.log(data);
})
// promise风格
// fs.readFile().then();

// 不重写API 直接用util工具将回调风格转换为promise风格
const readFile = util.promisify(fs.readFile);
readFile('./index.js', 'utf-8').then(data => {
    // console.log(data);
})
const readDir = util.promisify(fs.readdir);
fs.readdir('./static/', (err, files) => {
    console.log('回调：', files);
})
readDir('./static/').then(res => {
    console.log(res);
})