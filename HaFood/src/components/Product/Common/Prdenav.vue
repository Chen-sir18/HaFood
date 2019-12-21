<template>
<div>
  <div class="product-detail-outer">
    <div class="product-contain">
      <div class="product-content">
        <!-- 左边图片盒子 -->
        <div class="product-details-thumb">
          <div class="product-thumb-inner">
            <div class="product-img-box">
              <img v-if="this.$store.state.searchdata.length >= 1" :src='"api/" + this.$store.state.searchdata[0].picstr' />
              <img v-else :src='"api/" + message.picstr' />
            </div>
          </div>
          <div class="product-thumb-lists">
            <div class="slick-list-draggable">
              <div class="item-slide-list">
                <img src="../../../img/blog_details_list_4.jpg" />
              </div>
              <div class="item-slide-list">
                <img src="../../../img/blog_details_list_4.jpg" />
              </div>
              <div class="item-slide-list">
                <img src="../../../img/blog_details_list_4.jpg" />
              </div>
              <div class="item-slide-list">
                <img src="../../../img/blog_details_list_4.jpg" />
              </div>
            </div>
          </div>
        </div>
        <!-- 右边内容 -->
        <div class="product-info-box">
          <div class="product-right-content">
            <div class="product-details-title">
              <h4 v-if="this.$store.state.searchdata.length >= 1" class="title">{{this.$store.state.searchdata[0].goodsname}}</h4>
              <h4 v-else class="title">{{message.goodsname}}</h4>
            </div>
            <div class="product-review">
              <ul>
                <li class="icon iconfont icon-wujiaoxingxingxingshoucang"></li>
                <li class="icon iconfont icon-wujiaoxingxingxingshoucang"></li>
                <li class="icon iconfont icon-wujiaoxingxingxingshoucang"></li>
                <li class="icon iconfont icon-wujiaoxingxingxingshoucang"></li>
                <li class="icon iconfont icon-wujiaoxingxingxing"></li>
              </ul>
              <span>- 1 review - Add your review</span>
            </div>
            <div class="prduct-detail-con">
              <span v-if="this.$store.state.searchdata.length >= 1">{{this.$store.state.searchdata[0].price || message.price}}</span>
              <span v-else>{{message.price}}</span>
              <p v-if="this.$store.state.searchdata.length >= 1">
                {{this.$store.state.searchdata[0].depict}}
              </p>
              <p v-else>
                {{message.depict}}
              </p>
            </div>
            <div class="product-color">
              <span>Color</span>
              <ul>
                <li>
                  √
                </li>
                <li>
                  √
                  <!-- <i class="icon iconfont icon-wancheng"></i> -->
                </li>
              </ul>
            </div>
            <div class="product-weight">
              <span>Weight (kg) </span>
              <ul>
                <li>
                  <p>0.5</p>
                </li>
                <li>
                  <p>1</p>
                </li>
                <li>
                  <p>1.5</p>
                </li>
                <li>
                  <p>2</p>
                </li>
                <li>
                  <p>3</p>
                </li>
              </ul>
            </div>
            <!-- 加入购物车 -->
            <div class="product-cart">
              <div class="product-quantity">
                <button @click="addCount(-1)" type="button" class="sub">-</button>
                <input v-model="count" type="text" value="0">
                <button @click="addCount(1)" type="button" class="add">+</button>
              </div>
              <div class="add-cart">
                <span>Add to cart</span>
              </div>
              <ul class="ul-lists">
                <li>
                  <i class="icon iconfont icon-xin-copy"></i>
                </li>
                <li>
                  <i class="icon iconfont icon-jiaohuan"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- <div class="x-pr-nav">
    <div class="x-nav">
      <ul>
        <li>
          <ol>
            <span>
              <img :src='"api/" + message.picstr'/>
            </span>
          </ol>
        </li>
        <li>
          <ol>
            <span v-for="(item, index) in message.lists" :key="index">
              <img :src="item.imgUrl" />
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
  </div> -->
</template>

<script>
import '../../../font/demo.css'
import '../../../font/iconfont.css'
export default {
  data: function () {
    return {
      message: {
        goodsname: 'Grape',
        price: '$50.00',
        measure: 'Weight (kg)',
        picstr: 'product_details_thumb_1.jpg',
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
      },
      count: 1
    }
  },
  methods: {
    addCount (i) {
      this.count += i
      if (this.count <= 0) {
        this.count = 1
      } else if (this.count > 100) {
        this.count = 100
      }
    }
  },
  mounted: function () {
    if (this.$store.state.searchdata.length >= 1) {
      // console.log(this.$store.state.searchdata)
      this.message = this.$store.state.searchdata[0]
    }
  },
  activated () {
    if (this.$store.state.searchdata.length >= 1) {
      // console.log(this.$store.state.searchdata)
      this.message = this.$store.state.searchdata[0]
    }
  }
}
</script>

<style lang="less" scope>
@import './productnav.less';
</style>
