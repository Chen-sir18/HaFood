<template>
  <div class="trending-box">
    <div class="trending-title-box">
      <div class="trending-title font-style">
        <div class="trending-title-l">
          <p class="best-seller">BEST SELLER</p>
          <p class="trending-foods">Trending Foods</p>
        </div>
        <ul class="trending-title-r clearfix">
          <li class="trending-tip" v-for="(item, index) in navList" :key="index">
            <a class="trending-nav-link" @click="changeTab(index)" :class="{on:cur === index}">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="products-box">
      <div class="products-cont">
        <ul class="products-lists">
          <li class="products-list mar-t-30" v-for="(item,index) in trendingLists" :key="index">
            <div>
              <img :src="'http://192.168.97.241:3000/' + item.picstr" v-if="!(item.picstr === undefined)">
            </div>
            <div class="product-title"><a>{{item.goodsname}}</a></div>
            <div>
              <span class="product-price">{{item.price}}</span>
              <span class="product-oldprice">{{item.overprice}}</span>
            </div>
            <!-- <div class="product-sale">SALE</div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Ttrending from './General-product.vue'
import axios from 'axios'
export default {
  data () {
    return {
      cur: 0,
      navList: [
        {
          name: 'SALADS'
        },
        {
          name: 'DESSERTS'
        },
        {
          name: 'DRINKS'
        },
        {
          name: 'PASTA'
        },
        {
          name: 'PIZZASS'
        }
     ],
     trendingLists: []
    }
  },
  mounted () {
    this.getSalads()
  },
  methods: {
    changeTab (num) {
      this.cur = num
      switch (num) {
        case 0:
          this.getSalads()
          break
        case 1:
          this.getDesserts()
          break
        case 2:
          this.getDrinks()
          break
        case 3:
          this.getPasta()
          break
        default:
          this.getPizzass()
      }
    },
    getSalads () {
      axios({
        url: 'api/ingredients',
        method: 'get',
        params: {
          //
        }
      }).then((res) => {
        if (res.data.status === 200) {
          let dataList = res.data.data.splice(6, res.data.data.length - 6)
          this.trendingLists = dataList
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    getDesserts () {
      axios({
        url: 'api/cakes',
        method: 'get',
        params: {
          //
        }
      }).then((res) => {
        let dessertData = res.data.data
        this.trendingLists = dessertData
      }).catch((error) => {
        console.log(error)
      })
    },
    getDrinks () {
      axios({
        url: 'api/ingredients',
        method: 'get',
        params: {
          //
        }
      }).then((res) => {
        let drinksData = res.data.data
        drinksData.splice(6, drinksData.length - 6)
        this.trendingLists = drinksData
      }).catch((error) => {
        console.log(error)
      })
    },
    getPasta () {
      axios({
        url: 'api/cakes',
        method: 'get',
        params: {
          //
        }
      }).then((res) => {
        let pastatData = res.data.data
        this.trendingLists = pastatData
      }).catch((error) => {
        console.log(error)
      })
    },
    getPizzass () {
      axios({
        url: 'api/popular',
        method: 'get',
        params: {
          //
        }
      }).then((res) => {
        let pizzassData = res.data.data
        this.trendingLists = pizzassData
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  components: {
    Ttrending
  }
}
</script>

<style>

</style>
