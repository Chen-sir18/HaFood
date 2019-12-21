<template>
  <div>
      <Banner></Banner>
      <Decript></Decript>
      <Fall></Fall>
      <Tranding></Tranding>
      <Fresh></Fresh>
      <Popular></Popular>
  </div>
</template>

<script>
import Banner from './HomeTbanner'
import Decript from './decript'
import Fall from './fall'
// import Tranding from './Hom2-trending.vue'
import Tranding from './home3-tab'
import Fresh from './fresh'
import Popular from './popular'
export default {
  components: {
    Banner,
    Decript,
    Fall,
    Fresh,
    Tranding,
    Popular
  }
}
</script>
<style lang="less">
// @import '../../less/home-index.less';
// @import '../../less/home2-index.less';
</style>
