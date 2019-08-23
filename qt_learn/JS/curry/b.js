// curry 函数 返回一个新函数 逐渐“消化”
function curry(fun, len = fun.length){
    console.log('len1: ',len);
    return _curry.call(this, fun, len);
}
function _curry(fun, len, ...args){  //args =  [], [1], [1,2]...
    console.log('len2: ',len);
    console.log('args:', args);
    return function(...params){  // params = 1,2,3,4,5
        console.log('params:',params);
        let _args = [...args, ...params];
        console.log('_args:', _args);
        if(_args.length >= len){
            console.log('_args.length:',_args.length);
            return fun.apply(this, _args);
        }else{
            return _curry.call(this, fun, len, ..._args);  // _args = [1], [1,2], [1,2,3]
        }
    }
}
let _fun = curry(function(a,b,c,d,e){
    console.log(a,b,c,d,e);
})
_fun(1)(2)(3)(4)(5);

// commonjs 模块化机制 提供curry的能力
module.exports = curry;
