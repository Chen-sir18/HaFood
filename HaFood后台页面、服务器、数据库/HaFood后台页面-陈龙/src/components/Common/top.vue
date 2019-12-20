<template>
  <div class="Top-public">
    <div class="top">
        <div class="display logo"><img class="vertival" src="../../image/logo.png"></div>
        <span class="top-txt">|</span>
        <span class="vertival">HaFood有限公司</span>
        <div class="userinfo">
          <div class="userimg display vertival">
            <el-avatar :src="'api' + userinfo.headpic"></el-avatar>
          </div>
          <span>{{userinfo.nickname}}</span>
          <a @click="outLogin"><span class="el-icon-eleme"></span>退出</a>
        </div>
    </div>
  </div>
</template>

<script>
import {api} from '../../common/api'
export default {
  data () {
    return {
      userinfo: [],
      api: api
    }
  },
  methods: {
    outLogin () {
      // 移除token 跳转到登录页面
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userinfo')
      this.$router.push('/')
    }
  },
  mounted () {
    // 获取localStorage中用户信息渲染到顶部
    let user = JSON.parse(window.localStorage.getItem('userinfo'))
    this.userinfo = user
  }
}
</script>

<style lang="less" scoped>
@import './css/main.less';
</style>
