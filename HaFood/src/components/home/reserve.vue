<template>
<!-- 预定座位 Book A Table -->
  <div class="reserve-box">
      <div class="reserve-row">
          <div class="reserve-content-box">
              <div class="reserve-content">
                  <div class="table-box">
                     <h3>Book A Table</h3>
                     <el-form class="form">
                        <div class="form-text">
                            <div class="input-box">
                                <input @blur="vali" class="input" type="text" placeholder="Your name"/>
                                <div v-show="isName" class="error-input"> <span class="">!</span> 请输入姓名</div>
                            </div>
                            <div class="input-box">
                                <input @blur="dateVali" class="input" type="text" placeholder="mm/dd/yy"/>
                                <div v-show="isDate" class="error-input"> <span class="">!</span> 请输入正确的日期</div>
                            </div>
                            <div class="input-box">
                                <input @blur="timeVali" class="input" type="text" placeholder="7:00 pm"/>
                                <div v-show="isTime" class="error-input"> <span class="">!</span> 请输入时间</div>
                            </div>
                            <div class="input-box">
                                <input @blur="personVali" class="input" type="text" placeholder="Person"/>
                                <div v-show="isPerson" class="error-input"> <span class="">!</span> 请输入人数</div>
                            </div>
                            <div class="textarea-box mar-t-30">
                                <textarea class="textarea" type="textarea" cols="50" rows="6" placeholder="Special Notes"></textarea>
                                <div class="button-box">
                                    <a class="home-button">BOOK NOW</a>
                                </div>
                                <!-- <Btton @click="submit">SHOW NEWS</Btton> -->
                            </div>
                        </div>
                    </el-form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Btton from './homeButton'
export default {
    components: {
        Btton
    },
    data () {
        return {
            isName: false,
            isDate: false,
            isTime: false,
            isPerson: false
        }
    },
    methods: {
        vali: function (e) {
            if (e.target.value === '') {
                console.log(e.target.value)
                this.isName = true
            } else {
                this.isName = false
            }
        },
        dateVali: function (e) {
            let reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
            if (reg.test(e.target.value)) {
                this.isDate = false
            } else {
                this.isDate = true
            }
        },
        timeVali: function (e) {
            if (e.target.value === '') {
                this.isTime = true
            } else {
                this.isTime = false
            }
        },
        personVali: function (e) {
            if (e.target.value === '') {
                this.isPerson = true
            } else {
                this.isPerson = false
            }
        }
    }
}
</script>
<style>
</style>
