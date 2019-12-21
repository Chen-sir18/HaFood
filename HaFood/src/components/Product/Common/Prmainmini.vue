<template>
  <div class="promain">
    <div class="x-pr-main">
      <div class="x-pr-tit">Related Products</div>
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
        }
      ]
    }
  }
}
</script>

<style lang="less">
.clearfix:after{
  content: '';
  clear: both;
  display: block;
}
  .x-pr-main{
    width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 85px;
    .x-pr-tit{
      width: 100%;
      font-size: 24px;
      text-align: center;
      padding: 0 0 20px;
      font-weight: bold;
    }
    .x-pr-mainboy{
      width: 25%;
      padding: 0 15px;
      img{
        width: 100%;
        box-sizing: border-box;
      }
      ul{
        margin: 30px 0 0;
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
  @media (min-width: 992px) and (max-width: 1200px) {
    .x-pr-main{
      width: 960px;
    }
  }
  @media (min-width: 767px) and (max-width: 992px) {
    .x-pr-main{
      width: 720px;
      .x-pr-mainboy{
        width: 33.333%;
      }
    }
  }
  @media (min-width: 567px) and (max-width: 767px) {
    .x-pr-main{
      width: 540px;
      .x-pr-mainboy{
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 567px) {
    .x-pr-main{
      width: 100%;
      .x-pr-mainboy{
        width: 100%;
      }
    }
  }
</style>
