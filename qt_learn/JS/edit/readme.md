# 用户体验

- 如果我们有很多信息需要从用户收集
  表单不要太长
  1. 移动设备 分页
    fieldset标签 说明当前表单的主要内容
  2. PC端 多个表单 document.forms[]

- this
  EditInPlace 类 抽象
  this 指向 editor
  this.staticElement = document.createElement('span');
  this.converToText(); //即使函数又是对象的方法 this指向对象

- 函数内部的this是执行时动态决定的，执行的方式来决定的

- EditInPlace 类 constructor + protoType(对象，原型对象)
  EditInPlace.protoType = {
      converToText : function(){}
  }
