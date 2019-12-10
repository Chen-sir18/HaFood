<template>
<div>
  <div class="login-box">
    <div class="banner-box">
      <div class="logo-box">
        <img src="../../img/logo.png">
      </div>
      <div class="link-box">
        <span class="link">Register</span> <span class="link">FeedBack</span>
      </div>
      <div class="login-content">
        <div class="login-title">Welcome to HaFood</div>
        <div class="login-wish">Everyday, enjoy your foods</div>
        <form>
          <div class="login-input-box">
            <input @focus="changeBorder" v-model="email" @blur="vali" class="email login-input" type="text" placeholder="Email">
            <div v-show="isemail" class="error-input"> <span class="">!</span> 邮箱格式不正确</div>
          </div>
          <div class="login-input-box">
            <input @focus="changeBorder" v-model='password' @blur="vali" class="password login-input" type="password" placeholder="Password">
            <div v-show="ispassword" class="error-input"> <span class="">!</span>6到18位字母或数字，可以包含.和_</div>
          </div>
          <div @click="login" class="login-button text-no-blue">
            Login On Now
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
data: function () {
  return {
    isemail: false,
    ispassword: false,
    email: '',
    password: '',
    emailinput: '',
    passwordinput: ''
  }
},
methods: {
  changeBorder: function (e) {
    e.currentTarget.style.border = '1px solid #fb7e00'
  },
  vali: function (e) {
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
    }
  },
  login: function () {
    this.vali(this.emailinput)
    this.vali(this.passwordinput)
    if (!this.isemail && !this.ispassword) {
      axios({
        method: 'POST',
        url: 'api/login',
        data: {
          email: this.email,
          password: this.password
        }
      }).then((response) => {
        if (response.data.status === 200) {
          // 登录成功，控制路由跳转
          this.$router.push('/Home1')
          window.localStorage.setItem('token', response.data.data.token)
          let info = JSON.stringify(response.data.data.userinfo)
          window.localStorage.setItem('info', info)
        } else {
          // 登录失败，提示重新输入
          alert('用户名或密码不正确')
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
