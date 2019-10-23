let effectStack = []
let targetMap = new Map()
export function effect (fn) {
  if (effectStack.indexOf(fn) === -1) {
    try {
      effectStack.push(fn)
      fn()
      // 触发get -> 触发track
    } finally {
      // 收集完移除
      effectStack.pop()
    }
  }
}
export function track (target, type, key) {
  let effect = effectStack[effectStack.length - 1]
  let dep = targetMap.get(target)
  if (dep === undefined) {
    dep = new Map()
    targetMap.set(target, dep)
  }
  let depsMap = dep.get(key)
  if (!depsMap) {
    depsMap = new Set()
    dep.set(key, depsMap)
  }
  depsMap.add(effect)
  console.log(targetMap)
}
export function trigger(target, key) {
  const keyDeps = targetMap.get(target)
  if (keyDeps) {
    let res = keyDeps.get(key) && keyDeps.get(key)
    console.log(res)
    for (let fn of res)
      fn && fn()
  }
}