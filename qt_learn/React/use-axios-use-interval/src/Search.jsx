import React, { useEffect } from 'react';
// import axios from 'axios';
import useAxios from './useAxios';
function Search() {
  // 使用hooks, 处理单个请求
  // const [list, setList] = useState([])
  // const [loading, setLoading] = useState(true)   // 是否需要显示加载状态，默认为true
  // const [err, setErr] = useState(null)       // error 处理，默认未出错
  // useEffect(() => {
  //   axios.get('http://rap2api.taobao.org/app/mock/240109/redux/todolist').then(res => {
  //     setList(res.data.list)
  //     setLoading(false)
  //   }).catch(err => {
  //     setErr(err)
  //     setLoading(false)    // 出错也需要关闭loading
  //   })
  // }, [])


  // 优化：自定义hooks,封装统一处理请求，不用每次都useState useEffect
  // const [data, err, loading] = useAxios('url') --> useAxios.js
  const [data, err, loading, request] = useAxios({url: 'http://rap2api.taobao.org/app/mock/240109/redux/todolist'})
  
  // setTimeout(() => {     // 会启动多个定时器
  //   console.log('time')
  //   request()
  // }, 3000)
  useEffect(() => {   // 保证只启动一个定时器
    setTimeout(request, 3000)
  }, [])
  console.log('search') 
  // 还未获取到结果
  if (loading) return (<div>loading......</div>)
  // 获取到结果
  return (
    <div>
      {err ? JSON.stringify(err) : data && data.map((el, index) => {
        return (
        <li key={index}>{el}</li>
        )
      })}
      
    </div>
  )
}

export default Search