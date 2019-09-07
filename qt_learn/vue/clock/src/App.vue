<template>
  <div id="app">
    <Second :second="second"/>
    <Minute/>
    <Hour/>
    <Apm/>
    <Week/>
    <Day/>
    <Month/>
  </div>
</template>

<script>
// @ alias 短链接 指向src
import Second from '@/components/Second.vue'
import Minute from '@/components/Minute.vue'
import Hour from '@/components/Hour.vue'
import Apm from '@/components/Apm.vue'
import Week from '@/components/Week.vue'
import Day from '@/components/Day.vue'
import Month from '@/components/Month.vue'

export default {
  name: 'App',
  data () {
    return {
      second: ''
    }
  },
  components: {
    Second,
    Minute,
    Hour,
    Apm,
    Week,
    Day,
    Month

  },
  methods: {
    start () {
      setInterval(() => {
        let date = new Date();
        this.second = date.getSeconds();
      }, 1000);
    }
  },
  created () {
    this.start();
  }
}
</script>

<style>

</style>
