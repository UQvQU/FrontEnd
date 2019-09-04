// 思考题：n个台阶 每次你可以跨一个台阶或两个台阶，请问有多少钟走法 n=7 值为多少？
// 方案一：
// function countNumber (n) {
//     if(n < 0){
//         return 0;
//     }else if(n == 1){
//         return 1;
//     }else if(n == 2){
//         return 2;
//     }else{
//         return countNumber(n - 1) + countNumber(n - 2);
//     }
// }
// console.log(countNumber(6));
// 多次调用函数->运行栈入栈->导致内存溢出 
// 重复计算
// hasMap 缓存计算结果
// 方案二：
const w = new Map();
function countNumber (n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    if(w.has(n)) return w.get(n);
    var result = countNumber(n - 1) + countNumber(n - 2);
    w.set(n, result);
    return result;
}
console.log(countNumber(99));