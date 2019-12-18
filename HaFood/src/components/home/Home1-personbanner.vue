<template>
  <div class="t-banner">
    <div class="t-banner-content">
      <div class="t-banner-box">
        <ul class="t-banner-sliders clearfix">
        <!-- 1 -->
          <li class="t-banner-item" v-for="(item, index) in newLists" :key="index">
            <div class="info-top clearfix">
              <div class="person-avater">
                <img :src="'http://192.168.97.241:3000/' + item.headpic" alt="图片资源错误">
              </div>
              <div class="person-name">
                <span class="info-l">{{item.nickname}}</span>
                <span class="info-r">/ DESIGNER</span>
              </div>
            </div>
            <div class="info-detail">{{item.content}}</div>
          </li>

        </ul>
        <ul class="btn-group">
          <li class="btn-item" v-if="a !== (newLists.length - 1)" v-for="(item, a) in newLists" :key="a" @click="isClicked(a)" :class="{on: index === a}"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      index: 0,
      timer: null,
      carouselItem: '',
      carouselSlide: '',
      newLists: [
      ]
    }
  },
  methods: {
    banner (carouselItem) {
      // 获取轮播盒子
      let carouselSlide = document.querySelector('.t-banner-sliders')
      // 获取所有轮播的项目
      // console.log(carouselItem.length)
      this.carouselItem = carouselItem
      this.carouselSlide = carouselSlide
       // 获取轮播项目的长度
      let itemLength = carouselItem.length
      // 获取轮播盒子的宽度
      carouselSlide.style.width = parseInt(carouselItem[0].clientWidth) * (this.newLists.length + 2) + 'px'
      let speed = 2000
      // 获取轮播盒子的宽度
      this.timer = setInterval(() => {
        this.index++
        if (this.index > itemLength - 2) {
          this.index = 0
          speed = 0
          carouselSlide.style.transition = 'none'
        } else if (this.index === 0) {
          speed = 1000
        } else {
          speed = 2000
          carouselSlide.style.transition = 'all 1s'
        }
        carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
      }, speed)
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
    window.onresize = () => {
      if (document.body.clientWidth >= 992) {
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
    axios({
      method: 'get',
      url: 'api/comments'
    }).then((res) => {
      if (res.data.status === 200) {
        let customerLists = res.data.data
        this.newLists = customerLists
        setTimeout(() => {
          this.newLists.forEach((item, index) => {
            let carouselItem = document.querySelectorAll('.t-banner-item')
            // console.log(carouselItem)
            if (index < 2) {
              let liItem = `
            <li class="t-banner-item">
              <div class="info-top clearfix">
                <div class="person-avater">
                  <img src="'http://192.168.97.241:3000/' + {item.headpic}" alt="图片资源错误">
                </div>
                <div class="person-name">
                  <span class="info-l">{item.nickname}</span>
                  <span class="info-r">/ DESIGNER</span>
                </div>
              </div>
              <div class="info-detail">{item.content}</div>
            </li>
            `
            // console.log(carouselItem[0].parentNode)
            carouselItem[0].parentNode.innerHTML = carouselItem[0].parentNode.innerHTML + liItem
            }
            this.banner(carouselItem)
          })
        }, 500)
      }
    }).catch((error) => {
      console.log(error)
      let carouselItem = document.querySelectorAll('.t-banner-item')
      this.banner(carouselItem)
    })
  }
}
</script>
<style lang="less" scoped>
@import '../../less/home1-personbanner.less';
</style>
