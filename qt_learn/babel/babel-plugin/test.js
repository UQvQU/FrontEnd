const babel = require('babel-core')

const result = babel.transform('const result = 5 ** 2 - 8 * 2', {
  plugins: [
    require('./index')
  ]
})

console.log(result.code)