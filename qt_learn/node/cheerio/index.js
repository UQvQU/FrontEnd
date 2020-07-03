const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

let httpUrl = 'https://www.doutula.com/article/list/?page=1'

// 获取表情包链接及名称
async function getPageList(pageNum) {
  let url = `https://www.doutula.com/article/list/?page=${pageNum}`
  let res = await axios.get(url)

  // console.log('html:', res.data)
  // 解析html文件
  let $ = cheerio.load(res.data)

  // 获取每种表情包的链接及名称
  $('#home .col-sm-9 a.list-group-item').each((i, element) => {
    let url = $(element).attr('href')
    let title = $(element).find('.random_title').text()
    let reg = /(.*?)\d/igs
    title = reg.exec(title)[1]
    // console.log(url, title)
    // 创建存放表情包的目录
    fs.exists(`./imgs/${title}`, exists => {
      if (!exists) {
        fs.mkdir(`./imgs/${title}`, err => {
          if (err) {
            console.log(err)
          } else {
            console.log('创建成功')
          }
        })
      }
    })
    parsePage(url, title)
  })
}

// 获取页面总数（分页）
async function getPageNumber(url) {
  res = await axios.get(url)
  let $ = cheerio.load(res.data)
  let btnLength = $('.pagination li').length
  let allNum = $('.pagination li').eq(btnLength - 2).find('a').text()
  // console.log('allNum', allNum)
  return allNum
}

// 根据url到详情页获取表情包
async function parsePage(url, title) {
  let res = await axios.get(url)
  let $ = cheerio.load(res.data)

  // 获取每种表情包的链接
  $('.pic-content .artile_des img').each((i, ele) => {
    let imgUrl = $(ele).attr('src')
    let extName = path.extname(imgUrl)

    let imgFile = `./imgs/${title}/${title}-${i}${extName}`
    let ws = fs.createWriteStream(imgFile)

    // 下载图片
    axios.get(imgUrl, {
      responseType: 'stream'
    }).then((res) => {
      console.log('下载：', imgFile)
      res.data.pipe(ws)
      // console.log('over')
      res.data.on('close', () => {
        console.log('close')
        ws.close()
      })
    })

  })
  // let imgs = JSON.stringify({
  //   title: title,
  //   imgUrl: imgUrl
  // })
}

// 爬取表情包
async function spider(url) {
  let allPageNum = await getPageNumber(url)
  console.log('pageNum', allPageNum)
  // 请求数量太大，测试2页
  for (let i = 1; i <= 2; i++) {
    await getPageList(i)
  }
}

spider(httpUrl)