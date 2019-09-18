// 1
const box = {a: 10, b: {c: 100}};
console.log(box.a);  //  10
const box2 = Object.freeze(box);
box.a = 11;
box2.a = 12;
console.log(box.a + '----' + box2.a);  // 10----10

// 对象属性是对象的话则无法冻结，只能冻结'第一层'
// 若想要全部冻结，需要循环遍历一遍
// 可变是万恶之源
box.b.c = 101;
console.log(box.b.c + '----' + box2.b.c);    //  101----101
box2.b.c = 102;
console.log(box.b.c + '----' + box2.b.c);    // 102----102

// 冻结数组
const arr = [0, 1];
Object.freeze(arr);
arr[0] = 123;
console.log(arr);  // [ 0, 1 ]


// 2
// 结构，name重命名为myName
const {name: myName} = {name: 'liHua'};
// console.log(name)    name is not defined
console.log(myName);


// 3
// 有缓存效果的add方法
const add = () => {
  const cache = {};
  console.log('1', cache);
  return num => {
    console.log('2', cache);
    if (num in cache) {
      return `from cache ${num}`
    } else {
      const r = num + 10;
      cache[num] = r;
      return `calcul ${r}`;
    }
  }
}

const addFunc = add();
console.log(addFunc(10));  // calcul 20
console.log(addFunc(10));   // from cache 10
console.log(addFunc(2 * 5));   // from cache 10


// 4
const arr4 = ['liHua', 'liLei'];
for (let item1 in arr4) {
  console.log(item1);  // 0    1
}
for (let item2 of arr4) {
  console.log(item2);  //liHua  liLei
}

// 5 
var status = 'global';
var obj = {
  status: 'obj',
  getStatus: function () {
    return this.status;
  }
}
console.log(obj.getStatus());
var fun = obj.getStatus;
console.log(fun());

// 6 es6
// 只是一个语法糖 背后还是es5

class Foo {
  
}
console.log(typeof Foo)   //function


// 7
// Symbol：es6 新增的一个数据类型
// 每次调用symbol都会产生一个的不同的值
// 简单数据类型：string number boolean null undefined symbol
let a = Symbol('a');  
let b = Symbol('a');
console.log(a,b,a==b);
var obj = {
  [a]: 'a value',    // a 为一个值
  b: 'b value',
  b: 123
}
// 返回一个对象上可枚举的属性
console.log(Object.keys(obj), Object.values(obj));   //  [ 'b' ] [ 123 ]
// symbol 不可枚举
console.log(Object.getOwnPropertySymbols(obj));   // [ Symbol(a) ]
console.log(a in obj);   // true