<template>
  <div id="app">
    <headerDown/>
    <router-link to="/cityList" tag="div"></router-link>
    <router-view></router-view>
  </div>
</template>
<script>
// import {getMovie} from "api/movie.js";
import http from "utils/http.js"
import cityList from "views/cityList"
import headerDown from "components/home/headerdown.vue"
export default {
components:{
  cityList,
  headerDown
}

}
</script>

<style>
</style>
