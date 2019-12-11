const fs = require('fs');
const md5 = require('md5')

fs.stat('./readme.md',(err, state) => {
  // mtime: 修改时间
  // 文件内容进行无意义操作（eg：加一个空格再删除再保存）
  // 仍会改变修改时间,导致完全根据修改时间来判断文件内容是否修改是不准确的
  console.log(state.mtime)
})

const readme = fs.readFileSync('./readme.md', 'utf8')
// 生成唯一的hash值，进行上述的无意义操作，文件内容不变，hash值不变
console.log(md5(readme))