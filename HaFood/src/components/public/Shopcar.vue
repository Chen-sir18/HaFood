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
          <input @change="inputchecked" :goodsindex='index' class="goods-checked" v-model="shopcargoods[index].checked" type="checkbox" >
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
              <input @blur="writecount"  :goodsindex='index' class="count" type="number" v-model="shopcargoods[index].goodscount">
              <span @click="changecount(1, $event)" class="add-count text-no-blue">+</span>
            </div>
          </div>
          <!-- 商品小计价格 -->
          <div class="goodssubtotal">
            <span class="goods-subtotal">{{'$' + item.subtotal + '.00'}}</span>
          </div>
          <!-- 商品删除 -->
          <div class="goodsoperate">
            <span @click="deletegoods" :goodsindex = 'index' class="goods-operate">Delete</span>
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
          Total Money：<span class="allmoney">{{'$' + checkedmoney + '.00'}}</span>
        </div>
        <!-- 已选中商品数量 -->
        <div class="checked-goods-count">
          Checked Goods<span class="checkedcount">{{checkedgoods.length}}</span>
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
    allchecked: false,
    checkedgoods: [],
    checkedmoney: 0
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
//  		console.log(response.data.data)
      	response.data.data.forEach((item) => {
        item.checked = false
        item.subtotal = item.goodscount * parseInt(item.price.replace(/^\$/, ''))
      })
      this.shopcargoods = response.data.data
    })
  }
},
methods: {
	changeallmoney: function () {
		let allmoney = 0
		this.shopcargoods.forEach((item, index) => {
			this.checkedgoods.forEach((content, id) => {
				if (content === item.ingredientsid) {
					allmoney += item.subtotal
				}
			})
		})
		this.checkedmoney = allmoney
	},
  // 点击每个商品的选中框
  inputchecked: function () {
    this.allchecked = this.shopcargoods.every(function (item) {
			return item.checked
		})
    this.checkedgoods.splice(0)
    this.shopcargoods.forEach((item) => {
    	if (item.checked) {
    		this.checkedgoods.push(item.ingredientsid)
    	} else {
    		this.checkedgoods.some((content, i) => {
    			if (item.ingredientsid === content) {
    				this.checkedgoods.splice(i, 1)
    			}
    		})
    	}
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
      let goodsindex = event.target.parentNode.children[1].getAttribute('goodsindex')
      this.shopcargoods[goodsindex].goodscount = countnum + num
      this.shopcargoods[goodsindex].subtotal = this.shopcargoods[goodsindex].goodscount * parseInt(this.shopcargoods[goodsindex].price.replace(/^\$/, ''))
      this.changeallmoney()
    }
  },
  //  改变count的值
  writecount: function (e) {
    let goodsindex = event.target.getAttribute('goodsindex')
    if (parseInt(e.target.value) > 100) {
      alert('商品数量不能大于100')
      this.shopcargoods[goodsindex].goodscount = 100
    } else if (parseInt(e.target.value) < 1) {
      alert('商品数量不能小于1')
      this.shopcargoods[goodsindex].goodscount = 1
    }
    this.shopcargoods[goodsindex].subtotal = this.shopcargoods[goodsindex].goodscount * parseInt(this.shopcargoods[goodsindex].price.replace(/^\$/, ''))
    this.changeallmoney()
  },
  // 删除商品
  deletegoods: function (e) {
    // 删掉页面上的元素
    let goodsindex = e.target.getAttribute('goodsindex')
    // 删除 被选中的数组
    let deleteingredientsid = this.shopcargoods[goodsindex].ingredientsid
    this.checkedgoods.forEach((item, i) => {
    	if (item === deleteingredientsid) {
    		this.checkedgoods.splice(i, 1)
    	}
    })
		// 删除 shopcargoods的内容,重新渲染到页面上
    this.shopcargoods.splice(goodsindex, 1)
    // 重新给予所选的全部价格
    this.changeallmoney()
    console.log(this.shopcargoods)
  },
  // 全选或者 全不选
  changeallchecked: function () {
    if (this.allchecked) {
      this.shopcargoods.forEach((item, index) => {
        item.checked = true
        this.checkedgoods.push(item.ingredientsid)
      })
//    console.log(this.checkedgoods)
    } else {
      this.shopcargoods.forEach((item) => {
        item.checked = false
      })
      this.checkedgoods.splice(0)
//    console.log(this.checkedgoods)
    }
  }
},
watch: {
	checkedgoods: function (val) {
		this.changeallmoney()
	}
}
}
</script>
<style lang='less' scoped>
@import '../../less/dshopcar.less';
</style>
