<template>
<!-- 预定座位 Book A Table -->
  <div class="reserve-box">
      <div class="reserve-row">
          <div class="reserve-content-box">
              <div class="reserve-content">
                  <div class="table-box">
                      <h3>Book A Table</h3>
                      <el-form class="table-form" ref="reserveRef" :rules="reserveFormRules" :model="reserveForm">
                        <el-form-item class="table-item" prop="name">
                            <el-input placeholder="Your name" v-model="reserveForm.name"></el-input>
                        </el-form-item>
                        <el-form-item class="table-item" prop="date">
                            <el-input placeholder="mm/dd/yy" v-model="reserveForm.date"></el-input>
                        </el-form-item>
                        <el-form-item class="table-item" prop="time">
                            <el-input placeholder="7:00 pm" v-model="reserveForm.time"></el-input>
                        </el-form-item>
                        <el-form-item class="table-item" prop="person">
                            <el-input placeholder="person" v-model="reserveForm.person"></el-input>
                        </el-form-item>
                        <el-form-item class="table-item table-item-textarea" prop="decript">
                            <el-input placeholder="Special Notes" type="textarea" v-model="reserveForm.decript"></el-input>
                        </el-form-item>
                      </el-form>
                      <div class="button-box">
                        <a class="home-button" @click="reserveBtn">SHOW NOW</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            // 表单的数据绑定
            reserveForm: {
                name: '',
                date: '',
                time: '',
                person: '',
                decript: ''
            },
            // 表单验证规则
            reserveFormRules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'}
                ],
                date: [
                    {required: true, message: '请输入日期', trigger: 'blur'}
                ],
                time: [
                    {required: true, message: '请输入时间', trigger: 'blur'}
                ],
                person: [
                    {required: true, message: '请输入人数', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        reserveBtn () {
            this.$refs.reserveRef.validate((valid) => {
                let token = window.localStorage.getItem('token')
                // console.log(token)
                let info = JSON.parse(window.localStorage.getItem('info'))
                let email = info.email
                let userid = info.id
                console.log(info)
                // 表单验证成功
                if (valid && token && info) {
                    axios({
                        url: 'http://192.168.97.241:3000/booktable',
                        method: 'get',
                        params: {
                            consumer: this.reserveForm.name,
                            bookday: this.reserveForm.date,
                            booktime: this.reserveForm.time,
                            personcount: this.reserveForm.person,
                            node: this.reserveForm.decript,
                            email: email,
                            userid: userid
                        }
                    }).then((res) => {
                        console.log(res.data)
                        return this.$message({
                            message: '订单成功',
                            type: 'success',
                            showClose: true,
                            duration: 2000
                        })
                    })
                } else {
                    this.$message({
                        message: '用户没登录，不能订单',
                        type: 'error',
                        showClose: true,
                        duration: 2000,
                        onClose: () => {
                            this.$router.push('/login')
                        }
                    })
                }
            })
                this.$refs.reserveRef.resetFields()
        }
    }
}
</script>
<style>
</style>
