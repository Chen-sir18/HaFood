<template>
  <div>
    <section class="h-blog-grid">
      <div class="h-menu-outer">
        <ul>
          <li :key="index" v-for="(item, index) in tabs" @click="styleClick(index)" :class="{active:active==index}" class="h-list-menu">{{item.title}}</li>
          <!-- <li @click="styleClick" :class="{active:active==index}" class="h-list-menu">Restaurant</li>
          <li :key="index" v-for="{tab, index} in tabs" @click="styleClick(index)" @click="styleClick" class="h-list-menu">Bakery</li>
          <li @click="styleClick" class="h-list-menu">Salads</li> -->
        </ul>
      </div>
      <div class="h-blogmary-box">
        <div class="h-blogmary-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_mas_1.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-blogmary-item item2">
          <div class="h-bgid-inner">
            <img src="../../img/blog_mas_2.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-blogmary-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_mas_3.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-blogmary-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_mas_4.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-blogmary-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_mas_5.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-blogmary-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_mas_6.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import './animation.js'
export default {
  data () {
    return {
      active: 0,
      tabs: [
        {
          id: 1,
          title: 'Dairy'
        },
        {
          id: 2,
          title: 'Restaurant'
        },
        {
          id: 3,
          title: 'Bakery'
        },
        {
          id: 4,
          title: 'Salads'
        }
      ]
    }
  },
  mounted () {
    (function () {
      let itemoneHeight = document.querySelector('.h-blogmary-item')
      let computedStyle = window.getComputedStyle(itemoneHeight).height
      console.log(computedStyle)
      let itemtwoHeight = document.querySelector('.h-blogmary-item.item2')
      console.log(itemtwoHeight)
      let itemWidth = document.querySelector('.h-blogmary-item').offsetWidth
      console.log(itemWidth)
      let box = document.querySelectorAll('.h-blogmary-item')
      for (let i = 0; i < box.length; i++) {
        if (i % 3 === 0) {
          box[i].style.left = 0 + 'px'
          box[0].style.top = 0 + 'px'
          // box[3].style.left = 0 + 'px'
          box[3].style.top = itemoneHeight * 1 + 'px'
        } else if (i % 3 === 1) {
          box[i].style.left = itemWidth * 1 + 'px'
          box[1].style.top = 0 + 'px'
          // box[4].style.left = itemWidth*1 + 'px'
          box[4].style.top = itemtwoHeight * 1 + 'px'
        } else {
          box[i].style.left = itemWidth * 2 + 'px'
          box[2].style.top = 0 + 'px'
          box[5].style.top = itemoneHeight * 1 + 'px'
        }
      }
    })()
  },
  methods: {
    styleClick (i) {
      this.active = i
      console.log(i)
      // let menuButton = document.querySelectorAll('.h-list-menu')
      // for (let i = 0; i < menuButton.length; i++) {
      //   menuButton[i].classList.add('active')
      //   menuButton[i].classList.remove('.active')
      // }
    }
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogtop.less';
</style>
