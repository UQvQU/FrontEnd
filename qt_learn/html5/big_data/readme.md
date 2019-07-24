- 网页显示大量html -- 负担
    http 请求 3000端口号 伺服状态
    / index.html 传输给浏览器Client
    127.0.0.1  localhost  本地开发
    192.168.43.233  局域网  远程
    浏览器 访问代理 Client  ip:8080 下载下来(1.5s say bay)
    远程 服务器 （IP，domain） 伺服状态（http）
    live-server 8080

- 分页 ?limit-20&page-1
- http 超文本传输协议
    文件太大分几次传输
    等时间长，对大数据做分页
    http 状态码 304 文件未修改 直接使用浏览器缓存的文件
- 得益于 es6 Array.from({length: n}, (v, k) => `新闻${k}`) 前端模拟大数据
- 将大数据按页分割  
    顺序：分割好 ->
    Array.from({length: Math.ceil(arr.length/size)},
    (v, i) => arr.slice(i*size, i*size+size))
