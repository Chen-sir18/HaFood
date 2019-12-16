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
                      <el-input v-model="forgetForm.email" id="email" placeholder="请输入邮箱"></el-input>
                  </el-form-item>
                  <el-form-item class="code-box" prop="code">
                      <el-input v-model="forgetForm.code" class="code-input" placeholder="请输入验证码"></el-input>
                      <div class="code-btn">
                          <a @click="getCode">获取验证码</a>
                      </div>
                  </el-form-item>
                  <el-form-item prop="password">
                      <el-input type="password" v-model="forgetForm.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item prop="repassword">
                      <el-input type="password" v-model="forgetForm.repassword" placeholder="请确认密码"></el-input>
                  </el-form-item>
              </el-form>
             <div class="confirm-btn">
                <a @click="getSubmit">确定</a>
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
            console.log(email)
                if (this.forgetForm.email && email) {
                    // console.log(111)
                    axios({
                        url: 'http://192.168.97.241:3000/forgetcode',
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
                    console.log('验证通过，可以发送请求')
                    axios({
                        url: 'http://192.168.97.241:3000/forget',
                        method: 'get',
                        params: {
                            email: this.forgetForm.email,
                            valicode: this.forgetForm.code,
                            psd: md5(this.forgetForm.password)
                            // psd: md5(this.password)
                        }
                    }).then((res) => {
                        console.log(res)
                        return this.$message({
                            message: '修改密码成功',
                            type: 'success',
                            showClose: true,
                            duration: 2000
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
            console.log()
            this.$forceUpdate(this.$route.fullPath)
        }
    }
}
</script>
<style lang='less'>
@import '../../less/dlogin.less';
@import '../../less/forget.less';
</style>
