<template>
  <div id="app">
    <router-link to="/cityList" tag="div"></router-link>

    <router-view></router-view>
  </div>
</template>
<script>
// import {getMovie} from "api/movie.js";
import http from "utils/http.js"
import cityList from "views/cityList"
export default {
components:{
  cityList
}

}
</script>

<style>
</style>
