<template>
  <div id="app" class="container">
    <Nav v-if="isShowNav"></Nav>
    <div class="layout">
      <router-view />
      <Slider v-if="isShowNav"/>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Slider from '@/components/Slider.vue'
import Nav from '@/components/nav.vue';

@Component({
  components: {
    Nav,
    Slider
  },
})

export default class App extends Vue {
  private isShowNav: boolean = false;

  @Watch('$route')
  routeChange(val, oldVal) {
    if (val.path === '/'){
      console.log('false')
      this.isShowNav = false
    } else {
      console.log('true')
      this.isShowNav = true
    }
  }
}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{}
.layout{
  display: flex;
  justify-content: space-around;
}
.slider{
  flex: 0 0 300px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
