import Vue from 'vue'
import Router from 'vue-router'
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
    }

  ]

})

      // children: [{
      //     name: "order",
      //     path: "order",
      //     component: () => import("components/mine/order.vue"),
      //   },
      //   {
      //     name: "accbalance",
      //     path: "accbalance",
      //     component: () => import("components/mine/accbalance.vue"),
      //   },
      //   {
      //     name: "car",
      //     path: "car",
      //     component: () => import("components/mine/car.vue"),
      //   },
      //   {
      //     name: "comment",
      //     path: "comment",
      //     component: () => import("components/mine/comment.vue"),
      //   },
      //   {
      //     name: "credit",
      //     path: "credit",
      //     component: () => import("components/mine/credit.vue"),
      //   },
      //   {
      //     name: "redpack",
      //     path: "redpack",
      //     component: () => import("components/mine/redpack"),
      //   }
      // ]

            // ]
   // ]

   