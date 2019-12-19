<template>
  <div class="x-pr-nav">
    <div class="x-nav">
      <ul>
        <li>
          <ol>
            <span>
              <img :src="'api/' + message.picstr"/>
            </span>
          </ol>
        </li>
        <li>
            <ol>
              <span v-for="(item,index) in message.lists" :key="index">
                <img :src="item.imgUrl"/>
              </span>
            </ol>
        </li>
      </ul>
      <ul>
        <li>{{message.goodsname}}</li>
        <li>
          <span>
            <i class="icon iconfont">&#xe61d;</i>
            <i class="icon iconfont">&#xe61d;</i>
            <i class="icon iconfont">&#xe61d;</i>
            <i class="icon iconfont">&#xe61d;</i>
            <i class="icon iconfont">&#xe614;</i>
          </span>
          <a> - 1 review - Add your review</a>
        </li>
        <li>{{message.price}}</li>
        <li>
          <p>{{message.depict}}</p>
        </li>
        <li>
          <span>Color</span>
          <span></span>
          <span class="icon iconfont"> &#xe65f;</span>
        </li>
        <li>
          <a>{{message.measure}}</a>
          <span v-for="(item,index) in message.weights" :key="index">{{item}}</span>
        </li>
        <li>
          <i>
            <button>-</button>
            <input type="text" value="0"/>
            <button>+</button>
          </i>
          <a>ADD TO CARE</a>
          <i class="icon iconfont">&#xe616;</i>
          <i class="icon iconfont">&#xe6c9;</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: {
        goodsname: 'Grape',
        price: '$50.00',
        measure: 'Weight (kg)',
        depict: 'Lorem ipsum dolor sit amet,\n' +
          '            consectetur adipiscing elit,\n' +
          '            sed do eiusmod tempor incididunt ut labore\n' +
          '            et dolore magna aliqua. Ut enim ad minim veniam,\n' +
          '            quis nostrud exercitation.',
        weights: ['0.5', '1', '1.5', '2', '100'],
        list: [
          {
            imgUrl: 'api/product_details_thumb_1.jpg'
          },
          {
            imgUrl: 'api/product_details_thumb_1.jpg'
          }
        ],
        lists: [
          {
            imgUrl: 'api/product_6.jpg'
          },
          {
            imgUrl: 'api/product_3.jpg'
          },
          {
            imgUrl: 'api/product_2.jpg'
          },
          {
            imgUrl: 'api/product_4.jpg'
          },
          {
            imgUrl: 'api/product_7.jpg'
          },
          {
            imgUrl: 'api/product_1.jpg'
          },
          {
            imgUrl: 'api/product_8.jpg'
          },
          {
            imgUrl: 'api/product_2.jpg'
          }
        ]
      }
    }
  },
  mounted: function () {

  },
  activated () {
    if (this.$store.state.searchdata.length >= 1) {
      this.message = this.$store.state.searchdata[0]
    }
  }
}
</script>

<style lang="less">
  .x-pr-nav{
    height: 760px;
    padding: 30px 0 90px;
    .x-nav{
      display: flex;
      justify-content: center;
      ul{
        position: relative;
        padding: 30px 15px 0;
        height: 638px;
        width: 570px;
        box-sizing: border-box;
      }
      ul:nth-child(1){
        li:nth-child(1){
          height: 540px;
          width: 540px;
          overflow: hidden;
          ol{
            span{
              display: inline-block;
              float: left;
              img{
                height: 540px;
                width: 540px;
              }
            }
          }
        }
        li:nth-child(2){
          position: absolute;
          bottom: 0;
          ol{
            width: 540px;
            height: 110px;
            padding: 0 30px;
            overflow: hidden;
            span{
              display: inline-block;
              padding: 0 3px;
              img{
                height: 110px;
                width: 110px;
                font-size: 0;
                vertical-align: middle;
                border: 4px solid #cccccc;
              }
            }
          }
        }
      }
      ul:nth-child(2){
        li:nth-child(1){
          font-size: 24px;
          padding: 0 0 17px;
          font-font: "Poppins", sans-serif;
          font-weight: 600;
          color: #222222;
        }
        li:nth-child(2){
          padding: 0 0 20px;
          span{
            color: #fb7e00;
          }
          a{
            font-size: 14px;
            color: #888888;
          }
        }
        li:nth-child(3){
          color: #fb7e00;
          font-size: 22px;
        }
        li:nth-child(4){
          color: #555555;
          padding: 30px 0 0;
          font-size: 14px;
          font-font: "Poppins", sans-serif;
          line-height: 25px;
          padding-right: 20px;
        }
        li:nth-child(5){
          padding: 30px 0 0;
          span:nth-child(1){
            color: #222222;
            font-size: 15px;
            font-weight: bold;
            margin-right: 35px;
          }
          span:nth-child(2){
            display: inline-block;
            height: 30px;
            width: 30px;
            background: #8bab3e;
            border-radius: 15px;
            vertical-align: -8px;
            margin-right: 18px;
          }
          span:nth-child(3){
            font-size: 32px;
            vertical-align: -5px;
            color: #ffffff;
            background: #222222;
            font-weight: bold;
            border-radius: 50%;
          }
        }
      }
      li:nth-child(6){
        padding: 40px 0 0;
        a{
          font-size: 15px;
          padding: 0 18px 0 0;
          color: #222222;
          font-weight: bold;
        }
        span{
          font-size: 14px;
          padding: 0 17px;
        }
      }
      li:nth-child(7){
        padding: 45px 0 0;
        button{
          height: 50px;
          width: 23px;
          background: #cccccc;
          font-size: 18px;
          border: 0;
          outline: none;
        }
        input{
          height: 51px;
          width: 65px;
          border: 1px solid #ddd;
          padding: 0 10px;
          text-align: center;
          vertical-align: 2px;
        }
        a{
          display: inline-block;
          height: 50px;
          width: 154px;
          border: 1px solid #fb7e00;
          text-align: center;
          line-height: 50px;
          border-radius: 25px;
          color: #ffffff;
          font-size: 14px;
          font-weight: bolder;
          background: #fb7e00;
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
</style>
