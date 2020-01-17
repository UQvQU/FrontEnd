# music

## 项目搭建

前端：react ts react-redux react-router(react-cloudmusic)
后端: koa2 sequelize(koa-learn/koa-ts-vue/front_back) mysql
css处理：stylus

create-react-app rt-music --typescript

由于 React 和 React-dom 并不是使用 TS 进行开发的，所以 TS 不知道 React、 React-dom 的类型，以及该模块导出了什么，此时需要引入 .d.ts 的声明文件，可以安装 React、 React-dom 类型定义文件
npm i @types/react -s
npm i @types/react-dom -s

## 要点

1. css -- stylus
npm run eject 暴露config文件
修改开发环境的配置文件  /config/webpack.config.js
<https://segmentfault.com/a/1190000019667384>
2. 布局layout
BlankLayout.tsx
