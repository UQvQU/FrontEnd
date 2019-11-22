/* <ul id="list">
  <li class="item">item1</li>
  <li class="item">item2</li>
  <li class="item">item3</li>
</ul> 
https://github.com/skychenbo/Blog/tree/master/virtual-dom
*/

// 1、虚拟节点变成真实的dom树

var REPLACE = 0,    // replace 替换
    REORDER = 1,    // reorder 父节点中子节点的操作
    PROPS   = 2,    // props 属性的变化
    TEXT    = 3     // text 文本内容的变化

// 虚拟节点构造函数
function Element(tagName, props, children) {
  this.tagName = tagName
  this.props = props
  this.children = children
}
// 创建dom树
Element.prototype.render = function () {
  // 创建节点、节点属性
  let el = document.createElement(this.tagName),
      props = this.props

  // 遍历节点属性
  for (let prop in props) {
    el.setAttribute(prop, props[prop])
  }

  // 遍历子节点
  this.children.forEach(child => {
    let childEl = (typeof child === 'object') 
    ? new Element(child.tagName, child.props, child.children).render() : document.createTextNode(child)

    el.appendChild(childEl)
  })

  return el
}

// diff: 对比页面现有的dom树和创建出来的dom树，找到需要更新的地方
function diff(oldTree, newTree) {
  // 节点的标识
  let index = 0
  // 记录每个节点差异
  let patches = {}
  // 找不同
  dfsWalk(oldTree, newTree, index, patches)

  return patches
}

function dfsWalk (oldNode, newNode, index, patches) {
  // 对比oldTree和newTree差异并记录下来
  var currentPatch = []


  // 
  if (newNode !== null && oldNode.tagName == newNode.tagName && oldNode.key !== newNode.key) {
    currentPatch.push({type: 'div', props: {id: 'container'}})
  }
  patches[index] = currentPatch

  // 寻找子节点的差异
  diffChildren(oldNode.children, newNode.children, index, patches)
}

function diffChildren (oldChildren, newChildren, index, patches) {
  let leftNode = null
  let currentNodeIndex = index
  // 遍历原始dom树的子节点
  oldChildren.forEach((child,i) => {
    // 获取newTree中对应oldTree当前子节点的子节点
    var newChild = newChildren[i]
    // 计算节点标识
    currentNodeIndex = (leftNode && leftNode.count) ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1

    // 找子节点的不同
    dfsWalk(child, newChild, currentNodeIndex, patches)

    leftNode = child
  })
}

// 将差异应用到dom树上
function patch(node, patches) {
  // 记录当前节点标识
  var walker = { index: 0}
  dfWalk(node, walker, patches)
}

function dfWalk(node, walker, patches) {
  var currentPatches = patches[walker.index]

  var len = node.childNodes ? node.childNodes.length : 0
  // 深度遍历子节点
  for (let i = 0; i < len; i++ ) {
    var child = node.childNodes[i]
    walker.index++
    dfWalk(child, walker, patches)
  }

  if (currentPatches) {
    // 对当前节点进行dom操作
    applyPatches(node, currentPatches)
  }
}

function applyPatches (node, currentPatches) {
  currentPatches.forEach(currentPatch => {
    switch (currentPatch.type) {
      case REPLACE: 
        var newNode = (typeof currentPatch.node === 'string') ? 
        document.createTextNode(currentPatch.node) : currentPatch.node.render()
        node.parentNode.replaceChild(newNode, node)
        break;
      case REORDER: //移除子节点
        reorderChildren(node, currentPatch.move)
        break;
      case PROPS: // 将差异节点应用到dom树中
        setProps(node, currentPatch.moves)
        break;
      case TEXT:
        if (node.textContent) {
          node.textContent = currentPatch.content
        } else {
          node.nodeValue = currentPatch.content
        }
        break;
      default:
        throw new Error('UnKnow patch type' + currentPatch.type)
    }
  })
}