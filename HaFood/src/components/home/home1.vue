<template>
  <div class="home-content">
    <!-- 顶部Banner -->
      <Banner></Banner>
      <!-- 圆形产品 -->
      <ProductTop></ProductTop>
      <!-- 通用产品模块 -->
      <ProductGeneral></ProductGeneral>
      <!-- 视频播放 -->
      <Video></Video>
      <!-- 商标自动轮播 -->
      <AutoBanner></AutoBanner>
      <!-- Best Seller Banner -->
      <SellerBanner ref='sellerBanner'></SellerBanner>
      <!-- 点击去到product页面 -->
      <DiscountArea></DiscountArea>
      <!-- 人物轮播 -->
      <PersonBanner ref='personBanner'></PersonBanner>
      <!-- LatestNews -->
      <LatestNews></LatestNews>
      <!-- 底部产品 -->
      <HomeBottom></HomeBottom>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import ProductTop from './Product-top.vue'
import ProductGeneral from './General-product.vue'
import AutoBanner from './Home1-autoBanner'
import Video from './Home1-video.vue'
import SellerBanner from './Home2-sellerBanner.vue'
import DiscountArea from './Home1-discount.vue'
import PersonBanner from './Home1-personbanner.vue'
import LatestNews from './LatestNews.vue'
import HomeBottom from './Home1-bottom.vue'

export default {
  components: {
    Banner,
    ProductTop,
    ProductGeneral,
    AutoBanner,
    SellerBanner,
    Video,
    DiscountArea,
    PersonBanner,
    LatestNews,
    HomeBottom
  },
  mounted: function () {
    window.onresize = () => {
      if (this.$route.fullPath === '/Home1') {
        let sellerbanner = this.$refs.sellerBanner
        let personbanner = this.$refs.personBanner
        sellerbanner.carouse()
        personbanner.carouse()
      }
    }
    document.addEventListener('webkitvisibilitychange', () => {
    // 浏览器是否隐藏  隐藏hidden  显示visible
    var isHidden = document.hidden || document.webkitVisibilityState === 'hidden'
    let personbanner = this.$refs.personBanner
    let sellerbanner = this.$refs.sellerBanner
      if (isHidden) {
        clearInterval(personbanner.interval)
        clearInterval(sellerbanner.interval)
      } else {
        personbanner.carouseinterval(personbanner.showcount)
        sellerbanner.carouseinterval(sellerbanner.showcount)
      }
    })
  }
}
</script>

<style lang="less">
@import '../../less/home-index.less';
</style>
