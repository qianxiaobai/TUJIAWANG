import {city_api} from "api/index";
const state={
    cityHot:JSON.parse(sessionStorage.getItem("cityHot"))||[],
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    
    searchhistory: JSON.parse(sessionStorage.getItem("searchhistory"))||[],

    cityHot1:JSON.parse(sessionStorage.getItem("cityHot1"))||[],
    cityList1:JSON.parse(sessionStorage.getItem("cityList1"))||[],
    // seachlist:{}

}
const actions={
    async handleGetCityAction({commit}){
        let data = await city_api();         
        commit("handleGetCityMutation",data.data.destinationConfig.list)
    },
    async handleGetCityAction1({commit}){
        let data1 = await city_api();         
        commit("handleGetCityMutation1",data1.data.destinationConfigWW.list)
    }
}
const mutations={


    handleToggleCity(state,params){    
       if(JSON.parse(sessionStorage.getItem("searchhistory"))==null){
            state.searchhistory.push({cityId:params.cityId,cityName:params.cityName})
            sessionStorage.setItem("searchhistory",JSON.stringify(state.searchhistory))
       }else{
           var n=0;
            for(var i=0;i<state.searchhistory.length;i++){
                if(params.cityName==state.searchhistory[i].cityName){
                   n=1;
                }
            }
            if(n==0){
                state.searchhistory.push({cityId:params.cityId,cityName:params.cityName})
                sessionStorage.setItem("searchhistory",JSON.stringify(state.searchhistory))
            }
           
       }

      
    },

    //seach
    // handleToggleCity(state,val){
    //     let obj=val;
    //     console.log(obj)
    //     console.log(obj.cityName)
    //     state.seachlist.cityName=obj.cityName
    //        console.log(state.seachlist)
    // },



    handleGetCityMutation(state,params){
        let cityList=[],cityHot=[];
          //热门城市
        for(var i=0;i<params.length;i++){
            if(params[i].isHotInApp){
                cityHot.push({cityId:params[i].id,cityName:params[i].name})
            }
        }

        //城市列表
        for(var i=0;i<params.length;i++){
            var letterFirst = params[i].pinyin.substr(0,1).toUpperCase();
            if(isCityList(letterFirst)){
                for(var k=0;k<cityList.length;k++){
                    if(letterFirst == cityList[k].index){
                        cityList[k].list.push({cityId:params[i].id,cityName:params[i].name});
                        break;
                    }
                }
            }else{
                cityList.push({index:letterFirst,list:[{cityId:params[i].id,cityName:params[i].name}]})
            }
        }
          //判断当前标识是否在cityList当中
          function isCityList(letterFirst){
                var bStop = false;
                for(var i=0;i<cityList.length;i++){
                    if(cityList[i].index == letterFirst){
                        bStop = true;
                        break;
                    }
                }
                return bStop;//存在为true 不存在未false
            }
            //排序
        cityList.sort((item1,item2)=>{
            if(item1.index>item2.index){
                return 1;
            }else{
                return -1;
            }
       })
       state.cityList = cityList;
       state.cityHot = cityHot;
       sessionStorage.setItem("cityList",JSON.stringify(cityList))
       sessionStorage.setItem("cityHot",JSON.stringify(cityHot))
    },



    handleGetCityMutation1(state,params){
        let cityList1=[],cityHot1=[];
        //热门城市
      for(var i=0;i<params.length;i++){
          if(params[i].isHotInApp){
              cityHot1.push({cityId:params[i].id,cityName:params[i].name})
          }
      }
      //城市列表
      for(var i=0;i<params.length;i++){
          var letterFirst = params[i].pinyin.substr(0,1).toUpperCase();
          if(isCityList(letterFirst)){
              for(var k=0;k<cityList1.length;k++){
                  if(letterFirst == cityList1[k].index){
                      cityList1[k].list.push({cityId:params[i].id,cityName:params[i].name});
                      break;
                  }
              }
          }else{
              cityList1.push({index:letterFirst,list:[{cityId:params[i].id,cityName:params[i].name}]})
          }
      }
        //判断当前标识是否在cityList当中
        function isCityList(letterFirst){
              var bStop = false;
              for(var i=0;i<cityList1.length;i++){
                  if(cityList1[i].index == letterFirst){
                      bStop = true;
                      break;
                  }
              }
              return bStop;//存在为true 不存在未false
          }
          //排序
      cityList1.sort((item1,item2)=>{
          if(item1.index>item2.index){
              return 1;
          }else{
              return -1;
          }
     })
     state.cityList1 = cityList1;
     state.cityHot1 = cityHot1;
     sessionStorage.setItem("cityList1",JSON.stringify(cityList1))
     sessionStorage.setItem("cityHot1",JSON.stringify(cityHot1))
     console.log(state.cityHot1)
    }
}
export default {
    state,
    actions,
    mutations,
    namespaced:true
}