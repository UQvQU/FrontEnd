// store的生成全靠reducer
// reducer -> 生成默认的store -> view -> action -> reducer -> 生成新的store

// reducer -> store
const createStore = (reducer) => {
  // 生成默认的store
  let currentState;
  currentState = reducer({}, {
    type: '@@redux/INIT'
  })

  let listeners = []
  // 订阅
  function subscribe(cb){
    listeners.push(cb)
  }

  // 获取值
  function getState() {
    return currentState
  }
  // action 纯对象 plain object {}
  // dispatch -> action -> reducer -> 新的store
  function dispatch(action) {
    // 生成新的store
    currentState = reducer(currentState, action)
    // 发布
    for(let cb of listeners) {
      cb()
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

function combineReducer(reducers) {
  // 获取所有需组合的模块（count count2）
  const finalReducerKeys = Object.keys(reducers)
  return (state = {}, action) => {
    console.log('state', state)
    let nextState = {}
    // dispatch不区分模块，遍历所有reducer模块
    for(let i = 0; i < finalReducerKeys.length; i++) {
      let key = finalReducerKeys[i]
      // 获取当前的reducer模块
      let reducer = reducers[key]
      // 找到每个模块对应的默认值
      const previousState = state[key]
      // 生成默认的state
      nextState[key] = reducer(previousState, action)
    }
    return nextState
  }
}

export {
  createStore,
  combineReducer
}