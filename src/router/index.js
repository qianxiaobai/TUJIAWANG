import Vue from 'vue'
import Router from 'vue-router'
import details from './details'
import Home from 'views/home/index.vue'
import Mine from "views/mine/index.vue"
import Collection from "./collection/index"
Vue.use(Router)

export default new Router({
  routes: [
       // home
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // mine
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    },
    Collection,
    {
      path:"/cityList",
      component:()=>import("views/cityList"),
      name:"cityList",
      meta:{
          tabBar:false,
          auth:false
      },
      children:[{
        path:"command",
        component:()=>import("components/command"),
      },{
        path:"china",
        component:()=>import("components/china"),
      },{
        path:"foreign",
        component:()=>import("components/foreign"),
      }]
    },
      details
  ]
})
