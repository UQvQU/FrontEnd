import {track, trigger} from './effect.js'
export function reactive(target) {
  const observed = new Proxy(target, {
    set: (target, key, receiver) => {
      const result = Reflect.set(target, key, receiver)
      trigger(target, key)
      return result
    },
    get: (target, key, receiver) => {
      console.log('依赖收集', target, key, receiver)
      const res = Reflect.get(target, key, receiver)
      // 找到所有依赖key属性的属性，key改变，依赖key的属性也跟着改变
      track(target, 'get', key)
      return res
    }
  })
  return observed

}