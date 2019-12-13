<template>
  <div class="">
    <Prtitle/>
    <Prnav/>
    <Prmain/>
    <prpaging/>
  </div>
</template>

<script>
import Prtitle from './Common/Prtitle'
import Prnav from './Common/Prnav'
import Prmain from './Common/Prmain'
import Prpaging from './Common/Prpaging'

// eslint-disable-next-line no-new-func去除重复点击出现的蓝色块,no-new-func
document.onselectstart = new Function('return false')
export default {
  components: {
    Prtitle,
    Prnav,
    Prmain,
    Prpaging
  }
}
</script>

<style lang="less">
</style>
