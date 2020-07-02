// 网络路径
const url = require('url')

// 地址解析
let httpUrl = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'
let urlObj = url.parse(httpUrl)
console.log(urlObj)

// 地址合成
let targetUrl = 'https://codepen.io/'
httpUrl = '../url/parse.html'
let newUrl = url.resolve(targetUrl, httpUrl)
console.log(newUrl)
