const clone = parent => {
  // 判断数据类型
  const isType = (obj, type) => {
    // 判断基础数据类型  typeof仅判断基础数据类型
    if (typeof obj !== 'object') {
      return false
    }
    // 判断复杂类型是否为数组
    const typeString = Object.prototype.toString.call(obj)
    let flag;
    // 如果type为数组,Date, 正则，flag=true
    switch (type) {
      case 'Array':
        flag = typeString === '[object Array]'
        break;
      case 'Date':
        flag = typeString === '[object Date]'
        break;
      case 'RegExp':
        flag = typeString === '[object RegExp]'
        break;
      default:
        flag = false
    }
    return flag
  }

  // 处理正则
  const getRegExp = result => {
    var flags = ''
    if (result.global)
      flags += 'g'
    if (result.ignoreCase)
      flags += 'i'
    if (result.multiline)
      flags += 'm'
    return flags
  }

  // 循环引用的数组
  const parents = []
  const children = []

  const _clone = parent => {
    if (!parent) {
      return null
    }
    if (typeof parent !== 'object') {
      return parent
    }
    let child, proto
    
    if(isType(parent, 'Array')) {
      // 处理数组
      child = []
    } else if (parent, 'RegExp') {
      // 正则深拷贝
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) {
        child.lastIndex = parent.lastIndex
      }
    } else if (parent, 'Date') {
      // 日期深拷贝
      child = new Date(parent.getTime())
    } else {
      // 对象深拷贝
      // 获取parent的原型链
      proto = Object.getPrototypeOf(parent)
      // child继承自proto
      child = Object.create(proto)
    }

    // 处理循环引用
    const index = parents.indexOf(parent)
    if (index != -1) {
      return children[index]
    }

    parents.push(parent)
    children.push(child)
    // 遍历被拷贝对象
    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }
    return child
  }
  return _clone(parent)
}