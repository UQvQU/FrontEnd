var obj = {
    a: {
        a: 'hello',
        b: 211
    }
};
var initialObj = Object.assign({}, obj);
console.log(initialObj);
initialObj.a.a = 'changed';
// initialObj.a = 'changed';
console.log(obj.a, initialObj.a);
