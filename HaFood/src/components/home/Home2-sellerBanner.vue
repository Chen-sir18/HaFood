<template>
  <div class="best-seller-area font-style">
    <div class="best-seller-banner">
      <div class="banner-content">
        <div class="banner-top text-center">
          <a class="banner-title">Best Seller</a>
          <div class="change-btn text-center btn-l" @mouseenter="moseenter"  @mouseleave="banner" @click="isClicked(-1)">
            <a class="iconfont icon-shangyiye1-copy"></a>
          </div>
          <div class="change-btn text-center btn-r" @mouseenter="moseenter"  @mouseleave="banner" @click="isClicked(1)">
            <a class="iconfont icon-xiayiye"></a>
          </div>
        </div>
        <!-- 轮播 -->
        <div class="banner-box" >
          <ul class="banner-sliders">
            <li class="banner-item" v-for="(item, index) in bannerLists" :key="index">
              <div class="banner-item-detail">
                <img :src="item.imgPath" alt="图片资源错误">
                <p class="goods-name">{{item.goodsName}}</p>
                <span class="now-price">{{item.nowPrice}}</span>
                <span class="past-price">{{item.pastPrice}}</span>
              </div>
            </li>
          </ul>
        </div>
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
      bannerLists: [
        {
          imgPath: require('../../img/seller_1.jpg'),
          goodsName: 'Banana',
          nowPrice: '$15.00',
          pastPrice: '$18.00'
        },
        {
          imgPath: require('../../img/seller_2.jpg'),
          goodsName: 'fdjag',
          nowPrice: '$15.00',
          pastPrice: '$18.00'
        },
        {
          imgPath: require('../../img/seller_3.jpg'),
          goodsName: 'gdfsagas',
          nowPrice: '$15.00',
          pastPrice: '$18.00'
        },
        {
          imgPath: require('../../img/seller_4.jpg'),
          goodsName: 'gsga',
          nowPrice: '$15.00',
          pastPrice: '$18.00'
        },
        {
          imgPath: require('../../img/seller_1.jpg'),
          goodsName: 'Banana',
          nowPrice: '$15.00',
          pastPrice: '$18.00'
        }
      ]
    }
  },
  methods: {
    banner () {
      let carouselSlide = document.querySelector('.banner-sliders')
      let carouselItem = document.querySelectorAll('.banner-item')
      this.carouselItem = carouselItem
      this.carouselSlide = carouselSlide
      let itemLength = this.bannerLists.length + 1
      console.log(itemLength)
      carouselSlide.style.width = parseInt(carouselItem[0].clientWidth) * itemLength + 'px'
      if (this.index === itemLength - 4) {
        this.index = 0
      }
      this.timer = setInterval(() => {
        // console.log(getComputedStyle(this.carouselSlide).marginLeft)
        carouselSlide.style.transition = 'all 0.5s'
        this.index++
        if (this.index >= this.carouselItem.length - 4) {
         this.index = this.carouselItem.length - 9
         carouselSlide.style.transition = 'all 0s'
        }
        carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
      }, 3000)
    },
    moseenter () {
      clearInterval(this.timer)
    },
    isClicked (num) {
      let carouselSlide = document.querySelector('.banner-sliders')
      let carouselItem = document.querySelectorAll('.banner-item')
      // if (this.index <= 0) {
      //   console.log(this.index)
      //   this.index = 4
      //   this.carouselSlide.style.transition = 'all 0s'
      //   carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * 4 + 'px'
      // } else {
      //   this.index += num
      //   this.carouselSlide.style.transition = 'all 0.5s'
      // }
      this.index += num
      this.carouselSlide.style.transition = 'all 0.5s'
      carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
      setTimeout(() => {
        if (this.index <= 0) {
          this.index = this.bannerLists.length - 2 * 4 - 1
          this.carouselSlide.style.transition = 'all 0s'
          carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
        } else if (this.index >= this.bannerLists.length - 5) {
          this.index = this.bannerLists.length - 9
          this.carouselSlide.style.transition = 'all 0s'
          carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
        }
      }, 500)
    }
  },
  mounted () {
    let changewidth = () => {
      let screenwidth = document.body.clientWidth || document.documentElement.clientWidth
      let bannerlistsafter = this.bannerLists.slice(this.bannerLists.length - 4)
      let bannerlistsbefore = this.bannerLists.slice(0, 4)
      let bannerlists = this.bannerLists.concat(bannerlistsafter)
      this.bannerLists = bannerlistsbefore.concat(bannerlists)
      setTimeout(() => {
        this.banner()
        if (screenwidth >= 992) {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 4 + 'px'
        })
        this.index = 4
        this.carouselSlide.style.marginLeft = -parseInt(this.carouselItem[0].clientWidth) * 4 + 'px'
      } else if (screenwidth < 992 && screenwidth >= 767) {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 4 + 'px'
        })
        this.carouselSlide.style.marginLeft = -parseInt(this.carouselItem[0].clientWidth) * 4 + 'px'
      } else if (screenwidth < 767 && screenwidth >= 576) {
          this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 3 + 'px'
        })
        this.carouselSlide.style.marginLeft = -parseInt(this.carouselItem[0].clientWidth) * 4 + 'px'
      } else {
        this.carouselItem.forEach(item => {
          console.log(this.carouselSlide.parentNode.clientWidth)
          item.style.width = this.carouselSlide.parentNode.clientWidth / 2 + 'px'
        })
        this.carouselSlide.style.marginLeft = -parseInt(this.carouselItem[0].clientWidth) * 4 + 'px'
      }
      }, 10)
    }
    changewidth()
    window.onresize = () => {
      changewidth()
    }
    // axios({
    //   method: 'get',
    //   url: 'api/bestseller'
    // }).then((res) => {
    //   let sellerLists = res.data.data
    //   this.bannerLists = sellerLists
    // }).catch((error) => {
    //   console.log(error)
    // })
  }
}
</script>

<style lang="less" scoped>
@import '../../less/home1-bestseller.less';
</style>
