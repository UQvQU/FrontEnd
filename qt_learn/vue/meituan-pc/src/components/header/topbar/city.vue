<template>
  <div class="city">
    <i class="el-icon-location">南昌</i>
    <router-link to="/changecity" class="changeCity">切换城市</router-link>
    [奉新 共青城 丰城]
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.city
  color #666
  font-size 12px
  .changeCity
    background: #F4F4F4;
    border: 1px solid #E5E5E5;
    border-radius: 2px;
    color: #666;
    margin: 0 4px;
    padding: 0 2px;
    &:hover
      color: #fe8c00
</style>
