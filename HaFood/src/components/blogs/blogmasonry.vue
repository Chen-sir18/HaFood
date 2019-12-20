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
      <div>
        <transition-group class="h-blogmary-box" tag="div" name="animate">
          <div :key="item.id" v-for="item in blogData1" class="h-blogmary-item animate-item">
            <div class="h-bgid-inner">
              <!-- <img :src="item.img" /> -->
              <img :src='"api/" + item.picstr' />
              <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
              <a>
                <h5 class="bloggrid-tips">{{item.goodsname}}</h5>
              </a>
            </div>
          </div>
        </transition-group>
      </div>
      <!-- <component '"http://192.168.97.241:3000/" + item.picstr' :is="currentView"></component> -->
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
// import img1 from '../../img/trending_foods_3.1.jpg'
// import img2 from '../../img/trending_foods_3.2.jpg'
// import img3 from '../../img/trending_foods_3.3.jpg'
// import img4 from '../../img/trending_foods_3.4.jpg'
// import img5 from '../../img/trending_foods_3.5.jpg'
// import img6 from '../../img/trending_foods_3.6.jpg'
// import Blogitem1 from './blogitem1.vue'
// import Blogitem2 from './blogitem2.vue'
// import Blogitem3 from './blogitem3.vue'
// import Blogitem4 from './blogitem4.vue'
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
      blogData1: [],
      blogData: []
      // blogData1: [
      //   {
      //     id: 1,
      //     img: img1,
      //     goodsname: 'fghjfhgjkhsg'
      //   },
      //   {
      //     id: 2,
      //     img: img2,
      //     goodsname: 'fghjfhgjkhsg'
      //   },
      //   {
      //     id: 3,
      //     img: img3,
      //     goodsname: 'fghjfhgjkhsg'
      //   },
      //   {
      //     id: 4,
      //     img: img4,
      //     goodsname: 'fghjfhgjkhsg'
      //   },
      //   {
      //     id: 5,
      //     img: img5,
      //     goodsname: 'fghjfhgjkhsg'
      //   },
      //   {
      //     id: 6,
      //     img: img6,
      //     goodsname: 'fghjfhgjkhsg'
      //   }
      // ]
    }
  },
  updated () {

  },
  mounted () {
    this.getCake()
    // this.getFood()
    // this.getPopular()
  },
  methods: {
    styleClick (i, view) {
      this.active = i
      this.currentView = view
      // this.blogData1 = this.blogData1.reverse()
      // this.blogData1 = this.blogData1.splice(3, 0, {
      //   img: img3,
      //   id: 7
      // })
      switch (i) {
        case 0:
          // this.blogData1.splice(3,1 )
          this.getCake()
          var dataList1 = this.blogData1
          dataList1.splice(0, 0)
          // this.blogData1 = _.shuffle(this.blogData1)
          // this.blogData1.splice(0, 1, this.blogData1[1])
          // this.blogData1 = this.blogData1
          // console.log(this.blogData1)
          break
        case 1:
          var datalist = this.blogData1
          var deletedata = datalist[4]
          datalist.splice(4, 1)
          datalist.splice(1, 0, deletedata)
          // this.blogData1 = datalist
          // this.blogData1 = this.blogData1.reverse()
          // this.getCake()
          // this.blogData1.splice(1, 0, this.blogData1[2])
          // this.blogData1 = this.blogData1
          break
        case 2:
          var dataList2 = this.blogData1
          var deletedata2 = dataList2[3]
          dataList2.splice(3, 1)
          dataList2.splice(4, 0, deletedata2)
          // this.blogData1.splice(2, 1)
          // this.blogData1.reverse()
          // this.blogData1 = this.blogData1
          // this.blogData1 = this.blogData1.reverse()
          break
        case 3:
          var dataList3 = this.blogData1
          var deletedata3 = dataList3[5]
          dataList3.splice(5, 1)
          dataList3.splice(3, 0, deletedata3)
          // this.getCake()
          // this.blogData1.splice(4, 1)
          // this.blogData1 = this.blogData1
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
        // console.log(res.data)
        if (res.status === 200) {
          this.blogData1 = res.data.data
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
        // console.log(res.data)
        if (res.status === 200) {
          this.blogData1 = res.data.data
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
        // console.log(res.data)
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
    Blogtop
    // Blogitem1,
    // Blogitem2,
    // Blogitem3,
    // Blogitem4
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogtop.less';
.animate-item{
  transition: all 1s ease;
}
.animate-enter, .animate-leave-to{
  opacity: 0.1;
  transform: translateZ(-300px);
}
.animate-leave-active{
  position: absolute;
}
</style>
