// 容器：处理依赖关系
import Router from './router.js'
import Request from './request.js'
import Main from './main.js'

new Main({
  Request: Request,
  Router: Router
}).run()



