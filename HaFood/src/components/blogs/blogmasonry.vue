<template>
  <div>
    <Blogtop></Blogtop>
    <section class="h-blog-grid" style="min-height: 800px">
      <div class="h-menu-outer">
        <ul>
          <li :key="index" v-for="(item, index) in tabs" @click="styleClick(index, item.view)" :class="{active:active==index}" class="h-list-menu">{{item.title}}</li>
          <!-- <li @click="styleClick" :class="{active:active==index}" class="h-list-menu">Restaurant</li>
          <li :key="index" v-for="{tab, index} in tabs" @click="styleClick(index)" @click="styleClick" class="h-list-menu">Bakery</li>
          <li @click="styleClick" class="h-list-menu">Salads</li> -->
        </ul>
      </div>
      <!-- <div>
        <transition-group mode='out-in' class="h-blogmary-box" tag="div" name="flip-list">
          <div :key="i" v-for="(item, i) in blogData1" class="h-blogmary-item flip-list-item">
            <div class="h-bgid-inner">
              <img :src='"http://192.168.97.241:3000/" + item.picstr' />
              <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
              <a>
                <h5 class="bloggrid-tips">{{item.goodsname}}</h5>
              </a>
            </div>
          </div>
        </transition-group>
      </div> -->
      <component :is="currentView"></component>
      <!-- <Blogitem1></Blogitem1> -->
      <!-- <Blogitem2></Blogitem2> -->
      <!-- <Blogitem3></Blogitem3> -->
      <!-- <Blogitem4></Blogitem4> -->
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Blogtop from './blogstop.vue'
import Blogitem1 from './blogitem1.vue'
import Blogitem2 from './blogitem2.vue'
import Blogitem3 from './blogitem3.vue'
import Blogitem4 from './blogitem4.vue'
// import './animation.js'
export default {
  data () {
    return {
      active: 0,
      currentView: 'Blogitem1',
      tabs: [
        {
          id: 1,
          title: 'Dairy',
          view: 'Blogitem1'
        },
        {
          id: 2,
          title: 'Restaurant',
          view: 'Blogitem2'
        },
        {
          id: 3,
          title: 'Bakery',
          view: 'Blogitem3'
        },
        {
          id: 4,
          title: 'Salads',
          view: 'Blogitem4'
        }
      ],
      blogData1: []
    }
  },
  mounted () {
    this.getCake()
  },
  methods: {
    styleClick (i, view) {
      this.active = i
      this.currentView = view
      // this.blogData1 = _.styleClick(this.blogData1)
      switch (i) {
        case 0:
          // this.blogData1.splice(3,1 )
          this.getCake()
          break
        case 1:
          // this.blogData1.splice(3,0,this.blogData1[2] )
          // this.blogData1.splice(3,1)
          this.getFood()
          // this.blogData1 = this.blogData1.reverse()
          break
        case 2:
          this.getCake()
          break
        case 3:
          this.getPopular()
          break
      }
    },
    getCake () {
      axios({
        url: 'api/cakes',
        method: 'get',
        params: {
          // 此处不传参
        }
      }).then((res) => {
        console.log(res.data)
        if (res.status === 200) {
          this.blogData1 = res.data.data
          this.loading = false
        } else {
          return false
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    getFood () {
      axios({
        url: 'api/foodclass',
        method: 'get',
        params: {
          // 此处不传参
        }
      }).then((res) => {
        console.log(res.data)
        if (res.status === 200) {
          this.blogData1 = res.data.data
          this.loading = false
        } else {
            return false
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    getPopular () {
      axios({
        url: 'api/popular',
        method: 'get',
        params: {
          // 此处不传参
        }
      }).then((res) => {
        console.log(res.data)
        if (res.status === 200) {
          this.blogData1 = res.data.data
        } else {
          return false
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  components: {
    Blogtop,
    Blogitem1,
    Blogitem2,
    Blogitem3,
    Blogitem4
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogtop.less';
</style>
