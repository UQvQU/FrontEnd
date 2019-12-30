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
function initRouter(app) {
  // 实例化路由
  const router = new Router()
  load('routes', (fileName, routes) => {
    // 给路由添加前缀(除了index)
    const prefix = fileName === 'index' ? '' : `/${fileName}`
    console.log(prefix, routes)

    // 加上controller/home.js , 更改routes
    routes = typeof routes === 'function' ? routes(app) : routes

    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')  // key : 'get /detail'
      // console.log(`${method.toLocaleUpperCase()}${prefix}${path}`)   //GET/user/detail

      // 注册路由 app.get('/', ctx => {})
      // console.log(routes)
      // router[method](prefix + path, routes[key])  service user.js返回的是方法
      console.log('key', routes[key])
      router[method](prefix + path, async ctx => {
        app.ctx = ctx   //更改上下文环境
        await routes[key](app)
      })
    })
  })
  console.log(router.methods)
  return router
}

// 初始化控制层
function initController() {
  const controller = {}
  // 读取控制器目录文件
  load('controller', (fileName, controllers) => {
    console.log(fileName, controllers)   // fileName: home
    // 添加路由
    controller[fileName] = controllers
  })
  return controller
}

// 初始化service层
function initService() {
  const service = {}
  load('service', (fileName, services) => {
    service[fileName] = services
  })
  return service
}

const Sequelize = require('sequelize')
function loadConfig(app) {
  load('config', (filename, conf) => {
    if (conf.db) {
      // 初始化数据库操作
      app.$db = new Sequelize(conf.db)

      // 加载模型 model/user.js
      app.$model = {}
      load('model', (fileName, { schema, options }) => {
        // 将sequelize的一个个模型全部加载
        app.$model[fileName] = app.$db.define(fileName, schema, options)
      })
      // 使用sync()实现模块同步
      app.$db.sync()  
    }
  })
}

// router.routes()
module.exports ={
  initRouter,
  initController,
  initService,
  loadConfig
}

