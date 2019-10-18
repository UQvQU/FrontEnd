# 跨域

浏览器的安全策略
a.com 请求 b.com 不允许

## cors

cross origin resource share
跨域资源共享
规定了一些http的首部字段 允许 服务器申明 哪些站点 有资源的访问权限

## 跨域分简单请求和非简单请求

1、简单请求
html 原生 form 表单 可以发出去的请求，直接正式请求(post)
2、非简单请求
分两步：1：预检请求(options)，试探一下 支不支持跨域；2：正式请求(Post)
