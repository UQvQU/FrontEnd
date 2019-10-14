const Koa = require('koa')
const student = new Koa()
// const manage = new Koa()
// 中间件--方法
// request --> middleWare1 --> middleWare2  --> middleWare3 --> response
student.use(async (ctx, next) => {
  // next:可获取下一个中间件
  console.log('path1:', ctx.path, 'query1:', ctx.query)
  ctx.body = 'hello world'
  await next()
  console.log('middleWare1')
})
student.use(async (ctx, next) => {
  console.log('path2:', ctx.path, 'query2:', ctx.query)
  await next()
  console.log('middleWare2')
})
student.use(async (ctx, next) => {
  // console.log('path2:', ctx.path, 'query2:', ctx.query)
  console.log('middleWare3')
})
student.listen(3000, () => {
  console.log('server is running 3000')
})