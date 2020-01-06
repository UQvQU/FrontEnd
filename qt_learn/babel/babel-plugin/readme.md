# babel  <https://www.jianshu.com/p/e9b94b2d52e2>

源代码 -> parse -> AST -> 增删查改 -> AST -> 另一份源代码

步骤：

1. 解析Parsing: 将代码解析生成抽象语法树(AST)  -> 词法分析和语法分析
使用babylon库

2. 转换transforming：对于AST进行变换一系列的操作，babel通过babel-traverse对接收到的AST进行遍历转译，在此过程中进行添加更新及删除等操作 -> 得到新的AST
使用babel-traverse

3. 生成generating： 用babel-generator将变换后的AST转换为js代码
使用babel-generator

* AST 对源代码的一个描述，如同虚拟dom是对真实dom的一个描述
