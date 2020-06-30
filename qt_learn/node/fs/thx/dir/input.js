// 提供了一个接口，用于一次一行地读取可读流
const readline = require('readline')
const {fsWrite} = require('./module')

// 实例化接口对象
let r1 =readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// // 提问事件
// r1.question('你的名字？', answer => {
//   console.log('回复：', answer)
//   // ctrl+C、ctrl+D都可以触发close事件
//   r1.close()
// })

// // close 事件
// r1.on('close', () => {
//   // 监听close事件，一旦close，进程终止
//   console.log('exit')
//   process.exit(0)
// })


// 封装 连续提问
let addQuestions = (question) => new Promise((resolve, reject) => {
  r1.question(question, answer => {
    console.log('回复：', answer)
    resolve(answer)
  })
})

async function createPackage() {
  let name = await addQuestions('您的包名？')
  let description = await addQuestions('描述内容？')
  let main = await addQuestions('入口文件？')
  let author = await addQuestions('作者是谁？')
  let content = `{
    "name": "${name}",
    "version": "1.0.0",
    "description": "${description}",
    "main": "${main}",
    "author": "${author}"
  }`
  await fsWrite('package.json', content)
  r1.close()
}
createPackage()

r1.on('close', () => {
  // 监听close事件，一旦close，进程终止
  console.log('exit')
  process.exit(0)
})


