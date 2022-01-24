import Vue from 'vue'
import Vuex from 'vuex'
import matchReport from '../convertCsvToJson/matchReport.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentVideoIndex: 0,
        showDeleteVideoOption: false,
    },
    getters: {
        getCurrentVidIndex(state) {
            return state.currentVideoIndex
        },
        getShowDeleteVideoOptionStatus(state) {
            return state.showDeleteVideoOption
        }
    },
    mutations: {
        incrementCurrentIndexByOne(state) {
            state.currentVideoIndex++;
            if (state.currentVideoIndex > matchReport.length-1) {
                state.currentVideoIndex = 0;
            }
        },
        decrementCurrentIndexByOne(state) {
            state.currentVideoIndex--;
            if (state.currentVideoIndex === -1) {
                state.currentVideoIndex = matchReport.length-1;
            }
        },
        changeVideoDeleteButtonDisplayStatus(state, status) {
            state.showDeleteVideoOption = status;
        }
    }
})