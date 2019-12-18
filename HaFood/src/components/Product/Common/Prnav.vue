<template>
  <div>
    <div class="x-pr-list">
      <ul>
        <b>105 products</b>
        <router-link to="/ProductGrid">
         <span class="x-pr-list-sb">
            <i class="icon iconfont">&#xe60a;</i>
         </span>
        </router-link>
        <router-link to="/ProductList">
          <span class="x-pr-list-sp">
            <i class="icon iconfont">&#xe7c8;</i>
          </span>
        </router-link>
      </ul>
      <ul>
        <li>
          <span @click="shows">
            <a>Sort by popularity</a>
            <strong class="icon iconfont">&#xe60c;</strong>
          </span>
          <ol v-if="show">
            <li>
              <a>Sort by popularity</a>
            </li>
            <li>
              <a>Sort by popularity</a>
            </li>
            <li>
              <a>Sort by popularity</a>
            </li>
            <li>
              <a>Sort by popularity</a>
            </li>
          </ol>
        </li>
        <li>
          <span @click="hides">
            <a>Select category</a>
            <strong class="icon iconfont">&#xe60c;</strong>
          </span>
          <ol v-if="hide">
            <li>
              <a>Select category</a>
            </li>
            <li>
              <a>Select category</a>
            </li>
            <li>
              <a>Select category</a>
            </li>
            <li>
              <a>Select category</a>
            </li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-new-func去除重复点击出现的蓝色块,no-new-func
document.onselectstart = new Function('return false')
export default {
  data: function () {
      return {
        show: false,
        hide: false
  }
},
  methods: {
    shows: function () {
      this.show = !this.show
    },
    hides: function () {
      this.hide = !this.hide
    }
  }
}
</script>

<style scoped lang="less">
  .x-pr-list{
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    padding: 65px 0 20px;
    justify-content: space-between;
    ul{
      height: 25px;
      line-height: 25px;
      b{
        display: inline-block;
        width: 140px;
        height: 24px;
        border-right: 1px solid #cccccc;
        padding-right: 20px;
        margin-right: 40px;
      }
    }
    ul:nth-child(2){
      height: 50px;
      width: 515px;
      display: flex;
      justify-content: end;
      li:nth-child(1){
        margin-right: 47px;
      }
      li{
        cursor: pointer;
        span{
          display: inline-block;
          height: 50px;
          width: 234px;
          border: 1px solid #888888;
          /**/
          line-height: 50px;
          padding: 0 20px;
         a{
           font-size: 12px;
           color: #555555;
         }
          strong{
            padding-left: 50px;
            font-size: 25px;
            vertical-align: -4px;
          }
        }
        ol{
          width: 234px;
          height: 162px;
          border: 1px solid #888888;
          background: #ffffff;
          opacity: 1;
          z-index: 100;
          position: relative;
          li{
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            padding: 0 20px;
            a{
              color: #555555;
              font-size: 12px;
            }
          }
          li:hover{
            background: #f6f6f6;
          }
        }
      }
    }
  }
  .x-pr-list-sp{
    vertical-align: -2px;
    i{
      color: #222222;
      font-size: 25px;
      font-weight: bolder;
    }
  }
  .x-pr-list-sb{
    margin-right: 20px;
    i{
      font-size: 20px;
    }
  }

  @media only screen and (max-width:770px) {
    .x-pr-list{
      ul:nth-child(2){
        display: none;
      }
    }
  }
</style>
