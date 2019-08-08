
function speak(){
    let name = 'zzz';
    console.log(name+'1');
    var greeting = "Hello, I'm" + identify.call(this);
    console.log(name+'2');
    console.log(greeting);
}
var me = {
    name: 'thx'
}
var you = {
    name: 'xzb'
}
// this提供一种更优雅的方式来隐式“传递”一个对象
function identify(){
    return this.name.toUpperCase();
}
console.log(identify.call(me));
console.log(identify.call(you));

speak.call(me);
speak.call(you);

// function identify(context){
//     return context.name.toUpperCase();
// }
// console.log(identify(me));
// console.log(identify(you));

