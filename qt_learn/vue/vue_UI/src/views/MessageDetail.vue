<template>
  <div>
    <p>ID: {{this.$route.params.id}}</p>
    <ul>
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    const allMessageDetails = [
      {
        id: 1,
        title: 'm1',
        content: 'm1 content......'
      },
      {
        id: 2,
        title: 'm2',
        content: 'm2 content......'
      },
      {
        id: 3,
        title: 'm3',
        content: 'm3 content......'
      }
    ]

    this.allMessageDetails = allMessageDetails
    const id = this.$route.params.id * 1
    console.log(id)
    this.messageDetail = allMessageDetails.find(detail => detail.id === id)
  },
  watch: {
    // 路由路径（param）发生改名
    $route: function (value) {
      const id = value.params.id * 1
      this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
    }
  }
}
</script>

<style scoped>
</style>
