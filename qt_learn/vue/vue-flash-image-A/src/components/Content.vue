<template>
  <div class="content">
    <div :id="hero.id" v-for="hero in heroes" :key="hero.id" >
      <div class="item">
        <div class="avatar">
          <img :src="hero.src" alt="" />
        </div>
        <div class="info">{{hero.name}}</div>
      </div>
    </div>
    <DestoryHero v-for="id in lostHeroId" :key="id"/>
    <p>html2canvas 演示</p>
    <div id="good">
      <p>100元</p>
      <p>砍一刀</p>
    </div>
    <div id="anotherGood">
      <canvas></canvas>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import html2canvas from 'html2canvas'
export default {
  props: {
    heroes: Array,
    lostHeroId: Array
  },
  name: '',
  data () {
    return {}
  },
  mounted () {
    const good = document.getElementById('good')
    this.convertImg(good)
  },
  components: {

  },
  methods: {
    convertImg (good) {
      html2canvas(good).then($canvas => {
        document.body.appendChild($canvas)
        const ctx = $canvas.getContext('2d')
        const {width, height} = $canvas
        // 获取像素点
        const originalData = ctx.getImageData(0, 0, width, height)
        console.log(width, height, originalData)

        const anotherCanvas = document.querySelector('#anotherGood canvas')
        const ctx2 = anotherCanvas.getContext('2d')
        const imgData = ctx2.createImageData(width, height)
        console.log(imgData)
        // 复制
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const index = (y * width + x) * 4
            for (let offset = 0; offset < 4; offset++) {
              imgData.data[index + offset] = originalData.data[index + offset]
            }
          }
        }
        ctx2.putImageData(imgData, 0, 0)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  scroll-behavior: smooth;
  position: relative;
  .item {
    flex: 1;
    height: 260px;
    margin: 10px;
    border: 1px solid #cecece;
    text-align: center;
    box-sizing: border-box;
    .avatar img {
      width: 200px;
      height: 200px;
    }
    .info {
      height: 30px;
      line-height: 30px;
    }
  }
}

</style>
