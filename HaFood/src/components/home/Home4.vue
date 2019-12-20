<template>
  <div>
      <BannerArea></BannerArea>
      <FourFall></FourFall>
      <Daily></Daily>
      <Tea></Tea>
      <HomTrending></HomTrending>
      <Reserve></Reserve>
      <Latest></Latest>
  </div>
</template>

<script>
import BannerArea from './banner-area'
import FourFall from './four-fall'
import Daily from './daily'
import Tea from './tea'
// import HomTrending from './Hom2-trending'
import HomTrending from './home3-tab'
import Reserve from './reserve'
import Latest from './latest'
export default {
  components: {
    BannerArea,
    FourFall,
    Daily,
    Tea,
    HomTrending,
    Reserve,
    Latest
  }
}
</script>
<style lang="less">
@import '../../less/homeFour.less';
// @import '../../less/home2-index.less';
@import '../../less/home3-trending.less';
</style>
