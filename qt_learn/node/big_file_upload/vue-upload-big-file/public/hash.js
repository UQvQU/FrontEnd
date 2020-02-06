// self:代指当前线程
// 通过内容计算md5值
self.importScripts("/spark-md5.min.js");
self.onmessage = e => {
  // self.postMessage({
  //   msg: "你好"
  // });
  const { fileChunkList } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  let percentage = 0;
  let count = 0;
  // 计算hash
  const loadNext = index => {
    // 文件阅读对象
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileChunkList[index].file);
    reader.onload = e => {
      // 事件
      count++;
      // eslint-disable-next-line no-console
      console.log(count, fileChunkList.length)
      spark.append(e.target.result);
      if (count === fileChunkList.length) {
        // 文件加载完成
        self.postMessage({
          percentage: 100,
          hash: spark.end()
        });
        self.close();
      } else {
        // 还未读完,显示加载进度
        // 计算已加载的百分比
        percentage += 100 / fileChunkList.length;
        self.postMessage({
          percentage
        });
        loadNext(count);
      }
    };
  };
  loadNext(0);
};
