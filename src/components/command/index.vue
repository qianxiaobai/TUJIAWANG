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
            <h1 >搜索历史<span class="u-clear">清除</span></h1>
            <div  class="m-search-history-layout">
                <ul >
                    <li  class="">
                        <span  class="f-toe">杭州</span>
                    </li>
                    <li class="">
                        <span class="f-toe">欢乐谷</span>
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
    </div>
</template>

<script>
import {guass_api} from "api/index";
    export default {
        async created(){
            let data = await guass_api();         
            console.log(data)
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
</style>