<template>
  <div class="latestnews-box">
    <div class="latestnews-cont">
      <div class="news-title" v-for="(item, index) in newTitleData" :key="index">
        <div class="news-title-top">{{item.title}}</div>
        <div class="news-title-bottom">{{item.titleDeatail}}</div>
      </div>
      <div class="news-cont">
        <div class="news-cont-item same-item" v-for="(item, index) in newItemLists" :key="index">
          <img :src="'api/' + item.picstr" v-if="!(item.picstr === undefined)" alt="图片资源错误">
          <a class="item-descript" @click="toBlogDeail">{{item.reminder}}</a>
          <span class="item-name">{{item.class}}</span>
        </div>
      </div>
      <div><a class="look-more" @click="toBlogGrid">VIEW MORE</a></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      newTitleData: [],
      firstTitle: [
        {
          title: 'Latest News',
          titleDeatail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ],
      secondTitle: [
        {
          title: 'Cooking Tips',
          titleDeatail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ],
      newItemLists: [],
      firstItemLists: [
        {
          itemImgurl: require('../../img/latest_news_1.jpg'),
          itemDescript: 'Cooking tips make cooking simple',
          itemName: 'FOOD'
        },
        {
          itemImgurl: require('../../img/latest_news_2.jpg'),
          itemDescript: 'Plant Potted Decorative Green',
          itemName: 'PLANT'
        },
        {
          itemImgurl: require('../../img/latest_news_3.jpg'),
          itemDescript: 'Minimalist Dining Rooms',
          itemName: 'DRINKS'
        }
      ],
      secondItemLists: [
        {
          itemImgurl: require('../../img/latest_news_4.jpg'),
          itemDescript: 'Cooking tips make cooking simple',
          itemName: 'CLEAN DIET'
        },
        {
          itemImgurl: require('../../img/latest_news_5.jpg'),
          itemDescript: 'Plant Potted Decorative Green',
          itemName: 'HOW-TO'
        },
        {
          itemImgurl: require('../../img/latest_news_6.jpg'),
          itemDescript: 'Minimalist Dining Rooms',
          itemName: 'DESSERT'
        }
      ]
    }
  },
  methods: {
    toBlogDeail () {
      this.$router.replace('/BlogDetails')
    },
    toBlogGrid () {
      this.$router.replace('/Bloggrid')
    }
  },
  mounted () {
    if (this.$route.fullPath === '/Home1') {
      axios({
        method: 'get',
        url: 'api/bloglists'
      }).then((res) => {
        if (res.data.status === 200) {
          this.newTitleData = this.firstTitle
          let newsData = res.data.data
          newsData.splice(3, newsData.length - 3)
          this.newItemLists = newsData
        } else {
          return '失败'
        }
      }).catch((error) => {
        console.log(error)
      })
    } else if (this.$route.fullPath === '/Home2') {
      axios({
        method: 'get',
        url: 'api/bloglists'
      }).then((res) => {
        if (res.status === 200) {
          this.newTitleData = this.secondTitle
          let newsData = res.data.data
          let secondNews = newsData.splice(3, 3)
          this.newItemLists = secondNews
        } else {
          return '失败'
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
