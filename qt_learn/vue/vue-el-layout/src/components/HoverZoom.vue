<template>
  <div class="zoom">
    <div class="smallbox" @mousemove="mouseMove" @mouseout="mouseOut" @mouseover="mouseOver">
      <img :src="smallSrc" alt="">
      <div class="mask" :style="{width: '210px', height:'210px', opacity:0.6, backgroundColor: 'rgba(25, 122, 255, .5)'}"></div>
    </div>
    <div class="bigbox">
      <div :style="{width: '430px', height: '430px'}">
        <img :src="bigSrc" :style="{width: '800px', height: '800px'}" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smallSrc: {type: String},
    bigSrc: {type: String}
  },
  methods: {
    mouseOver () {},
    mouseMove (e) {
      const x = e.clientX
      const y = e.clientY
      let maskX = x - 210 / 2
      let maskY = y - 210 / 2
      maskX = maskX < 0 ? 0 : maskX
      maskY = maskY < 0 ? 0 : maskY
      const smallboxRect = document.querySelector('.smallbox img').getBoundingClientRect()
      if (maskX + 210 >= smallboxRect.width) {
        maskX = smallboxRect.width - 210
      }
      if (maskY + 210 >= smallboxRect.height) {
        maskY = smallboxRect.height - 210
      }
      console.log(maskX, maskY)
      const mask = document.querySelector('.mask')
      mask.style.transform = `translate(${maskX}px, ${maskY}px)`
      // (800 - 430) / (430 - 210)
      const bigboxMove = document.querySelector('.bigbox div img')
      bigboxMove.style.left = -maskX * ((800 - 430) / (430 - 210)) + 'px'
      bigboxMove.style.top = -maskY * ((800 - 430) / (430 - 210)) + 'px'
    },
    mouseOut () {}
  }
}
</script>

<style scoped>
.smallbox {
  display: inline-block;
  position: absolute;
  /* overflow: hidden; */
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
}
.bigbox {
  margin-left: 430px;
  position: absolute;
  /* overflow: hidden; */
}
.bigbox div{
  position: absolute;
  overflow: hidden;
}
.bigbox div img{
  position: absolute;
}
</style>
