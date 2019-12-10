<template>
  <div class="home-video">
    <div class="home-video-box">
      <div class="home-video-cont">
        <div class="home-video-title">
          <p class="title-top">100% Natural From The Farm</p>
          <p class="title-bottom">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
        <div class="home-video-item">
          <img src="../../img/play_thumb.png" alt="">
          <a class="view-button effect-btn" @click="playVideo">
            <span class="iconfont icon-f10"></span>
          </a>
          <a class="effect-button"></a>
          <!-- 视频播放内容弹出框 -->
          <div class="play-video-cont" v-show="show">
              <div class="video-box">
                <div class="video-item">
                  <video src="https://vdse.bdstatic.com/f9f01321e0b71731547b164c58328855.mp4?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//0154341a0eaf0976544149ed4967abc5b057a640f12e8e75840259fe9b33e837" controls></video>
                  <a class="close-video" @click="playVideo"><span class="iconfont icon-quxiao"></span></a>
                </div>
            </div>
          </div>
        </div>
        <div class="home-video-occupy"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    playVideo () {
      this.show = !this.show
    }
  }
}
</script>

<style>

</style>
