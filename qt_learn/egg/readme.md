# EEG  --instagram(图片分享社交应用)

- 阿里的 node 企业级开发框架
- instagram 前后端分离
  前端：react ANDT
  后端：/api/v2
- egg.js app 整个应用
  context controller
  controller 目录下的所有文件，自动转换为中间件
- router
  post 发送表单， 跨站访问 有安全问题
  配置项：config.security = { csrf: { enable: false } };
  
1. 用户模块： /login/register/ post

npm init egg --type=simple
npm install
npm install mysql2 sequelize sequelize-cli

<!-- 为了留下创建数据库的文件记录 -->
./node_modules/.bin/sequelize.cmd init
删除新建出来的文件（除logs）
新建.sequelizerc文件
再次 执行./node_modules/.bin/sequelize.cmd init

./node_modules/.bin/sequelize.cmd db:create  //Database instagram created.(新建config.json中命名的数据库)
./node_modules/.bin/sequelize.cmd migration:create --name create-user-table  //新建user表的数据迁移文件
