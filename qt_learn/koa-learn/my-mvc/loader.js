// 启动
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 读取目录文件（ssr首屏直出渲染）
function load(dir, cb) {  // dir:当前文件   cb:回调
// 获取文件绝对路径
const url = path.resolve(__dirname, dir)
// 读取当前路径下的所有文件
const files = fs.readdirSync(url)   // 返回数组
// 遍历files
// 如果请求user.js中的路由，则获取user.js的文件名（user），并当成路由前缀
files.forEach((fileName) => {
  // 去掉扩展名（如user.js -> user）
  fileName = fileName.replace('.js', '')
  // 获取文件的内容
  // console.log('url', url)
  const file = require(url + '/' + fileName)
  // 回调
  cb(fileName, file)
})
}

// 加载路由
function initRouter() {
  // 实例化路由
  const router = new Router()
  load('routes', (fileName, routes) => {
    // 给路由添加前缀(除了index)
    const prefix = fileName === 'index' ? '' : `/${fileName}`
    // console.log(prefix, routes)

    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')  // key : 'get /detail'
      // console.log(`${method.toLocaleUpperCase()}${prefix}${path}`)   //GET/user/detail

      // 注册路由 app.get('/', ctx => {})
      // console.log(routes)
      router[method](prefix + path, routes[key])
    })
  })
  console.log(router.methods)
  return router
}
// router.routes()
module.exports ={
  initRouter
}
