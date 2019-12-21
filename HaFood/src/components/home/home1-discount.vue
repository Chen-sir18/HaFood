<template>
  <div class="discount-area">
    <div class="discount-area-box">
      <div class="discount-item">
        <div class="discount-item-left bg-item">
          <div class="discount-title">
            <p class="discount-title-top">100% NATURAL</p>
            <p class="discount-title-bottom">From the farm</p>
          </div>
        </div>
        <div class="discount-item-right bg-item">
          <div class="discount-title">
            <p class="discount-title-top">SALE OFF</p>
            <p class="discount-title-bottom">Extra 20% Off</p>
          </div>
          <!-- 按钮 -->
          <a class="main-btn">
            <a @click="toDetail">SHOP NOW</a>
            <span class="hover-status"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail () {
      this.$router.replace('/ProductDetails')
    }
  }
}
</script>

<style>

</style>
