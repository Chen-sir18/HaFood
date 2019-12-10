<template>
  <div class="home-content">
    <!-- 顶部Banner -->
      <Banner></Banner>
      <!-- Menu -->
      <Menu></Menu>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Menu from './Home2-Menu.vue'
export default {
  components: {
    Banner,
    Menu
  }
}
</script>

<style lang="less">
@import '../../less/home-index.less';
</style>
