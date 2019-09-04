// total/num * 2
function hongBao (total, num) {
    const arr = [];
    let restAmount = total;
    let restNum = num;
    for(let i = 0; i < num - 1; i++){
        let amount = parseFloat(Math.random() * (restAmount / restNum) * 2).toFixed(2);
        restAmount -= amount;
        restNum --;
        console.log(amount, restAmount, restNum);
        arr.push(amount);
    }
    arr.push(parseFloat(restAmount).toFixed(2));
    return arr;
}
console.log(hongBao(100, 10));