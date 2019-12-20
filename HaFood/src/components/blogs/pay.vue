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
            <div>价格：{{item.subtotal}}$</div>
          </li>
        </ul>
      </div>
      <div class="pay-address-message">
        <span :data="subPrice">付款总计：{{this.subPrice}}$</span>
        <span :data="receiveName">收货人：{{this.receiveName}}</span>
        <span :data="detailaddress">收货地址：{{this.detailaddress}}</span>
        <span :data="iphonenumber">收件人号码：{{this.iphonenumber}}</span>
        <el-button @click="payOrder" class="add-newaddress">提醒发货</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from './api.js'
export default {
  data () {
    return {
      active: 2,
      api: api,
      payData: [],
      subPrice: '',
      detailaddress: '',
      receiveName: '',
      iphonenumber: ''
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
    // console.log(this.subPrice)
    // 从vuex里拿数据
    this.detailaddress = this.$store.state.checkedAddress.detailaddress
    this.receiveName = this.$store.state.checkedAddress.receiveName
    this.iphonenumber = this.$store.state.checkedAddress.iphonenumber
  },
  methods: {
    payOrder () {
      this.changeStep(2)
    }
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogorder.less';
</style>
