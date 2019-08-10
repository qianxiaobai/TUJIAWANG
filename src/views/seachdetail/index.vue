<template>
  <div id="app">
    <headerDown></headerDown>
    <div class="head">
      <v-touch @tap="backHandler()" tag="div">
        <div class="icon" >
          <a-icon type="left" />途家
        </div>
      </v-touch>
      <v-touch @tap="pushHandler()" tag="div">
          <div class="m-search-title f-toe">
            <span class="u-search-city">
              <i>{{name}}</i>
            </span>
          </div>
      </v-touch>
      <HeadNav />
    </div>

    <div class="g-filter-bar f-border-bottom-line-gray">
      
    </div>

    <!-- 列表 -->
    <div>
      <!-- 收藏警告框 -->
      <div class="tj-toast tj-toast--text tj-toast--middle" v-show="collection">
        <div class="text">{{collectiontext}}</div>
      </div>

      <ul >
        <li v-for="(item,index) in houselist" :key="index"  v-show="item.cityName.substr(0,2)===name?true:false">
          <div class="g-unit-item-layout" title="item.citeName">
            <div class="m-img-info">
              <a>
                <img
                  alt="item.unitName"
                  class="u-img z-lazy-bg"
                  src="https://pic.tujia.com/upload/qualifiedpics/day_190315/thumb/201903151745346039_700_467.jpg"
                />
              </a>

              <div class="m-price-info">
                <span class="f-fwb">￥{{item.price}}</span>
              </div>
            </div>
            <div class="g-unit-info">
              <span class="u-logo">
                <div class="user-avatar-wrapper z-lazy-bg user-avatar">
                  <img
                    src="https://pic.tujia.com/upload/qualifiedpics/day_190315/thumb/201903151745346039_700_467.jpg"
                    alt="用户头像"
                  />
                  <span class="icon-best-landlord" style="display: none;"></span>
                </div>
              </span>
              <div class="m-title">
                <span class="u-tit f-toe">{{item.title}}</span>
              </div>
              <p class="m-info f-toe">
                <span>{{item.info}}</span>
                <span></span>
              </p>
              <div class="m-tags">
                <p class="g-unit-tags-layout">
                  <span class="u-tag">{{item.spaninfo}}</span>
                  <span class="u-tag colorf60">{{item.cityName}}</span>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--  -->
  </div>
</template>
<script>
import headerDown from "components/home/headerdown.vue";
import HeadNav from "components/home/headNav.vue";
import { mapActions, mapState, mapMutations } from "vuex";
import MainList from "components/home/mainlist.vue";
import axios from "axios";

export default {
  props:["id","name"],
  data() {
    return {
      collection: false,
      collectiontext: "",
      cityname: "北京",
      houselist: [],
    };
  },
   
  created() {
    this.seachlistData();
    // mock数据
    axios.post("/asd").then(data => {
      this.houselist = data.data.list;
    });
  },
  computed: {
    ...mapState({
      homelist: state => state.homestore.homelist,
      seachlist: state => state.city.seachlist
    })
  },
  methods: {
    ...mapActions({
      seachlistData: "homestore/seachlistData",
    }),
backHandler(){
  this.$router.push("/")
},
 pushHandler(){
   this.$router.push("/cityList/china")
  },
},
  components: {
    HeadNav,
    MainList,
    headerDown
  }
};
</script>

<style>
 .g-unit-tags-layout .colorf60{
  color:#f60;
  font-size: 16px
}
ul{
  margin: 0;
}
.m-search-title {
  width: 2.5rem;
  height: 0.28rem;
  line-height: 0.28rem;
  margin: 0.08rem 0.25rem 0.08rem 0;
  -webkit-border-radius: 0.15rem;
  border-radius: 0.15rem;
  background-color: #f0f3f6;
  font-size: 0.12rem;
  padding: 0 0.12rem;
}
i {
  font-style: normal;
}
.g-filter-bar .g-filter-bar-content {
  width: 105%;
  height: 100%;
}
.g-filter-bar .m-item.m-item-date {
  padding-left: 20px;
}
.g-filter-bar .m-item {
  float: left;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
}
.g-filter-bar .m-item-arrow:after {
  content: "";
  margin-left: 5px;
  margin-bottom: -2px;
  display: inline-block;
  background-image: url(https://nmstatic.tujia.com/static/images/page-unit-list.6ce19dc.png);
  background-position: -92px -38px;
  width: 5px;
  height: 4px;
  background-size: 137px 128px;
}
.g-filter-bar .m-item.m-item-location {
  text-align: center;
}
.g-filter-bar .m-item.m-item-sort {
  text-align: left;
}
.g-filter-bar .m-item.m-item-filter {
  float: left;
  position: relative;
  padding-right: 20px;
}
.g-filter-bar {
  position: relative;
  height: 28px;
  overflow: hidden;
}
.g-unit-item-layout .m-img-info {
  position: relative;
  width: 100%;
  height: 2.5rem;
  min-height: 213.33;
}
.m-img-info img {
  width: 100%;
  height: 2.5rem;
}
.g-unit-item-layout .m-img-info .m-favorite {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 0.3rem;
  height: 0.3rem;
}
.icon-unit-unfavorate {
  display: inline-block;
  background-image: url(https://nmstatic.tujia.com/static/images/page-unit-list.6ce19dc.png);
  background-position: 0 -0.34rem;
  width: 0.3rem;
  height: 0.3rem;
  background-size: 1.37rem 1.28rem;
  z-index: 500;
}
.favoritestyle {
  background-image: url(https://nmstatic.tujia.com/static/images/page-unit-list.6ce19dc.png);
  background-position: -0.32rem -0.34rem;
}
.g-unit-item-layout .m-img-info .m-price-info {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.35rem;
  width: 0.63rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  line-height: 0.35rem;
}
.g-unit-item-layout .g-unit-info {
  position: relative;
  padding: 0.2rem;
  text-align: left;
}
.g-unit-item-layout .g-unit-info .u-logo {
  position: absolute;
  top: -0.3rem;
  right: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  background-color: #fff;
}
.g-unit-item-layout .g-unit-info .u-logo .user-avatar {
  margin: 0.02rem;
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 50%;
}
.g-unit-item-layout .g-unit-info .m-title {
  position: relative;
  margin-right: 0.45rem;
  line-height: 0.18rem;
  font-size: 0;
  font-weight: 600;
}
.g-unit-item-layout .g-unit-info .m-title .u-tit {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  font-size: 0.17rem;
}
.g-unit-item-layout .g-unit-info .m-info {
  margin-top: 0.1rem;
  color: #999;
  line-height: 0.16rem;
}
.g-unit-item-layout .g-unit-info .m-tags {
  margin-top: 0.05rem;
  height: 0.22rem;
  margin-top: 0.05rem;
  line-height: 0.22rem;
}
.g-unit-tags-layout {
  margin-top: -0.05rem;
  width: 100%;
  height: 100%;
}
.user-avatar-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.icon-best-landlord {
  position: absolute;
  height: 50%;
  width: 50%;
  z-index: 10;
  right: -0.4rem;
  bottom: -0.8rem;
  border-radius: 50%;
  background-image: url(https://nmstatic.tujia.com/static/images/best-landlord@2x.b19ddda.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.g-unit-item-layout .g-unit-info .u-logo {
  position: absolute;
  top: -0.3rem;
  right: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  background-color: #fff;
}
.f-fwb {
  font-family: PingFangSC-Medium, Helvetica Neue, sans-serif;
  font-weight: 600;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 0.1rem 0.1rem 0.1rem;
}

.g-unit-item-layout .m-img-info .m-price-info .u-price {
  width: 100%;
  height: 100%;
}
.g-unit-tags-layout .u-tag {
  color: rgb(51, 51, 51);
  padding: 0.02rem 0.04rem 0.01rem;
  background: rgb(255, 255, 255);
}
.middle {
  padding-bottom: 0.8rem;
}
.middle header {
  background: url(../../assets/img/head_bg.jpg) no-repeat center top #eee;
  height: 1.8rem;
  background-size: 100% auto;
  margin-bottom: 0.76rem;
  position: relative;
  box-sizing: content-box;
}
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
</style>



