# node 性能优化

1. js 单线程语言
中台 让大型公司更好的复用开发能力/资源
node的性能需要提高 是否能像java一样多线程？
前端 mount #app CPU
进程 process 操作系统挂载运行程序单元
拥有独立的资源
工作交给子进程

尽可能多的为更多的用户服务 cluster
横向扩容
负载均衡 nginx

步骤：
docker pull 镜像
docker images
docker run -p 1234:1234 -it (+IMAGE ID)  /bin/bash

统一所有机器的开发环境 eg:centos 7
取代了虚拟机 无需提前分配超大空间和内存
操作快，全部命令行化
