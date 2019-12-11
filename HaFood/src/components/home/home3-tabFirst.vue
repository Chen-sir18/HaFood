<template>
  <div class="trending-content-box">
      <ul class="trending-lists">
          <li :key="index" class="list" v-for="(item,index) in tabChange">
              <div class="list-box">
                  <img :src='"http://192.168.97.241:3000/" + item.picstr' alt="">
                  <a>{{item.goodsname}}</a>
                  <p>{{item.price}}</p>
              </div>
          </li>
          <!-- <li class="list">
              <div class="list-box">
                  <img src="../../img/trending_foods_3.2.jpg" alt="">
                  <a>Salted Fried Chicken</a>
                  <p>$15.00</p>
              </div>
          </li>
          <li class="list">
              <div class="list-box">
                  <img src="../../img/trending_foods_3.3.jpg" alt="">
                  <a>Salted Fried Chicken</a>
                  <p>$15.00</p>
              </div>
          </li>
          <li class="list">
              <div class="list-box">
                  <img src="../../img/trending_foods_3.4.jpg" alt="">
                  <a>Salted Fried Chicken</a>
                  <p>$15.00</p>
              </div>
          </li>
          <li class="list">
              <div class="list-box">
                  <img src="../../img/trending_foods_3.5.jpg" alt="">
                  <a>Salted Fried Chicken</a>
                  <p>$15.00</p>
              </div>
          </li>
          <li class="list">
              <div class="list-box">
                  <img src="../../img/trending_foods_3.6.jpg" alt="">
                  <a>Salted Fried Chicken</a>
                  <p>$15.00</p>
              </div>
          </li> -->
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            tabChange: {
                imgUrl: '',
                title: '',
                price: ''
            }
        }
    },
    mounted () {
    axios({
      method: 'get',
      url: 'http://192.168.97.241:3000/cakes'
    }).then((res) => {
      console.log(res.data)
      if (res.data.status === 200) {
        let foodData = res.data.data
        this.tabChange = foodData
      } else {
        return false
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style>
</style>
