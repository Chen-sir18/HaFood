<template>
  <div>
    <div class="h-blog-top">
      <div class="h-blog-outer">
        <section class="h-top-imgbox">
          <div class="h-top-container">
            <div class="h-inner-box">
              <h3 class="h-inner-title">{{routername}}</h3>
            </div>
            <nav class="h-nav-outer">
              <ul class="h-nav-inner">
                <li class="h-nav-text">Home</li>
                <li class="h-nav-righttext">{{routername}}</li>
              </ul>
            </nav>
          </div>
          <div class="h-banner-outer">
            <img src="../../img/banner_shape.png" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routername: ''
    }
  },
  mounted () {
    let fillname = this.$route.path
    let aa = fillname.split('/')
    let newName = aa.join('')
    let resultName = newName.replace(/[g]/, 'g ')
    // console.log(resultName)
    this.routername = resultName
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogtop.less';
</style>
