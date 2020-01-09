const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs')
const _path = require('path')
const { transformFromAst } = require('@babel/core')
let entry = "./src/index.js";

// 依赖收集
const getAst = path => {
  const content = fs.readFileSync(path, 'utf-8')
  return parser.parse(content, {
    sourceType: 'module',
  })
}
const getDep = (ast, fileName) => {
  let deps = {}
  traverse(ast, {
    ImportDeclaration(path) {
      const node = path.node
      const from = node.source.value
      const dir = _path.dirname(fileName)
      const depFileName = _path.join(dir, from)
      deps[from] = depFileName
      console.log(from)
    }
  })
  // dependencies: {
  //   "./hello.js": "./src/hello.js"
  // }
  return deps
}
function getCode(ast) {
  const obj = transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  })
  return obj.code
}
let modules = []
run()
function run() {
  const info = build(entry)
  modules.push(info)
  const deps = info.deps
  for (let key in deps) {
    const depInfo = build(deps[key])
    modules.push(depInfo)
  }
}
console.log(modules)
function build(fileName) {
  const ast = getAst(fileName)
  const deps = getDep(ast, fileName)
  const code = getCode(ast)
  return {
    fileName,
    ast,
    deps,
    code
  }
}