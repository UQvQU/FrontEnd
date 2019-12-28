// 路由匹配
module.exports = {
  // 直接把路由路径写成方法名
  'get /': async ctx => {     // '/'
    ctx.body = '首页'
  },
  'get /detail': async ctx => {      // '/detail'
    ctx.body = '详情页'
  }
}