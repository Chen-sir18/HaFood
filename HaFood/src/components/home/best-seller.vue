<template>
  <div class="tranding-box">
      <div class="title-box">
          <div class="tranding-content">
              <div class="trending-left">
                  <div class="title">
                      <span class="font-14">OUR PRODUCT</span>
                      <h3 class="pad-b-30 font-24">Best Seller</h3>
                  </div>
              </div>
              <div class="trending-right">
                <div class="tab-box">
                    <ul class="nav-list">
                        <li class="active" @click="changeTab(1)">Coffee</li>
                        <li class="active" @click="changeTab(2)">Tea</li>
                        <li class="active" @click="changeTab(3)">Equipment</li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
      <!-- 内容 -->
      <div>
        <TabFirst v-if="tabValue === 1"></TabFirst>
        <TabSecond v-else-if="tabValue === 2"></TabSecond>
        <TabThird v-else></TabThird>
      </div>
  </div>
</template>

<script>
import TabFirst from './home3-tabFirst'
import TabSecond from './home3-tabSecond'
import TabThird from './home3-tabThird'
import axios from 'axios'
export default {
  components: {
    TabFirst,
    TabSecond,
    TabThird
  },
  data () {
    return {
      activeName: 'second',
      trendingData: {
        imgUrl: '',
        title: '',
        price: ''
      },
      tabValue: 1
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'http://192.168.97.241:3000/drink'
    }).then((res) => {
      console.log(res.data)
      if (res.data.status === 200) {
        let trenData = res.data.data
        this.trendingData = trenData
      } else {
        return false
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    changeTab (tab) {
      this.tabValue = tab
    }
  }
}
</script>
<style>
</style>
