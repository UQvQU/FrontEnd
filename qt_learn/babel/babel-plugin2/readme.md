# 手动实现一个 babel plugin

1. npm init -y
2. 安装babel环境
npm i @babel/core @babel/cli -S
core :转换代码
cli: 提供babel命令

将src中的代码解析到dist中，让babel命令可以解析到代码，故而无需全局安装babel
package.json:scripts.complie = "babel src --out-dir dist"
3. 规定语法
plugin.js  Identifier
4. npm run complie 编译一下
生成dist文件夹 a -> aaa
5. 规定语法
plugin.js  ImportDeclaration
增删改查：babel-types 工具库
