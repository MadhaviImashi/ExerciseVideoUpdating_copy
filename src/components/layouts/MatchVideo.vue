<template>
    <div class="match-video-with-exercises-section">
        <div class="match-video-with-exercises-section__title" style="margin-bottom: 10px;">Exercise</div>

        <div v-if="videoDetails.Matched === 'No'" class="match-video-with-exercises-section__description" style="margin-right: 10%; margin-bottom: 30px; font-size: 15px">{{descriptionForUnmatchedVideos}}</div>
        <div v-if="videoDetails.Matched === 'Yes'" class="match-video-with-exercises-section__description" style="margin-right: 10%; margin-bottom: 30px; font-size: 15px">{{descriptionForMatchedVideos}}</div>

         <div class="match-video-with-exercises-section__options">
                <div v-if="videoDetails.Matched === 'Yes'">
                    <b-row class="view-video-and-video-details">
                        <b-col>
                            <span class="me-3">{{videoDetails.Exercisename}}</span>
                            <a :href="videoDetails.VimeoLink" target="_blank"><b-icon-eye :variant="'white'" scale="1.5"></b-icon-eye></a>
                        </b-col>
                        <b-col><b-button size="sm" style="float: right; margin-right: 20%;">view details</b-button></b-col>
                    </b-row>
                    <p>or</p>
                </div>
                <div style="margin-right: 10%;">
                    <search-bar></search-bar>
                </div>
                <p>or</p>
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
