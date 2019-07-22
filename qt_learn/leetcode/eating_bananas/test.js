// Math.max()
const IMath = {}   //namespace
/**
 * @params:number 参数类型number 否则返回NaN(not a number)
 * @return:number 返回数组中的最大值  (: 表示类型)
 */
IMath.max = function(...args){
    console.log(arguments, arguments.length);  // arguments 类数组
    console.log(args,args.length);
    console.log(typeof args[2]);
    // for(var i = 0; i < args.length; i++){
        // 类型检测
        // if(typeof args[i] !== 'number'){
        //     return NaN;
        // }
    // }

}
console.log(IMath.max(...[2,4,9,8]));