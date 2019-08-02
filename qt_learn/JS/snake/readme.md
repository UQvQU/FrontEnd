# 贪吃蛇之画蛇

- canvas
- JS 异步是核心问题
  事件、 定时器、 fetch/ajax
  代码的编写顺序和执行顺序不一样，导致可读性下降
  loadAssets() 耗时1s
  hideWelcome() 位于loadAssets之后
  js执行顺序 先hideWelcome 后loadAssets执行
  js 单线程语言
  在一次执行中会把能够立即执行的代码执行掉, 再把事件监听、定时器、Ajax 调入事件轮询中
  回调

- img.onload  img加载完成之后
- window.onload  所有资源加载完成之后，比img.onload慢
  若HTML css js 的基本机构都没有搭建完成，游戏脚本会有问题
  document.ready比window.onload更早执行
  第一次打开页面（浏览器无缓存），document.ready比img.onload更快
  有缓存后（img已加载过），img.onload先于document.ready

- 函数式编程
  完成复杂的开发需求 => 分解为多个独立的子需求来完成 => 单独封装成一个函数
  init();
  drawSnake();
  drawSnakePart();
  refreshSnake();
  winOrLoose();
  showResult();
