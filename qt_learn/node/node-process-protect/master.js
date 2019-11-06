const cpus = require('os').cpus()
const net = require('net')
const socketServer = net.createServer()
const { fork } = require('child_process')
console.log('length:', cpus.length)
socketServer.listen(3333, () => {
  console.log('server is running in 3333')
})

for (let i = 0; i < cpus.length; i++) {
  createWork()
}
function createWork () {
  const work = fork('./work.js')
  work.on('message', function (message) {
    const { act } = message
    if (act === 'dead') {
      createWork()
    }
  })
  work.send('server', socketServer)
  console.log('work process created')
}
