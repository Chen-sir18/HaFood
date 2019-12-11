<template>
  <!-- <div class="tranding-box">
      <div class="title-box">
          <div class="tranding-content">
              <div class="trending-left">
                  <div class="title">
                      <span class="font-14">BSET SELLER</span>
                      <h3 class="pad-b-30 font-24">Trending Foods</h3>
                  </div>
              </div>
              <div class="trending-right">
                <div class="tab-box">
                    <ul class="nav-list">
                        <li class="active">Cupcakes</li>
                        <li>Donuts</li>
                        <li>Cheesecake</li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
  </div> -->
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <!-- <div :key="index" class="trending-box" v-for="(item,index) in trendingData">
          <div class="trending-content-box">
            <div class="trending-item">
              <div class="trending-item-content">
                <img :src='"http://192.168.97.241:3000/" + item.picstr' alt="">
                <a>{{item.goodsname}}</a>
                <p>{{item.price}}</p>
              </div>
            </div>
          </div>
        </div> -->
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      activeName: 'second',
      trendingData: {
        imgUrl: '',
        title: '',
        price: ''
      }
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'http://192.168.97.241:3000/cakes'
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
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style>
</style>
