<template>
<div>
  <transition-group name="flip-list" class="h-blogmary-box">
    <div :key="item.id" v-for="item in blogData3" class="h-blogmary-item">
      <div class="h-bgid-inner">
        <img :src='"http://192.168.97.241:3000/" + item.picstr' />
        <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
        <a>
          <h5 class="bloggrid-tips">{{item.goodsname}}</h5>
        </a>
      </div>
    </div>
  </transition-group>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      blogData3: []
    }
  },
  mounted () {
    axios({
      url: 'api/cakes',
      method: 'get',
      params: {
        // 此处不传参
      }
    }).then((res) => {
      console.log(res.data)
      if (res.status === 200) {
        this.blogData3 = res.data.data
      } else {
        return false
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogtop.less';
</style>
