# translate3D 开启 GPU 加速

1. html 解析 dom树
2. css -> cssom
3. render tree 渲染树
4. layout 布局
5. paint 绘制
6. compoise 合成

js -> layout -> paint -> compoise
layout 重排
paint 重绘
重绘不一定引起重排
重排一定会引起重绘

以上都是针对当前该层的元素

* 浏览器 -> More tools -> Rendering
<https://csstriggers.com/>
layout: 大小，位置, left, top……
paint: color shadow……
composite: transform opacity
发生变化的元素必须在一个合成层上面

提升层的方式：

1. 3d transform
2. will-change
3. css3: animation transition 开始的时候，结束的时候没在了
4. backface-visibility: hidden
5. video

提升层的好处：
元素变化只会影响当前这个层，减少影响区域

物极必反：每个层都需要内存消耗，不能滥用
