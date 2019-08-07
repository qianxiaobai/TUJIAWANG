
import {home_Data} from "api/home.js" 
const state={
    homelist:[],
    collectionlist:[]
}

const actions={
    //首页发现公寓
    async getHomeData({commit}){
        let data = await home_Data();  
        console.log(data.data)
        commit("getHomeData",data.data)
        },


      }
      const  mutations ={
        //发现公寓数据
        getHomeData(state,val){
            state.homelist=val.units
            console.log(state.homelist)
        },
        favoriteclickHandler(state,value){
            // console.log(state,value)
            // console.log(state.homelist[value])
            state.homelist[value].active = !state.homelist[value].active;
            console.log(state.collectionlist)
            if(state.collectionlist.indexOf(state.homelist[value])===-1){
                console.log(state.collectionlist,value)
                state.collectionlist.push(state.homelist[value])
            }
            
            // console.log(state.collectionlist)
        },
        delectHandler(state,index){
            state.homelist[index].adverUnit=true;
            setTimeout(()=>{
                state.collectionlist.splice(index,1)
            },1000)
            
        }
    }
   

export default {
    state,
    mutations,
    actions,
    namespaced:true
}



