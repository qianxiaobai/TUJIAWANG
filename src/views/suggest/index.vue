<template>
    <div>
        <div class="head">
            <v-touch @tap="backHandler()" tag="div">
                <div class="icon">
                <a-icon type="left"/>途家
                </div>
            </v-touch>
            <div>我的途家</div>
            <HeadNav />
        </div>
        <div class="customer-feedback">
            <div class="tips">小贴士：如果您要取消订单，提前离店，账号异常等紧急问题，请联系24小时客服400-188-1234。</div>
            <div class="textarea"><textarea ref="textarea"  id="comment" maxlength="3900" placeholder="亲爱的途途，您在使用过程中遇到了什么问题？" v-model='magtext'></textarea></div>
            <div class="input">
                <input class="tel" ref="tel" id="phone" type="text" maxlength="50" placeholder="留下您的联系方式，方便我们后续联系您。" v-model="msg" data-oldvalue="">
            </div>
            <v-touch id="submitChange" tap="div" @tap="handlerSubmit()" :class="color?'btn-send1':'btn-send'" class="btn-send" data-time="1565342102843">提交反馈</v-touch>
        </div>
        <div class="tanC" v-show="ids" ref="tanc" >感谢您的反馈</div>
        <Footer/>

    </div>
</template>

<script>
import Footer from "components/mine/footer.vue";
import HeadNav from "components/home/headNav.vue";
import { setTimeout } from 'timers';
    export default {
        components:{
            HeadNav,
            Footer
        },
        data(){
            return{
                 ids:false,
                 msg:JSON.parse(localStorage.getItem('user')).username,
                 color:false,
                 magtext:''

            }
        },
        methods:{
            backHandler(){
            this.$router.back()
            },
            handlerSubmit(){
                this.ids=true;
               if(this.magtext==''){
                    this.$refs.tanc.innerText="途途,您还没有写意见反馈那！！"
                   setTimeout(() => {
                       this.ids=false;
                   }, 1000);
               }
                if(this.magtext!==''){
                  console.log(this.magtext)
                  this.$refs.tanc.innerText="感谢您的反馈，我们会及时跟进您的反馈信息"
                  this.$refs.textarea.setAttribute('disabled','disabled')
                  this.$refs.tel.setAttribute('disabled','disabled')
                  setTimeout(()=>{
                       this.ids=false;
                  },1000)
                  this.color=true
               }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

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

.customer-feedback .tips {
    font-size: 12px;
    line-height: 0.16rem;
    padding: 0.06rem 0.15rem;
    color: #f60;
    background: #f8eedc;
}
.customer-feedback .textarea {
    margin: .15rem;
}
.customer-feedback textarea {
    border: 1px solid #eee;
    background: #fff;
    font-size: 14px;
    line-height: .20rem;
    padding: 0.12rem 0.15rem;
    color: #333;
    width: 100%;
    height: 1.8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    resize: none;
    font-size: 400 14px/1.5 Arial,"Lucida Grande",Verdana,"Microsoft YaHei",hei;
     outline:medium;
}
.customer-feedback .input {
    margin: 15px;
}
.customer-feedback .tel {
    border: 1px solid #eee;
    background: #fff;
    font-size: 14px;
    line-height: 25px;
    padding: 10px 15px;
    color: #333;
    width: 100%;
    box-sizing: border-box;
     outline:medium;
}
.customer-feedback .btn-send {
    display: block;
    margin: 30px 44px 15px;
    font-size: 17px;
    line-height: 45px;
    color: #fff;
    text-align: center;
    background: #f60;
    border: 0;
}
.customer-feedback .btn-send1 {
    display: block;
    margin: 30px 44px 15px;
    font-size: 17px;
    line-height: 45px;
    color: #fff;
    text-align: center;
    background: #c1c1c1;
    border: 0;
}

.tanC{
    text-align: center;
    line-height: 0.5rem;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    width:3.5rem;
    height:0.5rem;
    background: rgba(0,0,0,0.7);
    color:#fff;
    border-radius:10px solidrgba(0,0,0,0.7);
}
</style>