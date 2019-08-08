import http from "utils/http.js"

// export const  =>http("get","/bingo/h5/portal/getPortalUnitModule").then((data)=>{
//     console.log(data);
//发现公寓
export const home_Data = ()=>http("get","/bingo/h5/portal/getPortalUnitModule")
// export const home_Data = ()=>http("get","/bingo/h5/config/getdestinationconfig")

//定位跳转列表
// export const seachList_api = ()=>http("get","/bingo/h5/config/getCommonConfigs")
export const seachList_api = ()=>http("post","/feapi/bingo/h5/promotion/search/searchhousebyhouseidlist?_apitsp=1565157575933")
//城市定位租房列表
// export const seachList_api = ()=>http("post","/bingo/h5/search/searchUnit?_apitsp=1565143507306")
//https://m.tujia.com/bingo/h5/search/searchUnit?_apitsp=1565143507306
//https://m.tujia.com/bingo/h5/config/getCommonConfigs?_apitsp=1565103522618









//https://pwa.tujia.com/feapi/bingo/h5/promotion/search/searchhousebyhouseidlist?_apitsp=1565157575933






