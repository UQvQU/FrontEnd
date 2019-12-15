// 自动构建路由
import React from 'react'
// 组件每个路由 独立的URL head
import Head from 'next/head'
import { Button } from 'antd'
import Header from '../components/Header'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <div>
      <Button>按钮</Button>
    </div>
  </>
);

export default Home;
