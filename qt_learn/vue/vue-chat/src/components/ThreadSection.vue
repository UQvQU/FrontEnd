<template>
  <div>
    <ul class="thread-list">
      <thread v-for="thread in threads" :key="thread.id" :thread="thread" :active="thread.id === currentThread.id" @switch-thread="switchThread"/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapActions, mapGetters} from 'vuex'
import Thread from './Thread'
export default {
  name: '',
  data () {
    return {

    }
  },
  computed: mapGetters(['threads', 'currentThread']),
  methods: mapActions(['switchThread']),
  components: {Thread}
}
</script>

<style scoped>
</style>
