import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(config) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)
  useEffect(() => {
    // axios.get(config.url).then(res => {
    //   setList(res.data.list)
    //   setLoading(false)
    // }).catch(err => {
    //   setErr(err)
    //   setLoading(false)
    // })
  }, [])
  function request() {
    console.log('request')
    axios.get(config.url).then(res => {
      setList(res.data.list)
      setLoading(false)
    }).catch(err => {
      setErr(err)
      setLoading(false)
    })
  }
  // return [list, err, loading]
  return [list, err, loading, request]  //request： 在用户进行点击等操作后进行请求
}

export default useAxios