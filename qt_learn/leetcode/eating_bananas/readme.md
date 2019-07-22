# 算法 -- Koko Eating Bananas

- N 堆香蕉
- H 时间
- K K/h(根/时)
- K min 保证在H小时内吃完所有香蕉
    1 吃不完
    20 吃太快
    1(min) -> n(尝试) 20(max)

1. 把香蕉表达一下
    数据结构处理数据
    [3, 6, 7, 11] H = 8
    min = 3  k = 4  max = 11
    [30, 11, 23, 4, 20], H = 5
    k = 30
2. K值
    Max 规则:Max(arr)
3. Max-- 直到正好在H小时内吃完
4. 优化代码，提高性能 --> 二分查找

- JS数据类型
    基础数据类型 整型 Number String Boolean Undefin Nall Symbol
    复杂数据类型 Object [Array, Fnction, Math, Regexp, Date]
    Math.max()
    Math.ceil(5/2) = 3 向上取整
    Math.floor(5/2) = 2 向下取整
    Math.round(5/2) = 3 四舍五入

- ... spread 展开数组
    let arr= [2, 7, 8, 9]
    Math.max(arr) --> NaN
    Math.max(...arr) --> 9

- koko
    while(1->Math.max(...piles))
    piles => pile => Math.ceil(pile/low)
- 减少一些循环，提高效率
    1 -> Max     二分查找