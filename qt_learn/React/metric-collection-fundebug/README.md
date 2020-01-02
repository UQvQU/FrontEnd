# FunDebug

## 监听访问记录

MPA(多页应用)： /timeline -> /topic 后端访问记录 +1
SPA(单页应用)： /timeline -> /topic 前端(生命周期中)访问记录 +1

无痕埋点：不侵入业务代码

## JavaScript执行错误

同步：try cache
异步：window.addEventListener('error', () => {})

## 资源加载错误

window.addEventListener('error', () => {}, true)

## HTTP请求错误

1、拦截xmlHttpRequest
2、fetch
