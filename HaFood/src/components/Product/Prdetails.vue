<template>
  <div>
    <Prtitle/>
    <Prdenav/>
    <Prdetrigger/>
    <Prmainmini/>
  </div>
</template>

<script>
import Prtitle from './Common/Prtitle'
import Prdenav from './Common/Prdenav'
import Prdetrigger from './Common/Prdetrigger'
import Prmainmini from './Common/Prmainmini'

// eslint-disable-next-line no-new-func去除重复点击出现的蓝色块,no-new-func
document.onselectstart = new Function('return false')
export default {
  components: {
    Prtitle,
    Prdenav,
    Prdetrigger,
    Prmainmini
  }
}
</script>

<style scoped>

</style>
