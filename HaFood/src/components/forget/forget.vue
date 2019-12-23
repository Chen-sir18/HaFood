<template>
  <div class="login-box">
      <div class="banner-box">
              <div class="logo-box">
                  <img src="../../img/logo.png">
              </div>
              <div class="link-box">
                <span class="link mar-r-20" @click="linktoregister" v-show="this.$route.fullPath === '/login'">REGISTER</span>
                <span class="link mar-r-20" @click="linktologin">LOGIN</span>
                <span class="link">FEEDBACK</span>
              </div>
          <div class="form-box">
              <el-form ref="forgetForm" :rules="forgetRules" class="forget" :model="forgetForm">
                  <el-form-item prop="email">
                      <el-input v-model="forgetForm.email" id="email" placeholder="Email"></el-input>
                  </el-form-item>
                  <el-form-item class="code-box" prop="code">
                      <el-input v-model="forgetForm.code" class="code-input" placeholder="ValiCode"></el-input>
                      <div class="code-btn">
                          <a @click="getCode" v-show="show">Get Code</a>
                          <a v-show="!show">{{count}} s</a>
                      </div>
                  </el-form-item>
                  <el-form-item prop="password">
                      <el-input type="password" v-model="forgetForm.password" placeholder="Password"></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword">
                      <el-input type="password" v-model="forgetForm.repassword" placeholder="RePassword"></el-input>
                  </el-form-item>
              </el-form>
             <div class="confirm-btn">
                <a @click="getSubmit">Submit</a>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'
export default {
    data () {
        let testRepassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.forgetForm.password) {
                callback(new Error('两次输入密码不一致'))
            } else {
                callback()
            }
        }
        let testCode = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入验证码'))
            } else {
                callback()
            }
        }
        return {
            show: true,
            count: '',
            timer: null,
            forgetForm: {
                email: '',
                code: '',
                password: '',
                repassword: ''
            },
            forgetRules: {
                email: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
                ],
                code: [
                    {validator: testCode}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 18, message: '字符必须在6-18位字符', trigger: 'blur'}
                ],
                repassword: [
                    {validator: testRepassword}
                ]
            }
        }
    },
    methods: {
        // 获取验证码
        getCode () {
            this.$refs.forgetForm.validate((valid) => {
            let email = document.getElementById('email').value
                if (this.forgetForm.email && email) {
                    let timeCount = 60
                    if (!this.timer) {
                        this.count = timeCount
                        this.show = false
                        this.timer = setInterval(() => {
                            if (this.count > 0 && this.count <= timeCount) {
                                this.count--
                            } else {
                                this.show = true
                                clearInterval(this.timer)
                                this.timer = null
                            }
                        }, 1000)
                    }
                    axios({
                        url: 'api/forgetcode',
                        method: 'get',
                        params: {
                            email: this.forgetForm.email
                        }
                    }).then((res) => {
                        // console.log(res)
                    }).catch((error) => {
                        console.log(error.data.message)
                    })
                }
            })
        },
        getSubmit () {
            this.$refs.forgetForm.validate((valid) => {
                if (valid) {
                    axios({
                        url: 'api/forget',
                        method: 'get',
                        params: {
                            email: this.forgetForm.email,
                            valicode: this.forgetForm.code,
                            psd: md5(this.forgetForm.password)
                        }
                    }).then((res) => {
                        return this.$message({
                            message: '修改密码成功',
                            type: 'success',
                            showClose: true,
                            duration: 2000,
                            onClose: () => {
                                this.$router.push('/login')
                            }
                        })
                    })
                }
            })
        },
        linktoregister: function () {
            this.$router.replace('/register')
        },
        linktologin: function () {
            this.$router.replace('/login')
            this.$forceUpdate(this.$route.fullPath)
        }
    }
}
</script>
<style lang='less'>
@import '../../less/dlogin.less';
@import '../../less/forget.less';
</style>
