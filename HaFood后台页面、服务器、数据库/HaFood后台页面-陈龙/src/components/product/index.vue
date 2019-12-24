<template>
  <div class="product">
    <!-- 增加商品按钮 -->
    <el-button class="inbtn" type="primary" round
      @click="dialogFormVisible = true">
      增加商品
    </el-button>
    <!-- 增加商品弹框 -->
    <el-dialog title="新增商品" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" :label-width="formLabelWidth">
          <el-upload
            ref="upload"
            :action="'api' + '/upload'"
            list-type="picture-card"
            v-model="form.img"
            :auto-upload="false"
            :file-list="fileList"
            :limit='1' :headers='uploadHeaders'
            :before-upload="beforeAvatarUpload"
            :on-preview="handlePictureCardPreview"
            accept="image/*"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl">
          </el-dialog>
          <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
        </el-form-item>
        <el-form-item label="商品介绍" :label-width="formLabelWidth">
          <el-input v-model="form.depict" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleInsert">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 商品表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      class="protable"
      >
      <el-table-column
        type="index"
        prop="number"
        label="序号"
        width="114">
      </el-table-column>
      <el-table-column
        prop="goodsname"
        label="商品名称"
        width="158">
      </el-table-column>
      <el-table-column
        label="商品图片"
        width="158">
        <template slot-scope="scope">
          <div>
            <img :src="api+scope.row.picstr" min-width="70" height="70" />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="depict"
        label="商品介绍"
        width="158">
      </el-table-column>
      <el-table-column
        prop="price"
        label="商品价格"
        width="168">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="238">
        <template slot-scope="scope">
          <div>
            <el-button size="mini" @click="handleClick(scope.row), shoWdialogForm = true">
              查看
            </el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, tableData, scope.row), dialogForm = true">
              编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              slot="reference"
              @click="handleDelete(scope.$index, tableData, scope.row)">
              删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑商品的弹框 -->
    <el-dialog title="编辑商品" :visible.sync="dialogForm">
      <el-form :model="inform">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="inform.name" autocomplete="off" placeholder="请输入新商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-upload
            ref="upload"
            :action="'api' + '/upload'"
            list-type="picture-card"
            v-model="inform.picstr"
            :auto-upload="false"
            :file-list="infileList"
            :limit='1' :headers='uploadHeaders'
            :before-upload="upbeforeAvatarUpload"
            :on-preview="handlePictureCardPreview"
            accept="image/*"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl">
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品介绍" :label-width="formLabelWidth">
          <el-input v-model="inform.depict" autocomplete="off" placeholder="请输入商品信息"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input v-model="inform.price" autocomplete="off" placeholder="请输入商品价格"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogForm = false">取 消</el-button>
        <el-button type="primary" @click="reForm()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 查看商品详情弹框 -->
    <el-dialog title="商品详情" :visible.sync="shoWdialogForm" class="showshop">
      <el-form :model="inform">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <div class="shopname">{{showform.goodsname}}</div>
        </el-form-item>
        <el-form-item label="商品图片" :label-width="formLabelWidth">
          <div class="shopImg"><img :src="api+showform.picstr" min-width="100" height="100" /></div>
        </el-form-item>
        <el-form-item label="商品介绍" :label-width="formLabelWidth">
          <div class="depict">{{showform.depict}}</div>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <div class="price">{{showform.price}}</div>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 翻页按钮 -->
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
import {api} from '../../common/api'
import axios from 'axios'
import {ingredients, reingredients, addreingred} from 'js/axiosRequest.js'

export default {
  data () {
    return {
      // 上传图片参数
      fileList: [{
        name: 'food.jpg',
        url: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'// 图片地址
      }],
      // 编辑商品的图片上传之前参数
      infileList: [{
        name: '',
        url: ''// 图片地址
      }],
      // 增加按钮中表单下的图片
      dialogImageUrl: '', // 图片上传路径
      dialogVisible: false, // 图片弹框
      // 增加按钮弹框确认按钮
      dialogFormVisible: false,
      // 增加按钮弹出框的表单
      form: {
        name: '',
        img: '',
        depict: '',
        price: ''
      },
      // 查看商品详情弹框
      shoWdialogForm: false,
      // 查看商品详情弹框，弹框中的信息
      showform: {
        goodsname: '',
        depict: '',
        price: '',
        picstr: ''
      },
      // 编辑商品弹框按钮
      dialogForm: false,
      // 增加按钮弹出框的宽度
      formLabelWidth: '120px',
      // 编辑商品的form
      inform: {
        name: '',
        depict: '',
        price: '',
        picstr: '',
        id: ''
      },
      // 删除按钮的弹出框按钮是否可见
      visible: true,
      // 渲染图片添加api
      api: api,
      // 渲染的方法
      ingredients: false,
      // 渲染vuex数据
      tableData: [],
      // 翻页按钮的渲染，将vuex数据更改
      newalltableData: [],
      // 限制每个按钮所渲染的数据条数
      count: 10,
      // vuex中的静态数据
      alltableData: []
      // formdata: new FormData()
    }
  },
  computed: {
    // 计算属性 图片上传
    uploadHeaders () {
      return {
        Authorization: this.$store.state.id
      }
    }
  },
  methods: {
    // 增加商品弹框的确认按钮
    handleInsert () {
      this.dialogFormVisible = false
      // console.log(this.form.img)
      // this.$options.methods.调用的方法名()   方法中调用另一个方法
      this.$refs.upload.submit() // 提交上传图片
      // console.log(this.form)
      // 后台请求上传内容
      addreingred({
        // 请求后台
        data: {
          goodsname: this.form.name,
          depict: this.form.depict,
          price: this.form.price,
          picstr: this.form.img
        },
        success: (res) => {
          console.log(res)
          this.addreingred = false
          if (res.status === 200) {
            // 成功提示
            this.$message({
              message: '添加商品成功',
              type: 'success',
              showClose: true,
              duration: 2000
            })
          } else {
            this.$message({
              message: '添加商品失败',
              type: 'error',
              showClose: true,
              duration: 3000
            })
          }
        },
        error: () => {
          this.addreingred = false
        }
      })
      this.addreingred = true
    },
    // 增加商品的图片操作
    handleRemove (file, fileList) {
      // console.log(file, fileList)
      fileList.splice(file, 1)// 删除上传图片
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url // 图片路径赋值
      this.dialogVisible = true
    },
    // 图片上传前
    beforeAvatarUpload (file) {
      this.form.img = file.name // 将上传图片的名字赋值给表单中的图片名字存入数据库时用
      // 验证上传图片后缀名，大小
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!isLt2M) {
        this.$notify({
          title: '提示',
          message: '只能上传 jpg/jpeg/png文件，且不超过10M',
          type: 'warning',
          duration: 3000
        })
      }
      return isLt2M
    },
    // 查看商品详情
    handleClick (row) {
      // console.log(row)
      // 将商品信息赋值给return中的参数返回到弹框中
      this.showform.goodsname = row.goodsname
      this.showform.depict = row.depict
      this.showform.price = row.price
      this.showform.picstr = row.picstr
    },
    // 编辑商品的图片上传前
    upbeforeAvatarUpload (file) {
      this.inform.picstr = file.name // 将上传图片的名字赋值给表单中的图片名字存入数据库时用
      // console.log(this.inform.picstr)
      // 验证上传图片后缀名，大小
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!isLt2M) {
        this.$notify({
          title: '提示',
          message: '只能上传 jpg/jpeg/png文件，且不超过10M',
          type: 'warning',
          duration: 3000
        })
      }
      return isLt2M
    },
    // 编辑商品
    handleEdit (index, rows, row) {
      // 将return中编辑商品时的参数赋值改变
      this.inform.name = rows[index].goodsname // 商品的名字
      this.inform.depict = rows[index].depict // 商品介绍
      this.inform.price = rows[index].price // 商品的价格
      this.infileList.name = rows[index].picstr // 商品图片名字赋值给弹框打开显示的图片名字
      // 商品图片地址赋值给弹框打开显示的图片地址
      // this.infileList.url = 'http://192.168.97.241:3000/' + this.infileList.name
      // console.log(this.infileList.url)
      this.inform.id = row.id // 商品的id
    },
    // 编辑商品弹出框的确认按钮
    reForm () {
      this.$refs.upload.submit() // 提交上传图片
      // 判断表单是否为空，为空不请求后台
      if (this.inform.depict === '' || this.inform.name === '' || this.inform.price === '' || this.inform.picstr === '') {
        this.dialogForm = false // 弹框按钮的关闭
      } else {
        this.dialogForm = false
        // 请求后台
        reingredients({
          data: {
            goodsname: this.inform.name,
            depict: this.inform.depict,
            price: this.inform.price,
            picstr: this.inform.picstr,
            id: this.inform.id
          },
          success: (res) => {
            this.reingredients = false
            if (res.status === 200) {
              // 成功提示
              this.$router.go(0) // 强制刷新路由
              this.$message({
                message: '修改商品内容成功',
                type: 'success',
                showClose: true,
                duration: 2000
              })
            } else {
              this.$message({
                message: '修改失败',
                type: 'error',
                showClose: true,
                duration: 3000
              })
            }
          },
          error: () => {
            this.reingredients = false
          }
        })
        this.reingredients = true
      }
    },
    // 删除商品
    handleDelete (index, rows, row) {
      // 弹出框是否确定删除
      this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        let id = row.id
        // console.log(id)
        // 传参到后台
        axios({
          url: api + 'deleteIngred',
          method: 'get',
          params: {
            id: id
          }
        }).then((res) => {
          // console.log(res)
          if (res.data.status === 200) {
            // 成功时删除商品
            rows.splice(index, 1)
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 翻页按钮
    handleCurrentChange (val) {
      // 获取翻页按钮位置 减一赋值给表格数据渲染
      this.tableData = this.newalltableData[val - 1]
      // console.log(typeof val)
      this.currentPage = val // 动态改变
    }
  },
  mounted () {
    // 获取vuex数据
    let Promodule = this.$store.state.Product.alltableData
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
    ingredients({
      success: (res) => {
        this.ingredients = false
        // console.log(res.data)
        // 存入vuex中
        this.$store.dispatch('changste', res.data).then(() => {
          // .then() 因为后台请求是个  异步的操作
          // 所以在mounted中第一次拿vuex的数据是静态的，
          // 且只执行了一次拿取数据操作,
          // 所以在请求后台数据成功后用promise的then来执行第二次拿取vuex中的数据
          // 这次拿取的数据是经过后台请求到的，然后改变vuex中state的静态数据后的数据。
          // --解决了渲染时第一次不渲染，需要点击后才渲染的问题--
          // 获取vuex数据
          let Promodule = this.$store.state.Product.alltableData
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
        this.ingredients = false
      }
    })
    this.ingredients = true
  },
  created () {
    this.totalNum = this.tableData.length
  }
}
</script>

<style lang="less" scoped>
@import url("./css/product.less");
</style>
