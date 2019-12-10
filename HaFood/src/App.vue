<template>
  <div id="app">
  	<Nav></Nav>
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
