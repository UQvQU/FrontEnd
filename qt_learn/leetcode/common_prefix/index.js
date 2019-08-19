function isCommonPrefix(strs, middle){
    // 找出目前的测试公共子串
    const prefix = strs[0].substring(0, middle);
    // console.log(prefix);

    for(let i = 1; i < strs.length; i++){
        if(!strs[i].startsWith(prefix)){
            return false;
        }
    }
    return true;
}
var longestCommonPrefix = function(strs) {
    // 最短的一项
    var minLen = Number.MAX_VALUE;
    for(let s of strs){
        minLen = Math.min(minLen, s.length);
    }
    // console.log(minLen);
    // 二分
    
    let low = 0,
        high = minLen;
    // 位运算 右移 除 2
    /**
     * 4 << 2 -- 16
     * 4 << 1 -- 8
     */
    while(low <= high){
        let mid = (low + high) >> 1;
        if(isCommonPrefix(strs, mid)){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    // 最后输出的为0到上一次mid值之间的字符串
    // console.log(low, high);
    return strs[0].substring(0, (low + high) >> 1)
}
console.log(longestCommonPrefix(["dog","racecar","car"]));