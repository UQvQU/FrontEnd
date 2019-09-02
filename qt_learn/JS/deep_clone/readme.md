- 性能优化
    1. chrome 自带的性能优化工具
       console.warn console.error()
       console.time('for-in') console.timeEnd('for-in')
       循序执行 瞬间执行
    2. for key in 性能不太好 用for代替吧  while最快
- 浅拷贝 返回的对象并不是独立的新的对象，跟直观理解有差异
- 浅拷贝变成深拷贝 返回新对象 规避内存指向同一地址的问题 JSON.parse(JSON.stringify())
  JSON.parse(JSON.stringify()) 会返回一个对象 但对有些复杂的类型无效 比如 function(){} 但还是可以解决大部分问题
- 递归 （当value是一个对象的时候）
  