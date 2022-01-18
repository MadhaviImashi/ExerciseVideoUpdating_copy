<template>
    <div class="match-video-with-exercises-section">
        <div class="match-video-with-exercises-section__title">Exercise</div>

        <div v-if="videoDetails.Matched === 'No'" class="match-video-with-exercises-section__description" style="margin-right: 10%;">{{descriptionForUnmatchedVideos}}</div>
        <div v-if="videoDetails.Matched === 'Yes'" class="match-video-with-exercises-section__description">{{descriptionForMatchedVideos}}</div>

         <div class="match-video-with-exercises-section__options">
                <b-row class="view-video-and-video-details">
                    <b-col>
                        <span>{{videoDetails.Exercisename}}</span>
                        <a :href="videoDetails.VimeoLink"><b-icon-eye :variant="'white'"></b-icon-eye></a>
                    </b-col>
                    <b-col><b-button size="sm">view details</b-button></b-col>
                </b-row>
                <p>Or</p>
                <div style="margin-right: 10%;">
                    <search-bar></search-bar>
                </div>
                <p>Or</p>
                <b-button variant="warning" size="lg" @click="showNewExerciseForm">Create New exercise</b-button>
        </div>
    </div>
</template>

<script>
import SearchBar from '../sub-components/SearchBar.vue'

export default {
  components: { SearchBar },
    name: 'MatchVideo',
    data: function () {
        return {
            descriptionForUnmatchedVideos: "We couldn't find any matching exercise from our list, but we could be wrong. Try to search in our exercise list or create a new one.",
            descriptionForMatchedVideos: 'We identified an exercise from current exercise list. Review it below to see if it matches with the video you uploaded'
        }
    },
    props: {
        videoDetails: {
            type: Object
        }
    },
    methods: {
        showNewExerciseForm () {
            this.$emit('showNewExerciseForm', true)
        }
    }
}
</script>
