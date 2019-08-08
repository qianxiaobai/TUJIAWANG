export default {
    path:"/collection",
    component:()=>import("views/collection"),
    name:"collection",
    meta:{
        tabBar:false,
        auth:true
    },
}