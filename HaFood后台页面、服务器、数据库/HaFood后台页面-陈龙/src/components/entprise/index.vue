<template>
  <div class="entprise">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商家头像">
              <span>
                 <img :src="api+props.row.headpic" min-width="70" height="70" />
              </span>
            </el-form-item>
            <el-form-item label="商家名称">
              <span>{{ props.row.nickname }}</span>
            </el-form-item>
            <el-form-item label="商家 ID">
              <span>00{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="商家邮箱">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="商家电话">
              <span>{{ props.row.tel }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="序列号"
        type="index"
        width="200">
      </el-table-column>
      <el-table-column
        label="商家名称"
        prop="nickname">
      </el-table-column>
      <el-table-column
        label="商家信息描述">
        <span>商家邮箱、电话等联系方式</span>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {api} from '../../common/api'
import {userinfo} from '../../common/axiosRequest'
export default {
  data () {
    return {
      tableData: [{
        id: '12987122',
        nickname: '鸡蛋仔',
        tel: '18888888888',
        email: '1049283791@qq.com',
        headpic: '头像'
      }],
      api: api
    }
  },
  beforeMount () {
    // 后台请求
    userinfo({
      success: (res) => {
        // console.log(res)
        this.userinfo = false
        this.tableData = res.data
      },
      error: () => {
        this.userinfo = false
      }
    })
    this.userinfo = true
  }
}
</script>

<style lang="less" scoped>
@import url("./css/entprise.less");
</style>
