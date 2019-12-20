<template>
  <div>
    <div class="product-nav-outer">
      <div class="product-icon-list clearfix">
        <div class="product-icon-left">
          <div class="product-icon-inner">
            <span>105 products</span>
            <ul class="product-nav-pills">
              <li class="nav-item">
                <a @click="prouductList" class="icon iconfont icon-liebiao1 active"></a>
              </li>
              <li class="nav-item">
                <a @click="productGrid" class="icon iconfont icon-333 "></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 右边下拉框 -->
        <div class="product-right">
          <div class="product-right-inner">
            <el-form :model="sizeForm">
              <el-form-item>
                <el-select v-model="sizeForm.region" placeholder="Sort by popularity">
                  <el-option label="Sort by popularity" value="Sort1"></el-option>
                  <el-option label="Sort by popularity" value="Sort2"></el-option>
                  <el-option label="Sort by popularity" value="Sort3"></el-option>
                  <el-option label="Sort by popularity" value="Sort4"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="sizeForm.select" placeholder="Select category">
                  <el-option label="Select category" value="Select1"></el-option>
                  <el-option label="Select category" value="Select2"></el-option>
                  <el-option label="Select category" value="Select3"></el-option>
                  <el-option label="Select category" value="Select4"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../font/demo.css'
import '../../../font/iconfont.css'
// eslint-disable-next-line no-new-func去除重复点击出现的蓝色块,no-new-func
document.onselectstart = new Function('return false')
export default {
  data () {
    return {
      show: false,
      hide: false,
      sizeForm: {
        region: '',
        select: ''
      }
    }
  },
  methods: {
    // shows: function () {
    //   this.show = !this.show
    // },
    // hides: function () {
    //   this.hide = !this.hide
    // }
    prouductList () {
      let pathRoute = this.$route.path
      // console.log(pathRoute)
      if (pathRoute === '/ProductGrid') {
        this.$router.push('/ProductList')
      } else {
        return false
      }
    },
    productGrid () {
      let pathRoute = this.$route.path
      // console.log(pathRoute)
      if (pathRoute === '/ProductList') {
        this.$router.push('/ProductGrid')
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="less">
// *{
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
.product-nav-outer{
  width: 1140px;
  margin: 0 auto;
  position: relative;
  padding-top: 65px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}
.product-icon-list{
  width: 100%;
  position: relative;
}
.product-icon-left{
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 15px;
  position: relative;
  float: left;
}
.product-icon-inner{
  width: 100%;
  display: flex;
  position: relative;
  span{
    font-size: 14px;
    font-weight: 600;
    color: #222222;
    padding-right: 30px;
    line-height: 45px;
    position: relative;
    display: inline-block;
    &:before{
      position: absolute;
      content: '';
      right: 0;
      top: 13px;
      width: 1px;
      height: 20px;
      background: #ddd;
    }
  }
}
.product-nav-pills{
  padding-left: 30px;
}
.nav-item{
  display: inline-block;
  list-style: none;
  .icon-liebiao1{
    font-size: 24px;
    padding: 8px 6px;
    color: #82878c;
    display: inline-block;
    vertical-align: middle;
    &.active{
      color: #313a3c;
    }
  }
  .icon-333{
    font-size: 20px;
    padding: 8px 6px;
    color: #82878c;
    display: inline-block;
    vertical-align: -3px;
    &.active{
      color: #313a3c;
    }
  }
}
.product-right{
  flex: 0 0 75%;
  max-width: 75%;
  float: right;
}
.product-right-inner{
  float: right;
  .el-form-item{
    display: inline-block;
    margin-left: 27px;
  }
}
/deep/ .el-input__inner{
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 50px;
  line-height: 50px;
  outline: 0;
  padding: 0px;
  padding-right: 65px;
  padding-left: 30px;
  width: 100%;
}
/deep/ .el-select-dropdown__item{
  padding-left: 30px;
}
@media (min-width: 992px) and (max-width: 1200px) {
  .product-nav-outer{
    width: 960px;
  }
  .product-icon-left{
    max-width: 30%;
  }
  .product-icon-inner{
    width: 100%;
    display: flex;
    position: relative;
    span{
      padding-right: 0px;
      &:before{
        position: absolute;
        display: none;
      }
    }
  }
  .product-right{
    max-width: 720px;
  }
}
@media (min-width: 767px) and (max-width: 992px) {
  .product-nav-outer{
    width: 720px;
  }
  .product-icon-left{
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
  .product-icon-inner{
    width: 100%;
    display: flex;
    position: relative;
    span{
      padding-right: 0px;
      &:before{
        position: absolute;
        display: none;
      }
    }
  }
  .product-right{
    max-width: 66.666%;
    float: right;
  }
  .product-right-inner{
    float: right;
    .el-form-item{
      display: inline-block;
      margin-left: 27px;
    }
  }
  /deep/ .el-input__inner{
    padding-right: 30px;
    padding-left: 15px;
    width: 100%;
  }
}
@media (min-width: 567px) and (max-width: 767px) {
  .product-nav-outer{
    width: 540px;
  }
  .product-icon-left{
    flex: 0 0 33.333%;
    max-width: 100%;
  }
  .product-icon-inner{
    width: 100%;
    display: flex;
    position: relative;
    span{
      padding-right: 0px;
      &:before{
        position: absolute;
        display: none;
      }
    }
  }
  .product-right{
    max-width: 100%;
    padding: 0 15px;
    display: block;
    margin-top: 10px;
  }
  .product-right-inner{
    float: left;
    .el-form-item{
      width: 45%;
      display: inline-block;
      margin-left: 0px;
      margin-right: 20px;
    }
  }
}
@media only screen and (max-width: 567px) {
  .product-nav-outer{
    width: 100%;
  }
  .product-icon-left{
    flex: 0 0 33.333%;
    max-width: 100%;
  }
  .product-icon-inner{
    width: 100%;
    display: flex;
    position: relative;
    span{
      padding-right: 0px;
      &:before{
        position: absolute;
        display: none;
      }
    }
  }
  .product-right{
    max-width: 100%;
    padding: 0 15px;
    display: block;
    margin-top: 10px;
  }
  .product-right-inner{
    float: left;
    display: flex;
    flex-wrap: wrap;
    .el-form-item{
      // width: 45%;
      display: inline-block;
      margin-left: 0px;
      margin-right: 20px;
    }
  }

  .x-pr-list{
    width: 100%;
    padding: 0 15px;
    padding-top: 60px;
    padding-bottom: 20px;
    .product-gird-tab{
      font-size: 14px;
      margin-bottom: 20px;
      b{
        font-size: 14px;
        border-right: none;
        margin-right: 0px;
      }
    }
    ul:nth-child(2){
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      li{
        // width: 50%;
        margin-left: 0px;
        margin-right: 20px;
        margin-bottom: 15px;
        // span{
        //   width: 100%;
        // }
        // ol{
        //   width: 100%;
        // }
      }
    }
  }
}
  // @media only screen and (max-width:770px) {
  //   .x-pr-list{
  //     ul:nth-child(2){
  //       display: none;
  //     }
  //   }
  // }
</style>
