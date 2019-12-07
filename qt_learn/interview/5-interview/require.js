// https://blog.csdn.net/github_36487770/article/details/95462175
var { counter, obj, changeValue} = 
require('./export');
// 1、
// common js： 类似于基础数据类型深拷贝，对象浅拷贝
// export中的counter 无法改变，但obj可变
// es-module： counter仍会改变，导入和导出是引用的关系，只要一边改变，另一边也会跟着改变
// 2、一个可以在任意地方引入，一个只能在顶部引入
console.log(counter, obj);
changeValue();
console.log(counter, obj);
// 复制
// var a = 1; var b = a; a = 2;
// var aa = {}; var bb = aa; aa.name = 'bbname';
// commonJS require 的时候 类比 js 
// 基本数据类型 复杂数据类型 的复制,
// 它也就是 复制了一份导出来的东西
