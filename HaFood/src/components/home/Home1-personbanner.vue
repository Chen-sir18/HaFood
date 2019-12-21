<template>
  <div class="t-banner">
    <div class="t-banner-content">
      <!-- 轮播可见宽度 -->
      <div class="t-banner-box">
        <!-- 轮播移动盒子 -->
        <ul class="t-banner-sliders clearfix">
        <!-- 每一个小内容 -->
          <li class="t-banner-item" v-for="(item, index) in newLists" :key="index">
            <div class="info-top clearfix">
              <div class="person-avater">
                <img :src="'api/' + item.headpic" alt="图片资源错误">
              </div>
              <div class="person-name">
                <span class="info-l">{{item.nickname}}</span>
                <span class="info-r">/ DESIGNER</span>
              </div>
            </div>
            <div class="info-detail">{{item.content}}</div>
          </li>
        </ul>
        <ul ref="btngroup" @mouseenter="stopinterval" @mouseleave="reinterval" class="btn-group">
          <li  @click="clickbannerbtn" :class="{'btn-item': true, 'on':index === activebtnindex }"  :clickindex = 'index' v-show="index <= btncount - 1"  v-for="(item, index) in renewLists" :key="index"></li>
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
      carouselItem: '',
      carouselSlide: '',
      newLists: [
      ],
      renewLists: [],
      interval: '',
      marginleftindex: 0,
      move: '',
      btncount: 0,
      activebtnindex: 0,
      showcount: 0
    }
  },
  methods: {
    moseenter () {
      // clearInterval(this.timer)
    },
    isClicked (index) {
    },
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
      this.carouselSlide = document.querySelector('.t-banner-sliders')
      this.carouselItem = document.querySelectorAll('.t-banner-item')
      this.allbtn = document.querySelectorAll('.btn-item')
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
      let speed = 10
      this.interval = setInterval(() => {
        this.marginleftindex++
        this.activebtnindex++
        this.move = setInterval(() => {
          this.carouselSlide.style.marginLeft = parseInt(this.carouselSlide.style.marginLeft) - speed + 'px'
          if (parseInt(this.carouselSlide.style.marginLeft) <= -this.marginleftindex * this.carouselItem[0].clientWidth) {
            clearInterval(this.move)
          }
          if (parseInt(this.carouselSlide.style.marginLeft) <= -(this.carouselItem.length - showcount) * this.carouselItem[0].clientWidth) {
            this.marginleftindex = showcount
            this.startmarginleft(showcount)
          }
        }, 10)
        if (this.activebtnindex > this.btncount - 1) {
          this.activebtnindex = 0
        }
      }, 3000)
    },
    // 按钮的个数
    changebtncount (showcount) {
      this.btncount = this.renewLists.length
    },
    // 按钮悬停时，关闭定时器
    stopinterval () {
      clearInterval(this.interval)
    },
    // 按钮移出,重启定时器
    reinterval () {
      this.carouseinterval(this.showcount)
    },
    // 按钮点击事件
    clickbannerbtn (e) {
      let clickindex = parseInt(e.target.getAttribute('clickindex'))
      // 改变按钮的样式
      this.activebtnindex = clickindex
      // 改变轮播的状态
      this.carouselSlide.style.transition = 'all 0.3s'
      this.marginleftindex = parseInt(clickindex) + this.showcount
      this.carouselSlide.style.marginLeft = -this.carouselItem[0].clientWidth * this.marginleftindex + 'px'
      setTimeout(() => {
        this.carouselSlide.style.transition = 'none'
      }, 300)
    },
    // 执行轮播的函数
    carouse () {
      clearInterval(this.interval)
      this.newLists = this.renewLists
      this.activebtnindex = 0
      if (document.body.clientWidth >= 992) {
        this.changenewslist(2)
        setTimeout(() => {
          this.changeitemwidth(2)
          this.startmarginleft(2)
          this.carouseinterval(2)
          this.changebtncount(2)
        }, 10)
      } else if (document.body.clientWidth < 992 && document.body.clientWidth >= 767) {
        this.changenewslist(2)
        setTimeout(() => {
          this.changeitemwidth(2)
          this.startmarginleft(2)
          this.carouseinterval(2)
        }, 10)
      } else if (document.body.clientWidth < 767 && document.body.clientWidth >= 576) {
        this.changenewslist(1)
       setTimeout(() => {
          this.changeitemwidth(1)
          this.startmarginleft(1)
          this.carouseinterval(1)
        }, 10)
      } else {
        this.changenewslist(1)
       setTimeout(() => {
          this.changeitemwidth(1)
          this.startmarginleft(1)
          this.carouseinterval(1)
        }, 10)
      }
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'api/comments'
    }).then((res) => {
        if (res.data.status === 200) {
          this.renewLists = res.data.data
          this.newLists = res.data.data
          setTimeout(() => {
            this.carouse()
          }, 20)
        }
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
@import '../../less/home1-personbanner.less';
</style>
