// const axios = require('axios')
const request = require('request')
let {fsWrite, fsRead, fsDir} = require('./module')

// 爬取网页源代码中的信息（后端渲染的html，含有信息）
let httpUrl = 'https://www.1905.com/vod/list/n_1/o3u1p1.html?fr=vodhome_js_lx'
// axios.get(httpUrl).then(res => {
//   console.log(res)
// })


// 1. 获取起始页码的所有分类
// 2. 获取分类里的电影链接
// 3. 根据电影链接获取电影的详细信息

// 封装request.get()
let req = url => new Promise((resolve, reject) => {
  request.get(url, (err, response, body) => {
    if (err) {
      reject(err)
    } else {
      resolve({
        response,
        body
      })
    }
  })
})

// var movieLists = []
// 获取分类信息
async function getClassUrl() {
  // 存放电影列表
  let movieLists = []
  // 存放电影详情信息
  let movieInfo = []
  let {
    response,
    body
  } = await req(httpUrl)
  // console.log(body)

  let reg = /<span class="search-index-L">类型 (.*?)<div class="grid-12x">/igs
  // 解析html内容
  // /h(el)l/.exec(hello)  =>  0: hel    1:e
  let result = reg.exec(body)[1]
  // console.log(result)

  let reg2 = /<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;" .*?>(.*?)<\/a>/igs
  // exec()循环检测不断查找下一个符合条件的字符串
  let classList = []
  let res = ''
  // 获取检测的数据：分类名称、分类链接
  while (res = reg2.exec(result)) {
    // console.log(res[1], res[2])
    classList.push({
      className: res[2],
      url: res[1]
    })
    await fsDir('./movies/' + res[2])
    await getMovies(res[1], res[2], movieLists, movieInfo)
  }
  return [movieLists, movieInfo]
}

// 获取电影列表信息
async function getMovies(url, className, movieLists, movieInfo) {
  // url: https://www.1905.com/vod/list/n_1_t_25/o3p1.html
  // 若要获取下一页的电影信息，只需更改p后面的页数(第二页: o3p2.html)
  let {
    response,
    body
  } = await req(url)
  let reg = /<a class="pic-pack-outer" target="_blank" href="(.*?)" title="(.*?)">/igs
  let movieList = []
  let res = ''
  // console.log(className)
  // 获取检测的数据：电影名称，电影链接
  while (res = reg.exec(body)) {
    // console.log('-------------', res[1], res[2])
    movieList.push({
      movieName: res[2],
      url: res[1]
    })
    await getMoviesInfo(res[1], className).then(info => {
      if (info != null) {
        movieInfo.push(info)
      }
    })
  }
  movieLists.push({
    className: className,
    list: movieList
  })
  console.log('length', movieInfo.length, movieLists.length)
  // console.log('length', movieLists.length)
  // return movieLists
}

// 获取电影详细信息
async function getMoviesInfo(url, className) {
  let {
    response,
    body
  } = await req(url)

  let reg = /<div.*?class="playerBox-info-name playerBox-info-cnName">(.*?)<\/h1>.*?id="playerBoxIntroCon">(.*?)<a.*?导演.*?target="_blank" title="(.*?)" data-hrefexp/igs
  // 获取检测的数据：电影详情信息
  let result = reg.exec(body)
  // console.log('------', result[1], result[3], result[2])
  // 排查爬虫出错的信息
  if (result[2].indexOf('<') != -1) {
    console.log(result[1], result[2])
    return null
  } else {
    let movie = {
      movieName: result[1],
      director: result[3],
      info: result[2],
      movieUrl: url
    }
    await fsWrite(`./movies/${className}/${result[1]}.json`, JSON.stringify(movie))
    return movie
  }
}

getClassUrl().then(movies => {
  console.log(movies[0].length, movies[1].length)
})