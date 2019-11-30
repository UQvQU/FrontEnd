'use strict';

const Service = require('egg').Service;
const uuid = require('uuid');
const crypto = require('crypto');

class UserService extends Service {
  async register(user) {
    // sql 及存储业务的组织
    const { ctx, app } = this;
    // 准备user_id
    // uuid 生成唯一的id
    user.user_id = uuid.v4().replace(/-/g, '');
    console.log(user.user_id);
    console.log('user', user.username);
    // password 不能存明文, 并用十六进制显示digest('hex')
    console.log('password', user.password);
    user.password = crypto.createHmac('sha256', app.config.password_secret).update(user.password).digest('hex');
    console.log(user.password, '$$$$$$$$$$$$$$$$$$$$$');
    const userInfo = await ctx.model.User.create(user);
    ctx.status = 200;
    ctx.body = {
      msg: '注册成功',
      user_id: user.user_id,
      flag: true,
    };
    return userInfo.dataValues;
  }
}

module.exports = UserService;
