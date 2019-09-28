# render

[template]
[div]
[ElButton]
[/ElButton]
[/div]
[/template]

<div></div>被编译为
h('div', {}, [children])

h函数返回一个对象
{
  详细描述该标签的信息：props, id, class, children
}
该对象成为虚拟节点(virtual node) -- Vnode
虚拟 DOM：Vnode 建立起来的node树而已
