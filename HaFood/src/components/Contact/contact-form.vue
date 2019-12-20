<template>
    <div class="contact-form-box">
        <div class="contact-form-photo">
            <img :src="contactFormFhoto" class="photo"/>
        </div>
        <div class="contact-form-cont">
            <div class="main-title">
                <div class="">保持联系</div>
                <p class="font-14 text">Lorem Ipsum不仅仅是简单的随机文本。</p>
            </div>
            <el-form :model="formContact" class="contact-form">
                <el-form-item class="form-name">
                    <el-input placeholder="Your Name" v-model="formContact.name" type="text" class="font-12"></el-input>
                </el-form-item>
                <el-form-item class="form-email">
                    <el-input placeholder="Your Email" v-model="formContact.email" type="text" class="font-12"></el-input>
                </el-form-item>
                <el-form-item class="form-message">
                    <textarea class="info-message" v-model="formContact.message" placeholder="Message"></textarea>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="contactSubmit" class="contact-form-btn">提交</el-button>
                </el-form-item>
                <el-form-item>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
import contactFormFhoto from '../../img/contact_touch_thumb.jpg'
export default {
  data () {
    return {
      contactFormFhoto,
      formContact: {
        name: '',
        email: '',
        message: ''
      },
      rules: {
        name: [{}],
        email: [{}],
        message: [{}]
      }
    }
  },
  methods: {
    contactSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>

</style>
