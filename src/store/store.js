import Vue from 'vue'
import Vuex from 'vuex'
import matchReport from '../convertCsvToJson/matchReport.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        videos: matchReport,
        currentVideoIndex: 0,
        showDeleteVideoOption: false,
        searchedExerciseValue: null,
    },
    getters: {
        getCurrentVidIndex(state) {
            return state.currentVideoIndex
        },
        getShowDeleteVideoOptionStatus(state) {
            return state.showDeleteVideoOption
        },
        getmatchReport(state) {
            return state.videos
        },
        getSearchedExercise(state) {
            return state.searchedExerciseValue
        }
    },
    mutations: {
        incrementCurrentIndexByOne(state) {
            state.currentVideoIndex++;
            if (state.currentVideoIndex > state.videos.length-1) {
                state.currentVideoIndex = 0;
            }
        },
        decrementCurrentIndexByOne(state) {
            state.currentVideoIndex--;
            if (state.currentVideoIndex === -1) {
                state.currentVideoIndex = state.videos.length-1;
            }
        },
        changeVideoDeleteButtonDisplayStatus(state, status) {
            state.showDeleteVideoOption = status;
        },
        deleteAVideoFromVideosArray(state, index) {
            state.videos.splice(index, 1)
            if (state.currentVideoIndex === state.videos.length) {
                state.currentVideoIndex = 0;
            }
        },
        refreshSearchBar(state) {
            state.searchedExerciseValue = null
            console.log('search value set to null')
        },
        setSearchedExerciseValue(state, value) {
            state.searchedExerciseValue = value
            console.log('val ',state.searchedExerciseValue)
        }
    }
})