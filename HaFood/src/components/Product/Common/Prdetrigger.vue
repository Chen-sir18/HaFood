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
    width: 100%;
    // height: 606px;
    background: #f6f6f6;
    padding: 83px 0 88px;
    margin: 0 0 83px;
    .x-pr-trigger{
      // height: 606px;
      width: 1140px;
      margin: 0 auto;
      ul:nth-child(1){
        width: 100%;
        padding: 0 15px;
        display: flex;
        justify-content: center;
        // height: 42px;
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
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        li{
          width: 50%;
          padding: 0 15px;
          // flex: 0 0 50%;
          overflow: hidden;
          img{
            width: 100%;
            vertical-align: middle;
          }
        }
        li:nth-child(2){
          width: 50%;
          // padding: 0 15px;
          flex: 0 0 50%;
          padding: 0px 15px;
          p{
            width: 100%;
            line-height: 30px;
            font-size: 14px;
            color: #555555;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .x-pr-detrigger{
      width: 100%;
      .x-pr-trigger{
        width: 960px;
        margin: 0 auto;
        ul:nth-child(1){
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 767px) and (max-width: 992px) {
    .x-pr-detrigger{
      width: 100%;
      .x-pr-trigger{
        width: 720px;
        margin: 0 auto;
        ul:nth-child(1){
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 567px) and (max-width: 767px) {
    .x-pr-detrigger{
      width: 100%;
      .x-pr-trigger{
        width: 540px;
        margin: 0 auto;
        ul:nth-child(1){
          width: 100%;
        }
        ul:nth-child(2){
          width: 100%;
          // align-items:
          li{
            width: 100%;
          }
          li:nth-child(2){
            width: 100%;
            flex: 0 0 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            p{
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 567px) {
    .x-pr-detrigger{
      width: 100%;
      .x-pr-trigger{
        width: 100%;
        margin: 0 auto;
        ul:nth-child(1){
          width: 100%;
        }
        ul:nth-child(2){
          width: 100%;
          // align-items:
          li{
            width: 100%;
          }
          li:nth-child(2){
            width: 100%;
            flex: 0 0 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            p{
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
