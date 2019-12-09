const https = require('https')
const fs = require('fs')
// const cheerio require('cheerio')

let url = 'https://www.meituan.com/meishi/api/poi/getNearPoiList?offset=0&limit=10&cityId=83&lat=28.670105&lng=115.908092'

https.get(url, function (res) {
  let chunks = [],
      size = 0
  res.on('data', function (chunk) {
    console.log(chunk)
    chunks.push(chunk)
    size += chunks.length
  })

  res.on('end', function () {
    console.log('传输完毕')
    // console.log(chunks, size)
    let data = chunks.toString('utf-8')
    console.log(data)
    // let dataStr = JSON.stringify(data).trim()
    // console.log(dataStr)
    fs.writeFile('./data/lists.json', data, function(err) {
        if(err) throw err;
        console.log('写入成功');
    });
  })
})