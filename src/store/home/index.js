
import {home_Data} from "api/home.js" 
import {seachList_api} from "api/home.js"
const state={
    homelist:[],
    collectionlist:[],
    seachlist:[],
    num:sessionStorage.getItem("num")||""
}

const actions={
    //首页发现公寓
    async getHomeData({commit}){
        let data = await home_Data();  
        console.log(data.data)
        commit("getHomeData",data.data)
        },
        //定位列表
        async seachlistData({commit}){
            let data = await seachList_api();  
            console.log(data)
            commit("seachlistData",data)
            },

      }
      const  mutations ={
          //将token存入sessionStorage
          changetoken(state,val){
            state.num =val;
            sessionStorage.setItem('num', state.num);
        },
        // outlogin(state){
        //     sessionStorage.removeItem('num');
        // },
          //seachlist
          seachlistData(state,val){
            state.seachlist=val
            console.log(state.seachlist)
        },

        //发现公寓数据
        getHomeData(state,val){
            state.homelist=val.units
            console.log(state.homelist)
        },
        favoriteclickHandler(state,value){
            // console.log(state,value)
            // console.log(state.homelist[value])
            if(sessionStorage.getItem("num")){
                state.homelist[value].active = !state.homelist[value].active;
                console.log(state.collectionlist)
                if(state.collectionlist.indexOf(state.homelist[value])===-1){
                    console.log(state.collectionlist,value)
                    state.collectionlist.push(state.homelist[value])
                }
            }
            
            
            // console.log(state.collectionlist)
        },
        //取消收藏
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



