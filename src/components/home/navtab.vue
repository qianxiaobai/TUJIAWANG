<template>
  <div>
      <div class="nav">
        <div class="logo"></div>
          <HeadNav/>
      </div>
  </div>
</template>

<script>
// import TabBar from "./tabbar.vue"
import HeadNav from "components/home/headNav.vue";
export default {
  components: {
    HeadNav
  },
  name: "home"
};
</script>
<style>
.nav {
  width: 100%;
    height: 0.44rem;
    font-size: 0.17rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 0.10rem;
}
.logo {
  background: url(https://nmstatic.tujia.com/static/images/page-index.6298e1b.png);
  width: 0.85rem;
  height: 0.25rem;
  background-size: 1.79rem 1.17rem;
  margin: 0 auto;
}
/* 遮罩层 */

.maskwrap {
  width: 100%;
  height: 6.67rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}


.error {
  position: absolute;
  top: 0.3rem;
  right: 0.2rem;
}
.navbtn {
  display: inline-block;
  position: absolute;
  color: #f60;
  top: 0.1rem;
  right: 0.15rem;
  font-size: 0.2rem;
}
</style>



