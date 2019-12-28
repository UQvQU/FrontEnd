document.getElementById('app').innerHTML = 'hello world涂涂'

// 后续请求缓存
setTimeout(() => {
  fetch('http://rap2api.taobao.org/app/mock/240109/redux/todolist')
  .then(res => {
    return res.json()
  }).then(res => {console.log('bundleRes', res)})
}, 3000)