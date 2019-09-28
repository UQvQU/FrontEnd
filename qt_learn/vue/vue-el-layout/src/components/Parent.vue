<template>
  <MyChild/>
</template>

<script>
import MyChild from './Child'
export default {
  name: 'Parent',
  components: {
    MyChild
  },
  provide () {
    return {
      theme: 'red'
    }
  }
}
</script>

<style>

</style>
