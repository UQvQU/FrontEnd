# 初始化

  ./node_modules/.bin/sequelize  查看sequelize命令
  sequelize init (./node_modules/.bin/sequelize init)

  初始化完成之后生成的目录
  config：配置目录
  migrations： 迁移文件（数据库表结构）
  seeders：种子文件（生成测试数据）
  models：模型文件

## 创建数据库

- ./node_modules/.bin/sequelize.cmd db:create

## 构建数据库迁移结构

- ./node_modules/.bin/sequelize.cmd migration:create --name user

## 数据库结构

- user: 用户表
存放用户的基本信息（用户名，密码等）

- user-profile: 用户的扩展信息（不常用信息）
存放扩展信息（性别，生日，个人简介等）

- login-log: 用户的登录日志
存放用户的登录日志（登录时间，IP信息）

- category: 美食分类表
存放美食分类信息（热菜，凉菜等）

- cookbook: 美食详情信息
存放美食信息（标题，图片等）

- step: 美食烹饪步骤
存放烹饪美食的步骤，在每一个步骤中有一个字段与cookbook表的id进行关联

- comment: 评论表
存放用户对每个具体的cookbook中的美食的评论

- favorite: 收藏表
存放用户收藏的美食

## 生成表

./node_modules/.bin/sequelize.cmd db:migrate 生成
./node_modules/.bin/sequelize.cmd db:migrate:undo:table-name/all  删除表/所有表

## 创建种子文件

- seeders 文件下创建假数据
./node_modules/.bin/sequelize.cmd seed:generate --name  user

- 导入数据
./node_modules/.bin/sequelize.cmd db:seed:all
./node_modules/.bin/sequelize.cmd db:seed:undo:all 删除所有导入的数据

## 项目开发

app 后端 koa + ts

1. tsc --init  配置tsconfig.json
2. npm i koa (--save)
3. npm i --save @types/koa  ts环境下使用koa需要加@types/koa
4. npm i koa-controllers (npm i koa-ts-controllers)  ts装饰器启动服务
    npm install reflect-metadata --save
