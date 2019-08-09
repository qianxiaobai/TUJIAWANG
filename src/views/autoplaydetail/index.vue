<template>
  <div>
    <article class="article">
      <div class="detail-header">
        <p class="detail-header-p">远离浮躁的新中式民宿——&nbsp;南昌&nbsp;·&nbsp;己度</p>
        <div class="author">
          <div class="pic">
            <img
              src="https://pic.tujia.com/upload/customeravatar/day_170817/201708171304035167_m.jpg"
              alt
            />
          </div>
          <div class="name">
            <span>己度</span>
          </div>
        </div>
      </div>
      <div class="detail-article">
        <!-- 延迟加载图片 -->
        <p style="text-align: center;">
          <strong>2017年7月1日在途家上线了「己度」民宿</strong>
        </p>
        <p style="text-align: center;">作为民宿房东，实则是一名双子座的服装设计师</p>
        <p style="text-align: center;">
          我叫王波，因民宿而驻扎
          <a href="http://www.tujia.com/xianggang_gongyu/d-nachang/" target="_blank">南昌</a>
        </p>
        <div v-for="(item,index ) in mocklist" :key="index">
        <p data-align="center" style="text-align: center;">
          <img
            :src="item.img"
          />
        </p>
        <p>{{item.info}}</p>
        </div>
        <p style="text-align: center;">
          <strong>南昌 · 己度</strong>
          <br />
        </p>
        <p style="text-align: center;"></p>
        <p>
          <br />
        </p>
        <div class="statement">
          <span class="statement-title">免责声明</span>
          <p>上述作品由会员自行上传，我们不对其内容的准确性、真实性及合法性负责。任何单位或个人认为作品内容可能涉嫌侵犯其合法权益的，可按如下方式联系我们，我们将会依法尽快处理。联系电话：【010-57619000转法务部】同时提醒：作品版权归作者所有，未能允许不得转载。</p>
        </div>
      </div>
    </article>

    <div class="detail-list-house">
      <ul class="tab-list-hd">
        <li id="nearbyHouses" class="current">
          <v-touch @tap="leftHandler()" tag="div">
            <span :class="colorleft?'colorf60':''">周边房屋</span>
          </v-touch>
        </li>

        <li class id="connectedHouses">
          <v-touch @tap="rightHandler()" tag="div">
            <span :class="colorright?'colorf60':''">相关房屋</span>
          </v-touch>
        </li>
      </ul>

      <div id="showHouse" class="tab-hd" v-show="leftshow">周边房屋</div>
      <div class="bottom" v-show="leftshow">
        <ul class="bottom-list">
          <li class="bottom-item" v-for="(item,index) in list" :key="index">
            <a target="_blank">
              <img
                src="https://pic.tujia.com/upload/landlordunit/day_190501/thumb/201905010444245011_300_200.jpg"
              />
              <div class="text">
                <h4>{{item.houseName}}</h4>
                <p>
                  <span>{{item.enumHouseType}}</span>
                  <span>{{item.roomCountSummary}}</span>
                  <span>{{item.grossArea}}平</span>
                </p>
              </div>
              <div class="price">
                ¥
                <em>{{item.housePrice}}</em>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div id="showHouse" class="tab-hd" v-show="rightshow">相关房屋</div>
      <div class="bottom" v-show="rightshow">
        <ul class="bottom-list bottom-list-right">
          <li class="bottom-item" v-for="(item,index) in list" :key="index">
            <a target="_blank">
              <img
                src="https://pic.tujia.com/upload/landlordunit/day_180207/thumb/201802070601576537_300_200.jpg"
              />
              <div class="text">
                <h4>{{item.houseName}}</h4>
                <p>
                  <span>{{item.enumHouseType}}</span>
                  <span>{{item.roomCountSummary}}</span>
                  <span>{{item.grossArea}}平</span>
                </p>
              </div>
              <div class="price">
                ¥
                <em>{{item.housePrice}}</em>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { autoleft_api, autoright_api } from "api/home.js";
import axios from "axios";
export default {
  async created() {
    // 周边房屋
    let data1 = await autoleft_api();
    this.list = data1;
    this.leftlist = data1;
// 相关房屋
    let data2 = await autoright_api();
    this.rightlist = data2;
    console.log(this.rightlist);
//mock文章
    let mockdata = await axios.post("/autop");
    console.log(mockdata.data, 3333333);
    this.mocklist=mockdata.data.list
  },

  data() {
    return {
      mocklist: [],
      list: [],
      leftlist: [],
      rightlist: [],
      leftshow: true,
      rightshow: false,
      colorleft: true,
      colorright: false
    };
  },
  computed: {},
  methods: {
    leftHandler() {
      this.list = this.leftlist;
      this.rightshow = false;
      this.leftshow = true;
      // 字体颜色
      this.colorleft = true;
      this.colorright = false;
    },
    rightHandler() {
      this.list = this.rightlist;
      this.leftshow = false;
      this.rightshow = true;
      // 字体颜色
      this.colorleft = false;
      this.colorright = true;
    }
  }
};
</script>

<style scoped>
.detail-header-p {
  font-size: 30px;
  color: black;
}
.colorf60 {
  color: #f60;
}
.detail-header {
  padding: 17px 15px 20px;
  border-bottom: 1px solid #e9e9e9;
}

.imgul {
  font-size: 142%;
  color: black;
}
.detail-header .author {
  margin-top: 27px;
  display: flex;
  align-items: center;
}
.detail-header .pic {
  margin-right: 15px;
  width: 40px;
  height: 40px;
}
.detail-header .pic img {
  width: 100%;
  min-height: 100%;
  border-radius: 100%;
  overflow: hidden;
}
.detail-header .author .name {
  flex: 1;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail-article {
  font-size: 14px;
  line-height: 24px;
  color: #333;
  padding: 0 15px 20px;
  margin-top: 30px;
  border-bottom: 1px solid #e9e9e9;
}
.detail-article img {
  width: 100%;
  margin: 20px 0;
}
.detail-article .statement-title {
  display: block;
  margin: 20px 0 10px;
}
.detail-article .statement p {
  font-size: 12px;
  color: #999;
  line-height: 18px;
}
.tab-list-hd {
  margin: 30px 15px 5px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  display: flex;
  position: relative;
  text-align: center;
}
.tab-list-hd li {
  display: block;
  flex: 1;
  width: 0;
  position: relative;
}
.detail-list-house .tab-hd {
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  margin: 25px 0 0;
}
.bottom {
  height: auto;
  width: 100%;
  position: relative;
  overflow: auto;
}
.bottom-list {
  height: auto;
  width: 1375px;
  position: relative;
  padding-left: 30px;
}
.bottom-item {
  width: 325px;
  float: left;
  margin: 0 5px;
}
.bottom-item a {
  color: #aaa;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}
.bottom-item h4 {
  margin-top: 15px;
  font-size: 16px;
  line-height: 26px;
  color: #333;
}
.bottom-item .price {
  margin-top: 4px;
  font-size: 17px;
  color: #f60;
}
.bottom-list-right {
  width: 100%;
}
</style>