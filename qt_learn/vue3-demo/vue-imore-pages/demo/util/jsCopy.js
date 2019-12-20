/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var fs = require('fs')
const glob = require('glob')

// js文件拷贝
var callbackFile = function (src, dst) {
  // 读取src路径下的文件
  fs.readFile(src, 'utf-8', function (error, data) {
    if (error) {
      console.log(error)
      return false
    }
    // 包含map
    if (dst.includes('.map')) {
      // 删除map  js
    } else {
      callbackFile(dst, `${dst}.map`)
    }
  })
}

// 复制目录, 打包后dist文件夹中不仅index一个html文件

// 获取所有js文件
glob.sync('./dist/js/*.js').forEach((filePath, name) => {
  
  console.log(filePath)
  let fileNameList = filePath.split('.')
  console.log(fileNameList)
  // 多页面应用的页面目录
  let fileName = fileNameList[1].split('/')[3]
  console.log(fileName)
  let copyName = filePath.split('/')[3]
  console.log(copyName)
  let changeDirectory =`./dist/${fileNameList}/js`

  // 不包含chunk-vendors
  if (!fileName.includes('chunk-vendors')) {

    fs.exists(changeDirectory, function (exist) {
      if (exist) {
        // ${fileName}下的js文件夹存在
        callbackFile(filePath, `${changeDirectory}/${copyName}`)
      } else {
        // 创建文件夹
        fs.mkdir(changeDirectory, function () {
          callbackFile(filePath, `${changeDirectory}/${copyName}`)
        })
      }
    })

  } 
})
