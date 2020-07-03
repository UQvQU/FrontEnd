/*
下载音乐
找到请求音乐列表的url并获取数据
*/
const axios = require('axios')
const fs = require('fs')
const path = require('path')

let httpUrl = 'http://www.app-echo.com/api/recommend/sound-day?page=1'

async function getPage(num) {
  let url = `http://www.app-echo.com/api/recommend/sound-day?page=${num}`
  let res = await axios.get(url)
  // console.log(res.data.list[0].sound.name)
  res.data.list.forEach((ele, i) => {
    let name = ele.sound.name
    let mp3Url = ele.sound.source
    let fileName = path.parse(mp3Url).name
    // console.log(name, mp3Url)

    content = `${name}：${mp3Url}--${fileName}`
    fs.writeFile('music.txt', content, {flag: 'a'}, () => {
      console.log('写入成功', name)
    })

    downMusic(fileName, mp3Url)
  });
}

async function downMusic(name, url) {
  let res = await axios.get(url, {responseType: 'stream'})
  let ws = fs.createWriteStream(`./mp3s/${name}.mp3`)
  res.data.pipe(ws)
  res.data.on('close', () => {
    console.log('download over', name)
    ws.close()
    // console.log('close')
  })
}

getPage(1)