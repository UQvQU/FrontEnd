console.log('begin')
// 安装结束后, 使用cacheStorage
// const CACHE_NAME = 'PWA-v1.0'   // 新建模块名
const CACHE_NAME = 'PWA-v2.0'
this.addEventListener('install', (event) => {
  console.log('install')
  this.skipWaiting()  // 手动跳过skipWaiting
  // cacheStorage 缓存内容
  // install -> active
  // Promise resolve
  event.waitUntil(    // 等addAll()达到resolve后 -> active
    // 打开缓存模块
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/bundle.js',
        'tt.jpg',
        'service-worker.html'
      ])
    })
  )
})

// 更新
this.addEventListener('activate', (event) => {
  // install 后 -> activate
  console.log('active')
  event.waitUntil(
    // 删除所有旧的cache
    caches.keys().then(keyList => {
      console.log('key', keyList)
      return Promise.all(keyList.map(
        key => {
          // 删除
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
          return Promise.resolve()
        }
      ))
    })
  )
})

// 监听浏览器的请求事件  fetch
this.addEventListener('fetch', (event) => {
  event.respondWith(
    // 判断请求中数据是否在缓存中
    caches.match(event.request).then(res => {
      if (res) { // 在缓存中，直接返回缓存中数据
        return res
      } else {
        // 后续请求(未缓存的内容), 放开请求, 请求后缓存到CacheStorage中
        return fetch(event.request).then(res => {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, res)
            console.log('swRes', res)
            return res
          })
        })
      }
    })
  )
})
