<template>
  <div id="app">
    <div>
      <input type="file" @change="handleFileChange" />
      <el-button @click="handleUpload">上传</el-button>
      <el-button @click="handleResume">恢复</el-button>
      <el-button @click="handlePause">暂停</el-button>
    </div>
    <div>
      <div>计算文件hash</div>
      <el-progress :percentage="hashPercentage"></el-progress>
      <div>总进度</div>
      <!-- 每个切片文件 进度 计算 -->
      <el-progress :percentage="fakeUploadPercentage"></el-progress>
    </div>
    <!-- 多个切片 -->
    <h2>切片文件进度可视化</h2>
    <el-table :data="data">
      <el-table-column
        prop="hash"
        label="切片文件hash"
        align="center"
      ></el-table-column>
      <el-table-column label="大小(kb)" align="center" width="120">
        <template v-slot="{ row }">
          {{ row.size | transformByte }}
        </template>
      </el-table-column>
      <el-table-column label="进度" align="center">
        <template v-slot="{ row }">
          <el-progress
            :percentage="row.percentage"
            color="#909399"
          ></el-progress>
        </template>
      </el-table-column>
    </el-table>
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
  filters: {
    transformByte(val) {
      return Number((val / 1024).toFixed(0));
    }
  },
  data: () => ({
    fakeUploadPercentage: 0,
    // 封装所有任务
    container: {
      file: null,
      hash: ""
    },
    // 状态
    status: Status.wait,
    hashPercentage: 0,
    data: [], // 上传的数据
    requestList: [] // 存放xhr对象
  }),
  computed: {
    uploadPercentage() {
      if (!this.container.file || !this.data.length) {
        return 0;
      }
      const loaded = this.data
        .map(item => item.size * item.percentage) // 每个切片文件已上传的大小
        .reduce((acc, cur) => acc + cur); // 已上传文件的总和
      return parseInt((loaded / this.container.file.size).toFixed(2));
    }
  },
  watch: {
    uploadPercentage(now) {
      // 监听uploadPercentage
      if (now > this.fakeUploadPercentage) {
        this.fakeUploadPercentage = now;
      }
    }
  },
  methods: {
    async handleResume() {
      // 有点子问题
      // 暂停后恢复上传
      this.status = Status.uploading;
      const { uploadedList } = await this.verifyUpload(
        this.container.file.name,
        this.container.hash
      );
      await this.uploadChunks(uploadedList);
    },
    handlePause() {
      // eslint-disable-next-line no-console
      console.log("pause");
      // 暂停上传
      this.status = Status.pause; // 暂停状态
      this.resetData();
    },
    resetData() {
      // 操作xhr对象
      this.requestList.forEach(xhr => (xhr ? xhr.abort() : null));
      this.requestList = [];
      if (this.container.worker) {
        // hash计算过程中
        this.container.worker.onmessage = null; // 暂停
      }
    },
    request({
      url,
      method = "POST",
      data,
      onProgress = e => e,
      headers = {},
      requestList // 上传的chunk文件列表
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest(); // ajax对象
        xhr.open(method, url); // 请求
        xhr.upload.onprogress = onProgress;
        // 设置请求头
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          if (requestList) {
            // xhr使命完成了, xhr无需存在了,可以传输数据了
            const xhrIndex = requestList.findIndex(item => item === xhr);
            requestList.splice(xhrIndex, 1);
          }
          resolve({
            data: e.target.response
          });
        };
        // 为了方便控制没个http请求
        if (requestList) {
          requestList.push(xhr);
        }
        // eslint-disable-next-line no-console
        console.log(requestList);
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
      this.resetData();
      // 下面那句代码不知道有啥用，加上就有问题
      // Object.assign(this.$data, this.$options.data());
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
        // 当前切片文件是否已上传,若已包含当前index的文件，则说明已上传
        percentage: uploadedList.includes(index) ? 100 : 0
      }));
      // 上传切片文件, uploadedList:已经上传的数据
      await this.uploadChunks(uploadedList);
    },
    async uploadChunks(uploadedList = []) {
      // eslint-disable-next-line no-console
      console.log("data", this.data, "uploadedList", uploadedList);
      // 数据数组 -> 请求数组 -> 并发
      const request = this.data
        .map(({ chunk, hash, index }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("fileName", this.container.file.name);
          formData.append("fileHash", this.container.hash);
          return { formData, index };
        })
        .map(async ({ formData, index }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData,
            onProgress: this.createProgressHandler(this.data[index]),
            requestList: this.requestList
          })
        );
      // 上传
      await Promise.all(request);
      // 之前上传的切片数量+本次上传的切片数量=所有切片数量
      if (uploadedList.length + request.length == this.data.length) {
        // eslint-disable-next-line no-console
        console.log("merge");
        await this.mergeRequest();
      }
      // eslint-disable-next-line no-console
      console.log("可以发送合并请求了");
    },
    async mergeRequest() {
      await this.request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          size: SIZE,
          fileHash: this.container.hash,
          fileName: this.container.file.name
        })
      });
      this.$message.success("上传成功");
      this.status = Status.wait;
    },
    createProgressHandler(item) {
      return e => {
        item.percentage = parseInt(String((e.loaded / e.total) * 100));
        // eslint-disable-next-line no-console
        console.log("item", item);
        // eslint-disable-next-line no-console
        console.log(e.loaded, e.total);
      };
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
