<template>
  <div class="register">
    <div class="register-content">
      <div class="regtitle">
          <span>找回登录密码</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="邮箱" prop="email" :rules="[
          { message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]" class="email">
            <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <div class="code" prop="code">
            <span>请输入验证码：</span>
            <input type="text" name="code" class="codeTxt" v-model="ruleForm.code">
            <a @click="getcode" class="getcode">获取验证码</a>
        </div>
        <el-form-item label="密码" prop="pass" class="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" class="repass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="goregister">
          <el-button type="primary" @click="submitForm('ruleForm')" round>立即登录</el-button>
          <p>HaFood有限公司</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {api} from '../../common/api'
import axios from 'axios'
import {forget} from 'js/axiosRequest.js'
import md5 from 'md5'
export default {
  data () {
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        if (this.ruleForm.code !== '') {
          this.$refs.ruleForm.validateField('code')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      api: api,
      ruleForm: {
        code: '',
        pass: '',
        checkPass: '',
        email: ''
      },
      rules: {
        code: [
          {validator: validateCode, trigger: 'blur'}
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 加密密码
          let pass = md5(this.ruleForm.pass)
          forget({
            data: {
              email: this.ruleForm.email,
              psd: pass,
              valicode: this.ruleForm.code
            },
            success: (res) => {
              this.forget = false
              if (res.status === 200) {
                // 成功提示
                this.$message({
                  message: '修改成功即将跳转到登录',
                  type: 'success',
                  showClose: true,
                  duration: 2000,
                  onClose: () => {
                    this.$router.push('/')
                  }
                })
              } else {
                this.$message({
                  message: '修改失败',
                  type: 'error',
                  showClose: true,
                  duration: 3000
                })
              }
            },
            error: () => {
              this.forget = false
            }
          })
          this.forget = false
        }
      })
    },
    getcode () {
      // 获取验证码
      let email = this.ruleForm.email // 得到页面输入的email
      // console.log(email)
      // axios请求获取验证码接口
      axios({
        url: api + '/forgetcode',
        method: 'get',
        params: {
          email: email
        }
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
@import url("../../css/Register.less");
</style>
