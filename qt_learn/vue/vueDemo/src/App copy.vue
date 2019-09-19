<template>
  <div v-if="!repoUrl">loading</div>
  <div v-else>most star repo is
    <a :href="repoUrl">{{repoName}}</a>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    // 使用vue-resource 发Ajax请求获取数据
    // 查询vue&按stars排序的repositories(仓库)
    const url = `https://api.github.com/search/repositories?q=vue&sort=stars`
    // promise 风格
    // this.$http.get(url).then(
    //   response => {
    //     // success
    //     const result = response.data
    //     // 获取第一个repositories
    //     const mostRepo = result.items[0]
    //     this.repoUrl = mostRepo.html_url
    //     this.repoName = mostRepo.name
    //   },
    //   response => {
    //     // failure
    //     alert('请求失败1')
    //   }
    // )

    // 使用axios发送ajax请求
    axios.get(url).then(
      response => {
        // success
        const result = response.data
        // 获取第一个repositories
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(error => { alert('请求失败2', error) })
  },
  components: {}
}
</script>

<style scoped>

</style>
