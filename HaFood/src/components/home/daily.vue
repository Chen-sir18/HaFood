<template>
  <div class="popular-box">
      <div class="title">
          <h2>Daily Specials</h2>
      </div>
      <div class="popular-content">
        <ul class="popular-lists">
          <li :key="index" class="list" v-if="!(item.picstr === undefined)" v-for="(item,index) in popularData">
            <div class="list-box">
              <div class="img-box mar-r-30">
                <img :src='"http://192.168.97.241:3000/" + item.picstr' alt="">
              </div>
              <div class="text-box font-14">
                <a class="font-16 font-wei-600">{{item.goodsname}}</a>
                <span>{{item.price}}</span>
                <p>{{item.depict}}</p>
              </div>
            </div>
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
      popularData: {
        imgUrl: '',
        title: '',
        price: '',
        decripe: ''
      }
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'http://192.168.97.241:3000/drink'
    }).then((res) => {
      // console.log(res.data)
      if (res.data.status === 200) {
        let popData = res.data.data
        this.popularData = popData
      } else {
        return false
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style lang="less" scope="scope">
@import '../../less/home3.less';
</style>
