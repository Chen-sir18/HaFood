<template>
  <div class="instagram-area">
    <div class="instagram-box">
      <div class="area-item" v-for="(item, index) in productLists" :key="index">
        <img :src="item.imgUrl" />
        <a class="view-button">
          <span class="iconfont icon-instagram"></span>
        </a>
        <a class="effect-button on"></a>
      </div>
      <div class="area-title"># HAFOOD</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productLists: [
        {
          imgUrl: require('../../img/instagram_1.jpg')
        },
        {
          imgUrl: require('../../img/instagram_2.jpg')
        },
        {
          imgUrl: require('../../img/instagram_3.jpg')
        },
        {
          imgUrl: require('../../img/instagram_4.jpg')
        },
        {
          imgUrl: require('../../img/instagram_5.jpg')
        },
        {
          imgUrl: require('../../img/instagram_6.jpg')
        },
        {
          imgUrl: require('../../img/instagram_7.jpg')
        },
        {
          imgUrl: require('../../img/instagram_8.jpg')
        }
      ]
    }
  }
}
</script>

<style>

</style>
