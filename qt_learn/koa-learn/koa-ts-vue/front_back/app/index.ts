// ts环境下需要注明类型
// import Koa from 'koa'
// import Koa = require('koa')  // commonjs 标准
import * as Koa from 'koa'      // ts推荐
const Router = require('koa-router');
const router = new Router();
import { useControllers } from 'koa-controllers'

const app = new Koa()

// 创建服务 koa
// app.use(async (ctx) => {
//   ctx.body = 'hello tt !!'
// })
// ts装饰器启动服务器
useControllers(app, __dirname + '/controllers/**/*.controller.js', {
  multipart: {
    // 自动加载
    dest: './uploads'
  }
})


app.listen(8888)
console.log('server is running in 8888')
