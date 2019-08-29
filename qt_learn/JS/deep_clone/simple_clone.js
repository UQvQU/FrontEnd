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