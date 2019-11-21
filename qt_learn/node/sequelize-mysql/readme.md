# sequel

- npm init -y
- npm install mysql2 sequelize-cli sequelize -s

- .\node_modules\.bin\sequelize.cmd init  初始化
- config  数据库配置
- migration 数据库迁移 会将 MySQL 的表，字段 创建 修改 迁移 留下记录
- models 业务模型层 表映射为对象 Article Insert into new Article({title:''})
-seeders 测试数据

1. .\node_modules\.bin\sequelize.cmd db:create  创建数据库
2. .\node_modules\.bin\sequelize.cmd migration:create --name create-shops-table  创建shops表
3. .\node_modules\.bin\sequelize.cmd db:migrate  执行migrations中当前的文件 (up) 创建表
4. .\node_modules\.bin\sequelize.cmd db:migrate:undo  执行migrations中当前的文件 (down) 撤销表
5. ./node_modules/.bin/sequelize migration:create --name add-columns-to-shops-table  在shops表中添加列
6. .\node_modules\.bin\sequelize.cmd db:migrate  执行migrations中当前的文件 (up) 添加列
7. .\node_modules\.bin\sequelize.cmd db:migrate:undo 执行migrations中当前的文件 (down) 撤销上一步添加的列
8. ./node_modules/.bin/sequelize.cmd seed:create --name init-shops 添加记录
9. ./node_modules/.bin/sequelize.cmd db:seed:all 添加
