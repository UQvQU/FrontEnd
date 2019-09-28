<script>
export default {
  // <template>
  // <div class="el-row">
  //   <slot></slot>
  // </div>
  // </template>
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    jiange: {
      type: Number
    }
  },
  render (h) {
    // h === createElement
    return h(
      this.tag,
      {
        class: ['el-row']
      },
      this.$slots.default
    )
  }
}
</script>
<style scoped>
.el-row{
  width: 100%;
  display: flex;
}
</style>
