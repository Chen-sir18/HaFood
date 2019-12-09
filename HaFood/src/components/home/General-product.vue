<template>
  <!-- 复用产品组件 -->
  <div class="products-box">
    <div class="products-cont">
      <ul class="products-lists">
        <li class="products-list mar-t-30" v-for="(item,index) in productsList" :key="index">
          <div>
            <img :src="item.imgurl">
          </div>
          <div class="product-title"><a>{{item.name}}</a></div>
          <div>
            <span class="product-price">{{item.price}}</span>
            <span class="product-oldprice">{{item.oldPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productsList: [
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
      ]
    }
  }
}
</script>

<style>

</style>
