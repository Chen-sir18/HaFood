<template>
  <div>
    <Blogtop></Blogtop>
    <section class="h-blog-grid">
      <div :data="tabList" class="h-bloggrid-outer">
        <div :key="item.id" v-for="item in tabList" class="h-bloggrid-item">
          <div class="h-bgid-inner">
            <img :src='"api/" + item.picstr' />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">{{item.reminder}}</h5>
            </a>
          </div>
        </div>
        <!-- <div class="h-bloggrid-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_grid_2.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div  class="h-bloggrid-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_grid_2.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-bloggrid-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_grid_2.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-bloggrid-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_grid_2.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div>
        <div class="h-bloggrid-item">
          <div class="h-bgid-inner">
            <img src="../../img/blog_grid_2.jpg" />
            <span>Feb 11, 2019  -  Rachel  -  Fashion </span>
            <a>
              <h5 class="bloggrid-tips">Cooking tips make cooking simple</h5>
            </a>
          </div>
        </div> -->
      </div>
      <!-- change page -->
      <div class="h-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="prev, pager, total, next"
          :total="pageData.length"
          class="h-pagination-item1">
        </el-pagination>
        <!-- <div class="h-pagination-item2">
          <ul class="h-items-inner">
            <el-pagination :layout="prev" class="h-item-icon">
              <i class="icon iconfont icon-shangyiye1-copy"></i>
            </el-pagination>
            <li class="h-item-icon">
              <i class="icon iconfont icon-xiayiye"></i>
            </li>
          </ul>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Blogtop from './blogstop.vue'
export default {
  data () {
    return {
      tableNme: '',
      currentPage: 1, // default page = 1
      pagesize: 6, // total pages
      pageData: [] // page data store
    }
  },
  created () {
    this.getList()
  },
  computed: {
    tabList () {
      // slice(aa, mm) 数组方法 选取数组下标从aa开始往后的mm个数据
      var list = this.pageData.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
      return list
    }
  },
  mounted () {

  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange (size) {
      // console.log(size)
      this.pagesize = size
      // console.log(this.pagesize)
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage) // ����ڼ�ҳ
    },
    getList () {
      axios({
        url: 'api/bloglists',
        method: 'get',
        params: {
          // 此处不用上传参数 从数据库获取
        }
      }).then((res) => {
        if (res.status === 200) {
          this.pageData = res.data.data
          // console.log(this.pageData)
        } else {
          return false
        }
      }).catch((error) => {
        console.log(error)
      })
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
