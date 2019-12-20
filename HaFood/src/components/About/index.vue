<template>
    <div class="aboutus-box">
        <!-- About us 顶部 -->
        <div class="about-us-top about-bg-cover">
            <!-- about us -->
            <div class="about-main-title">
                <h3 class="font-white font-40">About Us</h3>
            </div>
            <!-- Home / About Us -->
            <nav class="small-nav">
                <a class="list font-14">Home</a>
                <span class="list list-secont font-14">About us</span>
            </nav>
            <div class="banner-shape">
                <img :src="bannerShape"/>
            </div>
        </div>
        <!-- Fresh Fruits -->
        <FreshFruits></FreshFruits>
        <!-- about-us-banner -->
        <div class="about-banner-box">
          <AboutBanner></AboutBanner>
        </div>
        <AboutTeam></AboutTeam>
    </div>
</template>

<script>
import bannerShape from '../../img/banner_shape.png'
import FreshFruits from './fresh-fruits'
import AboutBanner from './about-banner'
import AboutTeam from './about-team'
export default {
  data () {
    return {
      // banner波浪图
      bannerShape
    }
  },
  components: {
    FreshFruits,
    AboutBanner,
    AboutTeam
  }
}
</script>

<style lang="less">
  @import '../../less/about.less';
  @import '../../less/about-banner.less';
</style>
