# BFC

## BFC 概念

- 块级格式化上下文
  Block fomatting context = block-level box + Formatting Context

## BFC 的渲染规则

1. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔绝的空间，外面的元素不会影响BFC里面的元     素，反之，里面的元素也不会影响外面的元素
2. BFC的区域不会与浮动元素box重叠
3. 垂直方向的外边距会发生边距重叠（包括父子，兄弟元素）

## BFC 的创建条件

1. overflow的值不为visible, initial, unset
2. float 的值不为none
3. 行内块级display:inline-block
4. 表格单元display:table-cell
5. 绝对定位 （absolute, flexd）
