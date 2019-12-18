<template>
<div>
  <div class="login-box">
    <div class="banner-box">
      <div class="logo-box">
        <img src="../../img/logo.png">
      </div>
      <div class="link-box">
        <span class="link mar-r-20" @click="linktoregister" v-show="this.$route.fullPath === '/login'">REGISTER</span> <span class="link mar-r-20" @click="linktologin" v-show="this.$route.fullPath === '/register'">LOGIN</span>
        <span class="link mar-r-20" @click="linktoforget" v-show="this.$route.fullPath === '/login'">FORGET</span>
        <span class="link">FEEDBACK</span>
      </div>
      <div class="login-content">
        <div class="login-title">Welcome to HaFood</div>
        <div class="login-wish">Everyday, enjoy your foods</div>
        <form>
          <!-- 邮箱 -->
          <div class="login-input-box">
            <input @focus="changeBorder" v-model="email" @blur="vali" class="email login-input" type="text" placeholder="Email">
            <div v-show="isemail" class="error-input"> <span class="">!</span> 邮箱格式不正确</div>
          </div>
          <!-- 验证码 -->
          <div v-show="this.$route.fullPath === '/register'" class="login-input-box">
            <input  v-model="valicode" @focus="changeBorder" @blur="vali" class="valicode login-input" type="number" placeholder="ValiCode">
            <div  @click="getcode" class="valicode-button text-no-blue">Get Code</div>
            <div v-show="isvalicode" class="error-input"> <span class="">!</span>输入四位验证码</div>
          </div>
          <!-- 密码 -->
          <div class="login-input-box">
            <input @focus="changeBorder" v-model='password' @blur="vali" class="password login-input" type="password" placeholder="Password">
            <div v-show="ispassword" class="error-input"> <span class="">!</span>6到18位字母或数字，可以包含.和_</div>
          </div>
          <!-- 确认密码 -->
          <div class="login-input-box" v-show="this.$route.fullPath === '/register'">
            <input @focus="changeBorder" v-model='repassword' @blur="vali" class=" repassword login-input" type="password" placeholder="RePassword">
            <div v-show="isrepassword" class="error-input"> <span class="">!</span>保持两次密码一致</div>
          </div>
          <div @click="login" v-show="this.$route.fullPath == '/login'" class="login-button text-no-blue">
            Login On Now
          </div>
          <div @click="register" v-show="this.$route.fullPath == '/register'" class="login-button text-no-blue">
            Sign Up  Now
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'
import remind from './JS/remind.js'
export default {
data: function () {
  return {
    isemail: false,
    ispassword: false,
    isrepassword: false,
    isvalicode: false,
    email: '',
    valicode: '',
    password: '',
    repassword: '',
    emailinput: '',
    passwordinput: '',
    repasswordinput: '',
    valicodeinput: ''
  }
},
methods: {
  changeBorder: function (e) {
    e.currentTarget.style.border = '1px solid #fb7e00'
  },
  vali: function (e, a) {
    if (e !== '') {
      // 邮箱验证
      if (e.target.classList[0] === 'email') {
        let valitext = /^\w+@[a-z0-9]+\.[a-z]+$/i
        if (this.emailinput === '') {
          this.emailinput = e
        }
        if (valitext.test(e.target.value)) {
          e.target.style.border = '1px solid skyblue'
          this.isemail = false
        } else {
          e.target.style.border = '1px solid red'
          this.isemail = true
        }
      } else if (e.target.classList[0] === 'password') {
        if (this.passwordinput === '') {
          this.passwordinput = e
        }
        let valitext = /([a-zA-Z0-9]|[._]){6,18}$/
        if (valitext.test(e.target.value)) {
          e.target.style.border = '1px solid skyblue'
          this.ispassword = false
        } else {
          e.target.style.border = '1px solid red'
          this.ispassword = true
        }
      } else if (e.target.classList[0] === 'repassword') {
        if (this.repasswordinput === '') {
          this.repasswordinput = e
        }
        let valitext = RegExp('^' + this.password + '$')
        if (valitext.test(e.target.value)) {
          e.target.style.border = '1px solid skyblue'
          this.isrepassword = false
        } else {
          e.target.style.border = '1px solid red'
          this.isrepassword = true
        }
      } else if (e.target.classList[0] === 'valicode') {
        if (this.valicodeinput === '') {
          this.valicodeinput = e
        }
        let valitext = RegExp('[0-9]{4}')
        if (valitext.test(e.target.value)) {
          e.target.style.border = '1px solid skyblue'
          this.isvalicode = false
        } else {
          e.target.style.border = '1px solid red'
          this.isvalicode = true
        }
      }
    } else {
      // 邮箱验证
      if (a.classList[0] === 'email') {
        let valitext = /^\w+@[a-z0-9]+\.[a-z]+$/i
        if (valitext.test(a.value)) {
          a.style.border = '1px solid skyblue'
          this.isemail = false
        } else {
          a.style.border = '1px solid red'
          this.isemail = true
        }
      } else if (a.classList[0] === 'password') {
        let valitext = /([a-zA-Z0-9]|[._]){6,18}$/
        if (valitext.test(a.value)) {
          a.style.border = '1px solid skyblue'
          this.ispassword = false
        } else {
          a.style.border = '1px solid red'
          this.ispassword = true
        }
      } else if (a.classList[0] === 'repassword') {
        let valitext = RegExp('^' + this.password + '$')
        if (valitext.test(a.value)) {
          a.style.border = '1px solid skyblue'
          this.isrepassword = false
        } else {
          a.style.border = '1px solid red'
          this.isrepassword = true
        }
      } else if (a.classList[0] === 'valicode') {
        let valitext = RegExp('[0-9]{4}')
        if (valitext.test(a.value)) {
          a.style.border = '1px solid skyblue'
          this.isvalicode = false
        } else {
          a.style.border = '1px solid red'
          this.isvalicode = true
        }
      }
    }
  },
  linktoregister: function () {
    this.$router.replace('/register')
  },
  linktologin: function () {
    this.$router.replace('/login')
    this.$forceUpdate(this.$route.fullPath)
  },
  linktoforget: function () {
    this.$router.replace('/forget')
  },
  login: function () {
    this.vali(this.emailinput)
    this.vali(this.passwordinput)
    if (!this.isemail && !this.ispassword && this.email && this.password) {
      axios({
        method: 'POST',
        url: 'api/login',
        data: {
          email: this.email,
          password: md5(this.password)
        }
      }).then((response) => {
         remind(response.data.message)
        if (response.data.status === 200) {
          // 登录成功，控制路由跳转
          this.$router.push('/Home1')
          window.localStorage.setItem('token', response.data.data.token)
          let info = JSON.stringify(response.data.data.userinfo)
          window.localStorage.setItem('info', info)
        }
      })
    }
  },
  //  获取验证码
  getcode: function (e) {
    if (e.target.innerText !== 'Get Code') {
      return false
    }
    if (this.isemail || !this.email) {
      let emailinput = document.querySelector('.email')
      this.vali(this.emailinput, emailinput)
      return false
    } else {
      axios({
        method: 'GET',
        params: {
          email: this.email
        },
        url: 'api/code'
      }).then((response) => {
        remind(response.data.message)
        // alert(response.data.message)
        if (response.data.status === 200) {
          let time = 20
          setInterval(() => {
            if (time > 1) {
              time--
              e.target.innerText = time + 's后重新获取'
              e.target.style.background = '#555'
            } else {
              e.target.innerText = 'Get Code'
              e.target.style.background = '#fb7e00'
            }
          }, 1000)
        }
      })
    }
  },
  register: function () {
    let emailinput = document.querySelector('.email')
    let Passwordinput = document.querySelector('.password')
    let repasswordinput = document.querySelector('.repassword')
    let valicodeinput = document.querySelector('.valicode')
    this.vali(this.emailinput, emailinput)
    this.vali(this.passwordinput, Passwordinput)
    this.vali(this.repasswordinput, repasswordinput)
    this.vali(this.valicodeinput, valicodeinput)
    if (!this.isemail && !this.ispassword && !this.isrepassword && this.email && this.password && this.repassword && this.valicode) {
      axios({
        method: 'POST',
        url: 'api' + '/register',
        data: {
          email: this.email,
          psd: md5(this.password),
          valicode: this.valicode
        }
      }).then((response) => {
        remind(response.data.message)
        if (response.data.status === 200) {
          this.$router.push('/login')
        }
      })
    }
  }
}
}
</script>

<style lang='less' scoped>
@import '../../less/dlogin.less';
</style>
