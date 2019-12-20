<template>
    <div class="about-banner">
        <div class="about-banner-title">
            <h3 class="font-32">Testimonials</h3>
        </div>
        <!-- banner显现区域 -->
        <div class="about-show-banner" ref="showBanner">
            <!-- banner长图盒子 -->
            <ul class="banner-lists">
                <li class="banner-list" :key="index" v-for="(item, index) in messggeList.data">
                    <div class="banner-list-cont">
                        <div class="list-cont-top clearfix">
                            <div class="photo">
                                <img :src="'http://192.168.97.241:3000/' + item.headpic" >
                            </div>
                            <div class="title">
                                <b>{{item.nickname}}</b>
                                <!-- <span>{{item.country}}</span> -->
                            </div>
                        </div>
                        <div class="list-cont-describe">
                           {{item.content}}
                        </div>
                    </div>
                </li>
            </ul>
            <!-- <div>dianji左边 图片往右边走</div>
            <div>dianji右边 图片往左边走</div> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      messggeList: [
        {
          photo: '111',
          name: 'ZHANG',
          country: 'zhong',
          text: 'Lorem ipsum dolor sit amet, consectetur elised do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        },
        {
          photo: '222',
          name: 'HU',
          country: 'ying',
          text: 'Lorem ipsum dolor sit amet, consectetur elised do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        },
        {
          photo: '333',
          name: 'DENG',
          country: 'faguo',
          text: 'Lorem ipsum dolor sit amet, consectetur elised do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }
      ]
    }
  },
  mounted () {
    // axios 顾客评论
    axios({
      method: 'get',
      url: 'http://192.168.97.241:3000/comments',
      data: {
      }
    }).then((res) => {
      if (res.data.status === 200) {
        this.messggeList = res.data
      }
    }).catch(() => {
      console.log(8888)
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import '../../less/about-banner.less';
</style>
