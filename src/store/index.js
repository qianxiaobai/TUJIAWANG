import Vue from 'vue'
import Vuex from 'vuex'
import homestore from "./home/index.js"
import city from "./city/index.js";
import details from "./details/index.js";
Vue.use(Vuex)

  const state={
  }
  const mutations={
  }
  const actions={

  }

export default new Vuex.Store({
      state,
      actions,
      mutations,
      modules:{
        homestore,
        city,
        details
      }
})
