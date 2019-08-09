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
      console.log(data)
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
</style>



