<template>
  <div>
    <input type="text" name="name" v-model="name">
    <input type="password" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      // restful 风格的 api
      axios.post('/api/v1/login', {
        name: this.name,
        password: this.password
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
</style>
