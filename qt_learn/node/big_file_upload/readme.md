# 文件上传

文件上传是开发的难点，大文件上传及断点续传 难点的细节及核心技术点。面试官在考察es6文件对象、ajax上传、async await promise、后台文件存储、流操作等全栈技能的同时，提升难度到大文件和断点续传，通过该主题，就可以较好的考察面试者全面解决问题的能力和技术细节。移动时代图片成为社交的主流，短时片是大文件，所以上岗后，该题知识点必须掌握清楚。

## 切片

大文件上传需要切片 -> 8M  size=1M  8份
js 在es6有文件对象file，文件处理能力有所增强
任何二进制文件 都能分割为Blob类型
http请求时可以n个切片并发上传 加快速度 改善了用户体验

- 前端切片
file.slice() 文件完成切片后为blob类型文件
blob协议支持上传文件在上传到服务器之前可以提前预览
- 服务器端
将切片的blob文件合并
stream 可读流 可写流
Promise.all() 将每个chunkPath通过fse.createWriteStream(start, end)写入
写入过程中，先创建可读流，再pipe给可写流

思路：以原文件作为文件夹的名字，再上传blobs到这个文件夹，并且每个blob都以文件-index的命名方式来存储

- http并发上传大文件
步骤：file_slice.html 选择文件上传 -> nodemon main.js(3000) -> node index 合并文件并写入到server文件夹中
