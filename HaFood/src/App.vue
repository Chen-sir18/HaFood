<template>
  <div id="app">
  	<Nav></Nav>
    <div class="body" style="height:1000px;width:100%;">
      <img src="./img/banner_bg_2.jpg" style="height:1000px;width:100%;">
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Nav from './components/public/Nav.vue'
import Bottom from './components/public/bottom.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Bottom
  }
}
</script>
<style>
</style>
