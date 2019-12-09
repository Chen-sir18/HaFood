<template>
  <div>
    <!-- <div class="banner-box"
    v-for="(item, index) in bannerSliders"
    :key="index" v-bind:style="{ 'background-image': 'url(' + item.bgurl + ')'}"
    > -->
    <div class="banner-box">
      <div class="banner-cont">
        <h1 class="banner-title">Eat Fresh</h1>
        <p class="main-btn main-button">
          <span>SHOP NOW</span>
          <span class="hover-status"></span>
        </p>
      </div>
      <div class="left-arrow" @click="changeBanner(-1)">
        <span class="iconfont icon-shangyiye1-copy"></span>
      </div>
      <div class="right-arrow" @click="changeBanner(1)">
        <span class="iconfont icon-xiayiye"></span>
      </div>
      <div class="banner-shape">
        <img :src="bannerShape.imgurl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      bannerSliders: [
        // {
        //   index: 0,
        //   bgurl: require('../../img/banner_bg.jpg')
        // },
        // {
        //   index: 1,
        //   bgurl: require('../../img/banner_bg_2.jpg')
        // },
        // {
        //   index: 2,
        //   bgurl: require('../../img/banner_bg_3.jpg')
        // }
      ],
      bannerShape: {
        imgurl: require('../../img/banner_shape.png')
      }
    }
  },
  methods: {
    changeBanner (num) {
      this.index += num
      console.log(this.index)
    }
  }
}
</script>

<style lang="less">
@import '../../less/home1-banner.less';
</style>
