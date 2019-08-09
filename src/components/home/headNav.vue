import { mapMutations } from 'vuex';
<template>
  <div>
    <a-Icon type="bars" @click="showDrawer"  class="color60"/>
    <a-Drawer placement="right" :closable="true" @close="onClose" :visible="visible">
      <ul class="mask">
        <router-link to="/">
          <li>
            <i class="iconfont">&#xe610;</i>首页
          </li>
        </router-link>
        <router-link to="/">
          <li>
            <i class="iconfont">&#xe600;</i>搜索附近
          </li>
        </router-link>
        <li class="line"></li>
        <div v-show="tokenshow">
          <router-link to="/mine">
            <li>
              <i class="iconfont">&#xe656;</i>我的
            </li>
          </router-link>
          <router-link to="/">
            <li>
              <i class="iconfont">&#xe65c;</i>订单
            </li>
          </router-link>
          <router-link to="/collection">
            <li>
              <i class="iconfont">&#xe613;</i>收藏
            </li>
          </router-link>
          <router-link to="/">
            <li>
              <i class="iconfont">&#xe64b;</i>消息
            </li>
          </router-link>
          <v-touch @tap="outlogin()" tag="div">
            <li>
              <i class="iconfont">&#xe61d;</i>退出登录
            </li>
          </v-touch>
        </div>
        <router-link to="/register" v-show="regshow">
          <li>
            <i class="iconfont">&#xe61d;</i>注册/登录
          </li>
        </router-link>
        <li class="line"></li>
        <router-link to="/suggest">
          <li>
            <i class="iconfont">&#xe82f;</i>意见反馈
          </li>
        </router-link>
      </ul>
    </a-Drawer>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      visible: false,
      tokenshow: false,
      regshow: true
    };
  },
  created() {
    if (sessionStorage.getItem("num")) {
      this.tokenshow = true;
      this.regshow = false;
    } else {
      this.tokenshow = false;
      this.regshow = true;
    }
  },
  methods: {
    //  ...mapMutations({
    //       outlogin:"homestore/outlogin"
    //  }),
    outlogin() {
      sessionStorage.removeItem("num");
      this.$router.go(0);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style>
.color60{color:#f60}
.mask {
  padding: 0.25rem 0.2rem 0.25rem 0.25rem;
}
.mask li i {
  display: inline-block;
  font-size: 18px;
  margin-right: 0.3rem;
  width: 0.16rem;
  height: 0.16rem;
}
.mask li:nth-child(1) i {
  font-size: 25px;
}
.mask li {
  margin-bottom: 0.1rem;
  height: 0.36rem;
  color: #333;
}
.mask .line {
  height: 0.01rem;
  border-bottom: 0.01rem solid #e9e9e9;
}
</style>

