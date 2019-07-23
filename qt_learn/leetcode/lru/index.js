/**
 * @param {number} capacity 空间容量
 */
// 构造函数
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.arr = [];// 数据结构
    this.obj = {};// 3,3 --> key=3, value=3
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 调整优先级
    // 1.判断是否存在，找到当前值的位置
    // 2.并移除，后push到队尾
    for(let i = 0; i < this.length; i++){
        if(!this[i].obj.key){
            
            return this[i].obj.key;
        }
    }
    
    LRUCache.push();
    return -1;
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 加入一个元素，空间分配
    // 1.如果当前空间未满，直接push至队尾
    // 2.如果空间已满，shift队头的元素(最近最少使用)，后push
    if(this.arr.length < this.capacity){
        LRUCache.push(value);
    }
};

new LRUCache(2);