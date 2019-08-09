<template>
  <div>
    <div class="swiper-container">
      <!-- 轮播图 -->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(ietm,index) in list" :key="index">{{ietm}}</div>
      </div>
      <!-- 收藏 -->
      <div class="collect">
        <v-touch tag="span" class="iconfont icon-shangchuan"></v-touch>
        <v-touch tag="span" 
        class="iconfont icon-shoucang" 
        :class="inform?'':'collect-2'"
        @tap="handleclick"></v-touch>
      </div>
      <!-- 计数 -->
      <div class="jishu">{{mySwiper.realIndex+1}}/{{list.length}}</div>
    </div>
    <!-- 收藏通知 -->
    <div class="collect-1" v-show="inform">{{informtext}}</div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Lunbo",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
      mySwiper: {}, //使用swiper做轮播的计数
      inform:false, //收藏通知信息
      informtext:""
    };
  },
  mounted() {
    // 轮播
    this.$nextTick(() => {
      this.mySwiper = new Swiper(".swiper-container", {
        loop: true,
        speed: 1000,
        autoply: {
          disableOnInteraction: false
        }
      });
    });
  },
  methods: {
    handleclick(){
      console.log(this);
      if (!this.inform) {
        this.inform=true;
        this.informtext="收藏成功";
      }else{
          this.informtext="取消收藏";
          this.inform=true;
      }
      setTimeout(()=>{
        this.inform=false;
      },3000)
    }
  }
};
</script>
<style>
/* 客厅样式 */
.swiper-container {
  text-align: center;
  height: 2.25rem;
  position: relative;
  font-size: 20px;
  color: red;
  background: #ccc;
}
/*轮播图*/
.swiper-slide {
  line-height: 2.25rem;
  background: url("https://pic.tujia.com/upload/landlordunit/day_150522/thumb/201505220345472553_700_467.jpg");
}
/* 计数 */
.jishu {
  position: absolute;
  right: 0.1rem;
  bottom: 0.08rem;
  z-index: 11;
}
/* 收藏 */
.swiper-container > .collect {
  position: absolute;
  right: 7px;
  top: 8px;
  font-size: 25px;
  z-index: 10;
}
.swiper-container > .collect > span {
  font-size: 25px;
  width: 0.5rem;
  line-height: 0.5rem;
}

/* 收藏通知 */
.collect-1 {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 2.5rem;
  height: 0.7rem;
  text-align: center;
  line-height: 0.7rem;
  font-size: 18px;
  color: #fff;
  z-index: 11;
  background: rgba(0, 0, 0, 0.7);
  border-radius: .1rem;
}
.collect-2{
  color: red;
}
</style>
