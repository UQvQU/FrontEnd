// 插件更改变量a -> aaa
var a = 5
a = 8;

// babel-plugin-import:
// import { includes } from 'lodash'  ->  import includes from 'lodash/includes'
import { includes } from 'lodash'
// https://github.com/babel/babylon/blob/master/ast/spec.md#importspecifier
// import有三种情况：importDefaultSpecifier、importNamespaceSpecifier、importSpecifier
/* https://astexplorer.net/
{
  "type": "ImportDeclaration",
  "start": 0,
  "end": 33,
  "specifiers": [
    {
      "type": "ImportSpecifier",
      "start": 9,
      "end": 17,
      "imported": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "includes"
      },
      "local": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "includes"
      }
    }
  ],
  "source": {
    "type": "Literal",
    "start": 25,
    "end": 33,
    "value": "lodash",
    "raw": "'lodash'"
  }
}*/
