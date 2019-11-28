// 装饰器 decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// // es6
// class Person2 {
//   say () {
//     console.log('hello')
//   }
// }
// es5
function Person3() { }
Object.defineProperty(Person3.prototype, 'say', {
    value: function () { console.log('hello'); },
    enumerable: false,
    configurable: true,
    writable: true
});
// 类装饰器
function addAge(constructor) {
    constructor.prototype.age = 18;
}
var PersonF = /** @class */ (function () {
    function PersonF() {
        this.name = 'tt';
    }
    PersonF = __decorate([
        addAge
    ], PersonF);
    return PersonF;
}());
var person = new PersonF();
console.log(person.age);
// 属性/方法 装饰器
function method(target, propertyKey, descriptor) {
    console.log(target);
    console.log('prop', propertyKey);
    console.log('desc', JSON.stringify(descriptor) + '\n\n');
    descriptor.writable = true;
}
var personS = /** @class */ (function () {
    function personS() {
        this.name = 'tt';
    }
    personS.prototype.say = function () {
        return 'instance method';
    };
    personS.run = function () {
        return 'static method';
    };
    __decorate([
        method
    ], personS.prototype, "say", null);
    __decorate([
        method
    ], personS, "run", null);
    return personS;
}());
var abc = new personS();
abc.say = function () {
    return 'abc';
};
abc.say();
