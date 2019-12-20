<template>
  <div class="popular-box">
      <div class="title">
          <h2>Daily Specials</h2>
      </div>
      <div class="popular-content">
        <ul class="popular-lists">
          <li :key="index" class="list" v-for="(item,index) in popularData">
            <div class="list-box">
              <div class="img-box mar-r-30">
                <img :src='"api/" + item.picstr' v-if="!(item.picstr === undefined)">
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
      url: 'api/drink'
    }).then((res) => {
      if (res.data.status === 200) {
        let popData = res.data.data
        this.popularData = popData
      } else {
        return false
      }
    })
  }
}
</script>
<style lang="less" scope="scope">
@import '../../less/home3.less';
</style>
