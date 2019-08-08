<template>
  <div id="app">
    <div class="head">
      <div class="icon">
        <a-icon type="left" />途家
      </div>
      <div class="m-search-title f-toe">
        <span class="u-search-city">
          <i>北京</i>
        </span>
      </div>
      <HeadNav />
    </div>


<div class="g-filter-bar f-border-bottom-line-gray">
    <div class="g-filter-bar-content">
      <div class="m-item m-item-date m-item-arrow f-btn" style>08.07-08.08</div>
      <div class="m-item m-item-location f-btn" style="width: 122px;">
        <div class="m-item-arrow">
          <span class="f-toe" style="max-width: 122px;">位置</span>
        </div>
      </div>
      <div class="m-item m-item-sort m-item-arrow f-btn" style="width: 102px;">
        <span>推荐排序</span>
      </div>
      <div class="m-item m-item-filter m-item-arrow f-btn" style>
        筛选

      </div>
    </div>
</div>
















    <MainList />

    <!--  -->
  </div>
</template>
<script>
import HeadNav from "components/home/headNav.vue";
import { mapActions, mapState, mapMutations } from "vuex";
import MainList from "components/home/mainlist.vue";
export default {
  data() {
    return {
      cityname: "北京"
    };
  },
  created() {
    this.seachlistData();
  },
  //   computed: {
  //     ...mapState({
  //       seachlistData: state => state.homestore.seachlistData
  //     })
  //   },
  methods: {
    ...mapActions({
      seachlistData: "homestore/seachlistData"
    })
  },

  components: {
    HeadNav,
    MainList
  }
};
</script>

<style>
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



