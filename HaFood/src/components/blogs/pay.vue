<template>
  <div>
    <div class="pay-outer-box">
      <div class="pay-inner">
        <h4>待支付订单信息</h4>
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
            <div>价格：{{item.subtotal}}</div>
          </li>
        </ul>
      </div>
      <div class="pay-address-message">
        <span :data="subPrice">付款总计：{{this.subPrice}}</span>
        <span>收货人：</span>
        <span>收货地址：</span>
        <span>收件人号码：</span>
        <el-button class="add-newaddress">确认付款</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from './api.js'
export default {
  data () {
    return {
      api: api,
      payData: [],
      subPrice: ''
    }
  },
  mounted () {
    // 收货地址从vuex里拿出来并渲染到页面上
    let commodityData = this.$store.state.ordergoods.ordergoodsdata
    console.log(commodityData)
    this.payData = commodityData
    this.subPrice = this.$store.state.ordergoods.checkedmoney
    console.log(this.subPrice)
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogorder.less';
</style>
