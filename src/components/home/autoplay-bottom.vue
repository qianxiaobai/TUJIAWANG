<template>
  <div class="autplaybot">
    <div class="h2wrap">
      <h2>精选主题</h2>
    </div>
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
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
        "https://pic.tujia.com/upload/mobileconfig/day_190802/201908021900265191.jpg"
      ];
      this.banner = arr;
    }, 1000);
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          effect: "flip",
          flipEffect: {
            slideShadows: true,
            limitRotation: true
          },
          autoplay: {
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  methods: {}
};
</script>

<style scoped>
.h2wrap {
  text-align: center;
  background: #fff;
  margin-top: 0.12rem;
  line-height: 0.65rem;
  color: #666;
}
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
