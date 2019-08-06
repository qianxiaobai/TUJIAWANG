import Vue from 'vue'
import Router from 'vue-router'
import details from './details'
import home from "./"
Vue.use(Router)

export default new Router({
  routes: [
      {
          path:"/",
          redirect:"/home"
      },
      {
        path:"/home",
        component:()=>import("views/home"),
        name:"home",
        props: true
      },
      details
  ]
})