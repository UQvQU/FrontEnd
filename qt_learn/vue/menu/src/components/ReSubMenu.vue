<template>
  <!-- 容器组件 -->
  <SubMenu>
    <template #title>{{data.title}}</template>
    <template v-for="child in data.children">
      <MenuItem :key="child.id" v-if="!child.children">
        {{child.title}}
      </MenuItem>
      <ReSubMenu :key="child.id" v-else :data="child"></ReSubMenu>
    </template>
  </SubMenu>
</template>

<script type="text/ecmascript-6">
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
  props: ['data'],
  name: 'ReSubMenu',
  data () {
    return {}
  },
  components: {
    SubMenu,
    MenuItem
  }
}
</script>

<style scoped lang="stylus">
</style>
