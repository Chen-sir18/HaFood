<template>
  <div>
    <Blogtop></Blogtop>
    <section class="h-detail-area">
      <div class="h-btail-outer">
        <div class="h-btail-inner">
          <!-- 第一层图片 -->
          <div class="h-detail-thumb">
            <img src="../../img/blog_details_bg.jpg" />
            <ul>
              <li class="h-details-iconbox">
                <a class="icon iconfont icon-xinfeng"></a>
              </li>
              <li class="h-detail-pinter">
                <a class="icon iconfont icon-pinterest"></a>
              </li>
              <li class="h-detail-in">
                <a class="icon iconfont icon-icon-test"></a>
              </li>
              <li class="h-detail-gooleplus">
                <a class="icon iconfont icon-googleplus-copy"></a>
              </li>
              <li class="h-detail-twitter">
                <a class="icon iconfont icon-twitter-fill"></a>
              </li>
              <li class="h-detail-fly">
                <a class="icon iconfont icon-f"></a>
              </li>
            </ul>
          </div>
          <!-- 第二层 -->
          <div class="h-detail-content">
            <div class="blog-detail-top">
              <span>11, 2019 - Rachel - Organic</span>
              <p>
                Lorem ipsum dolor sit amet, duo et fuisset reprimique. In ridens possit eos, mei oratio tritani ne, duo libris omnium id. Cetero legendos has at, ipsum propriae pro et. At labores epicurei vis. Id quem definiebas nec. Nec suas dolorem ne, id accusamus iracundia interesset eos. Usu dolorum molestiae an, eam agam scriptorem ad. Et nulla graeco mel, vivendo expetendis vis in, ex vim corrumpit dignissim. Eam an malorum tacimates mediocrem, sed malorum alienum ut. Eam mutat suscipit definiebas ei, integre copiosae laboramus vel te.
              </p>
              <div class="blog-detail-toplorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <i class="icon iconfont icon-quote"></i>
              </div>
            </div>
            <div class="blog-detail-lamon">
              <div class="blog-lamon-thumb">
                <img src="../../img/blog_details_lamone.png" />
                <span>Eating Healthy</span>
              </div>
              <div class="blog-lamon-content">
                <p class="lorem">Lorem ipsum dolor sit amet, duo et fuisset reprimique. In ridens possit eos, mei oratio tritani ne, duo libris omnium id. Cetero legendos has at, ipsum propriae pro et. At labores epicurei vis. Id quem definiebas nec.</p>
                <p class="lorem-middle">
                  Nec suas dolorem ne, id accusamus iracundia interesset eos. Usu dolorum molestiae an, eam agam scriptorem ad.
                </p>
                <p class="lorem">
                  Discere intellegebat no mel, affert fastidii reformidans ad his. Posse reformidans neglegen-tur has ne, te usu postea aperiam graecis, pri utamur accusata ad. Ea mei aliquip tincidunt, eu maluisset assueverit ius. In mel phaedrum expetendis constituam.
                </p>
              </div>
            </div>
            <div class="blog-detail-discere">
              <h4 class="h-dicere-info">Discere intellegebat no mel</h4>
              <p>
                Lorem ipsum dolor sit amet, duo et fuisset reprimique. In ridens possit eos, mei oratio tritani ne, duo libris omnium id. Cetero legendos has at, ipsum propriae pro et. At labores epicurei vis. Id quem definiebas nec. Nec suas dolorem ne, id accusamus iracundia interesset eos. Usu dolorum molestiae an, eam agam scrip
              </p>
            </div>
          </div>
          <!-- 第三层 -->
          <div class="h-detail-user">
            <div class="h-user-header">
              <div class="h-user-inner">
                <img src="../../img/blog_details_post.jpg" />
              </div>
            </div>
            <div class="h-detail-message">
              <div class="h-detail-mecontent">
                <span>Posted By</span>
                <h6 class="h-username">Rachel</h6>
                <p>
                  unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore person veritatis barcelona.
                </p>
                <ul class="h-user-iconlist">
                  <li>
                    <a class="icon iconfont icon-f"></a>
                  </li>
                  <li>
                    <a class="icon iconfont icon-instagram"></a>
                  </li>
                  <li>
                    <a class="icon iconfont icon-twitter-fill"></a>
                  </li>
                  <li>
                    <a class="icon iconfont icon-googleplus-copy"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 第四层评论内容 -->
          <div class="h-detail-comments">
            <h3 class="h-comment-number">{{commtentData.length}} comments</h3>
            <div :key="index" v-for="(item, index) in commtentData" class="h-comments-item">
              <div class="h-comments-in">
                <div class="h-comments-avatar">
                  <img v-if="!(item.headpic === undefined)" :src='"api/" + item.headpic' />
                </div>
                <div class="h-comment-spanbox">
                  <span>FEB 15, 2019</span>
                  <h5 class="h-Vanessa">{{item.nickname}}</h5>
                </div>
                <a class="h-return-box">
                  <i class="icon iconfont icon-return-left"></i>
                </a>
              </div>
              <div class="h-comment-paragraph">
                <p>
                  {{item.content}}
                </p>
              </div>
            </div>
            <!-- <div class="h-comments-item">
              <div class="h-comments-in">
                <img src="../../img/blog_comment_2.png" />
                <span>FEB 15, 2019</span>
                <h5 class="h-Vanessa">Vanessa Harris</h5>
                <a class="h-return-box">
                  <i class="icon iconfont icon-return-left"></i>
                </a>
              </div>
              <div class="h-comment-paragraph">
                <p>
                  Nec suas dolorem ne, id accusamus iracundia interesset eos. Usu dolorum molestiae an, eam agam scriptorem ad. Et nulla graeco mel, vivendo expeten-dis vis in, ex vim corrumpit dignissim.
                </p>
              </div>
            </div> -->
            <!-- <div class="h-comments-item">
              <div class="h-comments-in">
                <img src="../../img/blog_comment_3.png" />
                <span>FEB 15, 2019</span>
                <h5 class="h-Vanessa">Vanessa Harris</h5>
                <a class="h-return-box">
                  <i class="icon iconfont icon-return-left"></i>
                </a>
              </div>
              <div class="h-comment-paragraph">
                <p>
                  Nec suas dolorem ne, id accusamus iracundia interesset eos. Usu dolorum molestiae an, eam agam scriptorem ad. Et nulla graeco mel, vivendo expeten-dis vis in, ex vim corrumpit dignissim.
                </p>
              </div>
            </div> -->
          </div>
          <!-- 第五层 -->
          <div class="h-comment-input">
            <div class="h-comment-inputtitle">
              <h4 class="h-blog-leave">Leave your comment</h4>
              <p class="h-comment-details">Your email address will not be published. Required fields are marked * </p>
              <!-- 发表评论列表 -->
              <el-form ref="commitData" :model="commitData" :rules="rules">
                <div class="h-form-first">
                  <div class="h-form-item">
                    <el-form-item prop="username" class="h-input-box">
                      <el-input type="text" v-model="commitData.username" placeholder="Name"></el-input>
                    </el-form-item>
                  </div>
                  <div class="h-form-item">
                    <el-form-item prop="email" class="h-input-box">
                      <el-input v-model="commitData.email" type="eamil" placeholder="Eamil"></el-input>
                    </el-form-item>
                  </div>
                  <div class="h-form-item">
                    <div class="h-input-box">
                      <input type="text" placeholder="Website" />
                    </div>
                  </div>
                </div>
                <div class="h-form-message">
                  <el-form-item prop="comments" class="h-form-inner">
                    <el-input v-model="commitData.comments" class="textarea" type="textarea" placeholder="Message"></el-input>
                    <el-button @click="submitClik('commitData')" >Submit</el-button>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="h-related-items">
      <div class="h-related-outer">
        <div class="h-related-title">
          <div class="h-related-info">
            <h3 class="title">Related Items</h3>
          </div>
        </div>
        <div class="h-row-outer">
          <div :key="index" v-for="(item, index) in relatedData" class="h-row-item">
            <div class="h-row-list">
              <img v-if="!(item.picstr === undefined)" :src='"api/" + item.picstr'/>
              <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
              <a class="h-row-a">
                <h5 class="title">{{item.reminder}}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '../../font/demo.css'
import '../../font/iconfont.css'
import '../../less/public.less'
import Blogtop from './blogstop.vue'
import axios from 'axios'
export default {
  data () {
    var testEmail = (rules, value, callback) => {
      // 邮箱验证正则表达式
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!value) {
        callback(new Error('请输入邮箱'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入正确的邮箱名'))
      } else {
        callback()
      }
    }
    return {
      relatedData: {
        reImg: '',
        relatedDesc: ''
      },
      // Imgdata: [
      //   {
      //     id: 1,
      //     imgurl: 'blog_grid_1.jpg',
      //     title: 'Quality Oganic Foods'
      //   },
      //   {
      //     id: 1,
      //     imgurl: 'blog_grid_2.jpg',
      //     title: 'Cooking tips make cooking simple'
      //   },
      //   {
      //     id: 1,
      //     imgurl: 'blog_grid_3.jpg',
      //     title: 'Just Fresh Fruits'
      //   }
      // ],
      // 评论渲染数据
      commtentData: {
        username: '',
        comments: '',
        imgurl: ''
      },
      // 评论提交数据
      commitData: {
        username: '',
        email: '',
        comments: ''
      },
      // 表单验证的规则
      rules: {
        username: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
          { min: 3, max: 15, message: '昵称长度为3~15个字符', trigger: 'blur' }
        ],
        // comments: [
        //   { required: true, message: '请输入内容', trigger: 'blur' }
        // ],
        email: [
          { validator: testEmail, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: 'api/comments',
      params: {
        // 前面data函数里的数据
        // username: this.commtentData.username,
        // comments: this.commtentData.comments,
        // imgurl: api + this.commtentData.imgurl
      }
    }).then((res) => {
      // console.log(res.data)
      if (res.data.status === 200) {
        let comData = res.data.data
        this.commtentData = comData
      } else {
        return false
      }
      // this.commtentData = res.data
    }).catch((error) => {
      console.log(error)
    })
    axios({
      url: 'api/bloglists',
      method: 'get',
      params: {
        // 从后台获取参数 此处不用传参
      }
    }).then((res) => {
      // console.log(res.data)
      if (res.status === 200) {
        let latedMount = res.data.data
        latedMount.splice(6, latedMount.length - 6)
        this.relatedData = latedMount
      } else {
        return false
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    // formname形参
    submitClik (formname) {
      // 验证表单
      this.$refs[formname].validate((valid) => {
        // console.log(valid)
        // 通过验证后的操作
        if (valid) {
          let userinfo = JSON.parse(window.localStorage.getItem('info'))
          let token = window.localStorage.getItem('token')
          if (userinfo && token) {
            // console.log(valid, userinfo.id)
            axios({
              url: 'api/incomment',
              method: 'get',
              params: {
                // this.commitData.name 前面数据里的东西
                username: this.commitData.username,
                email: this.commitData.email,
                comments: this.commitData.comments,
                userid: userinfo.id
              }
            }).then((res) => {
              // console.log(res)
              if (res.data.status === 200) {
                this.$message({
                  message: '发表评论成功',
                  type: 'success',
                  showClose: true,
                  // 显示时间
                  duration: 3000,
                  onClose: () => {
                    // 定义对象初始值
                    let returnData = {
                      content: '',
                      headpic: '',
                      nickname: ''
                    }
                    // 给对象传值
                    returnData.content = res.config.params.comments
                    returnData.nickname = res.config.params.username
                    returnData.headpic = 'customer_1.png'
                    // this.commitData = res.config.params
                    this.commtentData.unshift(returnData)
                  }
                })
              } else {
                this.$message({
                  message: '此邮箱不是登录账号',
                  type: 'error',
                  showClose: true,
                  duration: 2000
                })
              }
            }).catch((error) => {
              console.log(error)
            })
          } else {
            this.$message({
              message: '登录后发表评论',
              type: 'error',
              showClose: true,
              duration: 2000,
              onClose: () => {
                this.$router.push('/login')
              }
            })
          }
        }
      })
    }
  },
  components: {
    Blogtop
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogtop.less';
</style>
