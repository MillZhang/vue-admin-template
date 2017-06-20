<template>
  <section class="page-login">
    <div class="title">
      <h3>海渡学院管理后台</h3>
    </div>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <el-form-item prop="account">
        <img src="../../src/assets/admin/images/login/icon_name.png" alt="" class="icon">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入账号名称"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <img src="../../src/assets/admin/images/login/icon_password.png" alt="" class="icon">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="handleSubmit2">
        </el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
      <el-form-item style="width:100%;">
        <el-button type="primary" class="loginBtn" @click.native.prevent="handleSubmit2" :loading="logining">立即登录
        </el-button>
      </el-form-item>
    </el-form>
    <div class="copyright">
      <!-- © 2017 海成通版权所有 苏ICP备11037377号-5 -->
    </div>
  </section>
</template>
<script>
import {
  req_login
} from '@/service/adminService'
export default {
  data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }, ],
          checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }, ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit2(ev) {
        let that = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            let loginParams = {
              userName: this.ruleForm2.account,
              password: this.ruleForm2.checkPass
            };
            req_login(loginParams).then(data => {
              this.logining = false;
              if (data.success) {
                that.utils.Access_token().setter(that.utils.Access_token().value())
                that.$router.push('/dashboard')
              } else {
                this.$message({
                  message: data.message,
                  type: 'error',
                });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>
<style lang="scss">
.page-login {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding-top: 5%;
  box-sizing: border-box;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    & > h3 {
      margin-left: 20px;
      padding-top: 20px;
      font-size: 28px;
      color: #8c8c8d;
      font-weight: 300;
    }
  }
  .login-container {
    border-radius: 5px;
    box-sizing: border-box;
    margin: 55px auto;
    width: 500px;
    padding: 50px 20px;
    background: #b1daf9;
    border: 1px solid #eaeaea;
    box-shadow: 5px 5px 2px #d3e8f8;
    .title {
      margin: 0 auto 40px;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0 0 35px;
    }
    .icon {
      position: absolute;
      top: 20px;
      left: 13px;
      width: 20px;
      z-index: 100;
    }
    .el-input__inner {
      height: 60px;
      line-height: 60px;
      padding-left: 47px;
    }
    .loginBtn {
      width: 100%;
      height: 60px;
      margin-top: 35px;
    }
  }
  .copyright {
    width: 100%;
    position: fixed;
    bottom: 10px;
    text-align: center;
    color: #fff;
  }
}
</style>
