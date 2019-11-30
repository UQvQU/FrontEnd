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
