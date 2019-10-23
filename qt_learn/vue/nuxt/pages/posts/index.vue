<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-for="post in posts" :key="post.id" class="col-md-6">
        <nuxt-link :to="{name: 'post-id', params:{id: post.id}}">
          <div class="card my-3">
            <img :src="post.imageUrl" :alt="post.title" class="card-img-top">
            <div class="card-bod">
              <div class="card-title">
                {{ post.title }}
              </div>
              <div class="card-subtitle mb2 text-black-50">
                {{ post.author }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // nuxt本质 template 不是在客户端渲染的
  // vue是在服务器 api -> mysql 获取数据 -> template mounted() fetch axios ajax 前端拉数据
  // 页面显示后，才挂载异步的数据 导致搜索引擎无法获取数据
  // nuxt: api -> musql -> template 编译 server side rendering
  // vue运行在后端 (数据在vue页面放好后再渲染在浏览器上)
  async asyncData ({ $axios }) {
    // 先获取数据
    const posts = await $axios.$get('http://localhost:3333/posts')
    return {
      posts
    }
  }
}
</script>
