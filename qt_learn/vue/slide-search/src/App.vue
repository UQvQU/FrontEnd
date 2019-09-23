<template>
  <div id="app">
    <SlideSearch :showSearchPage="showSearchPage"/>
    <ul class="main">
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SlideSearch from './components/SlideSearch/index'
export default {
  name: 'App',
  data () {
    return {
      showSearchPage: false
    }
  },
  components: {
    HelloWorld,
    SlideSearch
  },
  mounted: function () {
    const ul = document.querySelector('.main')
    ul.addEventListener('scroll', () => {
      if (ul.scrollTop === 0) {
        this.showSearchPage = false
      }
      if (ul.scrollTop > 10) {
        this.showSearchPage = true
      }
    })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul{
  height: calc(100vh - 94px);
  overflow: scroll;
}
li{
  margin-top: 20px;
}
</style>
