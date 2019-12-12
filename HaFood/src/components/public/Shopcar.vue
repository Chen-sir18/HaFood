<template>
<div>
  <div class="d-shopcar-box">
    <div class="d-shopcar-top">
    </div>
    <div class="change-shopcar-content">
      <div class="d-shopcar-logo">
        <img src="../../img/logo_2.png">
        <span class="mar-l-30 font-wi-600 font-26">ShopCar</span>
      </div>
      <div class="all-goods font-16 font-wi-600">
        All Goods <span class="goods-count">8</span>
      </div>
      <!-- 商品表头 -->
      <div class="shopcar-table-title">
        <div class="all-choose-box">
          <input class="all-choose" type="checkbox"> <span>All Choose</span>
        </div>
        <div class="goods-name">
          Goods Name
        </div>
        <div class="goods-price">
          Price
        </div>
        <div class="goods-count">
          Count
        </div>
        <div class="goods-subtotal">
          Subtotal
        </div>
        <div class="goods-operate">
          Operate
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="shopcar-table clearfix">
        <div class="shopcar-goods-box" :key="index" v-for="(item,index) in shopcargoods">
          <div class="goodsimg-box">
            <img class="goodsimg" :src=" 'api/' + item.picstr " alt="">
          </div>
          <div class="goodsinfo">
            <span class="goods-name">
              {{item.goodsname}}
            </span>
          </div>
          <div class="goodsprice">
            <span class="goods-price">
              {{item.price}}
            </span>
          </div>
          <div class="goodscount">
            <div class="goods-count">
              <span @click="changecount(-1, $event)" class="reduce-count text-no-blue">-</span>
              <input @blur="writecount" class="count" type="number" :value='item.goodscount'>
              <span @click="changecount(1, $event)" class="add-count text-no-blue">+</span>
            </div>
          </div>
          <div class="goodssubtotal">
            <span class="goods-subtotal">{{'$' + item.goodscount * parseInt(item.price.replace(/\$/,'')) + '.00'}}</span>
          </div>
          <div class="goodsoperate">
            <span class="goods-operate">Delete</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
data: function () {
  return {
    shopcargoods: []
  }
},
mounted: function () {
  let userinfo = JSON.parse(window.localStorage.getItem('info'))
  let token = window.localStorage.getItem('token')
  if (userinfo && token) {
    Axios({
      url: 'api/shopcar',
      params: {
        userid: userinfo.id
      },
      method: 'get'
    }).then((response) => {
      this.shopcargoods = response.data.data
    })
  }
},
methods: {
  changecount: function (num, event) {
    let countnum = parseInt(event.target.parentNode.children[1].value)
    if (countnum <= 1 && num === -1) {
      alert('商品数量不能小于1')
    } else if (countnum >= 100 && num === 1) {
      alert('商品数量不能大于100')
      return false
    } else {
      event.target.parentNode.children[1].value = countnum + num
    }
  },
  writecount: function (e) {
    if (parseInt(e.target.value) > 100) {
      alert('商品数量不能大于100')
      e.target.value = 100
    } else if (parseInt(e.target.value) < 1) {
      alert('商品数量不能小于1')
      e.target.value = 1
    }
  }
}
}
</script>

<style lang='less' scoped>
@import '../../less/dshopcar.less';
</style>
