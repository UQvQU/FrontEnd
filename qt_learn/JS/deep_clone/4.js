// 思考题：n个台阶 每次你可以跨一个台阶或两个台阶，请问有多少钟走法 n=7 值为多少？
function countNumber (n) {
    if(n < 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else if(n == 2){
        return 2;
    }else{
        return countNumber(n - 1) + countNumber(n - 2);
    }
}
console.log(countNumber(6));