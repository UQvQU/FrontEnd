let http = require('http')
let EventEmitter = require('events')
let Stream = require('stream')

let context = require('./context')
let request = require('./request')
let response = require('./response')

class myKoa extends EventEmitter{
  constructor () {
    super()
    this.middleWares = []
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }

  createContext(req, res) {
    // 创建ctx
    // 通过object.create创建对象是为了继承this.context
    // 但在增加属性时不影响原对象
    const ctx = Object.create(this.context)
    const request  = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)

    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res

    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request
    return ctx
  }

  handleRequest(req, res) {
    // 处理请求
    res.statusCode = 404 //默认

    let ctx = this.createContext(req, res)
    let fn = this.compose(this.middleWares, ctx)
    // 调用用户给的回调 把ctx传给用户使用
    fn.then(() => {
      if (typeof ctx.body == 'object') {
        res.setHeader('Content-Type', 'application/json;charset=utf8')
        res.end(JSON.stringify(ctx.body))
      } else if (ctx.body instanceof Stream) {
        ctx.body(res)
      } else if (typeof ctx.body == 'string' || Buffer.isBuffer(ctx.body)) {
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        res.end(ctx.body)
      } else {
        res.end('Not found')
      }
    }).catch((error) => {
      this.emit('error', error)
      res.statusCode = 500
      res.end('server error')
    })
    res.end(ctx.body)
  }

  use (fn) {
    this.middleWares.push(fn)
  }

  compose (middleWares, ctx) {
    function dispatch(index) {
      if (index === middleWares.length) return
      let middleWare = middleWares[index]
      return Promise.resolve(middleWare(ctx, () => dispatch(index + 1)))
    }
    return dispatch(0)
  }

  listen (...arg) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...arg)
  }
}

module.exports = myKoa