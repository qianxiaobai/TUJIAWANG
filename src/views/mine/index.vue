<template>
  <div class="mine">
    <headerDown />
    <!-- /*header*/ -->
    <div class="head">
      <v-touch @tap="backHandler()" tag="div">
        <div class="icon">
          <a-icon type="left" />途家
        </div>
      </v-touch>
      <div>我的途家</div>
      <HeadNav />
    </div>
    <!-- /*middle*/ -->
    <div class="middle">
      <header>
        <div class="user-info">
          <div class="user-pic person_info">
            <img src="https://staticfile.tujia.com/mobile/images/h5/person_88.png" />
          </div>
          <div class="user-name person_info">
            <p class="row01">{{username}}</p>
            <p class="row02"></p>
          </div>
          <a href class="user-level level-gold">
            <i
              style="background-image:url('https://staticfile.tujia.com/Mobile/Images/h5/myMenu/icon_Ordinarary.png');"
            ></i>普通会员
          </a>
          <a href class="user-bind">
            <i>通过信用认证，可享信用免押金</i>
          </a>
        </div>
      </header>
      <div class="list-wrap">
        <ul>
          <router-link
            class="item1 item-menu1"
            v-for="(item,index) in data"
            :to="item.link"
            :key="index"
            tag="li"
          >
            <a href="#">
              <p class="iconfont" v-html="item.img"></p>
              <p class="item-name">{{item.info}}</p>
              <p class="item-txt">{{item.msg}}</p>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="banner">
        <a href="#">
          <img
            src="https://staticfile.tujia.com/mobile/images/h5/personcenter/midbanner_customer.jpg"
          />
        </a>
      </div>
      <div class="list-wrap">
        <ul>
          <li class="item1 item-menu1" v-for="(item,index) in data1" :key="index">
            <a href="#">
              <p class="iconfont" v-html="item.img"></p>
              <p class="item-name">{{item.info}}</p>
              <p class="item-txt">{{item.msg}}</p>
            </a>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeadNav from "components/home/headNav.vue";
import Footer from "components/mine/footer.vue";
import headerDown from "components/home/headerdown.vue";

export default {
  components: {
    HeadNav,
    Footer,
    headerDown
  },
  created() {
    //用户名截取
    this.username = localStorage.getItem("user").substr(13, 11);
    console.log(localStorage.getItem("user").substr(13, 11));
  },
  methods: {
    backHandler() {
      this.$router.back();
    }
  },
  data() {
    return {
      username: "",
      data: [
        {
          img: "&#xe60d;",
          info: "订单",
          msg: "查看全部订单",
          link: "/order"
        },
        {
          img: "&#xe654;",
          info: "积分",
          msg: "0积分",
          link: "/credit"
        },
        {
          img: "&#xe625;",
          info: "红包",
          msg: "0个",
          link: "/redpack"
        },
        {
          img: "&#xe60c;",
          info: "点评",
          msg: "我的服务您还满意吗",
          link: "/comment"
        },
        {
          img: "&#xe646;",
          info: "余额",
          msg: "￥0",
          link: "/accbalance"
        },
        {
          img: "&#xe60e;",
          info: "遨游卡",
          msg: "￥0",
          link: "/car"
        }
      ],
      data1: [
        {
          img: "&#xe72e;",
          info: "我要出租",
          msg: "出租房源挣钱"
        },
        {
          img: "&#xe72e;",
          info: "开具发票",
          msg: "历史发票"
        },
        {
          img: "&#xe72e;",
          info: "收藏",
          msg: "你的爱都在这里"
        },
        {
          img: "&#xe72e;",
          info: "客服",
          msg: "24小时服务"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
p {
  margin-bottom: 0;
}
.mine {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.head {
  width: 100%;
  height: 0.44rem;
  font-size: 0.17rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
}
.icon {
  color: #f90;
}

// middle

//middle one
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
.user-info {
  position: relative;
  top: 0.9rem;
  margin: 0 auto;
  padding: 0.4rem 0 0.2rem 0;
  background: #fff url(../../assets/img/head_line.png) no-repeat bottom center;
  background-size: 100% auto;
  width: 79%;
  min-height: 0.8rem;
  border-radius: 0.02rem;
  box-shadow: 0 0 18px 0.5px rgba(63, 73, 84, 0.15);
  text-align: center;
}
.user-pic {
  position: absolute;
  left: 50%;
  top: -0.22rem;
  margin-left: -0.32rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0 0 0.05rem 0.01rem rgba(0, 0, 0, 0.2);
}
.user-pic img {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
}
.user-info .user-name {
  margin: 0.05rem 0;
  font-size: 0.1rem;
  color: #333;
  text-align: center;
  font-size: 0.18rem;
  font-weight: 500;
}
.user-info .user-name p {
  margin-bottom: 0;
}
.user-info .user-level {
  display: inline-block;
  margin-bottom: 0.15rem;
  padding: 0 0.08rem 0 0.05rem;
  height: 0.18rem;
  background: #3f4954;
  font-size: 12px;
  color: #fff;
  line-height: 0.17rem;
  border-radius: 0.09rem;
}
.user-info .user-bind {
  display: block;
  font-size: 0.12rem;
  color: #555;
  font-size: 0.14rem;
  color: #fd8238;
  line-height: 0.14rem;
  font-style: normal;
}
.user-info .user-bind i {
  font-style: normal;
}
//middle two
.list-wrap {
  margin: 0 0.3rem 0 0.3rem;
}
.list-wrap ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.list-wrap li {
  width: 30%;
  text-align: center;
  margin-top: 0.2rem;
  box-sizing: border-box;
}
.list-wrap li a {
  display: inline-block;
}
.list-wrap li i {
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
}
.list-wrap .item-name {
  margin-top: 0.03rem;
  font-size: 0.14rem;
  color: #333;
}
.list-wrap .item-txt {
  font-size: 0.1rem;
  color: #999;
  margin-bottom: 0;
}
.list-wrap img {
  height: 0.7rem;
  color: #000;
}
.iconfont {
  display: inline-block;
  font-size: 0.26rem;
  color: #000;
}
.banner {
  margin-top: 20px;
  margin-bottom: 30px;
}
.banner img {
  max-width: 100%;
}

//footer
</style>