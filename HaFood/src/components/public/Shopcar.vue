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
        All Goods <span class="goods-count">{{shopcargoods.length}}</span>
      </div>
      <!-- 商品表头 -->
      <div class="shopcar-table-title">
        <!-- 所有商品选中框 -->
        <div class="all-choose-box">
          <input @change="changeallchecked" v-model="allchecked" class="all-choose" type="checkbox"> <span>All Choose</span>
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
      <div ref="shopcartable" class="shopcar-table clearfix text-no-blue">
        <div :ref = "'num' + index"  :class="{shopcargoodsbox: true, shopcargoodsboxchecked:shopcargoods[index].checked}" :key="index" v-for="(item,index) in shopcargoods">
          <!-- 商品选中框 -->
          <input @change="inputchecked" class="goods-checked" v-model="shopcargoods[index].checked" type="checkbox" >
          <div class="goodsimg-box">
            <img class="goodsimg" :src=" 'api/' + item.picstr " alt="">
          </div>
          <div class="goodsinfo">
            <span class="goods-name">
              {{item.goodsname}}
            </span>
          </div>
          <!-- 商品单价 -->
          <div class="goodsprice">
            <span class="goods-price">
              {{item.price}}
            </span>
          </div>
          <!-- 商品数量控制 -->
          <div class="goodscount">
            <div class="goods-count">
              <span @click="changecount(-1, $event)" class="reduce-count text-no-blue">-</span>
              <input @blur="writecount" :goodsid='index' class="count" type="number" v-model="shopcargoods[index].goodscount">
              <span @click="changecount(1, $event)" class="add-count text-no-blue">+</span>
            </div>
          </div>
          <!-- 商品小计价格 -->
          <div class="goodssubtotal">
            <span class="goods-subtotal">{{'$' + item.goodscount * parseInt(item.price.replace(/\$/,'')) + '.00'}}</span>
          </div>
          <!-- 商品删除 -->
          <div class="goodsoperate">
            <span @click="deletegoods" :goodsid = 'index' class="goods-operate">Delete</span>
          </div>
        </div>
      </div>
      <!-- 结算栏 -->
      <div class="shopcar-pay text-no-blue">
        <div class="allchecked-box">
          <input @change="changeallchecked" class="allchecked" v-model="allchecked" type="checkbox">
          <span>All Choose</span>
        </div>
        <!-- 删除所有的选中商品 -->
        <div class="checked-delete">
          Delete Checked
        </div>
        <!-- 去结算 -->
        <div class="go-pay">
          Settlement
        </div>
        <!-- 已选中商品所有的小计相加 -->
        <div class="all-money">
          Total Money：<span class="allmoney">{{'$' + '1.000000'}}</span>
        </div>
        <!-- 已选中商品渲染 -->
        <div class="checked-goods-count">
          Checked Goods<span class="checkedcount">1</span>
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
    shopcargoods: [],
    allchecked: false
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
        response.data.data.forEach((item) => {
        item.checked = false
      })
      this.shopcargoods = response.data.data
    })
  }
},
methods: {
  // 点击每个商品的选中框
  inputchecked: function () {
    this.allchecked = this.shopcargoods.every(function (item) {
			return item.checked
		})
  },
  //  点击加减改变count的值
  changecount: function (num, event) {
    let countnum = parseInt(event.target.parentNode.children[1].value)
    if (countnum <= 1 && num === -1) {
      alert('商品数量不能小于1')
    } else if (countnum >= 100 && num === 1) {
      alert('商品数量不能大于100')
      return false
    } else {
      let goodsid = event.target.parentNode.children[1].getAttribute('goodsid')
      this.shopcargoods[goodsid].goodscount = countnum + num
    }
  },
  //  改变count的值
  writecount: function (e) {
    let goodsid = event.target.getAttribute('goodsid')
    if (parseInt(e.target.value) > 100) {
      alert('商品数量不能大于100')
      this.shopcargoods[goodsid].goodscount = 100
    } else if (parseInt(e.target.value) < 1) {
      alert('商品数量不能小于1')
      this.shopcargoods[goodsid].goodscount = 1
    }
  },
  deletegoods: function (e) {
    // 去绑定好的父级元素
    let deletestr = 'num' + e.target.getAttribute('goodsid')
    let shopcartable = this.$refs.shopcartable
    shopcartable.removeChild(this.$refs[deletestr][0])
  },
  changeallchecked: function () {
    if (this.allchecked) {
      this.shopcargoods.forEach((item) => {
        item.checked = true
      })
    } else {
      this.shopcargoods.forEach((item) => {
        item.checked = false
      })
    }
  }
}
}
</script>
<style lang='less' scoped>
@import '../../less/dshopcar.less';
</style>
