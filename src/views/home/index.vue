<template>
  <div id="home">   
    <headerDown /> 
    <!-- 导航 -->
    <Nav />
    <!-- 轮播图 -->
    <AutoTop />
    <!-- 我的 -->
    <div class="conent">
      <a href="#/mine" class="conentdiv-a">
        <span class="conentdiv-aspan"></span>
        <p class="conent_text">我的途家</p>
      </a>
      <a  class="conentdiv-a">
        <span class="conentdiv-aspan conentdiv-aspan2"></span>
        <p class="conent_text">我的订单</p>
      </a>
    </div>
    <!-- 抢红包 -->
    <div class="redpackagewrap">
      <div class="redpackage-container">
        <i class="icon-redpackage"></i>
        <div class="redpackage-container__desc">
          <h5>您有红包未领取！</h5>
          <p>首单优惠限时抢 最高立减100元！</p>
        </div>
        <a class="redpackage-btn">
          <span>立即抢</span>
        </a>
      </div>
    </div>
    <!-- 轮播图 -->
    <AutoBot />
    <!-- MainList -->
    <div class="mainTitle">
      <!-- 收藏警告框 -->
      <h2>发现公寓</h2>
    </div>
        <MainList />
    <!-- 底部 -->
    <HomeBottom />
    <!-- APP内打开 -->
    <div class="appdown_btn">
      <span>APP内打开</span>
    </div>
    <!-- 浮动bottom banner -->
    <div class="tj-layer--download" v-show="floatclose">
      <img src="https://nmstatic.tujia.com/static/images/index/home/banner_download.jpg" alt />
      <div class="tj-layer--download__icon--close" @click="floatCloseHandler"></div>
      <div class="tj-layer--download__container">
        <p class="tj-layer--download__slogan">住民宿 上途家</p>
        <p class="tj-layer--download__desc">
          新用户下载APP,尽享
          <span>新人专享</span>红包
        </p>
        <div class="tj-layer--download__btn">
          <span>立即下载</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "components/home/navtab.vue";
import AutoTop from "components/home/autoplay-top.vue";
import AutoBot from "components/home/autoplay-bottom.vue";
import MainList from "components/home/mainlist.vue";
import HomeBottom from "components/home/bottom.vue";
import headerDown from "components/home/headerdown.vue"; 
export default {
  data() {
    return {
      floatclose: true,
    };
  },
  components: {
    Nav,
    AutoTop,
    AutoBot,
    MainList,
    HomeBottom,
    headerDown
  },
  methods: {
    floatCloseHandler() {
      this.floatclose = false;
    },
  }
};
</script>
<style scoped>
#home {
  width: 100%;
  font-size: 12px;
  overflow: hidden
}
p{margin: 0}
/* 我的 */
.conent {
  padding: 0 .15rem;
  display: flex;
  font-size: 0.12rem;
  background: #fff;
}
.conentdiv-a {
  flex: 1;
  padding: 0.15rem;
  color:#333
}
.mainTitle {
  text-align: center;
  background: #fff;
  margin-top: 0.12rem;
  line-height: 0.65rem;
  color: #666;
}
.conentdiv-aspan {
  margin: 0 auto;
  display: block;
  background-image: url(https://nmstatic.tujia.com/static/images/page-index.6298e1b.png);
  background-position: -1.34rem 0;
  width: 0.45rem;
  height: 0.45rem;
  background-size: 1.79rem 1.19rem;
}

.conentdiv-aspan2 {
  background-image: url(https://nmstatic.tujia.com/static/images/page-index.6298e1b.png);
  background-position: -0.47rem -0.74rem;
}
.conent_text {
  text-align: center;
  margin-top: 0.1rem;
}
/* 红包 */
.redpackagewrap {
  padding: 0.1rem 0.2rem;
  background: #fff;
}
.redpackage-container {
  background: #f1f4f8;
  border-radius: 0.1rem;
  padding: 0.12rem 0.13rem;
  display: flex;
}
.redpackage-container .redpackage-container__desc {
  flex: 1;
  line-height: 0.16rem;
  color: #666;
  margin-left: 0.11rem;
}
.icon-redpackage {
  display: inline-block;
  background-image: url(https://nmstatic.tujia.com/static/images/page-index.6298e1b.png);
  background-position: -1.34rem -0.47rem;
  width: 0.41rem;
  height: 0.42rem;
  background-size: 1.79rem 1.19rem;
}
.redpackage-container .redpackage-container__desc h5 {
  font-size: 0.16rem;
  line-height: 0.22rem;
  color: #333;
  letter-spacing: 0;
  margin-bottom: 0.04rem;
}
.redpackage-container .redpackage-btn {
  border: 0;
  width: 0.55rem;
  height: 0.22rem;
  line-height: 0.22rem;
  text-align: center;
  background: #f66;
  border-radius: 0.22rem;
  color: #fff;
  margin-top: 0.1rem;
  cursor: pointer;
}

/* APP内打开 */
.appdown_btn {
  width: 1.3rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  position: fixed;
  left: 50%;
  margin-left: -0.65rem;
  bottom: 0.68rem;
  z-index: 10;
  background-image: linear-gradient(-225deg, #fcaf3f, #fa8c1d);
  box-shadow: 0 0.2rem 0.22rem -0.13rem rgba(229, 100, 0, 0.2);
  border-radius: 0.4rem;
  font-size: 0.14rem;
  font-family: PingFangSC-Light;
  color: #fff;
}
/* 浮动banner */
.tj-layer--download {
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  line-height: normal;
  z-index: 50;
}
.tj-layer--download img {
  width: 100%;
  background: linear-gradient(-269deg, rgba(124, 100, 93, 0), #483a36);
}
.tj-layer--download .tj-layer--download__icon--close {
  position: absolute;
  right: 5.3vw;
  top: 5.3vw;
  display: inline-block;
  background-image: url(https://nmstatic.tujia.com/static/images/page-index.6298e1b.png);
  background-position: -1.34rem -0.91rem;
  width: 0.16rem;
  height: 0.16rem;
  background-size: 1.79rem 1.19rem;
}
.tj-layer--download .tj-layer--download__container {
  position: absolute;
  left: 8vw;
  top: 11.7vw;
}
.tj-layer--download .tj-layer--download__container .tj-layer--download__slogan {
  font-family: PingFangSC-Medium;
  font-size: 0.24rem;
  color: #fff;
  text-shadow: 0 2rem 0.5rem rgba(0, 0, 0, 0.5);
  margin-bottom: 2.1vw;
  height: 9vw;
  line-height: 9vw;
}
.tj-layer--download .tj-layer--download__container .tj-layer--download__desc {
  font-family: PingFangSC-Regular;
  font-size: 0.16rem;
  color: #fff;
  text-shadow: 0 2rem 0.5rem rgba(0, 0, 0, 0.5);
  margin-bottom: 5.3vw;
  height: 6vw;
  line-height: 6vw;
}
.tj-layer--download
  .tj-layer--download__container
  .tj-layer--download__desc
  > span {
  font-family: Arial-Black;
  font-size: 0.24rem;
  font-weight: 800;
  color: #ffb900;
  text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  position: relative;
  top: 0.02rem;
  margin: 0 0.02rem;
}
.tj-layer--download .tj-layer--download__container .tj-layer--download__btn {
  width: 29.3vw;
  height: 9.3vw;
  font-size: 0.14rem;
  text-align: center;
  line-height: 9.3vw;
  color: #fff;
  background-image: linear-gradient(-225deg, #fcaf3f, #fa8c1d);
  box-shadow: 0 0.2rem 0.22rem -0.13rem rgba(229, 100, 0, 0.2);
  border-radius: 0.2rem;
  font-family: PingFangSC-Light;
  letter-spacing: 0;
}
.tj-layer--download
  .tj-layer--download__container
  .tj-layer--download__btn
  > span {
  display: inline-block;
  line-height: 0.14rem;
}
/* 浮动top banner */

</style>
