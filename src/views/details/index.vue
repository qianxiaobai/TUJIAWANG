<template>
  <div class="detail">
    <headerDown />
    <!-- 详情页头部 -->
    <div class="detail-log">
      <div>
        <span class="iconfont icon-fanhui"></span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAeCAYAAACc7RhZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg0ODFCNDI0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg0ODFCNDE0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjAyQ0JCNjRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjAyQ0JCNzRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqxLGD0AAAWKSURBVHjazFkJbBVVFJ1PRwsGtCAgKC1VgmhdIlVQcYUqIiVuFRut1GgVNO5GWTSiGLUGY9S4oxKj7IhgoFXUFNPEErGKawTZxGgCUhFFqVaknpucSW6ub7bvr+lNTv7Mm/fezLvvLufdn2m/zstG9gPOAy4HTgMGAH8CXwNvAwuAL72Ol2eBG9T9I8C0NBP4/K0Feqn2SRH9q4H7gCLz7ADgROIe4C32+yjlouQdJwGFCfoOMvdHAeMj+u8DtgCf8trL0AK2mgVlHINPAGYDQ1MsRl7yHHdld4L+ZwGvOpSba1lP612bVAG3Ao/S9ANpBxqBN4F1QA/gFKASONSM3wBcRs2HSRHdpof3/8h2YIgf06kr8DxwlWkXP79bNGjaFwFTgatp/v3ZPhhYzfYFIe+6xiy+AXgCaM3RgnsC04FjeX8IUBGlgN7ACuBk1bYNuBF4I2JcG/ACFypWcy0tSpQ5j377kGPcYHX9O3Ah8FuOd/1jYJOOIYECxE8LTOfHzeLfBSbQdJLIL8BEoJ6xoycV8SDQBKyKGPtTByxeZLO57+Kr9GHlJvERYBh3chrNuirlSyUmDGesKAEmxyxeyxXA3BwtfhxQF5YGw3bwXGA0sFi5xREpXyymvxE4nXMt9DqR+IzmVjJKCYtVe4vDjLRC9gLfmed/8PfnmMU3KLPfyV9R3KyQ/D9STFi1SSZbGTF/8F16vjWSBqMUkETazUsGdtBmdSPJqQHOcHzjX8AIoDnFnBmfO1xOJtfZpAtdp4qx5KAYej4TGBUzp8xRQSLU5JOgbHWwrz7MzWnkQGBKTJ8dzApRMpQfWBnBCoU0fUiLCGQkA/d6R/8RJHQXMC6JNEcFwX4h2SFKChKM+SJEAccDV3J3wgJtK8nWLKZSsZAyoFj1KTMKGM4sdqZjvr/9TmTuU5j2XCI7PYfYxbY84Hz6vlVkIJK6HzDZbh+5yUtC9KIUsJGnsjhpNkxxXEz/pNR2AznAPF4HMoBmXxNyYuyveMzD5tlKKmVtEh7QSuqYRtqyGKPlM2AZsJTXgeQDY7josdz9KM7vOeLXDOD+NERIixxwLuX1+8CdCcb041kikPE8i4fJ9ebILGnuVMaFSlOv0KlP5jzSkcIPNhszIyzNJJEJqtjxY8Ix23jiCsaNiem/mx8/jOlMDi0fsOJjF/8tiy6FPDGGHXcD2Z+uk5UCCsnhPWUBSUX3HR3TdyIXtga4CzjcRmxgOTnLIPr39og1NJn7qmwVUK6uhaJ+kkIB76nrc+jLUdWgopAj7O3AYczh9YzkwgZfAx4LmW+ZuZ/kcvkkMeBiUwjZm0IB9dw5CVrdqYS6BOOkuLqEWWCdCXDVtJaSmDkaSfACal7MsbPTWIAQm7PV/dKUFrSDfhzIJRF9v2KV6Wgu7l4u3mfkl3T4A32+JIESxUqeNm3TFQtMtIAKBhCRX7mj9nnYwSiQ+er6IlNX1CI+Xat2XBjck1x0HalxNzNmVUSJzWNlqkXdD2R8+ZcC7IfnqYJEIFIG28P8upOMbJHDXz1HnbCN173I3ryQE2iQAbaQ/d0C9DX9dnFnj+HBpzEms9Satsk61viqBKWPscVMQ2WOSfMV2dDyjdWuCpz5CUz2RXOwseYsGeUV4HXDJrs6CjlanmHMGML77iwBlmsFCJ0tNb5SExLwlhtqGhQxmx28PO1533VwmkP//z6E9VWbthZzL/9Y3Qy8o9rG0qXmB/8LHEd+nGcqLKvp+7mW2xxngrl0uc8ZbJdQAYGUkpF6qjxX6qgRSBX6Zcc7F/LoH4gQupKM+m9Qyt1PpawGZSsFDlMdRSK0OYKPrIiZdxNPg3scz/qyhtBHxyff+Ipo/A5y8N4pqHIupOE/jG2hiU8NWXyw4zagev8IMABgWTh29dDSzAAAAABJRU5ErkJggg=="
          alt="途家"
        />
      </div>
      <div>房屋详情</div>
      <div class="iconfont icon-xiangqing"></div>
    </div>
    <!-- 房屋样品图 -->
    <div class="swiper-slide">
      <div>
        <span class="iconfont icon-shangchuan"></span>
        <span class="iconfont icon-shoucang"></span>
      </div>
      <div>
        <span>1</span>/
        <samp>12</samp>
      </div>
    </div>
    <!-- 房间规格  -->
   <div class="g-content">
      <div class="title-info">
        <ul>
          <li>
            <h3 data-v-5e84eda4>loft100寸投影仪/太古里/IFS</h3>
          </li>
          <li>
            <span class="iconfont">舒适 &#xe7b7;</span>
            <span class="iconfont">实拍 &#xe7b7;</span>
            <span class="iconfont">智能门锁 &#xe7b7;</span>
          </li>
        </ul>
      </div>
      <div class="promotion-infos">
        <div>连住优惠</div>
        <div>满7天9.8折</div>
      </div>
      <div class="house-info">
        <ul>
          <li>
            <p class="iconfont icon-chuang"></p>
            <h3 data-v-5e84eda4>2室1厅 1卫0厨</h3>
            <p>Loft复试 80平米</p>
          </li>
          <li>
            <p class="iconfont icon-chuang"></p>
            <h3 data-v-5e84eda4>宜住6人 3床</h3>
            <p>大床(2*1.8米) 1张</p>
            <p>大床(2*1.8米) 1张</p>
            <p>大床(2*1.8米) 1张</p>
          </li>
        </ul>
      </div>
      <!-- 房主资料 -->
      <div class="land-and-comment">
        <img
          src="https://pic.tujia.com/upload/landlordstorelogo/day_181223/thumb/201812230026394195_150_150.jpg"
          alt
        />
        <div>
          <h4>【热晚THHHH】</h4>
          <p>个人必不 挠北</p>
        </div>
        <span class="iconfont icon-zuojian"></span>
      </div>
    </div>
   <!-- 房屋地址 -->
    <div class="g-site">
      <h3 data-v-5e84eda4>房主位置</h3>
      <img
        src="https://api.map.baidu.com/staticimage?width=670&height=200&center=104.09920038354797,30.664136228924416&zoom=16&markers=104.09920038354797,30.664136228924416&markerStyles=-1,https://staticfile.tujia.com/mobile/images/h5/housedetail/mapicon.png"
        alt
      />
    </div>
     <!-- 房屋小细节 -->
    <div class="local-detail">
      <div>
        <span class="iconfont icon-dizhi"></span>
        <span>蓝色港湾小区-西北门</span>
      </div>
      <div class="local-detail-traffic">
        <p>
          【热晚The one,肆号】自己DIY改造的可住6人，也非常宽敞的ins风原谅绿色系的loft（此房间是独立的开放式一整套房源！）整个房间宽敞明亮,充满治愈力的原谅绿，清新却又不失个性与时尚，是一个能让你充分放松的不二选择。让如果没有房间的话可以点击我的头像查看我的其他房源哟~
          Subway in center 位于市中心太古里附近,优越的地理位置。10分钟内可步行到春熙路/太古里/IFS/春熙坊唐宋美食一条街/四川锦城艺术宫(川剧院)/锦华馆/大慈寺等成都著名景点。
          1.非常接近春熙路购物商圈
          2 . 200米公交车站76路直达太古里
          3.距离地铁站市二医院(同时属于3号线和4号线),步行5分钟。
          4.地铁站同时经过3号线和4号线,坐一站在春熙路就可轻松换乘2号线
          5 . 两条成都有名的美食街,出门左转是祥和里美 食街 ,右转是非常有特色的香香巷美食街,除了步行去太古里,还可以步行两分钟去成都著名的339电视塔,那边吃的超多,还有国民老公王思聪爱去的space也在这里
          6.公寓附近都有便利的商店,ATM取款机、水果店以及药店
          7. 安全的整套房屋,24小时保安值勤,让您放心的入住
        </p>
      </div>
      <div class="u-show-all-btn">
        <span>收起</span>
        <span class="iconfont icon-shang"></span>
      </div>
    </div>
      <!-- 日期 -->
    <div class="g-date">
      <div>可租日期</div>
      <div class="tj-calendar-g">
        <div class="m-week">
          <span>日</span>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
        </div>
        <div class="g-months">
          <div class="u-month-text">2019年8月</div>
          <div class="tj-calendar-month"></div>
          <div class="unit-calendar-change">
            <button>修改日期</button>
          </div>
        </div>
      </div>
    </div>
     <!-- 交易规则 -->
    <div class="rule">
      <h1>
        <span class="fl-left">交易规则</span>
        <span class="fl-right">房主制定</span>
      </h1>
      <ul class="trade-flow">
        <span class="icon-dian1"></span>
        <li>预订成功</li>
        <li>
          <span class="iconfont icon-rightArrow"></span>
          <p>提前离店 收取剩余</p>
        </li>
        <li>
          <span>2019年8月6日</span>
          <span>离店当天</span>
        </li>
        <span class="icon-dian2"></span>
      </ul>
      <div class="trade-lists">
        <div class="flot-l">
          <span>需要确认：</span>
          <div>付款后需要等待房东确认是否接待，建议提前和房东沟通</div>
        </div>
        <div class="flot-l">
          <span>需要确认：</span>
          <div>付款后需要等待房东确认是否接待，建议提前和房东沟通</div>
        </div>
        <div class="flot-l">
          <span>需要确认：</span>
          <div>付款后需要等待房东确认是否接待，建议提前和房东沟通</div>
        </div>
        <div class="flot-l">
          <span>需要确认：</span>
          <div>
            <span>
              在线支付¥999.00
              <span class="iconfont icon-wen"></span>
            </span>
            <div>
              <span>通过信用认证，可享信用免押金</span>
              <a
                data-v-4b5ed7da
                href="https://m.tujia.com/pwa/app/xiaobaiBinding?isbcclient=true&amp;navBar=0"
              >立即认证&nbsp;&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
         <!-- 入住须知 -->
    <div class="check">
      <h1 class="f2-lf">入住须知</h1>
      <ul class="rules-lists">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="services-lists">
        <p>
          <span>卫生打扫：</span>
          <span>1客1扫</span>
        </p>
        <p>
          <span>卫生打扫：</span>
          <span>1客1扫</span>
        </p>
        <p>
          <span>卫生打扫：</span>
          <span>1客1扫</span>
        </p>
        <p>
          <span>卫生打扫：</span>
          <span>1客1扫</span>
        </p>
      </div>
    </div>
    <div class="unit-extendFee">
        <p>
          <span class="title-font">额外费用</span>
          <span class="little-font">额外费用不包含在总房费内，由房东线下收取并自行开票</span>
        </p>
        <ul class="checkin-tips">
          <li>
            <span>加人：</span>
            <p>标准入住2人，不可加人</p>
          </li>
          <li>
            <span>加人：</span>
            <p>标准入住2人，不可加人</p>
          </li>
          <li>
            <span>加人：</span>
            <p>标准入住2人，不可加人标准入住2人，不可加人标准入住2人，不可加人标准入住2人，不可加人标准入住2人，不可加人标准入住2人，不可加人标准入住2人，不可加人</p>
          </li>
        </ul>
      </div>
      <router-view/>
    </div>

 
</template>
<script>
import {details_api} from  "api/details";
import headerDown from "components/home/headerdown.vue";
export default {
  name: "Details",
  components:{
    headerDown
  },
  props:["id","name"],
  async created(){
     let data = await details_api(this.id);
     console.log(this.id,111);
  }
};
</script>
<style scoped>
.detail {
  width: 100%;
  margin: 0;
  padding: 0;
}
/* 详情页头部 */
.detail-log {
  color: #ff9645;
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
}
.detail-log > div:nth-child(1) {
  font-size: 14px;
  display: flex;
  padding-left: 0.2rem;
}
.detail-log > div:nth-child(1) > img {
  margin-left: 0.02rem;
  width: 0.32rem;
  height: 0.15rem;
}
.detail-log > div:nth-child(2) {
  font-size: 18px;
  color: black;
  width: 2.25rem;
  text-align: center;
  line-height: 0.445rem;
}
.icon-xiangqing {
  margin: 0 0.1rem 0;
  font-size: 0.24rem;
  line-height: 0.44rem;
}
/* 房屋样品图 */
.swiper-slide {
  width: 100%;
  height: 2.5rem;
  background: red;
  position: relative;
  color: rgb(255, 255, 255);
  overflow: hidden;
}
.swiper-slide > div:nth-child(1) {
  position: absolute;
  right: 7px;
  top: 8px;
  font-size: 25px;
}
.swiper-slide > div:nth-child(1) > span {
  font-size: 25px;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
}
.swiper-slide > div:nth-child(2) {
  position: absolute;
  right: 0.2rem;
  bottom: 0.15rem;
  font-size: 15px;
}
/* 房间规格 */
.g-content {
  width: 100%;
  padding: 0 0.2rem;
  overflow: hidden;
  font-size: 12px;
}
.title-info {
  padding: 28px 0;
  font-size: 12px;
  border-bottom: 1px #ccc solid;
}
.title-info > ul > li:nth-child(1) {
  padding-right: 45px;
}
.title-info > ul > li:nth-child(2) {
  height: 16px;
  margin-top: 20px;
}
.title-info > ul > li:nth-child(2) > span {
  margin-right: 8px;
  color: rgb(51, 51, 51);
  font-size: 12px;
}
.promotion-infos > div {
  float: left;
  margin: 17px 0;
}
.promotion-infos > div:nth-child(1) {
  color: #fd8238;
  height: 0.14rem;
  border: 1px #fd8238 solid;
  border-radius: 12px;
  line-height: 15px;
  margin-right: 8px;
}
.house-info {
  line-height: 0.16rem;
  overflow: hidden;
  padding: 0.3rem 0;
  color: #999;
  background: #f7f9fb;
  width: 100%;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.house-info > ul > li {
  float: left;
  width: 50%;
  text-align: center;
}
.house-info > ul > li:nth-child(2) {
  border-left: 0.01rem #999 solid;
}
.house-info > ul > li > h3 {
  font-size: 14px;
  margin: 0.05rem 0;
}
/* 房主资料 */
.land-and-comment {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.26rem 0 0.22rem;
}
.land-and-comment > img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 100%;
  margin-right: 0.15rem;
}
.land-and-comment > div {
  width: 100%;
}
.land-and-comment > div > h4 {
  font-size: 16px;
}
.land-and-comment > span {
  color: rgb(204, 204, 204);
  margin-bottom: 5px;
}
.land-and-comment > div > p {
  color: #999;
}
/* 房屋位置 */
.g-site {
  width: 100%;
  padding: 0 0.2rem;
  overflow: hidden;
  font-size: 12px;
}
.g-site > h3 {
  font-size: 17px;
  height: 0.56rem;
  line-height: 0.56rem;
  margin-top: 0.09rem;
}
.g-site > img {
  width: 3.35rem;
  height: 1.12rem;
}
/* 房屋小细节 */
.local-detail {
  padding: 0.2rem 0.2rem 0 0.2rem;
}
.local-detail > div:nth-child(1) > span:nth-child(1) {
  font-size: 18px;
  margin-right: 0.1rem;
  font-weight: 700;
}
.local-detail > div:nth-child(1) > span:nth-child(2) {
  font-size: 14px;
  font-weight: 700;
}
.local-detail-traffic {
  padding-left: 28px;
  margin-top: 10px;
}
.local-detail-traffic > p {
  width: 100%;
  line-height: 18px;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  color: #666;
  font-size: 14px;
}
.u-show-all-btn {
  line-height: 72px;
  text-align: center;
  color: #fd8238;
  transition: all 0.3s ease;
}
.u-show-all-btn > span {
  font-size: 14px;
}
.u-show-all-btn > .icon-shang {
  font-size: 19px;
  padding: 0.1rem 0 0 0.05rem;
}
/* 可租日期 */
.g-date {
  width: 100%;
}
.g-date > div:nth-child(1) {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 9px;
  line-height: 56px;
  font-size: 17px;
}
.m-week {
  display: flex;
  line-height: 0.32rem;
  padding: 0 0.12rem;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;
  font-size: 12px;
  justify-content: space-between;
}
.m-week > span {
  display: block;
  width: 0.5rem;
  text-align: center;
}
.u-month-text {
  line-height: 0.54rem;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}
.tj-calendar-month {
  width: 100%;
  height: 2.5rem;
  background: red;
}
.unit-calendar-change {
  height: 74px;
  text-align: center;
}
.unit-calendar-change > button {
  width: 0.96rem;
  height: 0.35rem;
  text-align: center;
  margin-top: 0.09rem;
  border: 1px solid #fd8238;
  border-radius: 4px;
  background: #fff;
  color: #fd8238;
}
/* 交易规则 */
.rule {
  margin: 0 0.2rem;
}
.rule > h1 {
  margin: 9px 0 0 0;
  height: 0.56rem;
  color: #333;
}
.rule > h1 > span {
  line-height: 56px;
}
.rule > h1 > span:nth-child(1) {
  float: left;
  font-weight: 800;
  font-size: 17px;
}
.rule > h1 > span:nth-child(2) {
  font-size: 12px;
  color: #999;
  font-family: PingFangSC-Light;
  font-weight: 400;
  float: right;
}
.trade-flow {
  font-size: 12px;
  color: #666;
  border-left: 1px dotted #3f4954;
  padding-left: 10px;
  position: relative;
}
.trade-flow > li:nth-child(2) {
  position: absolute;
  top: -5px;
}
.trade-flow > li:nth-child(3) {
  display: flex;
  padding-top: 0.3rem;
}
.trade-flow > li:nth-child(3) > p {
  height: 0.25rem;
  line-height: 0.25rem;
  padding: 0 16px;
  color: #fff;
  background: #3f4954;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  margin-left: -0.06rem;
}
.icon-dian1,
.icon-dian2 {
  display: block;
  content: "";
  background: #f7f9fb;
  border: 4px solid #3f4954;
  border-radius: 50%;
  position: absolute;
  left: -4.5px;
}
.icon-dian1 {
  top: 0;
}
.icon-dian2 {
  bottom: 0;
}
.trade-lists {
  padding: 13px 0 24px;
  position: relative;
}
.flot-l {
  line-height: 0.28rem;
  font-size: 14px;
  overflow: hidden;
  width: 101%;
  margin-left: -1px;
}
.flot-l > span {
  display: block;
  float: left;
  width: 0.7rem;
}
.flot-l > div {
  float: left;
  width: 2.65rem;
}
.icon-wen {
  font-size: 13px;
  margin-left: 0.02rem;
}
    /* 入住须知 */
.check {
  margin: 0 0.2rem;
}
.f2-lf {
  margin: 0.09rem 0 0 0;
  line-height: 56px;
  font-size: 17px;
  font-weight: 900;
}
.rules-lists {
  overflow: hidden;
}
.rules-lists > li {
  width: 33.333%;
  height: 23px;
  margin-bottom: 9px;
  float: left;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
.services-lists {
  padding: 13px 0 24px;
}
.services-lists p {
  line-height: 28px;
  font-size: 14px;
  letter-spacing: 0;
}
.unit-extendFee {
  background-color: #fff9eb;
  padding: 27px 20px 0 ;
}
.unit-extendFee > p:nth-child(1) {
  margin-bottom: 0.2rem;
  line-height: 20px;
}
.title-font {
  margin-right: 3px;
  font-size: 17px;
}

.little-font {
  color: #666;
  font-size: 10px;
  font-weight: 400;
  width: 2.6rem;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 17px;
  position: relative;
  top: .03rem;
}
.checkin-tips{
  padding-bottom: 30px 0 20px 0;
}
.checkin-tips>li>span{
  width: .42rem;
}
.checkin-tips>li>p{
width:2.93rem;
}
.checkin-tips>li{
    overflow: hidden;
    margin-bottom: 9px;
    line-height: 1.6;
    display: flex;
}
</style>

