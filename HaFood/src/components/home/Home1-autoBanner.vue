<template>
  <div class="auto-banner-area">
    <div class="auto-banner-content">
      <div class="auto-banner-box" @mouseenter="moseenter" @mouseleave="banner">
        <ul class="auto-banner-sliders">
          <li class="auto-slider-item" v-for="(item, index) in branLists" :key="index">
            <img :src="item.imgPath" alt="图片资源错误">
          </li>
        </ul>
      </div>
      <div class="splited"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      timer: null,
      carouselItem: '',
      carouselSlide: '',
      branLists: [
        {
          imgPath: require('../../img/brand_1.png')
        },
        {
          imgPath: require('../../img/brand_2.png')
        },
        {
          imgPath: require('../../img/brand_3.png')
        },
        {
          imgPath: require('../../img/brand_4.png')
        },
        {
          imgPath: require('../../img/brand_5.png')
        },
        {
          imgPath: require('../../img/brand_1.png')
        },
        {
          imgPath: require('../../img/brand_5.png')
        },
        {
          imgPath: require('../../img/brand_1.png')
        },
        {
          imgPath: require('../../img/brand_2.png')
        },
        {
          imgPath: require('../../img/brand_3.png')
        },
        {
          imgPath: require('../../img/brand_4.png')
        },
        {
          imgPath: require('../../img/brand_5.png')
        }
      ]
    }
  },
   methods: {
    banner () {
      // 获取轮播盒子
      let carouselSlide = document.querySelector('.auto-banner-sliders')
      // 获取所有轮播的项目
      let carouselItem = document.querySelectorAll('.auto-slider-item')
      this.carouselItem = carouselItem
      this.carouselSlide = carouselSlide
       // 获取轮播项目的长度
      let itemLength = carouselItem.length
      // 获取轮播盒子的宽度
      carouselSlide.style.width = parseInt(carouselItem[0].clientWidth) * itemLength + 'px'
      // 获取轮播盒子的宽度
      this.timer = setInterval(() => {
        this.index++
        if (this.index > carouselItem.length - 5) {
         this.index = 0
        }
        carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
      }, 3000)
    },
    moseenter () {
      clearInterval(this.timer)
    }
  },
  mounted () {
    this.banner()
    window.onresize = () => {
      if (document.body.clientWidth >= 992) {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 5 + 'px'
        })
      } else if (document.body.clientWidth < 992 && document.body.clientWidth >= 767) {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 4 + 'px'
        })
      } else if (document.body.clientWidth < 767 && document.body.clientWidth >= 576) {
          this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 3 + 'px'
        })
      } else {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 2 + 'px'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../less/home1-autobanner.less';
</style>
