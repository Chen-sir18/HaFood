<template>
    <div class="about-fresh-box">
      <div class="fresh-cont">
            <div class="fresh-photo">
                <img class="photo" :src="freshPhoto"/>
            </div>
            <div class="fresh-cont-right">
                <span class="font-14 first">WE PROVIDE</span>
                <div class="fresh-title font-36">Fresh Fruits</div>
                <p class="fresh-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque quae ab illo inventore veritatis et quasi.</p>
                <p class="fresh-text">Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, totam rem aperiam.</p>
                <span class="fresh-btn">
                    <a href="" class="font-wi-600 font-white">READ NORE</a>
                </span>
            </div>
      </div>
      <ul class="fresh-lists">
          <li class="fresh-list" :key="index" v-for="(item, index) in freshList">
              <div class="list-cont">
                  <i class="list-icon iconfont" :class="item.icon"></i>
                  <h6 class="title">{{item.title}}</h6>
                  <p class="text font-14">{{item.text}}</p>
              </div>
          </li>
      </ul>
    </div>
</template>

<script>
import freshPhoto from '../../img/about_us_thumb.jpg'
export default {
  data () {
    return {
      // 新鲜水果列表
      freshList: [
        {
          id: 1,
          icon: 'icon-xiaoqiche',
          title: 'Free Shipping from $100',
          text: 'Free shipping on purchases over'
        },
        {
          id: 2,
          icon: 'icon-cash1',
          title: 'Money back guaranteed',
          text: 'Lorem ipsum dolor sit amet conset'
        },
        {
          id: 3,
          icon: 'icon-suo',
          title: 'Secure Payment',
          text: 'Lorem ipsum dolor sit amet consec'
        },
        {
          id: 4,
          icon: 'icon-wancheng1',
          title: '100% authenticity guaranteed',
          text: 'Lorem ipsum dolor sit amet adiscing'
        }
      ],
      // Fresh Fruits 配图
      freshPhoto
    }
  }
}
</script>

<style lang='less'>

</style>
