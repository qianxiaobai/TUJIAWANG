import http from "utils/http.js"

// export const  =>http("get","/bingo/h5/portal/getPortalUnitModule").then((data)=>{
//     console.log(data);
export const getData = ()=>http("get","/bingo/h5/portal/getPortalUnitModule")