<template>
  <div class="button-box">
      <a class="home-button">SHOW NOW</a>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="less" scope="scope">
.button-box{
    text-align: center;
}
.home-button{
    position: relative;
    display: inline-block;
    width: 178px;
    height: 52px;
    line-height: 52px;
    padding: 0 44px;
    color: #fff;
    font-size: 14px;
    background: #eda52c;
    animation: lbottn 1s forwards;
    &::before{
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(237,165,44,.8);
        position: absolute;
        left: 5px;
        top: 5px;
        opacity: .4;
        transition: all .5s;
    };
    &:hover::before{
        opacity: 0;
    }
     @keyframes lbottn {
        0%{
            opacity: 0;
            transform: translateY(50%)
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }
}
</style>
