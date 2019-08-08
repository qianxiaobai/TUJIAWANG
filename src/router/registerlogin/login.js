export default {
    path:"/login",
    component:()=>import("views/registerlogin/login.vue"),
    name:"login",
    meta:{
        tabBar:false,
        auth:false
    },
}