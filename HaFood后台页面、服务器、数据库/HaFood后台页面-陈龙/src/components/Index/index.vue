<template>
  <div>
    <Top></Top>
    <div class="indexcont">
      <div class="asside">
        <div class="userphoto">
          <el-avatar :size="60" :src="'api' + userinfo.headpic"></el-avatar>
          <p>HaFood有限公司</p>
        </div>
        <el-tabs :tab-position="tabPosition">
          <el-tab-pane :key="index" v-for="(item, index) in moduleList">
            <router-link slot="label" :to="item.path"><i class="el-icon-s-home"></i>{{item.name}}</router-link>
            <router-view></router-view>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '../Common/top'
import {api} from '../../common/api'
export default {
  data () {
    return {
      userinfo: [],
      tabPosition: 'left', // 侧边导航向左排传值
      moduleList: [],
      api: api
    }
  },
  components: {
    Top
  },
  mounted () {
    // 手动浏览器刷新时回到首页
    var url = 'http://localhost:8081/#/acount'
    var F5_KEY_CODE = 116
    document.addEventListener('keydown', function (e) {
      if (e.keyCode === F5_KEY_CODE) {
        document.location.href = url
      }
    })
    // 获取vuex数据
    let module = this.$store.state.step.moduleList
    this.moduleList = module
    // 获取localStorage中用户信息渲染到顶部
    let user = JSON.parse(window.localStorage.getItem('userinfo'))
    this.userinfo = user
  }
}
</script>

<style lang="less" scoped>
@import url("./css/index.less");
</style>
