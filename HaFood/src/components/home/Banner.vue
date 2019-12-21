<template>
  <div class="banner-slide-box clearfix">
    <div class="banner-box"
    v-for="(item, id) in bannerSliders"
    :key="id" v-bind:style="{ 'background-image': 'url(' + item.bgurl + ')'}"
    v-show="index === id"
    >
      <div class="banner-cont">
        <h1 class="banner-title">{{item.title}}</h1>
        <p class="main-btn main-button">
          <a @click="toProductGrid" style="color:#fff;">SHOP NOW</a>
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
          title: 'Eat Fresh',
          bgurl: require('../../img/banner_bg.jpg')
        },
        {
          title: 'Eat Fresh',
          bgurl: require('../../img/banner_bg_2.jpg')
        },
        {
          title: 'Eat Fresh',
          bgurl: require('../../img/banner_bg_3.jpg')
        }
      ],
      bannerShape: {},
      firstBannerShape: {
        imgurl: require('../../img/banner_shape.png')
      },
      secondBanner: [
        {
          title: 'fast & tasty',
          bgurl: require('../../img/banner_bg_2.jpg')
        },
        {
          title: 'fast & tasty',
          bgurl: require('../../img/banner_bg_4.jpg')
        },
        {
          title: 'fast & tasty',
          bgurl: require('../../img/banner_bg_5.jpg')
        }
      ],
      secondShape: {
        imgurl: require('../../img/banner_shape_2.png')
      }
    }
  },
  methods: {
    changeBanner (num) {
      this.index += num
      if (this.index < 0) {
        this.index = 2
      } else if (this.index > 2) {
        this.index = 0
      }
    },
    toProductGrid () {
      this.$router.replace('/ProductGrid')
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
