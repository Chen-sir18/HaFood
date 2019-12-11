<template>
  <div>
      <BannerArea></BannerArea>
      <FourFall></FourFall>
      <Daily></Daily>
      <Tea></Tea>
      <BestSeller></BestSeller>
      <Reserve></Reserve>
      <Latest></Latest>
  </div>
</template>

<script>
import BannerArea from './banner-area'
import FourFall from './four-fall'
import Daily from './daily'
import Tea from './tea'
import BestSeller from './best-seller'
// import BestSeller './best-seller'
import Reserve from './reserve'
import Latest from './latest'
export default {
  components: {
    BannerArea,
    FourFall,
    Daily,
    Tea,
    BestSeller,
    Reserve,
    Latest
  }
}
</script>
<style lang="less" scope="scope">
@import '../../less/homeFour.less';
</style>
