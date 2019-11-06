const http = require('http');
const { fork } = require('child_process')

const httpServer = http.createServer((req, res) => {
  if (req.url === '/computer') {
    // let sum = 0
    // for (let i = 0; i < 10000000000; i++) {
    //   sum += i
    // }
    const childComputer = fork('./fork-computer')
    childComputer.send('open')
    childComputer.on('message', sum => {
      res.end(sum.toString())
    })
  } else {
    res.end('ok')
  } 
})
httpServer.listen(3333, () => {
  console.log('server is running 3333');
})
