# pwa

1. 离线访问：cacheStorage + service-work(基于web-worker)
2. 桌面入口
3. 发送通知（推送）

## web-worker

解决js单线程、让js运行在另外一个线程中

## CacheStorage

1. 除非明确地更新缓存，否则缓存不会被更新
除非删除，否则缓存数据永远不会过期
2. 一个域下面浏览器限制了缓存数据的大小

## 更新

sw.js
install -> cache.addAll()
fetch -> cache.match

并不是每次刷新，serviceWorker 都会重新 install -> activate （第一次才会直接到activate）
只有在serviceWorker中的内容改变了，才会install -> skipWaiting -> activate
skipWaiting  等待直到用户关闭页面再打开才会到activate
