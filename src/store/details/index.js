import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// 使用Vuex，作为vue中最好的非父子传值的方法

//存储所有组件公共的状态
const state ={
    bool:true
}


// 用来处理异步数据（函数）
const actions ={
    函数({commit},){
        commit("函数")
    }
}

//用来修改state中的数据
const mutations={
    函数(state,){

    }
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    namespaced:true//表示模块私有化
})

