<template>
  <div class="subMenu">
    <span @click="change">
      <i v-if="!isShow">+</i>
      <i v-else>-</i>
      <slot name="title"></slot>
    </span>
    <ul v-if="isShow">
      <slot></slot>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      isShow: false
    }
  },
  components: {},
  methods: {
    change () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="stylus">
.subMenu {
  span {
    display: block;
    padding: 5px;
    background: #4cb4e7;
    color: #fff;
    border-bottom: 1px solid #fff;
    position: relative;
    i{
      position: absolute;
      right:10px;
      bottom:5px;
      font-style:normal;
      font-weight: bold;
    }
  }
  ul {
    background: #e2dbb2;
    width: 100%;
    padding-inline-start: 0
    text-align: center;
  }
  li {
    list-style: none
    width: 100%;
  }
}
</style>
