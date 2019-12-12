<template>
  <div class="homeThird">
        <ul class="homeThird-lists">
            <li class="item active">
                <div class="content-text">
                    <h2>Donuts</h2>
                    <p>A donut is a type of fried<br />
                        dough confection or dessert food.
                    </p>
                    <HomeButton></HomeButton>
                </div>
            </li>
            <li class="item">
                <div class="content-text">
                    <h2>Donuts</h2>
                    <p>A donut is a type of fried<br />
                        dough confection or dessert food.
                    </p>
                    <HomeButton></HomeButton>
                </div>
            </li>
        </ul>
        <a class="btn" id="prev"><span class="iconfont icon-xiayiye"></span></a>
        <a class="btn" id="next"><span class="iconfont icon-xiayiye"></span></a>
    </div>
</template>

<script>
// import '../../js/homeThired.js'
import HomeButton from './homeButton'
export default {
  components: {
    HomeButton
  },
  mounted () {
      (function () {
          let index = 0
          let items = document.getElementsByClassName('item')
          let prev = document.getElementById('prev')
          let next = document.getElementById('next')
          let clearActive = function () {
              for (let i = 0; i < items.length; i++) {
                  items[i].className = 'item'
              }
          }
          let goIndex = function () {
              clearActive()
              items[index].className = 'item active'
          }
        let nextBtn = function () {
            if (index < 1) {
                index++
            } else {
                index = 0
            }
            goIndex()
        }
        let prevBtn = function () {
            if (index <= 0) {
                index = 1
            } else {
                index--
            }
            goIndex()
        }
        next.addEventListener('click', function () {
            nextBtn()
        })
        prev.addEventListener('click', function () {
            prevBtn()
        })
      })()
  }
}
</script>
<style lang="less" scope="scope">
@import '../../less/home3.less';
</style>
