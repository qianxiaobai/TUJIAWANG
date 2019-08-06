<template>
    <div  class="g-footer">
      <div  class="g-footer-content">
        <a  href="">关于途家民宿</a>
        <a  href="">客服热线</a>
        <a  href="">电脑版</a>
      </div>
      <div  class="support-plan">
        <a >企业营业执照</a>
        <a >隐私权政策</a>
        <a >途家民宿保障计划</a>
      </div>
      <p >©2019 途家网 津ICP备17006480号</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.g-footer {
    margin-top: .10rem;
    height: 1.00rem;
    padding: .14rem 0 .10rem;
    color: #fff;
    background: #333;
    text-align: center;
}
.g-footer .g-footer-content {
    display: flex;
}
.g-footer .g-footer-content a {
    display: block;
    position: relative;
    flex: 1;
    height: .35rem;
    line-height: .35rem;
    font-size: .15rem;
    color: #fff;
}
.g-footer .g-footer-content a:nth-child(2):before {
    content: "|";
    position: absolute;
    left: 0;
}
.g-footer .g-footer-content a:nth-child(2):after {
    content: "|";
    position: absolute;
    right: 0;
}
.g-footer .support-plan {
    display: flex;
}
.g-footer .support-plan a{
    color:#fff;
    font-size: .14rem
}
.g-footer .support-plan a {
    border-right:.01rem solid #fff;
    flex: 1;
}
.g-footer p {
    margin-top: .11rem;
}
</style>
