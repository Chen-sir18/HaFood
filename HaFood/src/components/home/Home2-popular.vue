<template>
  <div class="popular-Most-menu">
      <div class="popular-area">
        <div class="popular-menu-title text-center">
          <span>Our Most Popular Menu</span>
        </div>
        <div class="popular-menu-item">
          <div class="popular-menu-list" v-for="(item, index) in menuLists" :key="index">
            <div class="popular-menu-img vertical-box">
              <img :src="item.imgUrl" class="vertical-img" alt="图片资源错误">
            </div>
            <div class="popular-menu-flex">
              <div class="popular-menu-detail">
                <a class="foods-title">{{item.title}}</a>
                <p class="foods-price">{{item.price}}</p>
                <p class="foods-descript">{{item.descript}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
   data () {
     return {
       menuLists: [
         {
           title: 'Crab With Curry Sources',
           price: '$25.00',
           descript: 'Dandelion greens and molasses glazed peaches',
           imgUrl: require('../../img/popular_menu_1.jpg')
         },
         {
           title: 'Wild Mushroom Bucatini with Kale',
           price: '$15.00',
           descript: 'Dandelion greens and molasses glazed peaches',
           imgUrl: require('../../img/popular_menu_2.jpg')
         },
         {
           title: 'Lemon-Rosemary Chicken',
           price: '$35.00',
           descript: 'Dandelion greens and molasses glazed peaches',
           imgUrl: require('../../img/popular_menu_3.jpg')
         },
         {
           title: 'Lemon-Rosemary Chicken',
           price: '$25.00',
           descript: 'Dandelion greens and molasses glazed peaches',
           imgUrl: require('../../img/popular_menu_4.jpg')
         },
         {
           title: 'Spicy Crab Ramen',
           price: '$15.00',
           descript: 'Dandelion greens and molasses glazed peaches',
           imgUrl: require('../../img/popular_menu_5.jpg')
         },
         {
           title: 'Wild Mushroom Bucatini with Kale',
           price: '$35.00',
           descript: 'Dandelion greens and molasses glazed peaches',
           imgUrl: require('../../img/popular_menu_6.jpg')
         }
       ]
     }
   }
}
</script>

<style>

</style>
