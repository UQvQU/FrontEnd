# 静态资源

不会随着服务器运行改变的资源
资源是放在服务器上面的
常见的静态资源：html css js jpg

## 协议不一致 (图片渲染不出来)

双击打开：
file:///E:/workspaces/qt_learn/qt_learn/node/static-resource-server/index1.html
node index.js：
http://localhost:9090/
http://localhost:9090/static/demo.jpg
服务器上只有html文件 无图片
支持了两个不同的协议

1. 浏览器知道HTML
2. script img link 等 浏览器会通过对应的src来获取
3. 服务器返回对应的内容 js/css

live-server:
http://127.0.0.1:8080/static/demo.jpg
同磁盘路径一一对应

req.rul 同磁盘路径一一对应
作用：统一处理了 静态资源的请求

静态资源的请求的特点：静态资源单独放在一个服务器上
eg: 51信用卡
static.u51.com
u51.com/static/a.jpg

## 异步处理

1. 回调
2. promise
