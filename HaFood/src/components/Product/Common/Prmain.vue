<template>
  <div class="promain clearfix">
    <div class="x-pr-main">
      <div class="x-pr-mainboy" v-for="(item,index) in message" :key="index">
        <ul class="x-pr-mainboy-ul">
          <img :src="item.imgUrl"/>
          <li>
            <b>{{item.title}}</b>
            <span>{{item.price}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: [
        {
          imgUrl: 'api/product_1.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_4.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_2.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_6.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_3.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_7.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_2.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_5.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_6.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_4.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_3.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_2.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_1.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_6.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_4.jpg',
          title: 'Grape',
          price: '$135.00'
        },
        {
          imgUrl: 'api/product_5.jpg',
          title: 'Grape',
          price: '$135.00'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .x-pr-main{
    width: 1144px;
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
