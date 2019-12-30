import React, { useState, useEffect, useRef, useContext } from 'react';

// let preCount = 0
const Context = React.createContext('green')
function PreState() {
  let state = useContext(Context)
  let [count, setCount] = useState(0)
  // useEffect(() => {   //方案一：保存更改之前的值
  //   preCount = count
  // })
  // 方案二：useRef().current
  let ref = useRef()
  let ref2 = useRef()   
  // current 每次useRef()返回的值都是上一次current的值
  useEffect(() => {
    ref.current = count
  })

  useEffect(() => {
    setInterval(() => {
      // setCount(++count)
      ref2.current()
    },1000)
  }, [])
  useEffect(() => {
    ref2.current = function() {
      setCount(count + 1)
    }
  })

  const preCount = ref.current
  return (
    <Context.Provider value={state}>
      <div>
        <button onClick={() => {
          // count++
          setCount(++count)
        }}>Count++</button>
        count: {preCount}{count}
      </div>
      <div>
        <Context.Consumer>
          {(store) => {
            return <p>{JSON.stringify(store)}</p>
          }}
        </Context.Consumer>
      </div>
    </Context.Provider>
  )
}

export default PreState