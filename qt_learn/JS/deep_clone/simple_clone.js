// assign():基础数据类型深拷贝，复杂数据类型浅拷贝
// 
function simpleClone(initialObj){
    var obj = {};
    for(var key in initialObj){
        obj[key] = initialObj[key];
    }
    return obj;
}

var obj = {
    name: 'Bob'
}

var cloneObj = simpleClone(obj);
cloneObj.name = 'Tom'
console.log(obj.name);