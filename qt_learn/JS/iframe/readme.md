# 代理

线上环境解决跨域：代理（我没有，我帮你去别的地方取）
工具：(开发) webpack、live-server / (线上) Nginx
代码层面： fe -> /api/post[node server] -> /api/post[java server]

以上都是反向代理：代理客户端
正向代理： 代理服务器

一个域下面ajax请求 有并发限制
提交数据给服务器时 ajax 一般用来处理业务接口
