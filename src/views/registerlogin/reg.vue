<template>
  <div>
    <div id="login">
      <div class="login-tel">
        <h3>注册途家</h3>
        <div class="tj-toast tj-toast--text tj-toast--middle" v-show="alert">
          <div class="text">{{alerttext}}</div>
        </div>
        <div class="input-tel f-border-bottom-line-gray">
          <div class="tel-number">
            <input
              type="text"
              placeholder="输入手机号"
              maxlength="40"
              v-model="username"
              @input="inputHandler()"
            />
            <v-touch @tap="nullHandler()" tag="div">
              <i class="iconfont" v-show="showerr">&#xe67d;</i>
            </v-touch>
          </div>
        </div>
        <div class="input-password f-border-bottom-line-gray">
          <input type="password" placeholder="输入密码" maxlength="16" v-model="password" />
          <div class="is-secret">
            <i></i>
          </div>
        </div>
        <v-touch @tap="regHandler()" tag="div">
          <button class="btn-login tj-button tj-button--default tj-button--normal is-disabled">
            <span class="tj-button__text">注册</span>
          </button>
        </v-touch>
        <p class="login-tip clearfix">
           <a  href="#/login" class="sms-login fl-left">已有账号？去登录</a>
          <a class="sms-login fl-right">忘记密码？</a>
        </p>
      </div>
    </div>
    <p class="protocol-supple">
      注册代表你已同意
      <a href="https://passport.tujia.com/H5Site/ServicePage">《途家网服务协议》</a>
      <a href="https://pwa.tujia.com/h5/mob/protocol/registerprivacy">《隐私政策》</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showerr: false,
      alerttext: "",
      alert: false
    };
  },
  methods: {
    regHandler() {
      //正则验证
      if (/^1[356789]\d{9}$/g.test(this.username)) {
        let obj = {
          username: this.username,
          pwd: this.password
        };
        //将用户名和密码存入本地存储
        localStorage.setItem("user", JSON.stringify(obj));
        this.alerttext = "注册成功";
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 2000);
        this.$router.push("/login");
      } else {
        this.alerttext = "手机号格式不正确";
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 1000);
      }
    },
    nullHandler() {
      this.username = "";
      this.showerr = false;
    },
    inputHandler() {
      this.showerr = true;
    }
  }
};
</script>

<style scoped>
.tj-toast--text {
  box-sizing: border-box;
  padding: 0.17rem 0.2rem;
  min-width: 2.71rem;
  max-width: 2.71rem;
  text-align: center;
  z-index: 2000;
}
.tj-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -1.5rem;
  display: flex;
  color: #fff;
  max-width: 70%;
  font-size: 16px;
  line-height: 0.21rem;
  border-radius: 0.1rem;
  word-break: break-all;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  background-color: rgba(0, 0, 0, 0.7);
  width: fit-content;
}
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