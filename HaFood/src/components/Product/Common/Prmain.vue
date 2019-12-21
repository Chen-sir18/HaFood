<template>
  <div class="trending-content-box">
    <ul class="trending-lists">
      <li :key="index" class="list" v-for="(item,index) in lists" >
            <div class="list-box">
                <img v-if="!(item.picstr === undefined)" :src='"api/" + item.picstr' alt="">
                <a>{{item.goodsname}}</a>
                <p>{{item.price}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            lists: {
                imgUrl: '',
                title: '',
                price: ''
            }
        }
    },
    mounted () {
    axios({
      method: 'get',
      url: 'api/ingredients'
    }).then((res) => {
      // console.log(res.data)
      if (res.data.status === 200) {
        let foodData = res.data.data
        this.lists = foodData
      } else {
        return false
      }
    })
  }
}

</script>

<style lang="less">
  .trending-content-box{
    width: 95%;
    margin: 0 auto;
    .trending-lists{
      display: flex;
      flex-wrap: wrap;
      .list{
        padding:0 15px;
        flex: 0 0 25%;
        max-width: 25%;
        .list-box{
          margin-top: 30px;
          img{
            width: 100%;
            max-width: 100%;
            vertical-align: middle;
          }
          a{
            display: inline-block;
            font-weight: 600;
            font-size: 16px;
            color: #222222;
            padding-top: 25px;
            padding-bottom: 5px;
          }
          p{
            color: #eda52c;
          }
        }
      }
    }
  }
@media only screen and (min-width:992px) {
  .trending-content-box{
    .trending-lists{
      .list{
        .list-box{
          img{
            width: 255px;
            height: 255px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width:992px){
   .trending-content-box{
    width: 85%;
    .trending-lists{
      .list{
        flex: 0 0 33.33%;
        max-width: 33.33%;
        .list-box{
          img{
            width: 210px;
            height: 210px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width:768px){
  .trending-content-box{
      .trending-lists{
          .list{
              flex:0 0 50%;
              max-width: 50%;
              .list-box{
                img{
                  width: 240px;
                  height: 240px;
                }
              }
          }
      }
  }
}
@media only screen and (max-width:572px){
  .trending-content-box{
      .trending-lists{
          .list{
              flex:0 0 100%;
              max-width: 100%;
              .list-box{
                img{
                  width: 525px;
                  height: 525px;
                  min-width: 525px;
                  min-height: 525px;
                }
              }
          }
      }
  }
}
</style>
