<template>
  <!-- 首页发现公寓 -->
  <div>
    <div class="mainTitle">
      <!-- 收藏警告框 -->
      <div class="tj-toast tj-toast--text tj-toast--middle" v-show="collection">
        <div class="text">{{collectiontext}}</div>
      </div>
      <h2>发现公寓</h2>
    </div>
    <ul>
      <li v-for="(item,index) in homelist" :key="index">
        <div class="g-unit-item-layout" title="item.unitName">
          <div class="m-img-info">
            <a>
              <img alt="item.unitName" class="u-img z-lazy-bg" :src="item.defaultPicUrl" />
            </a>
            <div class="m-favorite" @click="favoriteclickHandler(index,item.unitID)">
              <i
                class="icon-unit-unfavorate"
                @click="favoriteHandler(index,item.unitID)"
                :class="item.active?'':'favoritestyle'"
              ></i>
            </div>
            <div class="m-price-info">
              <span class="f-fwb">￥{{item.finalPrice}}</span>
            </div>
          </div>
          <div class="g-unit-info">
            <span class="u-logo">
              <div class="user-avatar-wrapper z-lazy-bg user-avatar">
                <img :src="item.smallPictureUrl" alt="用户头像" />
                <span class="icon-best-landlord" style="display: none;"></span>
              </div>
            </span>
            <div class="m-title">
              <span class="u-tit f-toe">{{item.unitName}}</span>
            </div>
            <p class="m-info f-toe">
              <span>{{item.unitSummary}}</span>
              <span></span>
            </p>
            <div class="m-tags">
              <p class="g-unit-tags-layout">
                <span class="u-tag">实拍</span>
                <span class="u-tag">验真</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getData } from "api/home.js";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      collection: false,
      collectiontext: ""
    };
  },

  created() {
    // getData().then(data => {
    //   //   console.log(data.data.units);
    //   this.mainlist = data.data.units;
    //   console.log(this.mainlist);
    // });
    this.getHomeData();
    
  },
  computed: {
    ...mapState({
      homelist: state => state.homestore.homelist,
      collectionlist: state => state.homestore.collectionlist,
    })
  },
  methods: {
    ...mapActions({
      getHomeData: "homestore/getHomeData",
    }),
    ...mapMutations({
          favoriteclickHandler:"homestore/favoriteclickHandler"
    }),

    favoriteHandler(index,val) {
      
      // console.log(this.mainlist[index].active)
      console.log(val)
      if (!this.homelist[index].active) {
        this.collectiontext = "取消收藏成功";
        this.collection = true;
      } else {
        this.collectiontext = "收藏成功";
        this.collection = true;
      }
      setTimeout(() => {
        this.collection = false;
      }, 3000);
    }
  }
};
</script>
<style>
.mainTitle {
  text-align: center;
  background: #fff;
  margin-top: 0.12rem;
  line-height: 0.65rem;
  color: #666;
}
/* 收藏 */
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
/*  */
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

/* .g-unit-item-layout .m-img-info .m-price-info .u-price .u-price-cn { */
/* font-size: 12rem; */
/* font-weight: 500; */
/* } */
/* .g-unit-item-layout .m-img-info .m-price-info .u-price strong { */
/* position: relative; */
/* font-size: 19rem; */
/* font-weight: 500; */
/* } */
</style>
