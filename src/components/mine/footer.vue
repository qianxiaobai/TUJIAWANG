<template>
    <div>
<footer id="footer">
             <div id="footerInner">
                 <div class="tool">
                     <ul class="nav-user">        
                        <li id="Footer_ServicePhone" >
                            <a href="tel:4001881234">
                                <i class="iconfont">&#xe60e;</i>
                                <em>客服热线</em>
                                4001881234
                            </a>
                        </li>
                        <li id="Footer_InternationalServicePhone">
                            <a href="tel:+86-10-80697258">
                                <i class="iconfont">&#xe60e;</i>
                                <em>境外拨打</em>+86-10-80697258转2
                            </a>
                        </li>
                    </ul>
                    <ul class="nav-web">
                        <li v-for="(item,index) in data2" :key="index"><a href="">{{item}}</a></li>
                    </ul>
                 </div>
                 <p class="copyright">©2019 途家网 <span>津ICP备17006480号</span></p>
             </div>
         </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
data2:['返回首页','退出登录','刷新页面','我的收藏',
                '关于途家','网站地图','下载App','电脑版']
            }
        }
          
    }
</script>

<style lang="scss" scoped>
#footer {
    margin-top: 20px;
    color: #999;
}
#footer .nav-user{
    display: flex;
    padding:0 0.10rem;
    justify-content: space-around;
    text-align: center
}
#footer .nav-user a {
    padding-left: 0.37rem;
    display: inline-block;
    line-height: 0.16rem;
    text-align: left;
    color: rgb(197, 178, 178);
    position: relative;
    white-space: nowrap;
}
#footer .nav-user a i {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.32rem;
    line-height: 0.34rem;
    color: #f60;
}
#footer .nav-user em {
    display: block;
}
.nav-web{
    width:100%;
    display: flex;
    padding: 0 10px;
    margin-top: 12px;
    text-align: center;
    flex-wrap: wrap;
}
.nav-web li{
    width:25%;
}
.nav-web li a{
     color:#333;
}
#footer .copyright {
    margin-top: 20px;
    padding: 10px 10px 5px;
    line-height: 18px;
    font-size: 10px;
    color: #999;
    text-align: center;
    border-top: 1px solid #e9e9e9;
}
</style>