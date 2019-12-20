<template>
  <div class="login">
    <div class="login-content">
      <img src="../../image/logo.png">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="email" class="email">
            <el-input type="email" prefix-icon="el-icon-mobile-phone" placeholder="邮箱" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="pass">
            <el-input type="password" prefix-icon="el-icon-lock" placeholder="密码" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <div class="regist">
            <label><input type="checkbox" class="rember"><span>是否记住账号</span></label>
            <router-link to="/forget" class="forgetpass">忘记密码? 立即找回</router-link>
        </div>
        <el-form-item class="gologin">
          <el-button :loading="loginLoading" type="primary" @click="submitForm('ruleForm')" round>立即登录</el-button>
          <p>HaFood有限公司</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {loginRequest} from 'js/axiosRequest.js'
import md5 from 'md5'

export default {
  data () {
    return {
      loginLoading: false,
      ruleForm: {
        password: '',
        email: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度为6-18位', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // 验证表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 加密密码
          let password = md5(this.ruleForm.password)
          loginRequest({
            data: {
              email: this.ruleForm.email,
              password: password
            },
            success: (res) => {
              this.loginLoading = false
              if (res.status === 200) {
                // 登录成功的数据要干嘛
                // 存入localstorage中
                // console.log(res)
                window.localStorage.setItem('token', res.data.token)
                window.localStorage.setItem('userinfo', JSON.stringify(res.data.userinfo))
                // 存入vuex中
                this.$store.commit('changeUser', res.data)
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  showClose: true,
                  duration: 2000,
                  onClose: () => {
                    this.$router.push('/acount')
                  }
                })
              } else {
                this.$message({
                  message: res.message,
                  type: 'error',
                  showClose: true,
                  duration: 3000
                })
              }
            },
            error: () => {
              this.loginLoading = false
            }
          })
          this.loginLoading = true
        }
      })
      // 判断复选框是否选中
    }
    // rember () {
    //   // console.log(this.ruleForm.email)
    //   Storage.prototype.setExpire = (key, value, expire) => {
    //     // 封装的数据存入localstoreage中
    //     let obj = {
    //       data: value,
    //       time: Date.now(),
    //       expire: expire
    //     }
    //     localStorage.setItem(key, JSON.stringify(obj))
    //   }
    //   Storage.prototype.getExpire = key => {
    //     // 得到localstorage中数据
    //     let val = localStorage.getItem(key)
    //     if (!val) {
    //       return val
    //     }
    //     val = JSON.parse(val)
    //     if (Date.now() - val.time > val.expire) {
    //       // 判断现在时间-存入时间大于过期时间  就移除localstorage中数据
    //       localStorage.removeItem(key)
    //       return null
    //     }
    //     return val.data
    //   }
    //   // 调用存入localstorage的方法 传参
    //   localStorage.setExpire('email', this.ruleForm.email, 5000)
    //   // 设置定时器调用的到localstorage数据方法
    //   window.setInterval(() => {
    //     localStorage.getExpire('email')
    //   }, 300000)
    // }
  }
}
</script>

<style scoped>
@import url("../../css/Login.less");
</style>
