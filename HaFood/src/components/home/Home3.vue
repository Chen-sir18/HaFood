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
import Tranding from './tranding'
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
<style>
</style>
