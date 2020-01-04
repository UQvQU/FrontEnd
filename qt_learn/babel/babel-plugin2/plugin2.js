module.exports = function (babel) {
  const { types } = babel;
  return {
    visitor: {    // visitor: 遍历语法树ast时，visitor指定要对什么节点要做什么工作
      Identifier(path) {    // 访问那个节点, path：节点路径
        path.node.name = 'aaa'    // 变量a 更新为 aaa
      },
      // 此处仅考虑 ImportSpecifier: import {foo} from "mod" 这种情况
      // import { includes } from 'lodash'  ->  import includes from 'lodash/includes'
      // ImportSpecifier -> isImportDefaultSpecifier
      ImportDeclaration(path) {
        const specify = path.node.specifiers
        const source = path.node.source    // lodash
        if (!types.isImportDefaultSpecifier(specify[0]) && !types.isImportNamespaceSpecifier(specify[0])) {
          // 遍历specify
          const importDeclare = specify.map(spec => {
            // 判断如果是ImportSpecifier这种情况
            // 1. {} 获取导入的内容
            const transformName = spec.local.name
            console.log(transformName)
            // 2. import {includes} -> import includes
            // 创建默认导入节点importDefaultSpecifier
            // types.importDeclaration(specifiers, source)
            const importDefault = types.ImportDeclaration([types.importDefaultSpecifier(spec.local)], types.StringLiteral(`lodash/${transformName}`))
            return importDefault
          })
          // 3. 替换
          // path.replaceWith(importDefault)
          path.replaceWithMultiple(importDeclare)
        }
      }
    }
  }
}