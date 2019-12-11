<template>
  <div class="home-content">
    <!-- 顶部Banner -->
      <Banner></Banner>
      <!-- Menu -->
      <Menu></Menu>
      <!-- Trending Foods -->
      <TrendingFood></TrendingFood>
      <!-- Sweei Memories -->
      <!-- <SweetMemory></SweetMemory> -->
      <!-- Our Popular Menu -->
      <PopularMenu></PopularMenu>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Menu from './Home2-menu.vue'
import TrendingFood from './Hom2-trending.vue'
import SweetMemory from './Home2-sweet.vue'
import PopularMenu from './Home2-popular.vue'
export default {
  components: {
    Banner,
    Menu,
    TrendingFood,
    SweetMemory,
    PopularMenu
  }
}
</script>

<style lang="less">
@import '../../less/home-index.less';
@import '../../less/home2-index.less';
</style>
