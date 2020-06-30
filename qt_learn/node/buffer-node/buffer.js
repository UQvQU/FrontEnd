// 数组不能进行二进制数据的操作
// js数组不想java、Python等语言的效率高
// buffer内存空间开辟出固定大小的内存

// 将'hello world'以二进制的形式存放到buffer库中
let str = 'hello world'
// 在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，
// 但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，
// 所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。
let buf = Buffer.from(str)
// JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
// 但在处理像TCP流或文件流时，必须使用到二进制数据。
// 因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
// buffer是以16进制的形式显示
console.log('buffer: ', buf)

// 输出buffer库中的内容
console.log(buf.toString())




// 开辟一个空的buffer(缓存区， 速度快)，并清除归零
let buff = Buffer.alloc(10)
// buff[0] = 255
console.log(buff)
// 直接在内存中开辟一个空间，没有将数据归零，不安全的，可能导致内存信息泄露
let buff2 = Buffer.allocUnsafe(10)
console.log(buff2)
