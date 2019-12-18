<template>
  <div>
    <div class="state-top"></div>
    <div class="state-outer-box">
      <!-- 中间进度条 -->
      <div class="step-progress">
        <div class="step-inner-box">
          <el-steps :active="active" finish-status="success" align-center>
            <el-step title="待付款"></el-step>
            <el-step title="待发货"></el-step>
            <el-step title="待收货"></el-step>
            <el-step title="待评价"></el-step>
          </el-steps>
        </div>
        <component :changeStep="changeStep" :is="view"></component>
      </div>
    </div>
  </div>
</template>

<script>
import First from './pay.vue'
import Second from './awitorder.vue'
import Third from './waitreceive.vue'
import Last from './indextest.vue'
export default {
  data () {
    return {
      active: 1,
      view: 'First'
    }
  },
  methods: {
    changeStep (step) {
      this.active = step
      if (step === 1) {
        this.view = 'First'
      } else if (step === 2) {
        this.view = 'Second'
      } else if (step === 3) {
        this.view = 'Third'
      } else {
        this.view = 'Last'
      }
    }
  },
  components: {
    First,
    Second,
    Third,
    Last
  }
}
</script>

<style lang="less" scope>
@import '../../less/blogorder.less';
</style>
