<template>
  <div>
    <div class="appdown-header f-border-bottom-line-gray" v-show="topclose">
      <i class="appdown-header__close iconfont" @click="topcloseHandler">&#xe67d;</i>
      <img src="../../../public/img/tujialogo.png" alt class="appdown-header__logo" />
      <div class="appdown-header__container">
        <div class="appdown-header__container__left">
          <div class="appdown-header__container__left__title">住民宿，上途家</div>
          <div class="appdown-header__container__left__desc">新用户下载APP, 尽享新人专享红包</div>
        </div>
        <div class="appdown-header__container__btn">立即下载</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topclose: true
    };
  },
  methods: {
    topcloseHandler() {
      this.topclose = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.appdown-header {
  width: 100%;
  background: hsla(0, 0%, 100%, 0.95);
  box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  height: 60px;
  box-sizing: border-box;
  display: flex;
}
.appdown-header .appdown-header__close {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: relative;
  margin-left: 12px;
  top: 50%;
  font-size: 14px;
  transform: translateY(-50%);
  color: #f60;
}
.appdown-header .appdown-header__logo {
  width: 56px;
  height: 56px;
}
.appdown-header .appdown-header__container {
  flex: 1;
  padding: 10px 10px 10px 0;
  color: #333;
  background: hsla(0, 0%, 100%, 0.95);
  box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
}
.appdown-header .appdown-header__container .appdown-header__container__left {
  position: relative;
  font-size: 14px;
  font-family: PingFangSC-Light;
  flex: 1;
  overflow: hidden;
}
.appdown-header
  .appdown-header__container
  .appdown-header__container__left
  .appdown-header__container__left__title {
  line-height: 20px;
  color: #333;
}
.appdown-header
  .appdown-header__container
  .appdown-header__container__left
  .appdown-header__container__left__desc {
  margin-top: 3px;
  font-size: 12px;
  line-height: 16px;
  color: #999;
  letter-spacing: 0;
  margin-bottom: 0;
}
.appdown-header .appdown-header__container .appdown-header__container__btn {
  width: 63px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: #ff9645;
  border-radius: 6px;
  font-size: 12px;
  color: #fff;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>