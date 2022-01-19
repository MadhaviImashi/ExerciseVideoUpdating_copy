import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentVideoIndex: 0
    },
    getters: {
        getCurrentVidIndex(state) {
            return state.currentVideoIndex
        }
    },
    mutations: {
        incrementCurrentIndexByOne(state) {
            state.currentVideoIndex++;
        }
    }
})