<template>
  <div class="t-banner">
    <div class="t-banner-content">
      <div class="t-banner-box" @mouseenter="moseenter" @mouseleave="banner">
        <ul class="t-banner-sliders clearfix">
        <!-- 1 -->
          <li class="t-banner-item" v-for="(item, index) in newLists" :key="index">
            <div class="info-top clearfix">
              <div class="person-avater">
                <img :src="'api/' + item.headpic" v-if="!(item.headpic === undefined)" alt="图片资源错误">
              </div>
              <div class="person-name">
                <span class="info-l">{{item.nickname}}</span>
                <span class="info-r">/ DESIGNER</span>
              </div>
            </div>
            <div class="info-detail">{{item.content}}</div>
          </li>
          <!-- 2 -->
          <!-- <li class="t-banner-item">
            <div class="info-top clearfix">
              <div class="person-avater">
                <img src="../../img/customer_2.png" alt="">
              </div>
              <div class="person-name">
                <span class="info-l">ADAM</span>
                <span class="info-r">/ DESIGNER</span>
              </div>
            </div>
            <div class="info-detail">
              “Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo conequat ”
            </div>
          </li> -->
          <!-- 3 -->
          <!-- <li class="t-banner-item">
            <div class="info-top clearfix">
              <div class="person-avater">
                <img src="../../img/customer_1.png" alt="">
              </div>
              <div class="person-name">
                <span class="info-l">ADAM</span>
                <span class="info-r">/ DESIGNER</span>
              </div>
            </div>
            <div class="info-detail">
              “Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo conequat ”
            </div>
          </li> -->
          <!-- 4 -->
          <!-- <li class="t-banner-item">
            <div class="info-top clearfix">
              <div class="person-avater">
                <img src="../../img/customer_2.png" alt="">
              </div>
              <div class="person-name">
                <span class="info-l">ADAM</span>
                <span class="info-r">/ DESIGNER</span>
              </div>
            </div>
            <div class="info-detail">
              “Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo conequat ”
            </div>
          </li> -->
        </ul>
        <ul class="btn-group">
          <li class="btn-item" @click="isClicked(0)" :class="{on:index === 0}"></li>
          <li class="btn-item" @click="isClicked(1)" :class="{on:index === 1}"></li>
          <li class="btn-item" @click="isClicked(2)" :class="{on:index === 2}"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      index: 0,
      timer: null,
      carouselItem: '',
      carouselSlide: '',
      newLists: []
    }
  },
  methods: {
    banner () {
      // 获取轮播盒子
      let carouselSlide = document.querySelector('.t-banner-sliders')
      // 获取所有轮播的项目
      let carouselItem = document.querySelectorAll('.t-banner-item')
      this.carouselItem = carouselItem
      this.carouselSlide = carouselSlide
       // 获取轮播项目的长度
      let itemLength = carouselItem.length
      // 获取轮播盒子的宽度
      carouselSlide.style.width = parseInt(carouselItem[0].clientWidth) * itemLength + 'px'
      // 获取轮播盒子的宽度
      this.timer = setInterval(() => {
        this.index++
        if (this.index > carouselItem.length - 2) {
         this.index = 0
        }
        carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
      }, 3000)
    },
    moseenter () {
      clearInterval(this.timer)
    },
    isClicked (index) {
      this.index = index
      let carouselSlide = document.querySelector('.t-banner-sliders')
      let carouselItem = document.querySelectorAll('.t-banner-item')
      this.carouselItem = carouselItem
      this.carouselSlide = carouselSlide
      carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * index + 'px'
    }
  },
  mounted () {
    this.banner()
    window.onresize = () => {
      if (document.body.clientWidth < 1200 && document.body.clientWidth >= 992) {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 2 + 'px'
        })
      } else if (document.body.clientWidth < 992 && document.body.clientWidth >= 767) {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 2 + 'px'
        })
      } else if (document.body.clientWidth < 767 && document.body.clientWidth >= 576) {
          this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 1 + 'px'
        })
      } else {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 1 + 'px'
        })
      }
    }
    // axios({
    //   method: 'get',
    //   url: 'api/comments'
    // }).then((res) => {
    //   if (res.status === 200) {
    //     let customerLists = res.data.data
    //     this.newLists = customerLists
    //     console.log(this.newLists)
    //   }
    // }).catch((error) => {
    //   console.log(error)
    // })
  }
}
</script>
<style lang="less" scoped>
@import '../../less/home1-personbanner.less';
</style>
