const http = require('http')

http.createServer((req, res) => {
  const url = require('url').parse(req.url)
  if (url.pathname === '/api/books') {
    console.log('url.query', url.query)
    const methodName = url.query && url.query.split('=')[1]
    console.log('methodName', methodName)
    let list = [{name: 'book1', price: 33}]
    console.log(`${methodName}(${JSON.stringify(list)})`)
    res.end(`${methodName}(${JSON.stringify(list)})`)
  }
})
.listen(3002, () => {
  console.log('server is running http://localhost:3002')
})
