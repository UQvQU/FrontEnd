<template>
<div>
  <h2>About</h2>
  <ul class="nav nav-tabs">
    <li>
      <router-link to="/about/news">News</router-link>
      <router-link to="/about/messages">Messages</router-link>
    </li>
  </ul>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped>
</style>
