<template>
  <div class="x-prmain ">
    <div class="x-pr-main clearfix">
      <div class="x-pr-mainboy" v-for="(item,index) in info" :key="index">
        <ul>
          <img :src='"http://192.168.97.241:3000/"+item.picstr'/>
          <li>
            <b>{{item.goodsname}}</b>
            <span>{{item.price}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      info: [
        {
          picstr: '',
          goodsname: '',
          price: ''
        }
      ]
    }
  },
  mounted () {
    axios
      .get('api/ingredients')
      .then((res) => (this.info = res.data.data))
  }
}
</script>

<style lang="less">
  .x-pr-main{
    max-width: 1144px;
    margin: 0 auto;
    .x-pr-mainboy{
      height: 360px;
      width: 286px;
      float: left;
      img{
        height: 256px;
        width: 256px;
        box-sizing: border-box;
      }
      ul{
        margin: 30px 0 0;
        padding: 0 15px;
        b{
          display: block;
          font-size: 18px;
          padding: 25px 0 5px;
        }
        span{
          font-size: 16px;
          color: #eda52c;
          font-weight: bolder;
        }
      }
    }
  }
</style>
