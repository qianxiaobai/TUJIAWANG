import http from "utils/http.js"
export const details_api = (_apitsp=1565090101321)=>http("GET","/bingo/h5/config/getCommonConfigs",{_apitsp:_apitsp})

// https://m.tujia.com/bingo/h5/config/getCommonConfigs?_apitsp=1565090101321