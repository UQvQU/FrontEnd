// es5  面向对象
function Person(name){  //构造函数 女主
    this.name = name;
}
// prototype 男主
// Person.prototype.getName = function(){
//     // this指向实例
//     return  this.name;
// }
Person.prototype = {
    getName: function(){
        return this.name;
    }
}
playHey = function(){
    
}
// 实例  baby
let person = new Person('秦溪');
console.log(person.name, person.getName());