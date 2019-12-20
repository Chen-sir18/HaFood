<template>
    <div>
        <!--Contact Us-->
        <div class="about-us-top about-bg-cover">
            <!-- about us -->
            <div class="about-main-title">
                <h3 class="font-white font-40">Contact Us</h3>
            </div>
            <!-- Home / About Us -->
            <nav class="small-nav">
                <a class="list font-14">Home</a>
                <span class="list list-secont font-14">Contact Us</span>
            </nav>
            <div class="banner-shape">
                <img :src="bannerShape"/>
            </div>
        </div>
        <!-- 联系地址 电话 邮件 -->
        <ContactWay></ContactWay>
        <ContactMap></ContactMap>
        <ContactForm></ContactForm>
    </div>
</template>

<script>
import bannerShape from '../../img/banner_shape.png'
import ContactWay from './contact-way'
import ContactMap from './contact-map'
import ContactForm from './contact-form'
export default {
  data () {
    return {
      bannerShape
    }
  },
  components: {
    ContactWay,
    ContactMap,
    ContactForm
  }
}
</script>

<style lang="less">
@import '../../less/contact.less';
</style>
