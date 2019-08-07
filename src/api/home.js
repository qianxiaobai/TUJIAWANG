import http from "utils/http.js"

// export const  =>http("get","/bingo/h5/portal/getPortalUnitModule").then((data)=>{
//     console.log(data);
//发现公寓
export const home_Data = ()=>http("get","/bingo/h5/portal/getPortalUnitModule")
// export const home_Data = ()=>http("get","/bingo/h5/config/getdestinationconfig")

// export const detail_api = (movieId)=>http("get","/api/detailmovie",{movieId:movieId})
//https://m.tujia.com/bingo/h5/config/getdestinationconfig?_apitsp=1565079535332