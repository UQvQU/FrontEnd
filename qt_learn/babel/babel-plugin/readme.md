# babel  <https://www.jianshu.com/p/e9b94b2d52e2>

步骤：

1. 解析Parsing: 将代码解析生成抽象语法树(AST)  -> 词法分析和语法分析

2. 转换transforming：对于AST进行变换一系列的操作，babel通过babel-traverse对接收到的AST进行遍历转译，在此过程中进行添加更新及删除等操作 -> 得到新的AST

3. 生成generating： 用babel-generator将变换后的AST转换为js代码
