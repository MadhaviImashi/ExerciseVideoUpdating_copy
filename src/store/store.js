import Vue from 'vue'
import Vuex from 'vuex'
import matchReport from '../convertCsvToJson/matchReport.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentVideoIndex: 59
    },
    getters: {
        getCurrentVidIndex(state) {
            return state.currentVideoIndex
        }
    },
    mutations: {
        incrementCurrentIndexByOne(state) {
            state.currentVideoIndex++;
            if (state.currentVideoIndex > matchReport.length-1) {
                state.currentVideoIndex = 0;
            }
        }
    }
})