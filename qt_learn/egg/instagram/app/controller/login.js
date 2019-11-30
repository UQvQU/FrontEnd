'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    // 获取数据
    const { password, username, email } = ctx.request.body;
    console.log(password, username, email);
    // ctx.body = { statusCode: 200, mes: '注册成功' };
    await ctx.service.user.register({ password, username, email });
  }
  async loginIn() {}
}

module.exports = LoginController;
