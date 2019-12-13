<template>
<div>
  <transition-group name="animate"  class="h-blogmary-box">
    <div :key="item.id" v-for="item in blogData1" class="h-blogmary-item animate-item">
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
      blogData1: []
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
        let aa = res.data.data
        this.blogData1 = aa.reverse()
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
.animate-item{
  transition: all 2s ease;
}
.animate-enter, .animate-leave-to{
  opacity: 0.2;
  transform: translateY(50px);
}
.animate-leave, .animate-enter-to{
  opacity: 1;
  transform: translateY(0px)
}
.animate-enter-active, .animate-leave-active{
  position: absolute;
}
</style>
