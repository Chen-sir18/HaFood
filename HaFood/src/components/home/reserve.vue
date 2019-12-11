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
                                <input class="input" type="text" placeholder="Your name"/>
                            </div>
                            <div class="input-box">
                                <input class="input" type="text" placeholder="mm/dd/yy"/>
                            </div>
                            <div class="input-box">
                                <input class="input" type="text" placeholder="7:00 pm"/>
                            </div>
                            <div class="input-box">
                                <input class="input" type="text" placeholder="Person"/>
                            </div>
                            <div class="textarea-box mar-t-30">
                                <textarea class="textarea" type="textarea" cols="50" rows="6" placeholder="Special Notes"></textarea>
                                <div class="button-box">
                                    <a class="home-button">BOOK NOW</a>
                                </div>
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
export default {
}
</script>
<style>
</style>
