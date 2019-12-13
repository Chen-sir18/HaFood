<template>
<!-- Home1 -->
  <div class="product-area">
    <div class="product-area-cont">
      <ul class="product-area-lists">
        <li class="product-area-list" v-for="(item, index) in productlists" :key="index">
          <img :src="'http://192.168.97.241:3000/' + item.picstr" class="pro-img" v-if="!(item.picstr === undefined)" />
          <p class="product-name"><a>{{item.name}}</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from './api.js'
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
  },
  mounted () {
    axios({
      method: 'get',
      url: api + 'foodclass'
    }).then((res) => {
      if (res.status === 200) {
        this.productlists = res.data.data
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>

</style>
