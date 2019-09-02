let obj = {
    a : 1,
    field4:{
        child:'child',
        child2:{
            child2:'child2'
        }
    }
}
function clone(target) {
    if(typeof target === 'object') {
        let cloneTarget = {};
        for(const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    }else {
        return target;
    }
}
let obj1 = clone(obj);
obj1.a =2;
obj1.field4.child='newChild';
console.log(obj, obj1);
