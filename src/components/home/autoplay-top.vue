<template>
  <div>
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <a href="#/autoplay">
          <img :src="item" />
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <div class="seach">
        <v-touch @tap="handler()" tag="div">
          <i class="iconfont seachicon">&#xe680;</i> 您想住哪儿？
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "App",
  data() {
    return {
      msg: "1910",
      banner: []
    };
  },
  created() {
    setTimeout(() => {
      let arr = [
        "https://nmstatic.tujia.com/static/images/index/home/banner_bg1.jpg",
        "https://nmstatic.tujia.com/static/images/index/home/banner_bg2.jpg",
        "https://nmstatic.tujia.com/static/images/index/home/banner_bg3.jpg"
      ];
      this.banner = arr;
    }, 1000);
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          effect: "cube",
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 100,
            shadowScale: 0.6
          },
          autoplay: {
            disableOnInteraction: false
          }
        });
      });
    }
  },

  methods: {
    handler() {
      this.$router.push("/cityList/command");
    }
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 2.8rem;
  position: relative;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
.seach {
  position: absolute;
  left: 0.3rem;
  right: 0.3rem;
  bottom: 0.52rem;
  height: 0.4rem;
  background: rgba(255, 255, 255);
  border: 0.02rem solid #fff;
  z-index: 3;
}
.swiper-container .seach > div {
  width: 100%;
  text-align: center;
  color: #555;
  /* font-size:.14rem; */
}
.seachicon {
  color: #f60;
  font-size: 0.23rem;
  vertical-align: middle;
}
</style>


