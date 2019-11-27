// const add = (a: number, ...rest: number[]) => 
// 代码实现函数不可被调用
function assigned(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    console.log('assign');
    return {
        top: a,
        right: b || a,
        left: c || a,
        bottom: d || a
    };
}
var a = assigned(1, 2);
console.log('a', a);
// 泛型
function returnItem1(para) {
    return para;
}
function returnItem2(para) {
    return para;
}
function returnItem3(para) {
    return para;
}
function swap(params) {
    return [params[1], params[0]];
}
// 泛型变量
function getArrayLength(arg) {
    console.log(arg.length);
    return arg;
}
var returnItem = function (para) { return para; };
// 泛型类
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack;
}());
var Stack2 = /** @class */ (function () {
    function Stack2() {
        this.arr = [];
    }
    Stack2.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack2.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack2;
}());
var stack = new Stack2();
var Demo2 = /** @class */ (function () {
    function Demo2() {
    }
    Demo2.prototype.useT = function () {
        this.test.doSomething();
        this.test.doSomethingElse();
    };
    return Demo2;
}());
var d = new Demo2();
// new
function factory(type) {
    return new type();
}
