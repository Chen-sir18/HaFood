<template>
<!-- Home1 -->
  <div class="product-area">
    <div class="product-area-cont">
      <ul class="product-area-lists">
        <li class="product-area-list" v-for="(item, index) in productlists" :key="index">
          <img :src="'api/' + item.picstr" class="pro-img" v-if="!(item.picstr === undefined)" />
          <p class="product-name"><a @click="toDetail">{{item.class}}</a></p>
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
  methods: {
    toDetail () {
      this.$router.replace('/ProductDetails')
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'api/foodclass'
    }).then((res) => {
      if (res.data.status === 200) {
        this.productlists = res.data.data
      }
    })
  }
}
</script>

<style>

</style>
