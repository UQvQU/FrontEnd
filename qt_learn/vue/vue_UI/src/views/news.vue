<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      newsArr: ['001', '002', '003']
    }
  }
}
</script>

<style scoped>
</style>
