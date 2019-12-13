<template>
  <!-- 复用产品组件 -->
  <div class="products-box">
    <div class="products-cont">
      <ul class="products-lists">
        <li class="products-list mar-t-30" v-if="!(item.picstr === undefined)" v-for="(item,index) in newProductList.slice(0,6)" :key="index">
          <div>
            <img :src="'http://192.168.97.241:3000/' + item.picstr">
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
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      newProductList: [],
      firstproductsList: [
        {
          imgurl: require('../../img/product_1.jpg'),
          name: 'Grape',
          price: '$15.00'
        },
        {
          imgurl: require('../../img/product_2.jpg'),
          name: 'Cabbage',
          price: '$45.00',
          oldPrice: '$70.00'
        },
        {
          imgurl: require('../../img/product_3.jpg'),
          name: 'Cauliflower',
          price: '$32.00'
        },
        {
          imgurl: require('../../img/product_4.jpg'),
          name: 'Red Pepper',
          price: '$12.00',
          oldPrice: '$15.00'
        },
        {
          imgurl: require('../../img/product_5.jpg'),
          name: 'Apple',
          price: '$16.00'
        },
        {
          imgurl: require('../../img/product_6.jpg'),
          name: 'Corn',
          price: '$8.00'
        }
      ],
      secondProductList: [
        {
          imgurl: require('../../img/trending_foods_1.jpg'),
          name: 'Salted Fried Chicken',
          price: '$15.00'
        },
        {
          imgurl: require('../../img/trending_foods_2.jpg'),
          name: 'Fresh Crab With Lemon',
          price: '$45.00',
          oldPrice: '$70.00'
        },
        {
          imgurl: require('../../img/trending_foods_3.jpg'),
          name: 'Lemon-Rosemary Chicken',
          price: '$32.00'
        },
        {
          imgurl: require('../../img/trending_foods_4.jpg'),
          name: 'Spicy Crab Ramen',
          price: '$12.00',
          oldPrice: '$15.00'
        },
        {
          imgurl: require('../../img/trending_foods_5.jpg'),
          name: 'Crab With Curry Sources',
          price: '$45.00'
        },
        {
          imgurl: require('../../img/trending_foods_6.jpg'),
          name: 'Baked Potato Pizza',
          price: '$32.00'
        }
      ]
    }
  },
  mounted () {
    if (this.$route.fullPath === '/Home1') {
      this.newProductList = this.firstproductsList
      axios({
        method: 'get',
        url: 'api/ingredients'
      }).then((res) => {
        if (res.status === 200) {
          this.newProductList = res.data.data
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
