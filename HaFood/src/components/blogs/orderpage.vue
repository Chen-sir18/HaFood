<template>
  <div>
    <div class="h-order-box">
      <div class="order-title">
        <div class="order-title-inner">
          <div class="order-logo"></div>
        </div>
      </div>
      <div class="order-body">
        <div class="order-title-inner">
          <div class="order-outer-box">
            <div class="order-address-box">
              <form class="order-form">
                <h3 class="clearfix">
                  确认收货地址
                  <span class="manage-address">管理收货地址</span>
                </h3>
                <ul class="order-list">
                  <!-- <li class="order-detail-address">
                    <div class="address-info clearfix">
                      <input @click="inputClick(index)" name="radiocheck" class="radio-box" type="radio" />
                      <label class="user-address">
                        重庆沙坪坝区 西永街道 菁英公寓5栋 永顺路7号 xx收
                        <em>18411717620</em>
                      </label>
                      <a class="edit-address">编辑</a>
                    </div>
                  </li> -->
                  <li :key="index" v-for="(item, index) in addressData" class="order-detail-address">
                    <div class="address-info clearfix">
                      <input @click="inputClick(index)" name="radiocheck" class="radio-box" type="radio" />
                      <label class="user-address">
                        {{item.region + ' ' + item.name}}
                        <em>{{item.phonenumber}}</em>
                      </label>
                      <a class="edit-address">编辑</a>
                    </div>
                  </li>
                  <el-button @click="dialogFormVisible = true" class="add-newaddress">新增地址</el-button>
                  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                    <el-form ref="ruleForm" :model="form" :rules="rules">
                      <el-form-item prop="name" label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item value='' prop="region" label="地址" :label-width="formLabelWidth">
                        <el-input v-model="form.region" placeholder="请选择活动区域">
                        </el-input>
                      </el-form-item>
                      <el-form-item prop="phonenumber" label="电话号码" :label-width="formLabelWidth">
                        <el-input v-model="form.phonenumber" autocomplete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="addressClick('ruleForm')">确 定</el-button>
                    </div>
                  </el-dialog>
                </ul>
              </form>
            </div>
            <form class="order-message">
              <div>
                <h3 class="sure">确认订单信息</h3>
                <el-table
                  :data="orderData"
                  height="400"
                  border
                  style="width: 100%">
                  <el-table-column
                    label="商品图片"
                    width="180" >
                    <!-- slot-scope="scope" 插槽绑定数据 scope.row.picstr row相当于父级绑定的数据orderData -->
                    <template slot-scope="scope">
                      <div>
                        <img :src="api + scope.row.picstr" min-width="70" height="70" />
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="goodsname"
                    label="商品名称"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="price"
                    label="单价">
                  </el-table-column>
                  <el-table-column
                    prop="goodscount"
                    label="数量">
                  </el-table-column>
                  <el-table-column
                    prop="subtotal"
                    label="小计">
                  </el-table-column>
                </el-table>
                <div class="order-transition">
                  <div class="transition-methold">
                    <h5>支付方式:</h5>
                    <span>支付宝</span>
                    <span>微信</span>
                    <span>银行卡</span>
                  </div>
                  <div class="transition-methold">
                    <h5>运送方式:</h5>
                    <span>包邮(圆通)</span>
                    <span>顺丰</span>
                    <span>其他</span>
                  </div>
                  <div class="transition-methold">
                    <h4>发货时间：卖家承诺72小时内发货</h4>
                  </div>
                </div>
                <div class="settle-accounts">
                  <div class="detail-message">实付款：{{this.orderData.total}}$</div>
                  <div :data="detailaddress" class="detail-message">寄送至：{{this.detailaddress}}</div>
                  <div :data="receiveName" class="detail-message">收件人：{{this.receiveName}}</div>
                  <div :data="iphonenumber" class="detail-message">收件人号码：{{this.iphonenumber}}</div>
                  <el-button @click="returnCart" class="add-newaddress">返回购物车</el-button>
                  <el-button @click="commitOrder" class="add-newaddress">提交订单</el-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from './api.js'
export default {
  data () {
    var testPhone = (rules, value, callback) => {
      let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (!value) {
        callback(new Error('请输入手机号码'))
      } else if (!reg.test(value)) {
        callback(new Error('手机号码格式不正确'))
      } else {
        callback()
      }
    }
    return {
      dialogFormVisible: false,
      addressData: [],
      form: {
        name: '',
        region: '',
        phonenumber: ''
      },
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: '请输入你的名字', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入你的收货地址', trigger: 'change' }
        ],
        phonenumber: [
          {validator: testPhone, trigger: 'blur'}
        ]
      },
      api: api,
      // 商品订单数据
      orderData: [
        {
          img: '',
          acount: '',
          unitprice: '',
          title: '',
          total: ''
        }
      ],
      detailaddress: '',
      iphonenumber: '',
      receiveName: ''
    }
  },
  mounted () {
    // console.log(this.$store.state)
    let vueData = this.$store.state.ordergoods.ordergoodsdata
    this.orderData = vueData
    this.orderData.total = this.$store.state.ordergoods.checkedmoney
    // 收货地址从vuex里拿出来并渲染到页面上
    let vuexData = this.$store.state.orderpage
    this.addressData.unshift(vuexData)
    // console.log(vuexData)
  },
  beforeRouteEnter (to, from, next) {
    // console.log(from)
    // 组件守卫
    if (from.path === '/Shopcar' || from.path === '/') {
      next()
    } else {
      return false
    }
  },
  methods: {
    // formname形参
    addressClick (formname) {
      // this.dialogFormVisible = false
      // 验证表单
      this.$refs[formname].validate((valid) => {
        // console.log(this.$refs[formname])
        // 通过验证后的操作
        if (valid) {
          this.dialogFormVisible = false
          this.$message({
            message: '添加地址成功',
            type: 'success',
            showClose: true,
            // 提示显示时间
            duration: 3000,
            onClose: () => {
              let returnData = {
                name: '',
                region: '',
                phonenumber: ''
              }
              returnData.name = this.$refs[formname].model.name
              returnData.region = this.$refs[formname].model.region
              returnData.phonenumber = this.$refs[formname].model.phonenumber
              // 将数据存入vuex中
              this.$store.commit('changeOrder', {
                name: returnData.name,
                region: returnData.region,
                phonenumber: returnData.phonenumber
              })
              let vuexData = this.$store.state.orderpage
              this.addressData.unshift(vuexData)
            }
          })
        } else {
          return false
        }
      })
    },
    // 将选择的地址传到提交订单处
    inputClick (i) {
      let radioData = document.querySelectorAll("input[name='radiocheck']")
      // console.log(radioData)
      let address = radioData[i].nextElementSibling.innerText
      // 将字符串以空格为间隔分成数组存入变量arr
      let arr = address.split(' ')
      // console.log(arr)
      // let phonenumber = arr[2]
      // console.log(phonenumber)
      // substring(address.length - 11) 字符串方法 截取字符串倒数11位字符
      // let phonenumber = address.substring(address.length - 11)
      // console.log(address.substring(address.length - 11))
      // let addstring = address.toString()
      // console.log(addstring)
      // console.log(typeof (address))
      // this.detailaddress = arr[0]
      // this.receiveName = arr[1]
      // this.iphonenumber = arr[2]
      // 将数据存入vuex中
      this.$store.commit('checkedData', {
        detailaddress: arr[0],
        receiveName: arr[1],
        iphonenumber: arr[2]
      })
      this.detailaddress = this.$store.state.checkedAddress.detailaddress
      this.receiveName = this.$store.state.checkedAddress.receiveName
      this.iphonenumber = this.$store.state.checkedAddress.iphonenumber
      // for (let i = 0; i < radioData.length; i++) {
      //   if (radioData[i].checked === true) {

      //     address = radioData[i].nextElementSibling.innerText
      //     this.detailaddress = address
      //     console.log(radioData[i])
      //   } else {
      //     return false
      //   }
      // }
      // console.log(radioData)
    },
    returnCart () {
      // 点击回到购物车跳转到购物车页面
      this.$router.push('/Shopcar')
    },
    commitOrder () {
      // 点击提交订单跳转到订单状态页面
      this.$router.push('/state')
    }
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogorder.less';
</style>
