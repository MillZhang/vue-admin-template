<template lang="html">
  <div class="hc-404">
    <p class="title">抱歉,找不到此页面~</p>
    <p class="tips">Sorry,the site now can not be accessed.</p>
    <p class="info">你请求的页面,暂时找不到,我们建议你返回首页进行浏览,谢谢!</p>
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
.hc-404 {
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
