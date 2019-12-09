<template>
<!-- Home1 -->
  <div class="product-area">
    <div class="product-area-cont">
      <ul class="product-area-lists">
        <li class="product-area-list" v-for="(item, index) in productlists" :key="index">
          <img :src="item.imgurl" class="pro-img" />
          <p class="product-name"><a>{{item.name}}</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productlists: [
        {
          imgurl: require('../../img/sub_1.jpg'),
          name: 'Eggs'
        },
        {
          imgurl: require('../../img/sub_2.jpg'),
          name: 'Fruit'
        },
        {
          imgurl: require('../../img/sub_3.jpg'),
          name: 'Vegetables'
        },
        {
          imgurl: require('../../img/sub_4.jpg'),
          name: 'Meat'
        },
        {
          imgurl: require('../../img/sub_5.jpg'),
          name: 'Dairy'
        }
      ]
    }
  }
}
</script>

<style>

</style>
