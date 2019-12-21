<template>
  <div class="reservation">
    <el-table
      :data="tableData"
      style="width: 100%"
      class="resertable"
      >
      <el-table-column
        type="index"
        prop="number"
        label="序号"
        width="144">
      </el-table-column>
      <el-table-column
        prop="node"
        label="房间名称"
        width="168">
      </el-table-column>
      <el-table-column
        prop="consumer"
        label="客户名称"
        width="168">
      </el-table-column>
      <el-table-column
        prop="personcount"
        label="人数"
        width="168">
      </el-table-column>
      <el-table-column
        prop="booktime"
        label="客户电话"
        width="198">
      </el-table-column>
      <el-table-column
        prop="bookday"
        label="提交时间"
        width="168">
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      background
      class="page"
      :page-size= 'count'
      :current-page="1"
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
import {inbooktab} from '../../common/axiosRequest'
export default {
  data () {
    return {
      tableData: [],
      newalltableData: [],
      count: 10,
      alltableData: []
    }
  },
  methods: {
    handleCurrentChange (val) {
      // 获取翻页按钮位置 减一赋值给表格数据渲染
      this.tableData = this.newalltableData[val - 1]
      // console.log(typeof val)
      this.currentPage = val // 动态改变
    }
  },
  mounted () {
    // 获取vuex数据
    let Promodule = this.$store.state.Reservation.alltableData
    this.alltableData = Promodule
    // 商品翻页数据处理
    const allarray = this.alltableData
    let newarrary = chunk(allarray, this.count)
    this.newalltableData = newarrary
    this.tableData = this.newalltableData[0]
    function chunk (array, size) {
      // 获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
      const length = array.length
      // 判断不是数组，或者size没有设置，size小于1，就返回空数组
      if (!length || !size || size < 1) {
        return []
      }
      // 核心部分
      let index = 0 // 用来表示切割元素的范围start
      let resIndex = 0 // 用来递增表示输出数组的下标
      // 根据length和size算出输出数组的长度，并且创建它。
      let result = new Array(Math.ceil(length / size))
      // 进行循环
      while (index < length) {
        // 循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
        result[resIndex++] = array.slice(index, (index += size))
      }
      // 输出新数组
      return result
    }
  },
  beforeMount () {
    // 请求后台
    inbooktab({
      success: (res) => {
        this.inbooktab = false
        // 将请求数据放到vuex中
        // console.log(res.data)
        this.$store.dispatch('changereBooktab', res.data).then(() => {
          let Promodule = this.$store.state.Reservation.alltableData
          this.alltableData = Promodule
          // 商品翻页数据处理
          const allarray = this.alltableData
          let newarrary = chunk(allarray, this.count)
          this.newalltableData = newarrary
          this.tableData = this.newalltableData[0]
          function chunk (array, size) {
            // 获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
            const length = array.length
            // 判断不是数组，或者size没有设置，size小于1，就返回空数组
            if (!length || !size || size < 1) {
              return []
            }
            // 核心部分
            let index = 0 // 用来表示切割元素的范围start
            let resIndex = 0 // 用来递增表示输出数组的下标
            // 根据length和size算出输出数组的长度，并且创建它。
            let result = new Array(Math.ceil(length / size))
            // 进行循环
            while (index < length) {
              // 循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
              result[resIndex++] = array.slice(index, (index += size))
            }
            // 输出新数组
            return result
          }
        })
      },
      error: () => {
        this.inbooktab = false
      }
    })
    this.inbooktab = true
  },
  created () {
    this.totalNum = this.tableData.length
  }
}
</script>

<style lang="less" scoped>
@import url("./css/reservation.less");
</style>
