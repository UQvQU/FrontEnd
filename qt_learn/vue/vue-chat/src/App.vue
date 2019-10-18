<template>
  <div id="app">
    <thread-section/>
    <message-section/>
  </div>
</template>

<script>
import ThreadSection from './components/ThreadSection'
import MessageSection from './components/MessageSection'
export default {
  name: 'App',
  components: {
    ThreadSection,
    MessageSection
  },
  mounted () {
    this.$store.dispatch('getAllMessages')
  }

}
</script>

<style>
@import "./css/chat.css";
</style>
