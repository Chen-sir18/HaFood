<template>
  <div class="trending-box">
    <div class="trending-title-box">
      <div class="trending-title font-style">
        <div class="trending-title-l">
          <p class="best-seller">BEST SELLER</p>
          <p class="trending-foods">Trending Foods</p>
        </div>
        <ul class="trending-title-r clearfix">
          <li class="trending-tip"><a class="trending-nav-link">SALADS</a></li>
          <li class="trending-tip"><a class="trending-nav-link">DESSERTS</a></li>
          <li class="trending-tip"><a class="trending-nav-link">DRINKS</a></li>
          <li class="trending-tip"><a class="trending-nav-link">PASTA</a></li>
          <li class="trending-tip"><a class="trending-nav-link">PIZZASS</a></li>
        </ul>
      </div>
    </div>
    <div class="trending-content">
      <Ttrending></Ttrending>
    </div>
  </div>
</template>

<script>
import Ttrending from './General-product.vue'
export default {
  components: {
    Ttrending
  }
}
</script>

<style>

</style>
