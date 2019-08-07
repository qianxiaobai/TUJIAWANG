import http from "utils/http.js"

export const getData = ()=>http("get","/bingo/h5/portal/getPortalUnitModule")
//城市列表
export const city_api = ()=>http("get","/bingo/h5/config/getdestinationconfig")
//猜你喜欢
export const guass_api = ()=>http("get","/bingo/h5/keyword/KeywordSearchSuggest")