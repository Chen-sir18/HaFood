<template>
  <div>
    <div class="h-blog-top">
      <div class="h-blog-outer">
        <section class="h-top-imgbox">
          <div class="h-top-container">
            <div class="h-inner-box">
              <h3 class="h-inner-title">{{topName}}</h3>
            </div>
            <nav class="h-nav-outer">
              <ul class="h-nav-inner">
                <li class="h-nav-text">Home</li>
                <li class="h-nav-righttext">{{topName}}</li>
              </ul>
            </nav>
          </div>
          <div class="h-banner-outer">
            <img src="../../../img/banner_shape.png" />
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
      topName: ''
    }
  },
  mounted () {
    let fillname = this.$route.path
    // 删除(/)
    let aa = fillname.split('/')
    // 将两个字符串连接起来
    let newName = aa.join('')
    // 字符串方法 replace(a, b) 用b替换a
    let resultName = newName.replace(/[t]/, 't ')
    // console.log(resultName)
    this.topName = resultName
  }
}
</script>

<style lang="less">
  // bloglist顶部内容
  .h-blog-top{
    width: 100%;
    position: relative;
  }
  .h-blog-outer{
    width: 100%;
  }
  .h-top-imgbox{
    width: 100%;
    height: 380px;
    background: url(../../../img/page_title_bg.jpg) no-repeat;
    position: relative;
    background-position: center center;
    background-size: cover;
  }
  .h-top-container{
    width: 100%;
    height: 48px;
    position: absolute;
    margin: 0 auto;
    top: 45%;
    display: inline-block;
  }
  .h-inner-box{
    width: 1140px;
    margin: 0 auto;
    height: 48px;
    text-align: center;
  }
  .h-inner-title{
    width: 100%;
    margin: 0 auto;
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
  }
  .h-banner-outer{
    width: 100%;
    position: absolute;
    bottom: -2px;
    left: 0;
    img{
      width: 100%;
      vertical-align: middle;
      border-style: none;
    }
  }
  .h-nav-outer{
    display: inline-block;
    position: absolute;
    bottom: -190px;
    left: 50%;
    z-index: 5;
    transform: translateX(-50%);
  }
  .h-nav-inner{
    background: #fff;
    border-radius: 0;
    padding: 0 85px;
    line-height: 50px;
    display: inline-block;
    border: 1px solid #eee;
    margin-bottom: 16px;
  }
  .h-nav-text{
    font-size: 14px;
    color: #888;
    display: inline-block;
    letter-spacing: 2px;
    &.active{
      color: #6c747d;
    }
  }
  .h-nav-righttext{
    font-size: 14px;
    color: #888;
    display: inline-block;
    letter-spacing: 2px;
    &:before{
      display: inline-block;
      padding-right: 5px;
      color: #6c757d;
      content: "/";
    }
    &.active{
      color: #6c747d;
    }
  }
  @media (min-width: 992px) and (max-width:1200px) {
    .h-inner-box{
      width: 930px;
      margin: 0 auto;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .h-inner-box{
      width: 690px;
      margin: 0 auto;
    }
    .h-nav-inner{
      padding: 0 45px;
    }
  }
  @media (min-width: 567px) and (max-width: 767px) {
    .h-inner-box{
      width: 510px;
      margin: 0 auto;
    }
    .h-nav-inner{
      padding: 0 10px;
    }
  }
  @media only screen and (max-width:567px) {
    .h-banner-outer{
      bottom: -5px;
    }
    .h-inner-box{
      width: 100%;
      padding: 0 15px;
      margin: 0 auto;
      text-align: center;
    }
    .h-nav-inner{
      padding: 0 10px;
      width: 210px;
    }
    .h-nav-text, .h-nav-righttext{
      font-size: 12px;
      text-align: left;
    }
  }
</style>
