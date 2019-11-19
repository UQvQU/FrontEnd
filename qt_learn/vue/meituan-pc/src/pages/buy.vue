<template>
  <div class="">
    buy{{num}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      num: this.$route.query.num
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
</style>
