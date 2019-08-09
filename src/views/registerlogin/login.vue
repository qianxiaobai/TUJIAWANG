
<template>
  <div>
    <div id="login">
      <div class="login-tel">
        <h3>登录途家</h3>
        <div class="tj-toast tj-toast--text tj-toast--middle" v-show="alert">
          <div class="text">{{alerttext}}</div>
        </div>
        <div class="input-tel f-border-bottom-line-gray">
          <div class="tel-number">
            <input type="text" placeholder="输入手机号" maxlength="40" v-model="username" @input="inputHandler()"/>
            <v-touch @tap="nullHandler()" tag="div">
              <i class="iconfont" v-show="showerr">&#xe67d;</i>
            </v-touch>
          </div>
        </div>
        <div class="input-password f-border-bottom-line-gray">
          <input type="password" placeholder="输入密码" maxlength="16" v-model="pwd" />
          <div class="is-secret">
            <i></i>
          </div>
        </div>
        <v-touch @tap="btnHandler()" tag="div">
          <button class="btn-login tj-button tj-button--default tj-button--normal is-disabled">
            <span class="tj-button__text">登录</span>
          </button>
        </v-touch>
        <p class="login-tip clearfix">
          <a href="#/register" class="sms-login fl-left">没有账号？去注册</a>
          <a class="sms-login fl-right">忘记密码？</a>
        </p>
      </div>
    </div>
    <p class="protocol-supple">
      登录代表你已同意
      <a href="https://passport.tujia.com/H5Site/ServicePage">《途家网服务协议》</a>
      <a href="https://pwa.tujia.com/h5/mob/protocol/registerprivacy">《隐私政策》</a>
    </p>
  </div>
</template>

<script>
const jwt = require("jsonwebtoken");
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      pwd: "",
      alerttext: "",
      alert: false,
      showerr: false,
    };
  },
  methods: {
    ...mapMutations({
      changetoken: "homestore/changetoken"
    }),
    nullHandler() {
      this.username = "";
      this.showerr = false;
    },
    inputHandler() {
      this.showerr = true;
    },
    btnHandler() {
      let localobj = JSON.parse(localStorage.getItem("user"));
      if(localobj===null){
        this.alerttext = "用户名不存在";
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 2000);
        return
      }
      if (this.username != localobj.username || this.pwd != localobj.pwd) {
        this.alerttext = "用户名或密码错误";
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 2000);
      }
      if (this.username === localobj.username && this.pwd === localobj.pwd) {
        let use = this.username;
        let num = jwt.sign({ use }, "TUJIA", { expiresIn: 5000 });
        // console.log(num);
        //jwt 3、发送到客户端
        this.changetoken(num);
        this.alerttext = "登陆成功";
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
          this.$router.push("/");
        }, 2000);
        
      }
    }
  }
};
</script>

<style scoped>
/* #login{
      position: relative;
    padding: 40px 20px 0;
    background: #fff;
    min-height: 480px;

} */
.login-tel {
  font-size: 14px;
  padding: 40px 20px 0;
}
.login-tel > h3 {
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #333;
  letter-spacing: 0;
  line-height: 32px;
  font-weight: 400;

  position: relative;
}
.login-tel > h3:before {
  content: "";
  position: absolute;
  top: 0;
  left: -20px;
  width: 4px;
  height: 32px;
  background: #fd8238;

  box-shadow: 0 2px 18px 0 #fd8238;
}
.login-tel .input-tel {
  margin-top: 30px;
  font-family: PingFangSC-Regular;
  color: #333;
  letter-spacing: 0;

  display: flex;
}
.login-tel .input-tel .tel-number {
  flex: 1;
  position: relative;
}
.login-tel .input-tel .tel-number input {
  width: 90%;
}
input {
  background: #fff;
  caret-color: #fd8238;
  font-family: PingFangSC-Regular;
  color: #333;
  border: 0;
  letter-spacing: 0;
  font-size: 20px;
  height: 44px;
  padding: 11px 0;
  line-height: normal;
  outline: none;
}
.fl-left{
  float:left;
}
.login-tel .input-tel .tel-number i {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -8px;
  color: #333;
  font-size: 12px;
}
.login-tel .input-password {
  margin-top: 10px;
  font-family: PingFangSC-Regular;
  color: #333;
  letter-spacing: 0;
  position: relative;

  display: flex;
  height: 44px;
}
.login-tel .input-password input {
  flex: 1;
}
.login-tel .input-password div {
  height: 44px;
}
.login-tel .btn-login {
  margin: 40px 0 0;
  width: 100%;
  border: 0;
  height: 44px;
}
.login-tel .login-tip {
  margin-top: 20px;
  color: #666;
  letter-spacing: 0;
  line-height: 28px;
}
.protocol-supple {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
  position: absolute;
  bottom: 120px;
  left: 50%;

  transform: translateX(-50%);
}
.login-tip a,
.protocol-supple a {
  color: #001f24;
}
.fl-right {
  float: right;
}
</style>