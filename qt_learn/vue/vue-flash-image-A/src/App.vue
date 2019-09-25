<template>
<!-- https://yiliang114.github.io/vue-thanos-snap/index.html -->
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0 150px;
}
</style>
