<template>
  <div id="app">
    <div>
      <input type="file" @change="handleFileChange" />
      <el-button @click="handleUpload">上传</el-button>
    </div>
    <div>
      <div>计算文件hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
    </div>
  </div>
</template>

<script>
// 枚举类型，提高代码可读性
const Status = {
  wait: "wait",
  uploading: "uploading",
  pause: "pause"
};
// 文件切片大小0.5M
const SIZE = 0.5 * 1024 * 1024;
export default {
  name: "app",
  data: () => ({
    // 封装所有任务
    container: {
      file: null,
      hash: ""
    },
    // 状态
    status: Status.wait,
    hashPercentage: 0,
    data: [] // 上传的数据
  }),
  methods: {
    request({
      url,
      method = "POST",
      data,
      headers = {},
      requestList // 上传的chunk文件列表
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest(); // ajax对象
        xhr.open(method, url); // 请求
        // 设置请求头
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        // eslint-disable-next-line no-console
        console.log(requestList);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
    },
    async calculateHash(fileChunkList) {
      // 计算hash值
      return new Promise(resolve => {
        // 封装花时间的任务
        // web workers: 单独开启一个线程独立于主线程
        // 完成任务后回调，不会影响主线程的UI，造成卡顿

        // 开启新的线程
        this.container.worker = new Worker("/hash.js");
        // 分派任务
        this.container.worker.postMessage({ fileChunkList });
        this.container.worker.onmessage = e => {
          this.container.text = e.data;
          // eslint-disable-next-line no-console
          console.log(e.data);
          // 获取数据
          const { percentage, hash } = e.data;
          this.hashPercentage = percentage;
          if (hash) {
            resolve(hash);
          }
        };
      });
    },
    handleFileChange(e) {
      // 获得上传的文件
      // console.log(e.target.files);
      const [file] = e.target.files; // 获得第一个文件
      this.container.file = file;
      // eslint-disable-next-line no-console
      // console.log(1, e.target.files);
    },
    createFileChunk(file, size = SIZE) {
      // 分割需要的文件
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({
          file: file.slice(cur, cur + size)
        });
        cur += size;
      }
      // eslint-disable-next-line no-console
      // console.log(fileChunkList);
      return fileChunkList;
    },
    async handleUpload() {
      // 上传分割后的文件
      if (!this.container.file) return;
      this.status = Status.uploading;
      const fileChunkList = this.createFileChunk(this.container.file);
      // 获取hash值
      this.container.hash = await this.calculateHash(fileChunkList);

      // 上传，验证
      // shouldUpload：是否仍需要上传，若非初次上传则无需再次上传
      const { shouldUpload, uploadedList } = await this.verifyUpload(
        this.container.file.name,
        this.container.hash
      );
      // eslint-disable-next-line no-console
      console.log(shouldUpload, uploadedList);
      if (!shouldUpload) {
        // 非初次上传，无需再次上传
        this.$message.success("秒传： 上传成功");
        this.status = Status.wait;
        return;
      }
      // 遍历分割后的文件
      this.data = fileChunkList.map(({ file }, index) => ({
        fileHash: this.container.hash,
        index,
        hash: this.container.hash + "-" + index,
        chunk: file,
        size: file.size,
        // 当前切片文件是否已上传
        percentage: uploadedList.includes(index) ? 100 : 0
      }));
    },
    // 验证是否需要上传
    async verifyUpload(fileName, fileHash) {
      // eslint-disable-next-line no-console
      console.log(fileName, fileHash);
      const { data } = await this.request({
        url: "http://localhost:3000/verify",
        headers: {
          "content-type": "application/json"
        },
        // 字符串化
        data: JSON.stringify({ fileName, fileHash })
      });
      // eslint-disable-next-line no-console
      console.log("data", data);
      return JSON.parse(data);
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
