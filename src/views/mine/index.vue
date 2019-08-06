<template>
    <div class="mine">
            <!-- /*header*/ -->
        <div class="head">
             <div class="icon"><a-icon type="left"/>途家</div>
             <div>我的途家</div>
             <Floatheader/>
        </div>
         <!-- /*middle*/ -->
         <div class="middle">
             <header>
                 <div class="user-info">
                     <div class="user-pic person_info">
                        <img src="https://staticfile.tujia.com/mobile/images/h5/person_88.png">
                     </div>
                     <div class="user-name person_info">
                        <p class="row01">
                           电话号码
                        </p>
                        <p class="row02"></p>
                    </div>
                    <a href="" class="user-level level-gold"><i style="background-image:url('https://staticfile.tujia.com/Mobile/Images/h5/myMenu/icon_Ordinarary.png');"></i>普通会员</a>
                    <a href="" class="user-bind">
                            <i>通过信用认证，可享信用免押金</i>
                        </a>
                </div>
             </header>
             <div class="list-wrap">
                 <ul>
                      <router-link  class="item1 item-menu1" v-for="(item,index) in data" :to="item.link" :key="index" tag="li">
                           <a href="#">
                              <p class="iconfont"  v-html="item.img"></p>
                              <p class="item-name">{{item.info}}</p>
                              <p class="item-txt">{{item.msg}}</p>
                         </a>
                      </router-link>
                 </ul>
             </div>
             <div class="banner">
                    <a href="#">
                        <img src="https://staticfile.tujia.com/mobile/images/h5/personcenter/midbanner_customer.jpg">
                    </a>
              </div>
              <div class="list-wrap">
                  <ul>
                      <li class="item1 item-menu1" v-for="(item,index) in data1" :key="index">
                         <a href="#">
                             <p class="iconfont"  v-html="item.img"></p>
                              <p class="item-name">{{item.info}}</p>
                              <p class="item-txt">{{item.msg}}</p>
                         </a>
                     </li>
                  </ul>
              </div>
             <router-view></router-view>
         </div>
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
import Floatheader from "components/home/headNav.vue"
    export default {
        components:{
            Floatheader
        },
        data() {
            return {
                
                data:[
                    {
                    img:'&#xe60d;',
                    info:"订单",
                    msg:"查看全部订单",
                    link:"/order"
                },{
                   img:"&#xe654;",
                   info:"积分",
                    msg:"0积分" ,
                     link:"/credit" 
                },{
                  img:"&#xe625;",
                   info:"红包",
                    msg:"0个" ,
                     link:"/redpack"  
                },{
                    img:"&#xe60c;",
                   info:"点评",
                    msg:"我的服务您还满意吗" ,
                     link:"/comment" 
                },{
                    img:"&#xe646;",
                   info:"余额",
                    msg:"￥0"   ,
                     link:"/accbalance"
                },{
                 img:"&#xe60e;",
                   info:"遨游卡",
                    msg:"￥0" ,
                    link:"/car"

                }],
                data1:[{
                    img:"&#xe72e;",
                    info:"我要出租",
                    msg:"出租房源挣钱"
                },
                {
                    img:"&#xe72e;",
                    info:"开具发票",
                    msg:"历史发票"
                },
                {
                    img:"&#xe72e;",
                    info:"收藏",
                    msg:"你的爱都在这里"
                },
                {
                    img:"&#xe72e;",
                    info:"客服",
                    msg:"24小时服务"
                }],
                data2:['返回首页','退出登录','刷新页面','我的收藏',
                '关于途家','网站地图','下载App','电脑版']
            }
        },
    }
</script>

<style lang="scss">
p{
    margin-bottom: 0
}
.mine{
    width:100%;
    height:100%;
    overflow:auto
}
.head{
    width: 100%;
    height: 0.44rem;
    font-size: 0.17rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 0.10rem;
}
.icon{
    color: #f90;
}



// middle

//middle one
.middle{
    padding-bottom: 0.80rem;
}
.middle header{
    background: url(../../assets/img/head_bg.jpg) no-repeat center top #eee;
    height: 1.80rem;
    background-size: 100% auto;
    margin-bottom: 0.76rem;
    position:relative;
    box-sizing: content-box
}
.user-info{
    position: relative;
    top: 0.90rem;
    margin: 0 auto;
    padding: 0.40rem 0 0.20rem 0;
    background: #fff url(../../assets/img/head_line.png) no-repeat bottom center;
    background-size: 100% auto;
    width: 79%;
    min-height: 0.80rem;
    border-radius: 0.02rem;
    box-shadow: 0 0 18px 0.5px rgba(63, 73, 84, 0.15);
    text-align: center;
}
.user-pic {
    position: absolute;
    left: 50%;
    top: -0.22rem;
    margin-left: -0.32rem;
    width: 0.60rem;
    height: 0.60rem;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #fff;
    box-shadow: 0 0 0.05rem 0.01rem rgba(0, 0, 0, 0.2);
}
.user-pic img{
    display: inline-block;
    width: 0.60rem;
    height: 0.60rem;
}
.user-info .user-name {
    margin: 0.05rem 0;
    font-size: 0.10rem;
    color: #333;
    text-align: center;
    font-size: 0.18rem;
    font-weight: 500;
}
.user-info .user-name p{
    margin-bottom:0
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
.user-info .user-bind i{
    font-style: normal;
}
//middle two
.list-wrap {
    margin: 0 0.30rem 0 .30rem;
}
.list-wrap ul{
  width:100%;
  display: flex;
  flex-wrap: wrap
}
 .list-wrap li {
    width:30%;
    text-align: center;
    margin-top: 0.20rem;
    box-sizing: border-box;
}
 .list-wrap li a{
     display: inline-block
 }
  .list-wrap li i{
    display: inline-block;
    width: 0.24rem;
    height:0.24rem; 
  }
.list-wrap .item-name {
    margin-top: 0.03rem;
    font-size: 0.14rem;
    color: #333;
}
.list-wrap .item-txt {
    font-size: 0.10rem;
    color: #999;
    margin-bottom: 0;
}
.list-wrap img{
    height:.7rem;
    color:#000
}
.iconfont{
    display: inline-block;
    font-size: 0.26rem;
    color:#000;
}
 .banner {
    margin-top: 20px;
    margin-bottom: 30px;
}
 .banner img {
    max-width: 100%;
}

//footer
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
    color: #333;
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
     color:#000;
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