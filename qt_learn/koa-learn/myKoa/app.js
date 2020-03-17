const http = require('http');
const compose = require('./compose.js');
module.exports = class App {
  constructor() {
    this.middleware = [];
    this.ctx = null;
  }
  use(fn) {
    this.middleware.push(fn);
    return this;
  }
  handleRequest(ctx, fnMiddare) {
    fnMiddare(ctx).then(() => {
      this.handleResponse();
    });
  }
  handleResponse() {
    const body = this.ctx.body;
    this.ctx.res.end(body);
  }
  callback() {
    const fn = compose(this.middleware);
    return (req, res) => {
      // run
      const ctx = {
        req,
        res
      };
      this.ctx = ctx;
      this.handleRequest(ctx, fn);
    };
  }
  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
};
