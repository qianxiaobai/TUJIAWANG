import {
    autoleft_api,
    autoright_api
} from "api/home.js"


const state = {
    autoleft: [],
    autoright: []
}

const actions = {
    async getAutoleft() {
        let data = await autoleft_api();
        // console.log(data)
        state.autoleft = data
        console.log(state.autoleft)
    },
    async getAutoright() {
        let data = await autoright_api()
        state.autoright = data
        console.log(state.autoright)
    }

}

const mutations = {


}


export default {
    state,
    actions,
    mutations,
    namespaced: true
}