<template>
<!-- 四种状态：搜索前，搜索时，搜索后（成功、失败） -->
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">Loading.......</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Pubsub from 'pubsub-js'
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      firstView: true,
      loading: false,
      // [{url: '', avatar_url: '', name: ''}]
      users: null,
      errorMsg: ''
    }
  },
  mounted () {
    // 订阅搜索消息
    Pubsub.subscribe('search', (msg, searchName) => {
      // 通过searchName进行搜索获取数据
      const url = `https://api.github.com/search/users?q=${searchName}`
      // 更新状态(请求中)
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''

      // 发ajax请求进行搜索
      axios.get(url).then(
        response => {
          const result = response.data
          // 获取的数据对象的属性与users不一致
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.login
          }))
          // 更新状态(success)
          this.loading = false
          this.users = users
        }).catch(error => {
        // 更新状态(failure)
        this.loading = false
        this.errorMsg = '请求失败'
        console.log(this.errorMsg, error)
      })
    })
  },
  components: {}
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
