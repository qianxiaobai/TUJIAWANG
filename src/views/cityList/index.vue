<template>
    <div class="city">
        <div class="search-box" >
            <div class="m-search-box">
                <input type="search" name="" placeholder="目的地/景点/关键词">
            </div> 
            <v-touch @tap="backHandler()">
            <p  class="u-cancel">取消</p>
            </v-touch>
        </div>
        <div class="g-search-normal">
            <div class="m-bar f-border-bottom-line-gray">
                  <router-link 
                    to="/cityList/command"
                    class="movie_menu_city" 
                    tag="div">
                    <span>推荐</span>
                </router-link>
                 <router-link 
                    to="/cityList/china"
                    class="movie_menu_city" 
                    tag="div">
                    <span>国内城市</span>
                </router-link>
                 <router-link 
                    to="/cityList/foreign"
                    class="movie_menu_city" 
                    tag="div">
                    <span>海外港台</span>
                </router-link>
            </div>
        </div>
          <router-view></router-view>
    </div>
</template>

<script>
    export default {
methods:{
    backHandler(){
        this.$router.push('/')
    }
}
    }  
</script>

<style lang="scss" scoped>
.city{
    width:100%;
    height:100%;
    overflow:hidden
}
    .search-box {
        width:100%;
        display:flex;
        padding:0.08rem 0.2rem;
        position: relative;
        position: fixed;
        top:0;
        left:0;
    }
    .search-box .m-search-box {
    position: relative;
    height: 0.28rem;
    width:100%;
    margin-right: 0.37rem;
    line-height: 0.28rem;
    font-size: 0.12px;
    color: #333;
    background: #f0f3f6;
    -webkit-border-radius: 0.30rem;
    border-radius: 0.30rem;
    overflow: hidden;
    }
    .m-search-box input {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    width: 100%;
    margin-left: 30px;
    border: none;
    background-color: #f2f2f2;
    font-size: 12px;
    vertical-align: bottom;
    caret-color: #fd8238;
}
 .m-search-box:before {
    content: "";
    position: absolute;
    left: 0.10rem;
    top: 0.07rem;
    display: inline-block;
    background-image: url(https://nmstatic.tujia.com/static/images/page-search.1ca1b66.png);
    background-position: -0.16rem -0.45rem;
    width: 0.14rem;
    height: 0.14rem;
    background-size: 0.83rem 0.59rem;
}
.search-box .u-cancel {
    position: absolute;
    right: 0.12rem;
    top: 0;
    height: 0.44rem;
    width: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
}
.g-search-normal{
    width: 100%;
    height:0.28rem;
    font-size: 16px;
    position: fixed;
    top:0.44rem;
    left:0;

}
.g-search-normal .m-bar{
    height:100%;
    width: 100%;
    padding:0 8%;
    display: flex;
    justify-content: space-around;
    text-align: center;
     border-bottom:0.5px solid #ccc
}
.g-search-normal .m-bar .movie_menu_city{
    width:33%;
    height:100%
}
.router-link-active{
    color: #fd8238;
    border-bottom:1px solid #fd8238;
}
.cityList{
    padding-top:0.72rem;
    height: 100%;
}
</style>