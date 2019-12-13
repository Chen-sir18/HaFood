<template>
  <div>
    <Prtitle/>
    <Prnav/>
    <Prmainx/>
    <prpaging/>
  </div>
</template>

<script>
import Prtitle from './Common/Prtitle'
import Prnav from './Common/Prnav'
import Prmainx from './Common/Prmainx'
import Prpaging from './Common/Prpaging'

// eslint-disable-next-line no-new-func去除重复点击出现的蓝色块,no-new-func
document.onselectstart = new Function('return false')
export default {
  components: {
    Prtitle,
    Prnav,
    Prmainx,
    Prpaging
  }
}
</script>

<style scoped lang="less">

</style>
