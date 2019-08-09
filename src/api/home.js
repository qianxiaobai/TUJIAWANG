import http from "utils/http.js"

// export const  =>http("get","/bingo/h5/portal/getPortalUnitModule").then((data)=>{
//     console.log(data);
//发现公寓
export const home_Data = ()=>http("get","/bingo/h5/portal/getPortalUnitModule")
// export const home_Data = ()=>http("get","/note/cmt/4364?page_number=0")

//定位跳转列表
// export const seachList_api = ()=>http("get","/bingo/h5/config/getCommonConfigs")
export const seachList_api = ()=>http("post","/feapi/bingo/h5/promotion/search/searchhousebyhouseidlist?_apitsp=1565157575933")
//城市定位后详情
// export const seachList_api = ()=>http("post","/bingo/h5/search/searchUnit?_apitsp=1565143507306")
//轮播图周边房屋
export const autoleft_api = ()=>http("get","/recommend/nearby/houses?cityId=346&unitIds=&longitude=0.0&latitude=0.0")
// 轮播图相关房屋
export const autoright_api = ()=>http("get","/recommend/nearby/houses?cityId=&unitIds=1054324&longitude=0.0&latitude=0.0")


//https://travel.tujia.com/recommend/nearby/houses?cityId=346&unitIds=&longitude=0.0&latitude=0.0

//https://travel.tujia.com/recommend/nearby/houses?cityId=&unitIds=1054324&longitude=0.0&latitude=0.0




