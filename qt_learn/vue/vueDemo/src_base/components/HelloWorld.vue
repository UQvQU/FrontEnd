<template>
  <div class="hello">
    <p class="massage">{{massage}}</p>
  </div>
</template>

<script>
  export default { //配置对象(与vue一致)
    data () { //组件中必须写成函数形式
      return{
        massage: 'Hello Vue Component'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .massage{
    color: #abe;
    font-size: 30px;
  }
</style>
