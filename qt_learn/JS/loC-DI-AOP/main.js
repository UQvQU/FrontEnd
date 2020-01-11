// import Router from './router.js'
// import Request from './request.js'

class Main {
  constructor({Request, Router}) {
    this.Request = Request
    this.Router = Router
  }
  run() {
    const req = new this.Request()
    const rou = new this.Router()
    rou.init()
    console.log(req.request())
  }
}

// new Main().run()
export default Main