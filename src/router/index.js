import Vue from 'vue'
import Router from 'vue-router'
import details from './details'
import Home from 'views/home/index.vue'
import Mine from "views/mine/index.vue"
import Collection from "./collection/index"
import Login from "./registerlogin/login.js"
import Register from "./registerlogin/register.js"
import suggest from "./suggest/index.js"
Vue.use(Router)

const router= new Router({
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
      meta:{
        auth:true
      }
    },
    //收藏
    Collection,
    //注册
   Register,
    //登录
    Login,
    //意见反馈
    suggest,
    //citylist
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

    //定位跳转列表
    {
      path:"/seach/:id/:name",
      name:"seach",
      component:()=>import("views/seachdetail"),
      props: true
    },
      details
  ]
})

router.beforeEach((to,from,next)=>{
    // console.log(to,from);
    if(to.path !="/login" && to.meta.auth){
        if(sessionStorage.getItem("num")){
            next();
        }else{   
            next("/login");
        }
    }else{
        next();
    }
   
})
export default router
