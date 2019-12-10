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
      <!-- 点击去到product页面 -->
      <DiscountArea></DiscountArea>
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
import Video from './Home1-video.vue'
import DiscountArea from './Home1-discount.vue'
import LatestNews from './LatestNews.vue'
import HomeBottom from './Home1-bottom.vue'
export default {
  components: {
    Banner,
    ProductTop,
    ProductGeneral,
    Video,
    DiscountArea,
    LatestNews,
    HomeBottom
  }
}
</script>

<style lang="less">
@import '../../less/home-index.less';
</style>
