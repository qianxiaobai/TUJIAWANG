<template>
    <div class="autplaybot">
        <div class="h2wrap">
        <h2 >精选主题</h2>
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
        "https://pic.tujia.com/upload/mobileconfig/day_170317/201703171809488541.jpg",
      ];
      this.banner = arr;
    }, 1000);
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
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

<style>
.h2wrap{
    text-align: center;
    background: #fff;
    margin-top: .12rem;
    line-height: .65rem;
    color: #666;
}
</style>
