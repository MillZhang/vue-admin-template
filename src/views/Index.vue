<template>
<el-row class="container">
  <hc-main></hc-main>
</el-row>
</template>
<script>
import hcMain from '@/views/admin/layout/hc-main'
export default {
  name: 'index',
  data() {
    return {}
  },
  components: {
    hcMain
  }
}
</script>
<style scoped>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
</style>
