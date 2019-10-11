<template>
  <div>
    <el-button type="text" @click="open">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import visiable from './visiable'
export default {
  // MyLoading 和 MyDialog 都引入visible，但两者不会相互影响
  mixins: [visiable],
  name: 'MyDialog',
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？').then(_ => { done() }).catch(_ => {})
    }
  }
}
</script>
<style scoped>
</style>
