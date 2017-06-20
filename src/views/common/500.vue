<template lang="html">
  <div class="hc-500">
    <p class="title">啊噢!好像出错啦~</p>
    <p class="tips">Sorry,the site goes wrong.</p>
    <p class="info">请你耐心等待,我们正在努力解决问题,谢谢!</p>
    <el-button type="primary" @click.native="goBack">返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack(e) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style lang="scss" scoped>@import '~scss_vars';
.hc-500 {
    width: 60%;
    margin: 10% auto;
    border: 8px dashed #ebebeb;
    text-align: left;
    padding: 5%;
    box-sizing: border-box;
    .title {
        color: $color-primary;
        font-size: 42px;
    }
    .tips {
        margin-top: 12px;
        color: $color-primary;
    }
    .info {
        margin: 5% 0;
        font-style: italic;
    }
}
</style>
