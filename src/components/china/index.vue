<template>
   <div class="city_body" ref="scroll">
        <!--热门城市-->
        <div>
            <div class="hot_city">
                <div class="hot_title">热门城市</div>
                <div class="hot_city_list">
                    <v-touch class="hot_city_name"  v-for="(item,index) in cityHot"
                    tag="div" @tap="handleTo(item)" :key="index">{{item.cityName}}</v-touch>
                </div>
            </div>
            <!--城市列表-->
            <div class="city_list" ref="list">
                <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
                    <div class="city_title_letter">{{item.index}}</div>
                    <div class="city_list_name">
                        <v-touch class="city_list_name_item" 
                        v-for="(child,ids) in item.list" 
                        :key="ids" tag="div" @tap="handleTo(child.cityName)">{{child.cityName}}</v-touch>
                    </div>
                </div>
            </div>
        </div>
        <!--城市列表下标-->
        <div class="city_list_index">
            <v-touch class="index_item" v-for="(item,index) in cityList" 
            :key="index"
            @tap="handleIndexTo(index)"
            >{{item.index}}</v-touch>
        </div>
    </div>
</template>

<script>
import { mapActions,mapMutations, mapState } from "vuex";
export default {
    name:"CityList",
    created() {
        if (!sessionStorage.getItem("cityHot") ||!sessionStorage.getItem("cityList")) {
        this.handleGetCityAction();
        }
    },
    computed: {
        ...mapState({
        cityHot: state => state.city.cityHot,
        cityList: state => state.city.cityList
        })
  },
   methods:{
       ...mapActions({
           handleGetCityAction:"city/handleGetCityAction"
       }),
        // ...mapMutations({
        //     handleToggleCity:"city/handleToggleCity"
        //  }),
       handleIndexTo(index){
            let letterFirsts = this.$refs.list.querySelectorAll(".city_title_letter");
            this.$refs.scroll.scrollTop = letterFirsts[index].offsetTop;
       },
        handleTo(cityname){
            console.log(cityname)
            let citynm=cityname.cityName;
            let cityid=cityname.cityId
            this.$router.push({name:'seach',params:{id:cityid,name:citynm}});
      }
   }

}
</script>

<style>
    .city_body {
    background: #ebebeb;
    height:100%;
    overflow: auto;
    margin-top:0.72rem;
    position:relative;
}

/*热门城市*/
.hot_title,.city_title_letter{
    line-height: .3rem;
    padding-left: .13rem;
    font-size: .14rem;
}

.hot_city_list,.city_list_name {
    width: 96%;
    background: #f5f5f5;
    padding-bottom: 0.08rem;
    padding-right: 0.3rem;
    display: flex;
    flex-wrap: wrap;
}
.hot_city_name {
    margin-top: 0.15rem;
    margin-left: 0.13rem;
    width: 0.9rem;
    height: 0.33rem;
    background: #fff;
    text-align: center;
    line-height: 0.33rem;
    font-size: 0.14rem;
    border: 1px solid #e6e6e6;
}




.city_list>div{
    width: 100%;
}
.city_list_name_item{
    line-height: .45rem;
    margin-left: .13rem;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    font-size: .14rem;
}


/*城市列表下标*/
.city_list_index{
    position: fixed;
    right: 0;
    top: 1rem;
}
.city_list_index>div{
    padding: .05rem .025rem;
    font-size:.125rem;
}
</style>