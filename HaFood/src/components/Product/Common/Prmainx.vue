<template>
  <div>
    <div class="x-pr-boyx" v-for="(item,index) in product" :key="index">
      <ul>
       <img v-if="!(item.picstr === undefined)" :src='"api/"+item.picstr' />
      </ul>
      <ul>
        <li>
          <b>{{item.goodsname}}</b>
        </li>
        <li>
          <p>{{item.price}}</p>
        </li>
        <li>
          <P>{{item.depict}}</P>
        </li>
        <li>
          <div  :price = item.price :picstr = item.picstr :goodsname = item.goodsname  :ingredientsid = item.id  @click="addtocar" class="add-cart">ADD TO CART</div>
          <i class="icon iconfont">&#xe616;</i>
          <i class="icon iconfont">&#xe66b;</i>
          <i class="icon iconfont">&#xe6c9;</i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import remind from '../../public/JS/remind.js'
export default {
  data: function () {
    return {
      product: []
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'api/ingredients'
    }).then((response) => {
      this.product = response.data.data
    })
  },
  methods: {
    // 添加到购物车
    addtocar: function (e) {
      // 判断是否登录
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      // 如果登录
      if (token && info) {
        // 获取userid
        let userid = parseInt(info.id)
        // 获取点击商品的id
        let ingredientsid = parseInt(e.target.getAttribute('ingredientsid'))
        // 将id拿到已存在购物车商品的id作比对
        let shopcargoods = this.$store.state.shopcargoods
        let have = false
        let goodscount = 0
        // 判断点击的商品是否已经在购物车中存在
        shopcargoods.forEach((item) => {
          if (item.ingredientsid === ingredientsid) {
            goodscount = item.goodscount
            item.goodscount = item.goodscount + 1
            have = true
          }
        })
        //  如果存在，修改购物车的内容
        if (have) {
          goodscount++
        } else {
         goodscount = 1
         let price = e.target.getAttribute('price').replace(/\$/, '')
         let picstr = e.target.getAttribute('picstr')
         let goodsname = e.target.getAttribute('goodsname')
         let newshopcargoods = {
           goodscount: 1,
           goodsname: goodsname,
           picstr: picstr,
           price: price,
           userid: userid,
           ingredientsid: ingredientsid
         }
         shopcargoods.push(newshopcargoods)
        }
        // 更新vuex保存的数据
        this.$store.commit({
          type: 'changeshopcargoods',
          shopcargoods: shopcargoods
        })
        // 请求修改购物车数据库
        axios({
          method: 'get',
          url: 'api/addshopcar',
          params: {
            userid: userid,
            ingredientsid: ingredientsid,
            goodscount: goodscount
          }
        }).then((response) => {
          if (response.data.status === 200) {
            remind('success')
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
  .x-pr-boyx{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ul{
      box-sizing: border-box;
      margin: 30px 0 0;
    }
    ul:nth-child(1){
      flex: 0 0 25%;
      max-width: 25%;
      img{
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
      }
    }
    ul:nth-child(2){
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 15px;
      li:nth-child(1){
        padding: 0 0 23px;
      }
      li:nth-child(2){
        padding: 0 0 15px;
        color: #edc52a;
      }
      li:nth-child(3){
        padding: 0 35px 0 0;
        font-size: 14px;
        color: #555555;
        line-height: 26px;
      }
      li:nth-child(4){
        .add-cart{
          display: inline-block;
          margin: 35px 30px 0 0;
          height: 50px;
          width: 154px;
          border: 1px solid #fb7e00;
          text-align: center;
          line-height: 50px;
          border-radius: 25px;
          color: #fb7e00;
          font-size: 14px;
          font-weight: bolder;
          cursor: pointer;
        }
        a:hover{
          background: #fb7e00;
          color: #ffffff;
        }
        i{
          font-size: 20px;
          margin: 10px;
          color: #666666;
          cursor: pointer;
        }
      }
    }
  }
@media only screen and (max-width:768px){
  .x-pr-boyx{
    ul{
      box-sizing: border-box;
      margin: 30px 0 0;
    }
    ul:nth-child(1){
      flex: 0 0 75%;
      max-width: 75%;
    }
    ul:nth-child(2){
      flex: 0 0 75%;
      max-width: 75%;
    }
  }
}
@media only screen and (max-width:572px){
  .x-pr-boyx{
    padding: 0 15px;
    ul{
      box-sizing: border-box;
      margin: 30px 0 0;
    }
    ul:nth-child(1){
      flex: 0 0 100%;
      max-width: 100%;
    }
    ul:nth-child(2){
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
</style>
