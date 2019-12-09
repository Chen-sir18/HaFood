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
  </div>
</template>

<script>
import Banner from './Banner.vue'
import ProductTop from './Product-top.vue'
import ProductGeneral from './General-product.vue'
import Video from './Home1-video.vue'
import DiscountArea from './home1-discount.vue'
export default {
  components: {
    Banner,
    ProductTop,
    ProductGeneral,
    Video,
    DiscountArea
  }
}
</script>

<style lang="less">
@import '../../less/reset.less';
@import '../../less/public.less';
@import '../../font/iconfont.css';
@import '../../less/home1-index.less';
</style>
