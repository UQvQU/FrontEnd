const fs = require('fs')

fs.readFile('user.txt', {flag: 'r', encoding: 'utf-8'}, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    // 监听事件，一旦读取完毕就触发事件，执行以下三个任务
    // 1、查看数据库中所有用户的详细信息
    // 2、统计用户年龄比例
    // 3、查看所有用户学校的详细信息

    // 触发事件
    myEvent.emit('readOff', data)
  }
})


let myEvent = {
  events: {},
  on: function(eventName, fn) {
    if (this.events[eventName]) {
      this.events[eventName].push(fn)
    } else {
      this.events[eventName] = []
      this.events[eventName].push(fn)
    }
  },
  emit: function(eventName, msg) {
    this.events[eventName].forEach(fn => {
      fn(msg)
    });
  }
}

// 绑定监听
myEvent.on('readOff', (msg) => {
  console.log(msg, '1、查看数据库中所有用户的详细信息')
})
myEvent.on('readOff', (msg) => {
  console.log(msg, '2、统计用户年龄比例')
})
myEvent.on('readOff', (msg) => {
  console.log(msg, '3、查看所有用户学校的详细信息')
})

