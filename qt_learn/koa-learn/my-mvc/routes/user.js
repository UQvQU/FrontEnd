// 路由匹配  user前缀
module.exports = {
  // 直接把路由路径写成方法名
  'get /': async ctx => {     // '/'
    ctx.body = '用户首页'
  },
  'get /detail': async ctx => {      // '/detail'
    ctx.body = '用户详情页'
  }
}