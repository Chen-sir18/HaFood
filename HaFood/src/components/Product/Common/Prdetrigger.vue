<template>
  <div class="x-pr-detrigger">
    <div class="x-pr-trigger">
      <ul>
        <li v-for="(item, index) in message.title" :key="index">
          <a>
            {{item}}
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <img :src="message.imgUrl"/>
        </li>
        <li>
          <p v-for="(item,index) in message.describe" :key="index">
           {{item}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: {
        title: [' Descriptions', ' Reviews'],
        imgUrl: ['api/blog_review_thumb.jpg'],
        describe: [' - Vis malis nemore eu, eligendi\n' +
        '            singulis eum ei. Everti cetero\n' +
        '            iracundia nec id, iuvaret periculis\n' +
        '            tincidunt ex est, vidit lorem nobis nec\n' +
        '            cu. Quem mentitum splendide sit et, vis ea\n' +
        '            fugit virtute, pro te efficiendi definitionem.',

        '            - Vis malis nemore eu, eligendi\n' +
        '            singulis eum ei. Everti cetero\n' +
        '            iracundia nec id, iuvaret periculis\n' +
        '            tincidunt ex est, vidit lorem nobis nec\n' +
        '            cu. Quem mentitum splendide sit et, vis ea\n' +
        '            fugit virtute, pro te efficiendi definitionem.'
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
  .x-pr-detrigger{
    height: 606px;
    background: #f6f6f6;
    padding: 83px 0 88px;
    margin: 0 0 83px;
    .x-pr-trigger{
      height: 606px;
      width: 1140px;
      margin: 0 auto;
      ul:nth-child(1){
        display: flex;
        justify-content: center;
        height: 42px;
        margin: 0 0 60px;
        border-bottom: 2px solid #ddd;
        li{
          margin: 0 24px;
          height: 42px;
          a{
            color: #888888;
          }
        }
        li:hover{
          border-bottom: 2px solid #fb7e00;
        }
      }
      ul:nth-child(2){
        display: flex;
        justify-content: center;
        li{
          width: 570px;
          height: 330px;
          padding: 0 15px;
          overflow: hidden;
          img{
            width: 540px;
            height: 330px;
          }
        }
        li:nth-child(2){
          padding: 50px 15px;
          p{
            line-height: 30px;
            font-size: 14px;
            color: #555555;
          }
        }
      }
    }
  }
</style>
