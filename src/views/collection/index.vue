<template>
  <div>
    <div class="head">
      <v-touch @tap="backHandler()" tag="div">
        <div class="icon">
          <a-icon type="left" />途家
        </div>
      </v-touch>
      <div>我的收藏</div>
      <Floatheader />
    </div>
    <div class="page-favorites" id="favoritelist">
      <a v-for="(item,index) in collectionlist" :key="index">
        <div class="pic">
          <img :src="item.defaultPicUrl" alt="item.unitName" />
          <span class="btn-collect collected" @click="delectHandler(index)">
            <i
              class="icon-collect"
              @click="clickHandler(index)"
              :class="item.adverUnit?'favoritestyle':''"
            ></i>
          </span>
          <div class="tj-toast tj-toast--text tj-toast--middle" v-show="collection">
            <div class="text">{{collectiontext}}</div>
          </div>
          <!-- <div class="m-favorite">
            <i class="icon-unit-unfavorate"></i>
          </div>-->
        </div>
        <div class="text">
          <div class="price">
            <div>￥{{item.finalPrice}}</div>
          </div>
          <h3>[{{item.cityName}}}] {{item.unitName}}</h3>
          <p>
            <span>{{item.commentOverallScore}}分</span>
            <span>{{item.commentTotalCount}}点评</span>
          </p>
        </div>
      </a>
    </div>

    <Footer />
  </div>
</template>

<script>
import { getData } from "api/home.js";
import { mapState, mapMutations, mapActions } from "vuex";
import Floatheader from "components/home/headNav";
import Footer from "components/mine/footer.vue";
export default {
  components: {
    Floatheader,
    Footer
  },
  computed: {
    ...mapState({
      collectionlist: state => state.homestore.collectionlist,
      homelist: state => state.homestore.homelist
    })
  },

  data() {
    return {
      collection: false,
      collectiontext: ""
    };
  },

  //   created() {
  //     // getData().then(data => {
  //     //   //   console.log(data.data.units);
  //     //   this.mainlist = data.data.units;
  //     //   console.log(this.mainlist);
  //     // });
  //     this.getHomeData();
  //   },
  methods: {
    ...mapMutations({
      delectHandler: "homestore/delectHandler"
    }),
    backHandler() {
      this.$router.back();
    },
    clickHandler(index) {
      if (!this.homelist[index].adverUnit) {
        this.collectiontext = "取消收藏成功";
        this.collection = true;
      }
      setTimeout(() => {
        this.collection = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-favorites {
  padding: 0 0.1rem;
}
.page-favorites > a {
  display: block;
  margin: 0.1rem 0;
  position: relative;
  background-color: #fff;
  -webkit-border-radius: 0.3rem;
  border-radius: 0.03rem;
  overflow: hidden;
}
.page-favorites .pic {
  position: relative;
}
.page-favorites .pic img {
  width: 100%;
}
.btn-collect {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.17rem 0.17rem 0 0;
}
.page-favorites > a .text {
  padding: 0.1rem;
  position: relative;
  overflow: hidden;
}
.page-favorites .price {
  float: right;
  margin-left: 0.1rem;
  text-align: right;
  line-height: 1;
  font-size: 16px;
  color: #f60;
}
.page-favorites > a p {
  margin-top: 0.03rem;
  font-size: 12px;
  color: #999;
}
.icon-collect {
  display: inline-block;
  background-image: url(https://nmstatic.tujia.com/static/images/page-unit-list.6ce19dc.png);
  width: 0.3rem;
  background-position: -0.32rem -0.34rem;
  height: 0.3rem;
  background-size: 1.37rem 1.28rem;
  z-index: 500;
}
.favoritestyle {
  background-image: url(https://nmstatic.tujia.com/static/images/page-unit-list.6ce19dc.png);
  background-position: 0 -0.34rem;
}
</style>