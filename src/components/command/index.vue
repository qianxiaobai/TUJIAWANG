<template>
    <div class="city_body">
       <div  class="m-search-mormal-item m-search-current">
           <h1 >当前</h1>
           <div  class="m-search-current-layout">
                <ul  class="cl">
                    <li>北京</li> 
                    <li class="u-current-location">我的位置</li>
                </ul>
           </div>
        </div>
        <div class="m-search-mormal-item m-search-history">
            <h1 >搜索历史<v-touch class="u-clear" tag="span" @tap="handlerClear(searchhistory)">清除</v-touch></h1>
            <div  class="m-search-history-layout">
                <ul >
                    <li  class="" v-for="(item,index) in searchhistory" :key="index">
                        <span  class="f-toe">{{item.cityName}}</span>
                    </li>
                </ul> 
                <div class="oval"></div>
            </div>
        </div>

        <div  class="m-search-mormal-item m-search-guess-like">
            <h1 >猜你喜欢</h1>
            <ul class="cl">
                <li class="">
                    <span class="f-toe">欢乐谷</span>
                </li>
                <li class="">
                    <span  class="f-toe">王府井</span>
                </li>
                <li class="">
                    <span  class="f-toe">恭王府</span>
                </li>
                <li  class="">
                    <span class="f-toe">西单</span>
                </li>
                <li  class="">
                    <span  class="f-toe">南锣鼓巷</span>
                </li>
                <li  class="">
                    <span class="f-toe">北京站</span>
                </li>
            </ul>
        </div>
        <div class="mask" v-show="pos">
           <div class="tj-dialog" style="z-index: 2006;">
               <div class="tj-dialog__header">提示</div>
               <div class="tj-dialog__content">
                   <div class="tj-dialog__message tj-dialog__message--has-title">确认清除全部历史记录？</div>
                </div>
                <div class="tj-hairline--top tj-dialog__footer tj-dialog__footer--buttons">
                    <button class="tj-button tj-button--default tj-button--normal tj-button--plain tj-dialog__cancel" style="">
                        <v-touch tag="span" @tap="hangdlerfalse()" class="tj-button__text" ref="span"> 取消</v-touch>
                    </button>
                    <button class="tj-button tj-button--default tj-button--normal tj-button--plain tj-dialog__confirm tj-hairline--left">
                        <v-touch tag="span" @tap="hangdlertrue(searchhistory)" class="tj-button__text"  ref="span">确定</v-touch>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
import {guass_api} from "api/index";
    export default {
        data(){
            return{
                pos:false
            }
        },
        async created(){
            let data = await guass_api();         
        },
        computed:{
            ...mapState({
               searchhistory:state=>state.city.searchhistory
        })
        },
        methods:{
            handlerClear(){
                this.pos=true;
            },  
           hangdlertrue(searchhistory){
                this.pos=false;
                searchhistory.splice(0)
                sessionStorage.removeItem("searchhistory")
            },
            hangdlerfalse(){
                 this.pos=false;
            }
        },
        
    }
  
</script>

<style lang="scss" scoped>
 .city_body {
    background: #fff;
    height:100%;
    overflow: auto;
    margin-top:0.72rem;
    position:relative;
}
.m-search-current{
    padding: 0.20rem 0.2rem 0;
}
.m-search-current h1 {
    color: #999;
    font-size: 12px;
}
.m-search-current-layout{
    width:100%;
}
.m-search-current-layout ul{
    width:100%;
    display:flex;
}
 .m-search-current-layout ul li {
    max-width: 1.30rem;
    margin-left: 0.08rem;
    margin-top: 0.08rem;
    height: 0.28rem;
    padding: 0.08rem 0.15rem;
    background: #f0f3f6;
    -webkit-border-radius: 4px;
    border-radius: 0.04rem;
    font-size: 12px;
    cursor: pointer;

}

.m-search-history{
    padding: 20px;
    margin-bottom: -20px;
    overflow: hidden;
}
.m-search-history h1{
    color: #999;
    font-size: 12px;
}
.m-search-history-layout ul {
    display:flex;
}
.u-clear{
    position: absolute;
    right: 20px;
    color: #333;
}
.m-search-history-layout ul li{
    max-width: 130px;
    margin-left: 8px;
    margin-top: 8px;
    height: 28px;
    padding: 8px 15px;
    background: #f0f3f6;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}

.m-search-mormal-item{
    padding: 20px;
}
.m-search-mormal-item h1 {
    color: #999;
    font-size: 12px;
}
.m-search-mormal-item ul{
    display:flex;
    flex-wrap: wrap
}

.m-search-mormal-item ul li{
    max-width: 130px;
    margin-left: 8px;
    margin-top: 8px;
    height: 28px;
    padding: 8px 15px;
    background: #f0f3f6;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}

.mask{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:-100px;
    background: rgba(0,0,0,.7);
    z-index:999;
    display: flex;
}
.mask .tj-dialog{
     width: 2.71rem;
     height:1.32rem;
    font-size: 16px;
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    background-color: #e9e9e9;
    z-index:1000;
}
.tj-dialog__header {
    padding: 18px 6% 0;
    text-align: center;
    min-height: 22px;
    line-height: 22px;
    color: #030303;
    font-weight: 500;
    letter-spacing: 1px;
}
.tj-dialog__message--has-title {
    text-align: center;
    line-height: 20px;
    margin: 0.04rem 6% 0.20rem;
    color: #030303;
    font-size: 14px;
    font-weight: 300;
}
.tj-hairline--top{
    width:100%;
    height:0.48rem;
    display: flex
}
.tj-hairline--top button{
    width:50%;
    height:100%;
    text-align: center;
    line-height: 100%;
    background-color: transparent;
    color: #0076ff;
    border: 0;
}
</style>