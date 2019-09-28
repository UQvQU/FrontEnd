<script type="text/ecmascript-6">
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number
    },
    offset: {
      type: Number
    }
  },
  render (h) {
    let parent = this.$parent
    let jiange = parent.jiange
    // 获取jiange后可通过css设置col之间的间隔
    console.log(parent, jiange)
    return h(
      this.tag,
      {
        class: ['el-col', `el-col-span-${this.span}`, `el-col-offset-${this.offset}`]
      },
      this.$slots.default
    )
  }
}
</script>
<style scoped lang="scss">
.el-col{
  border: 1px solid #000;
}
@for $i from 0 through 24 {
  .el-col-span-#{$i} {
    flex: 0 0 (1 / 24 * $i * 100) * 1%;
  }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
</style>
