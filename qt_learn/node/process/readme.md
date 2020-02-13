# 进程

<https://juejin.im/post/5d43017be51d4561f40adcf9>

Node.js 多进程 多线程(.10)
node是服务器端js执行的容器 高并发
js 单线程 js的宿主(容器)是多进程多线程的
进程是分配资源的最小单元
进程是线程的容器
线程是cup计算的最小单元
单线程：一个进程只产生一个线程

- 进程的两种方式
child_process  fork  web worker
cluster fork
提升运行效率
