<template>
  <div>
    <div class="header">
      <div class="header-content content clearfix">
        <div class="header-position">
          <span class="iconfont icon-gouwuche"></span>
          <a>首页</a>
        </div>
        <ul class="header-lists">
          <li class="header-list">
            <span class="iconfont icon-gouwuche"></span>
            <a>购物车</a>
          </li>
          <li class="header-list">
            <span class="iconfont icon-wujiaoxingxingxing"></span>
            <a>收藏夹</a>
          </li>
          <li class="header-list">
            <span class="iconfont icon-dianhua"></span>
            <a>联系我们</a>
          </li>
          <li class="header-list"><a>帮助中心</a></li>
          <li class="header-list"><a @click="logOut">退出</a></li>
        </ul>
      </div>
    </div>
    <!-- navigation -->
    <div class="navigation">
      <div class="nav-cont content">
        <!-- avatar -->
        <div class="avatar text-center clearfix">
          <div class="avatar-cont">
            <img src="../../img/about_team_1.jpg" alt="">
          </div>
          <span class="nickname">欢迎你 ,&nbsp;&nbsp;&nbsp;&nbsp;{{nickName}}</span>
        </div>
        <div class="nav-name">
          <a>我的HaFood</a>
        </div>
        <ul class="nav-lists">
          <li class="nav-list"><a>首页</a></li>
          <li class="nav-list"><a>账户管理</a></li>
          <li class="nav-list"><a>消息</a></li>
        </ul>
      </div>
    </div>
    <!-- detail-content -->
    <div class="detail-cont">
      <div class="detail content">
        <!-- left-sidebar -->
        <ul class="left-sidebar">
          <li class="side-list">
            <span class="iconfont icon-gouwuche"></span>
            <a class="side-item">我的交易</a>
            <ul class="item-lists">
              <li class="item-list"><a>订单管理</a></li>
              <li class="item-list"><a>退换/售后</a></li>
              <li class="item-list"><a>收货地址</a></li>
            </ul>
          </li>
          <li class="side-list">
            <span class="iconfont icon-gouwuche"></span>
            <a class="side-item">我的资产</a>
            <ul class="item-lists">
              <li class="item-list"><a>优惠券</a></li>
              <li class="item-list"><a>银行卡</a></li>
              <li class="item-list"><a>哈豆</a></li>
            </ul>
          </li>
          <li class="side-list">
            <span class="iconfont icon-gouwuche"></span>
            <a class="side-item">我的账户</a>
            <ul class="item-lists">
              <li class="item-list"><a>我的资料</a></li>
              <li class="item-list"><a>分享账号</a></li>
              <li class="item-list"><a>修改密码</a></li>
            </ul>
          </li>
        </ul>
        <!-- right-content -->
        <div class="detail-center">
          <div class="center-top">
            <ul class="top-lists">
              <li class="top-list">
                <div class="top-list-cont text-center">
                  <p class="list-title">2019年8月</p>
                  <p class="list-day">12</p>
                  <p class="list-signin">签到领哈豆</p>
                </div>
              </li>
              <li class="top-list">
                <div class="top-list-cont text-center assets">
                  <p class="list-title">我的资产</p>
                  <span class="top-btn">显示今日收益</span>
                  <p class="assets-img"></p>
                </div>
              </li>
            <li class="top-list">
                <div class="top-list-cont text-center assets">
                  <p class="list-title">我的资产</p>
                  <span class="top-btn">显示今日收益</span>
                  <p class="earning-img"></p>
                </div>
              </li>
            </ul>
            <ul class="bottom-lists">
              <li class="bottom-list">
                <a>待付款</a>
                <span class="message-num">0</span>
              </li>
              <li class="bottom-list">
                <a>待发货</a>
                <span class="message-num">1</span>
                <span class="split-line"></span>
              </li>
              <li class="bottom-list">
                <a>待收货</a>
                <span class="message-num">1</span>
                <span class="split-line"></span>
              </li>
              <li class="bottom-list">
                <a>待评价</a>
                <span class="message-num">3</span>
                <span class="split-line"></span>
              </li>
              <li class="bottom-list">
                <a>退款</a>
                <span class="split-line"></span>
              </li>
            </ul>
          </div>
          <!-- 我的物流 -->
          <div class="logistics">
            <div class="logistics-title">我的物流</div>
            <ul class="goods-lists">
              <li class="goods-list">
                <div class="goods-list-item clearfix">
                  <div class="goods-img">
                    <img src="../../img/instagram_2.jpg" alt="">
                  </div>
                  <div class="goods-logistics">
                    <p class="goods-logistics-detail">快件在浙江省金华市菜鸟公司已进行扫描,请耐心等待</p>
                    <p class="goods-logistics-time">2019-8-10 12:30:55 <a>查看物流信息</a></p>
                    <p class="goods-operate">
                      <a class="operate-btn">催包裹</a>
                      <a class="operate-btn">查询物流</a>
                      <a class="operate-btn">确认收货</a>
                      <a class="operate-btn">退款/售后</a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="goods-list">
                <div class="goods-list-item clearfix">
                  <div class="goods-img">
                    <img src="../../img/instagram_3.jpg" alt="">
                  </div>
                  <div class="goods-logistics">
                    <p class="goods-logistics-detail">快件在浙江省金华市菜鸟公司已进行扫描,请耐心等待</p>
                    <p class="goods-logistics-time">2019-8-10 12:30:55 <a>查看物流信息</a></p>
                    <p class="goods-operate">
                      <a class="operate-btn">催包裹</a>
                      <a class="operate-btn">查询物流</a>
                      <a class="operate-btn">确认收货</a>
                      <a class="operate-btn">退款/售后</a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="goods-list">
                <div class="goods-list-item clearfix">
                  <div class="goods-img">
                    <img src="../../img/instagram_4.jpg" alt="">
                  </div>
                  <div class="goods-logistics">
                    <p class="goods-logistics-detail">快件在浙江省金华市菜鸟公司已进行扫描,请耐心等待</p>
                    <p class="goods-logistics-time">2019-8-10 12:30:55 <a>查看物流信息</a></p>
                    <p class="goods-operate">
                      <a class="operate-btn">催包裹</a>
                      <a class="operate-btn">查询物流</a>
                      <a class="operate-btn">确认收货</a>
                      <a class="operate-btn">退款/售后</a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="goods-list">
                <div class="goods-list-item clearfix">
                  <div class="goods-img">
                    <img src="../../img/instagram_3.jpg" alt="">
                  </div>
                  <div class="goods-logistics">
                    <p class="goods-logistics-detail">快件在浙江省金华市菜鸟公司已进行扫描,请耐心等待</p>
                    <p class="goods-logistics-time">2019-8-10 12:30:55 <a>查看物流信息</a></p>
                    <p class="goods-operate">
                      <a class="operate-btn">催包裹</a>
                      <a class="operate-btn">查询物流</a>
                      <a class="operate-btn">确认收货</a>
                      <a class="operate-btn">退款/售后</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="detail-right">
          <div class="manage-title">菜单管理</div>
          <!-- 我的优惠券 -->
          <div class="preferential">
            <div class="preferential-title">我的优惠券</div>
            <div class="my-preferential text-center">
              <p>
                <img src="./img/center_4.png" alt="">
              </p>
              <p>
                <img src="./img/center_5.png" alt="">
              </p>
              <p class="preferential-bottom">
                <a class="bottom-title">全部优惠券</a>
                <span class="message-num">(21)</span>
              </p>
            </div>
          </div>
          <!-- 收藏的商品 -->
          <div class="goods-collect">
            <div class="collect-title">收藏的商品</div>
            <div class="collect-content text-center">
              <img src="./img/center_6.png" alt="">
              <a class="null-explain text-center">收藏空空如也,去首页~</a>
            </div>
          </div>
          <!-- 我的足迹 -->
          <div class="goods-collect">
            <div class="collect-title">我的足迹</div>
            <div class="collect-content text-center">
              <img src="./img/center_7.png" alt="">
              <a class="null-explain text-center">足迹空空如也,去首页~</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 个人资料 -->
    <div class="update-info">
      <div class="information">
        <p class="info-title">基本资料</p>
        <div class="info-head clearfix">
          <div class="info-avatar">
            <img src="../../img/about_team_1.jpg" />
            <span class="avatar-editor"><a class="editor-txt" @click="messageBox">编辑头像</a></span>
          </div>
          <div class="info-describ">
            <div class="info-nickname">{{nickName}}</div>
            <div class="info-complete">
              资料完整度：
              <span class="complete-percent text-center"><span class="percent">30%</span></span>
            </div>
          </div>
        </div>
        <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="100px" class="demo-ruleForm">
          <el-form-item class="info-item name" label="昵称:" prop="nickname">
            <el-input type="text" v-model="infoForm.nickname" ref="inputname"></el-input>
          </el-form-item>
          <el-form-item class="info-item phone" label="移动电话:" prop="tel">
            <el-input type="num" v-model="infoForm.tel" ref="inputtel"></el-input>
          </el-form-item>
          <el-form-item class="info-item" label="邮箱:" prop="email">
            <el-input disabled v-model="infoForm.email"></el-input>
          </el-form-item>
        </el-form>
      <div class="text-center">
        <el-button>重置</el-button>
        <el-button type="primary" @click="submit">保存</el-button>
      </div>
      </div>
    </div>
    <!-- 修改头像弹出框 -->
    <div class="custom-pic">
      <div class="upload-box">
        <p>自定义头像</p>
        <el-upload
          ref="upload"
          :action="'http://192.168.97.241:3000/upload'"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-success="handleAvatarSuccess"
          :on-remove="handleRemove"
          :auto-upload="false"
          :before-upload="beforeAvatarUpload"
          >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      </div>
    </div>
    <!-- 底部 -->
    <div>
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script>
import Bottom from '../public/bottom.vue'
import axios from 'axios'
export default {
  data () {
    return {
      nickName: '',
      isShow: false,
      dialogVisible: false,
      dialogImageUrl: '',
      imageUrl: '',
      infoForm: {},
      rules: {
        nickname: [
          {
            required: true, message: '请输入您的昵称', trigger: 'blur'
          },
          {
            min: 4, max: 20, message: '长度在4到20个字符之间', trigger: 'blur'
          }
        ]
      }
    }
  },
  components: {
    Bottom
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      // judge login
      let token = window.localStorage.getItem('token')
      if (to.meta.requireLogin && to.meta.requireLogin === 1) {
        if (token) {
          next()
        } else {
          next('/login')
        }
      } else if (to.meta.requireLogin && to.meta.requireLogin === 2) {
        if (token) {
          next('/Home1')
        } else {
          next()
        }
      } else {
        next()
      }
    })
  },
  methods: {
    toCenter () {
      // 判断是否能进入个人中心
      let token = window.localStorage.getItem('token')
      let info = JSON.parse(window.localStorage.getItem('info'))
      if (token) {
        let nickName = info.nickname
        let email = info.email
        // this.email = email
        if (nickName !== null && nickName !== '') {
          this.nickName = nickName
        } else {
          this.nickName = email
        }
      }
    },
    logOut () {
      // 退出登录
      this.$confirm('您将退出登录，是否继续?', '提示', {
        confirmButtonText: '退出',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem('info')
        window.localStorage.removeItem('token')
        this.$router.push('/Home1')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '网络登录异常，请稍后再试！'
        })
      })
    },
    handleClose (done) {
      // 关闭修改头像的弹窗
      this.$confirm('确认取消?').then(_ => {
        done()
      }).catch(_ => {})
    },
    submit () {
      // 修改资料保存触发该方法
      axios({
        url: 'api/usercenter',
        method: 'get',
        params: {
          nickname: this.infoForm.nickname,
          tel: this.infoForm.tel,
          headpic: this.infoForm.headpic,
          email: this.infoForm.email
        }
      }).then((res) => {
        if (res.data.status === 200) {
          this.infoForm = res.data.data
          window.localStorage.setItem('info', JSON.stringify(this.infoForm))
          // 刷新本页面
          this.$router.go(0)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeAvatarUpload (file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAvatarSuccess (res, file) {
      // 上传成功
      console.log(456789123)
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(this.imageUrl)
    },
    messageBox () {
      this.isShow = !this.isShow
      console.log(this.isShow)
    },
    submitUpload () {
      // 手动上传头像
      this.$refs.upload.submit()
    }
  },
  mounted () {
    this.toCenter()
    let infomation = JSON.parse(window.localStorage.getItem('info'))
    this.infoForm = infomation
  }
}
</script>

<style lang="less" scoped>
@import '../../less/center.less';
</style>
