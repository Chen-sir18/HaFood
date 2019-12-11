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
        <a class="btn" id="prev">></a>
        <a class="btn" id="next">></a>
    </div>
</template>

<script>
// import '../../js/homeThired.js'
import HomeButton from './homeButton'
export default {
  components: {
    HomeButton
  }
}
</script>
<style lang="less" scope="scope">
@import '../../less/home3.less';
</style>
