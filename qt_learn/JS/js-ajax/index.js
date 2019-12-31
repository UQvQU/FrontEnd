// 原生js请求
let xhr = new XMLHttpRequest()

// 初始化
xhr.open(method, url, async)

// 发送请求
xhr.send(data)

// 设置状态变化回调处理请求结果
// readyState
// 0: 请求未初始化
// 1: 服务器连接已建立
// 2: 请求已接收 接收到了响应头
// 3: 请求处理中 正在下载响应体
// 4: 请求已完成，且响应已就绪
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}

// 手动实现ajax请求原理 1、错误回调2、参数处理3、post设置请求头4、状态回调
// ajax({method, url, type, data})
function ajax(options) {
  // 请求地址
  const url = options.url
  // 方法
  const method = options.method.toLocaleLowerCase() || 'get'
  // 默认为true
  const async = options.async

  // 请求参数
  const data = options.data
  const xhr = new XMLHttpRequest()

  // 请求超时
  if(options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  // 返回一个Promise实例
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')

    // 监听状态变换回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 请求成功 200 - 300
        if (xhr.status >= 200  && xhr.status < 300 || xhr.status == 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }

    // 错误处理
    xhr.onerror = err => reject && reject(err)
    let paramArr = []
    let encodeData

    // 处理请求参数 !!!
    // data: {currentPage: 1, total: 10}
    if (data instanceof Object) {
      for (let key in data) {
        // 参数拼接要通过encodeURIComponent()进行编码
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      // 参数用&连接起来
      encodeData = paramArr.join('&')
    }

    // get请求拼接参数
    if (method === 'get') {
      // 判断url中是否存在？号
      const index = url.indexOf('?')
      if (index === -1) { // 没有？即没有参数的话
        return url += '?'
      } else if (index !== url.length - 1) { // 有参数的话加‘&’
        url += '&'
      }
      // 拼接data中的参数
      url += encodeData
    }

    xhr.open(method, url, async)

    if (method === 'get') {
      xhr.send(null)
    } else { // post
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')  //设置请求头
      xhr.send(encodeData)
    }
  })
}


