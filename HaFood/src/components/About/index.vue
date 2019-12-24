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
          <personbanner ref="personbanner"></personbanner>
        </div>
        <AboutTeam></AboutTeam>
    </div>
</template>

<script>
import personbanner from '../home/Home1-personbanner'
import bannerShape from '../../img/banner_shape.png'
import FreshFruits from './fresh-fruits'
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
    AboutTeam,
    personbanner
  },
  mounted: function () {
    window.onresize = () => {
      if (this.$route.fullPath === '/AboutUs') {
        let personbanner = this.$refs.personbanner
        personbanner.carouse()
      }
    }
    document.addEventListener('webkitvisibilitychange', () => {
		// 浏览器是否隐藏  隐藏hidden  显示visible
    var isHidden = document.hidden || document.webkitVisibilityState === 'hidden'
    let personbanner = this.$refs.personBanner
		if (isHidden) {
			clearInterval(personbanner.interval)
		} else {
      personbanner.carouseinterval(personbanner.showcount)
		}
	})
  }
}
</script>

<style lang="less">
  @import '../../less/about.less';
  @import '../../less/about-banner.less';
</style>
