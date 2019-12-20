<template>
  <div>
    <div class="pay-outer-box">
      <div class="pay-inner">
        <h4>已支付订单信息</h4>
        <ul class="pay-order-box">
          <li :key="index" v-for="(item, index) in payData" class="pay-order-list clearfix">
            <div class="img-box">
              <img :src='api + item.picstr' />
            </div>
            <div class="commodity-message">
              <p>{{item.goodsname}}</p>
            </div>
            <div>单价：{{item.price}}</div>
            <div>数量：{{item.goodscount}}</div>
            <div>价格：{{item.subtotal}}$</div>
          </li>
        </ul>
      </div>
      <div class="pay-address-message">
        <span :data="subPrice">已付款总计：{{this.subPrice}}$</span>
        <el-button class="add-newaddress">去评价</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from './api.js'
export default {
  data () {
    return {
      active: 4,
      api: api,
      payData: [],
      subPrice: ''
    }
  },
  props: {
    changeStep: Function
  },
  mounted () {
    // 将商品信息从vuex里拿出来并渲染到页面上
    let commodityData = this.$store.state.ordergoods.ordergoodsdata
    // console.log(commodityData)
    this.payData = commodityData
    this.subPrice = this.$store.state.ordergoods.checkedmoney
  }
}
</script>

<style>

</style>
