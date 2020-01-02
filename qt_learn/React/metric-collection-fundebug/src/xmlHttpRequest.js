const _XMLHttpRequest = window.XMLHttpRequest

function XMLHttpRequest() {
  const xhr = new _XMLHttpRequest()
  function stateChange() {
    if (xhr.readyState === 4) {  // 加载完成
      console.log('请求成功')
    }
  }
  xhr.addEventListener('timeout', () => {
    console.log('timeout')
  })
  xhr.addEventListener('readystatechange', stateChange)
  return xhr
}

window.XMLHttpRequest = XMLHttpRequest

const _fetch = window.fetch
function fetch(url, config) {
  return _fetch.call(window, url, config).then(res => {
    console.log('fetch响应成功')
    return res
  }).catch(error => {
    console.log('error', error)
  })
}

window.fetch = fetch