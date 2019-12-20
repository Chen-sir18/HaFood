<template>
  <div>
    <Blogtop></Blogtop>
    <section class="h-blog-listarea">
      <div class="h-listarea-outer">
        <div class="h-blog-listitem">
          <div class="h-listitem-inner">
            <div class="h-sigle-blogs">
              <div class="h-sigle-imgbox">
                <img src="../../img/blog_list_1.jpg" />
              </div>
              <div class="h-bloglist-outer">
                <div class="h-bloglist-content">
                  <span>Feb 11, 2019  -  Rachel  -  Lifestyle</span>
                  <h4 class="cook-tips">Cooking tips make cooking simple </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.
                  </p>
                  <a class="h-read-more">read more</a>
                </div>
              </div>
            </div>
            <div class="h-sigle-blogs">
              <div class="h-sigle-imgbox">
                <img src="../../img/blog_list_1.jpg" />
              </div>
              <div>
                <div class="h-bloglist-content">
                  <span>Feb 11, 2019  -  Rachel  -  Lifestyle</span>
                  <h4 class="cook-tips">Cooking tips make cooking simple </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.
                  </p>
                  <a class="h-read-more">read more</a>
                </div>
              </div>
            </div>
            <div class="h-sigle-blogs">
              <div class="h-sigle-imgbox">
                <img src="../../img/blog_list_1.jpg" />
              </div>
              <div>
                <div class="h-bloglist-content">
                  <span>Feb 11, 2019  -  Rachel  -  Lifestyle</span>
                  <h4 class="cook-tips">Cooking tips make cooking simple </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam integre copiosae.
                  </p>
                  <a class="h-read-more">read more</a>
                </div>
              </div>
            </div>
            <!-- 翻页部分 -->
            <!-- <div class="h-pagination">
              <div class="h-pagination-item1">
                <ul>
                  <li>1</li>
                </ul>
              </div>
              <div class="h-pagination-item2">
                <ul class="h-items-inner">
                  <li class="h-item-icon">
                    <i class="icon iconfont icon-shangyiye1-copy"></i>
                  </li>
                  <li class="h-item-icon">
                    <i class="icon iconfont icon-xiayiye"></i>
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
        </div>
        <div class="h-topics">
          <div class="h-blog-slidebar">
            <div class="h-topics-list">
              <h4 class="h-title-topics">Topics</h4>
              <div class="h-tree-topics">
                <el-tree
                  :data="data"
                  :props="defaultProps"
                  accordion
                  @node-click="handleNodeClick">
                </el-tree>
              </div>
            </div>
          </div>
          <!-- recent posts -->
          <div class="h-recent-posts">
            <h4 class="h-post-title">Recent Posts</h4>
            <div :key="item.id" v-for="item in recentData" class="h-posd-item">
              <div class="h-posd-thumb">
                <img :src='"api/" + item.picstr' />
              </div>
              <div class="h-posd-content">
                <a>
                  <h6 class="h-posd-title">{{item.goodsname}}</h6>
                </a>
                <span>Feb 12, 2019</span>
              </div>
            </div>
            <!-- <div class="h-posd-item">
              <div class="h-posd-thumb">
                <img src="../../img/posts_sidebar_1.jpg" />
              </div>
              <div class="h-posd-content">
                <a>
                  <h6 class="h-posd-title">Eam mutat suscipit</h6>
                </a>
                <span>Feb 12, 2019</span>
              </div>
            </div>
            <div class="h-posd-item">
              <div class="h-posd-thumb">
                <img src="../../img/posts_sidebar_1.jpg" />
              </div>
              <div class="h-posd-content">
                <a>
                  <h6 class="h-posd-title">Eam mutat suscipit</h6>
                </a>
                <span>Feb 12, 2019</span>
              </div>
            </div> -->
          </div>
          <!-- tags -->
          <div class="h-tags-sidebar">
            <h4 class="h-title-topics">Tags</h4>
            <ul class="h-tags-lists">
              <li>
                <a>fruits</a>
              </li>
              <li>
                <a>Restaurant</a>
              </li>
              <li>
                <a>Bakery</a>
              </li>
              <li>
                <a>Drinks</a>
              </li>
              <li>
                <a>Food</a>
              </li>
              <li>
                <a>Tips</a>
              </li>
              <li>
                <a>Oranic</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '../../font/iconfont.css'
import '../../font/demo.css'
import Blogtop from './blogstop.vue'
import axios from 'axios'
export default {
  data () {
    return {
      data: [
        {
          label: 'Vegetables',
          children: [
            {
              label: 'Broccoli'
            },
            {
              label: 'Lettuce'
            },
            {
              label: 'Carrot'
            }
          ]
        },
        {
          label: 'Dairy',
          children: [
            {
              label: 'Cheese'
            },
            {
              label: 'Butter'
            },
            {
              label: 'Milk'
            },
            {
              label: 'Yogurt'
            }
          ]
        },
        {
          label: 'Salad',
          children: [
            {
              label: 'Fruit Salad'
            },
            {
              label: 'Vegetables Salad'
            }
          ]
        },
        {
          label: 'Tropical',
          children: [
            {
              label: 'Tropical Fruit'
            }
          ]
        },
        {
          label: 'Fruit',
          children: [
            {
              label: 'Blueberry'
            },
            {
              label: 'Kiwi Berry'
            },
            {
              label: 'Banana'
            }
          ]
        },
        {
          label: 'Berries',
          children: [
            {
              label: 'Cherry Berry'
            }
          ]
        }
      ],
      cookData: [],
      recentData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    axios({
      url: 'api/drink',
      method: 'get',
      params: {
        // 此处不传参
      }
    }).then((res) => {
      let resData = res.data.data
      resData.splice(3, resData.length - 3)
      this.recentData = resData
      // console.log(res.data.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    handleNodeClick (data) {
      // console.log(data)
    }
  },
  components: {
    Blogtop
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogtop.less';
</style>
