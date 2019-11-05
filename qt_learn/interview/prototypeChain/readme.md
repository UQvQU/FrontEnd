# js

## for in

1. index索引为字符串型数字，不能直接进行几何运算
2. 遍历顺序有可能不是按照实际数组的内部顺序
3. 使用for in会遍历数组所有的可枚举属性，包括原型。例如上述的原型方法method和name属性
所以for in更适合遍历对象，不要使用for in遍历数组。

## for of

for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name

<https://www.cnblogs.com/wanghao123/p/9330556.html>
