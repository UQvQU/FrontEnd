var minEatingSpeed = function(piles, H = 8){
    let low = 1,
        hi = Math.max(...piles);
    
    while(low <= hi){
        if(canEatAllBananas(piles, H, low)){
            return low;
        }
        // 不断增加每小时吃香蕉的数量
        low++;
    }
}
function canEatAllBananas(piles, H, low){
    let h = 0;
    // 遍历所有的香蕉堆
    for(let pile of piles){
        // 计算每小时吃low根，每堆香蕉所耗时相加
        h += Math.ceil(pile / low);  //向上取整
    }
    // 如果耗时小于等于H则返回true
    return h <= H;
}
console.log(minEatingSpeed([3, 6, 7, 11]));