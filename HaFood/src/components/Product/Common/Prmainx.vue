<template>
  <div>
    <div class="x-pr-boyx" v-for="(item,index) in message" :key="index">
      <ul>
        <img :src="item.imgUrl"/>
      </ul>
      <ul>
        <li>
          <b>{{item.name}}</b>
        </li>
        <li>
          <p>{{item.priec}}</p>
        </li>
        <li>
          <P>{{item.discription}}</P>
        </li>
        <li>
          <a>ADD TO CART</a>
          <i class="icon iconfont">&#xe616;</i>
          <i class="icon iconfont">&#xe66b;</i>
          <i class="icon iconfont">&#xe6c9;</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: [
        {
          imgUrl: 'api/product_6.jpg',
          name: 'Grape',
          discription: 'Tacimates sent ucius concludaturque,\n' +
          '              ea option maiestatis deterruisset sea.\n' +
          '              Mea dolores perfecto cu,\n' +
          '              ea dicat ocurreret posidonium quo.\n' +
          '              An veritus omnesque rationibus quo,\n' +
          '              ad populo pertinax cotidieque quo.',
          priec: '$15.00'
        },
        {
          imgUrl: require('../../../img/product_4.jpg'),
          name: 'Grape',
          discription: 'Tacimates sent ucius concludaturque,\n' +
            '              ea option maiestatis deterruisset sea.\n' +
            '              Mea dolores perfecto cu,\n' +
            '              ea dicat ocurreret posidonium quo.\n' +
            '              An veritus omnesque rationibus quo,\n' +
            '              ad populo pertinax cotidieque quo.',
          priec: '$15.00'
        },
        {
          imgUrl: require('../../../img/product_2.jpg'),
          name: 'Grape',
          discription: 'Tacimates sent ucius concludaturque,\n' +
            '              ea option maiestatis deterruisset sea.\n' +
            '              Mea dolores perfecto cu,\n' +
            '              ea dicat ocurreret posidonium quo.\n' +
            '              An veritus omnesque rationibus quo,\n' +
            '              ad populo pertinax cotidieque quo.',
          priec: '$15.00'
        },
        {
          imgUrl: require('../../../img/product_5.jpg'),
          name: 'Grape',
          discription: 'Tacimates sent ucius concludaturque,\n' +
            '              ea option maiestatis deterruisset sea.\n' +
            '              Mea dolores perfecto cu,\n' +
            '              ea dicat ocurreret posidonium quo.\n' +
            '              An veritus omnesque rationibus quo,\n' +
            '              ad populo pertinax cotidieque quo.',
          priec: '$15.00'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .x-pr-boyx{
    height: 285px;
    display: flex;
    justify-content: center;
    ul{
      height: 255px;
      box-sizing: border-box;
      margin: 30px 0 0;
    }
    ul:nth-child(1){
      padding: 0 15px;
      img{
        height: 255px;
      }
    }
    ul:nth-child(2){
      padding: 0 15px;
      width: 540px;
      height: 255px;
      li:nth-child(1){
        padding: 0 0 23px;
      }
      li:nth-child(2){
        padding: 0 0 15px;
        color: #edc52a;
      }
      li:nth-child(3){
        padding: 0 35px 0 0;
        font-size: 14px;
        color: #555555;
      }
      li:nth-child(4){
        a{
          display: inline-block;
          margin: 35px 30px 0 0;
          height: 50px;
          width: 154px;
          border: 1px solid #fb7e00;
          text-align: center;
          line-height: 50px;
          border-radius: 25px;
          color: #fb7e00;
          font-size: 14px;
          font-weight: bolder;
        }
        a:hover{
          background: #fb7e00;
          color: #ffffff;
        }
        i{
          font-size: 20px;
          margin: 10px;
          color: #666666;
          cursor: pointer;
        }
      }
    }
  }

</style>
