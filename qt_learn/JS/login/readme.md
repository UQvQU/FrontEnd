# js

- 5G时代 设备的省电性能很重要 --> js 有可能被禁用
  <a href="/login">login</a>  跳转页面 功能的实现
  script  addEventListener    更好的用户体验
  无障碍的互联网访问

- event.preventdefault();  //阻止默认行为
- event.stopPropagation();  //停止默认冒泡
- DOM DOM树， BODY是树根， 元素及元素的子元素都是子节点，孙节点······
  .inner 默认沿着DOM树 事件的冒泡触发
- box.addEventListener('click', () => {
            alert("I'm a box!!!");
        }, true);
  第三参数为Boolean值，默认为false， 表示冒泡方向有里向外（由子向父）
  只影响子元素的冒泡方向，自身的冒泡方向不会改变（除非自己的父元素也为true）
