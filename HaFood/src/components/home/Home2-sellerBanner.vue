<template>
  <div class="best-seller-area font-style">
    <div class="best-seller-banner">
      <div class="banner-content">
        <div class="banner-top text-center">
          <a class="banner-title">Best Seller</a>
          <div class="change-btn text-center btn-l" @click="isClicked(-1)">
            <a class="iconfont icon-shangyiye1-copy"></a>
          </div>
          <div class="change-btn text-center btn-r" @click="isClicked(1)">
            <a class="iconfont icon-xiayiye"></a>
          </div>
        </div>
        <div class="banner-box" @mouseenter="moseenter" @mouseleave="banner">
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
      index: 1,
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
      let itemLength = carouselItem.length
      carouselSlide.style.width = parseInt(carouselItem[0].clientWidth) * itemLength + 'px'
      this.timer = setInterval(() => {
        this.index++
        if (this.index > carouselItem.length - 4) {
         this.index = 0
        }
        carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
      }, 4000)
    },
    moseenter () {
      clearInterval(this.timer)
    },
    isClicked (num) {
      this.index += num
      let carouselSlide = document.querySelector('.banner-sliders')
      let carouselItem = document.querySelectorAll('.banner-item')
      this.carouselItem = carouselItem
      this.carouselSlide = carouselSlide
      carouselSlide.style.marginLeft = -parseInt(carouselItem[0].clientWidth) * this.index + 'px'
      if (this.index < 0) {
        this.index = 0
        carouselSlide.style.marginLeft = 0
      }
    }
  },
  mounted () {
    this.banner()
    window.onresize = () => {
      if (document.body.clientWidth < 1200 && document.body.clientWidth >= 992) {
        this.carouselItem.forEach(item => {
          item.style.width = this.carouselSlide.parentNode.clientWidth / 4 + 'px'
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
