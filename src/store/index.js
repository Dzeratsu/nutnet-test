import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        city: ['Москва', 'Париж', 'Лондон', 'Нью-Йорк', 'Пекин', 'Токио'],
        apiKey: 'c1a549cd661deb0f37491fdb7930de1c',
        cityHistory: []
    },
    getters: {
        basicCity(state) {
            return state.city
        },
        apiKey(state) {
            return state.apiKey
        },
        city(state) {
            let arr = state.cityHistory.filter((elem, index, self) => self.findIndex(
                (history) => {return (history.name === elem.name)}) === index)
            let arr9 = arr.filter((elem, index) => {
                if (index >= arr.length - 9){
                    return elem
                }
            })
            return arr9
        }
    },
    mutations: {
        parseJSON(state) {
            state.cityHistory = JSON.parse(localStorage.History)
        }
    },
    actions: {
        parseJSON({commit}){
            commit('parseJSON')
        }
    }
})