const Singleton = (function(){ //立即执行函数 只执行一次
    // 闭包 closure
    let instance = null;  //闭包区域，变量不会被回收 
    console.log('---');
    return function(){  //每new创建对象就执行
        // constructor
        console.log(instance)
        if(instance){
            return instance;
        }
        return instance = this;
    };
})();
// console.log(Singleton, typeof Singleton);
// 单例模式 一个类只有一个实例
// console.log('1single',Singleton);
const a = new Singleton();
const b = new Singleton();
console.log(a == b);
// console.log(a.__proto__ == Singleton.prototype);
// console.log(a.constructor == Singleton);
// console.log(Singleton.prototype.constructor);
// console.log(a.constructor);
// console.log(a.__proto__);
// console.log(a.constructor == b.constructor);
// console.log(a.__proto__ == b.__proto__);
