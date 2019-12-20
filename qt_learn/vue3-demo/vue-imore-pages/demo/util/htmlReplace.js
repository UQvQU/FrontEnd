/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
var fs = require('fs')
const glob = require('glob')

// html文件替换
var callbackFile = function (src, dst, name, filePath) {
  fs.readFile(src, 'utf-8', function (error, data) {
    if (error) {
      console.log(error)
      return false
    }
    let regCss = new RegExp("\/css/" + name + "", 'g')
    let regJs = new RegExp("\/js/" + name + "", 'g')
    let htmlContent = data.toString().replace(regCss, `\.\/css/\/${name}`).replace(regJs, `\.\/js\/${name}`)
    
    fs.writeFile(dst, htmlContent, 'utf-8', function (error) {
      if (error) {
        console.log(error)
        return false
      }
      if (src.indexOf('/index.html') == -1) {
        fs.unlink(src, function () {
          // html 删除成功
        })
      }
      fs.unlink(filePath, function () {
        // 删除css
      })
      fs.unlink(filePath+'.map', function () {
        // 删除js
      })
    })
  })
}

// 复制目录
glob.sync('./dist/js/*.js').forEach((filePath, name) => {
  let fileNameList = filePath.split('.')
  let fileName = fileNameList[1].split('/')[3]
  let thisDirectory = `./dist/${fileName}/${fileName}.html`
  let changeDirectory = `./dist/${fileName}/index.html`
  if (!fileName.includes('chunk-vendors')) {
    callbackFile(thisDirectory, changeDirectory, fileName, filePath)
  }
})