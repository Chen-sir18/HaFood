<template>
  <div class="x-pr-paging">
    <div class="x-pr-pag">
      <ul>
        <a v-for="(item,index) in message.listpag" :key="index">{{item}}</a>
      </ul>
      <ul>
        <span class="icon iconfont">&#xe60d;</span>
        <span class="icon iconfont">&#xe607;</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: {
        listpag: ['1', '2', '3']
      }
    }
  }
}
</script>

<style scoped lang="less">
  .x-pr-paging{
    padding: 25px 88px;
    margin: 28px 0 0;
    .x-pr-pag{
      width: 1140px;
      margin: 0 auto;
      border-top: 1px solid #888888;
      padding: 30px 0 0;
      display: flex;
      justify-content: space-between;
      ul:nth-child(1){
        width: 800px;
        line-height: 50px;
        padding: 0 15px;
        overflow: hidden;
        a{
          margin-right: 25px;
          font-size: 14px;
          color: #555555;
          cursor: pointer;
        }
      }
      ul:nth-child(2){
        span{
          display: inline-block;
          height: 50px;
          width: 50px;
          background: #f6f5f6;
          font-size: 20px;
          text-align: center;
          line-height: 50px;
          border-radius: 50%;
          margin: 0 10px;
          cursor: pointer;
        }
        span:hover{
          background: #fb7e00;
          color: #ffffff;
        }
      }
    }
  }
</style>
