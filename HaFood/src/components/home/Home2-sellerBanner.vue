<template>
  <div class="best-seller-area font-style">
    <div class="best-seller-banner">
      <div class="banner-content">
        <div class="banner-top text-center">
          <a class="banner-title">Best Seller</a>
          <div class="change-btn text-center btn-l" @mouseenter="stopinterval" @mouseleave="reinterval" @click="clickbtn(-1)">
            <a class="iconfont icon-shangyiye1-copy"></a>
          </div>
          <div class="change-btn text-center btn-r" @mouseenter="stopinterval" @mouseleave="reinterval" @click="clickbtn(1)">
            <a class="iconfont icon-xiayiye"></a>
          </div>
        </div>
        <!-- 轮播 -->
        <div class="banner-box" >
          <ul class="banner-sliders">
            <li class="banner-item" v-for="(item, index) in newLists" :key="index">
              <div class="banner-item-detail">
                <img :src="'api/' + item.picstr" v-if="!(item.picstr === undefined)" alt="图片资源错误">
                <p class="goods-name"><a @click="toDetail">{{item.goodsname}}</a></p>
                <span class="now-price">{{item.price}}</span>
                <!-- <span class="past-price">{{item.pastPrice}}</span> -->
              </div>
            </li>
          </ul>
        </div>
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
      marginleftindex: 0,
      newLists: [
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
      ],
      interval: '',
      showcount: ''
    }
  },
  methods: {
     // 调整根据不同的屏，调整渲染的长度
    changenewslist (showcount) {
      let newLists = this.newLists
      let newListsafter = newLists.slice(newLists.length - showcount)
      let newListsbefore = newLists.slice(0, showcount)
      newLists = newLists.concat(newListsbefore)
      newLists = newListsafter.concat(newLists)
      this.newLists = newLists
    },
    // 调整轮播内容的宽度
    changeitemwidth (showcount) {
      this.carouselSlide = document.querySelector('.banner-sliders')
      this.carouselItem = document.querySelectorAll('.banner-item')
      this.carouselItem.forEach(item => {
        item.style.width = this.carouselSlide.parentNode.clientWidth / showcount + 'px'
      })
      this.carouselSlide.style.width = this.carouselItem[0].clientWidth * this.newLists.length + 'px'
    },
    // 轮播的初始位置
    startmarginleft (showcount) {
      this.marginleftindex = showcount
      this.carouselSlide.style.marginLeft = -parseInt(this.carouselItem[0].clientWidth) * showcount + 'px'
    },
     // 轮播定时器
    carouseinterval (showcount) {
      this.showcount = showcount
      let speed = 1
      this.interval = setInterval(() => {
        this.marginleftindex++
        this.move = setInterval(() => {
          this.carouselSlide.style.marginLeft = parseInt(this.carouselSlide.style.marginLeft) - speed + 'px'
          if (parseInt(this.carouselSlide.style.marginLeft) <= -this.marginleftindex * this.carouselItem[0].clientWidth) {
            clearInterval(this.move)
          }
          if (parseInt(this.carouselSlide.style.marginLeft) <= -(this.carouselItem.length - showcount) * this.carouselItem[0].clientWidth) {
            this.marginleftindex = showcount
            this.startmarginleft(showcount)
          }
        }, 1)
      }, 3000)
    },
    // 按钮悬停时，关闭定时器
    stopinterval () {
      clearInterval(this.interval)
    },
    // 按钮移出,重启定时器
    reinterval () {
      this.carouseinterval(this.showcount)
    },
    // 点击按钮切换轮播
    clickbtn (num) {
      this.marginleftindex += num
      let speed = 0
      if (num > 0) {
        speed = 1
        this.move = setInterval(() => {
          this.carouselSlide.style.marginLeft = parseInt(this.carouselSlide.style.marginLeft) - speed + 'px'
          if (parseInt(this.carouselSlide.style.marginLeft) <= -this.marginleftindex * this.carouselItem[0].clientWidth) {
            clearInterval(this.move)
          }
          if (parseInt(this.carouselSlide.style.marginLeft) <= -(this.carouselItem.length - this.showcount) * this.carouselItem[0].clientWidth) {
            this.marginleftindex = this.showcount
            this.startmarginleft(this.showcount)
          }
        }, 1)
      } else {
        speed = -1
        this.move = setInterval(() => {
          this.carouselSlide.style.marginLeft = parseInt(this.carouselSlide.style.marginLeft) - speed + 'px'
          if (parseInt(this.carouselSlide.style.marginLeft) >= -this.marginleftindex * this.carouselItem[0].clientWidth) {
            clearInterval(this.move)
          }
          if (parseInt(this.carouselSlide.style.marginLeft) >= 0) {
            this.marginleftindex = this.carouselItem.length - 2 * this.showcount
            this.startmarginleft(this.carouselItem.length - 2 * this.showcount)
          }
        }, 1)
      }
    },
    // 执行轮播的函数
    carouse () {
      clearInterval(this.interval)
      this.newLists = this.renewLists
      if (document.body.clientWidth >= 992) {
        this.changenewslist(4)
        setTimeout(() => {
          this.changeitemwidth(4)
          this.startmarginleft(4)
          this.carouseinterval(4)
        }, 10)
      } else if (document.body.clientWidth < 992 && document.body.clientWidth >= 767) {
        this.changenewslist(4)
        setTimeout(() => {
          this.changeitemwidth(4)
          this.startmarginleft(4)
          this.carouseinterval(4)
        }, 10)
      } else if (document.body.clientWidth < 767 && document.body.clientWidth >= 576) {
        this.changenewslist(3)
       setTimeout(() => {
          this.changeitemwidth(3)
          this.startmarginleft(3)
          this.carouseinterval(3)
        }, 10)
      } else {
        this.changenewslist(2)
       setTimeout(() => {
          this.changeitemwidth(2)
          this.startmarginleft(2)
          this.carouseinterval(2)
        }, 10)
      }
    },
    // moseenter () {
    //   clearInterval(this.timer)
    // },
    toDetail () {
      this.$router.replace('/ProductDetails')
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'api/bestseller'
    }).then((res) => {
      this.renewLists = res.data.data
      this.newLists = this.renewLists
      this.carouse()
    }).catch((error) => {
      console.log(error)
    })
  },
  activated () {
    // window.onresize = () => {
    //   clearInterval(this.interval)
    //   this.newLists = this.renewLists
    //   this.carouse()
    // }
  }
}
</script>

<style lang="less" scoped>
@import '../../less/home1-bestseller.less';
</style>
