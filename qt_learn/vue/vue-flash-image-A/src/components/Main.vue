<template>
  <div class="main">
    <div class="gauntlet">
      <button>消失</button>
    </div>
    <Content :heroes="heroes" :lostHeroId="lostHeroId"/>
  </div>
</template>
<script type="text/ecmascript-6">
import Content from './Content'
// heroes.js中没有用export default 使用es6模块化
import { heroes } from './heroes'
export default {
  name: '',
  data () {
    return {
      heroes: heroes,
      lostHeroId: []
    }
  },
  components: {
    Content
  },
  methods: {
    disAppear () {
      this.lostHeroId = this.heroes.slice(0).sort(() => 0.5 - Math.random())
        .slice(0, Math.ceil(this.heroes.length / 2))
        .map(hero => hero.id)
    }
  }
}
</script>

<style scoped>

</style>
