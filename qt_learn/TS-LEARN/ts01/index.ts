console.log('hello ts!!!')

// 1. ts必须指定数据类型
// 代码更规范，更有利于维护，增加了类型校验

var flag:boolean = true
// flag = 123  报错

// 2. 定义数组方式

var arr:number[] = [1, 2, 3]

var arr2:Array<number> = [1, 2, 3]

// 3. 元祖类型 tuple 属于数组的一种

var arr3:[boolean, number, string, string] = [true, 1, '2', 'tuple']

// 4. 枚举类型
/**
 * 理解:枚举是列举固定几个值,直接定义变量的话的话可以随意定义，
 * 枚举只能使用你定义好的几个值,枚举是个类，定义的值是基本类型,
 * 类能有更多操作
 * 使用枚举，可以定义一些带名字的常量。
 * (用自然语言中有相应含义的词语来代表某一状态，使程序更易阅读和理解)
 * 用于清晰地表达意图或创建一组有区别的用例
 */

  enum Color {blue, black, red = 4, 'orange'}

  var color:Color = Color.blue
  var color1:Color = Color.red
  var color2:Color = Color.orange

  // 如果标识符没有赋值，它的值就为下标索引
  // 若某标识符未赋值，且前面的标识符有赋值，则在赋值的基础上递增加1
  console.log(color, color1, color2)  // 0 4 5

// 5. 任意类型
// 

  var num:any = 124
  num = 'str'
  num = true
  // var oBox:any = document.getElementById('box')

// 6. 其他类型

// undefined

var count:number
// console.log(count)  // 报错，输出undefined

var un:undefined
console.log(un)  // 不报错 输出undefined

// un = 3    报错
var numb:number | undefined
console.log(numb)
numb = 3


// null

let nu:null = null
console.log(nu)




