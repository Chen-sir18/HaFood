<template>
  <div class="memory-area">
    <div class="memory-area-cont">
      <div class="memory-area-item">
        <div class="memory-play">
          <img src="../../img/memories_play.jpg" alt="图片资源错误">
          <a class="memory-readmore" @click="toBlogDetail">Read More</a>
        </div>
        <div class="memory-title">
          <div class="memory-title-detail">
            <p class="memory-title-top">THE BEST RESTAURANT</p>
            <p class="memory-title-bottom">We Create Sweet Memories</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toBlogDetail () {
      this.$router.replace('/BlogDetails')
    }
  }
}
</script>

<style>

</style>
