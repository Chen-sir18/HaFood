<template>
  <div class="popular-box">
      <div  class="content-box">
        <div class="title">
          <h2>Daily Specials</h2>
        </div>
        <div :key="index" class="popular-content"  v-for="(item,index) in popularData">
          <div class="popular-left">
            <div class="popular-list mar-t-30">
              <div class="img-box mar-r-30">
                <img :src='"http://192.168.97.241:3000/" + item.picstr' alt="">
              </div>
              <div class="text-box font-14">
                <a class="font-16 font-wei-600">{{item.goodsname}}</a>
                <span>{{item.price}}</span>
                <p>{{item.depict}}</p>
              </div>
            </div>
          </div>
          <div class="popular-right">
            <div class="popular-list mar-t-30">
              <div class="img-box mar-r-30">
                <img :src='"http://192.168.97.241:3000/" + item.picstr' alt="">
              </div>
              <div class="text-box font-14">
                <a class="font-16 font-wei-600">{{item.goodsname}}</a>
                <span>{{item.price}}</span>
                <p>{{item.depict}}</p>
              </div>
            </div>
          </div>
        </div>
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
      url: 'http://192.168.97.241:3000/popular'
    }).then((res) => {
      console.log(res.data)
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
