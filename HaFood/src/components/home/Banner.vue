<template>
  <div>
    <div class="banner-box"
    v-for="(item, index) in bannerSliders"
    :key="index" v-bind:style="{ 'background-image': 'url(' + item.bgurl + ')'}"
    >
    <!-- <div class="banner-box"> -->
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
      bannerSliders: [],
      firstBanner: [
        {
          bgurl: require('../../img/banner_bg.jpg')
        },
        {
          bgurl: require('../../img/banner_bg_2.jpg')
        },
        {
          bgurl: require('../../img/banner_bg_3.jpg')
        }
      ],
      bannerShape: {},
      firstBannerShape: {
        imgurl: require('../../img/banner_shape.png')
      },
      secondBanner: [
        {
          bgurl: require('../../img/banner_bg_2.jpg')
        },
        {
          bgurl: require('../../img/banner_bg_4.jpg')
        },
        {
          bgurl: require('../../img/banner_bg_5.jpg')
        }
      ],
      secondShape: {
        imgurl: require('../../img/banner_shape_2.png')
      }
    }
  },
  mounted () {
    if (this.$route.fullPath === '/Home1') {
      this.bannerSliders = this.firstBanner
      this.bannerShape = this.firstBannerShape
    } else {
      this.bannerSliders = this.secondBanner
      this.bannerShape = this.secondShape
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../less/banner-top.less';
</style>
