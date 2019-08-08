export default {
    path:"/register",
    component:()=>import("views/registerlogin/reg.vue"),
    name:"register",
    meta:{
        tabBar:false,
        auth:false
    },
}