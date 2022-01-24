<template>
    <div class="match-video-with-exercises-section">
        <div class="match-video-with-exercises-section__title">Exercise</div>

        <div v-if="videoDetails.Matched === 'No'" class="match-video-with-exercises-section__description">{{descriptionForUnmatchedVideos}}</div>
        <div v-if="videoDetails.Matched === 'Yes'" class="match-video-with-exercises-section__description">{{descriptionForMatchedVideos}}</div>

         <div class="match-video-with-exercises-section__options">
                <div v-if="videoDetails.Matched === 'Yes'">
                    <view-matched-exercise :exerciseName="videoDetails.Exercisename" @showExerciseDetails="showExerciseDetails" :displayEyeIcon="true"></view-matched-exercise>
                    <p class="plain-text">or Search from entire exercise list</p>
                </div>

                <div  v-if="videoDetails.Matched === 'No'"><p class="plain-text">Search from entire exercise list</p></div>

                <div class="search-bar">
                    <search-bar @showExerciseDetails="showExerciseDetails"></search-bar>
                </div>
                
                <p class="plain-text">or</p>

                <div class="add-new-exercise">
                    <b-button size="lg" @click="showNewExerciseForm">Create New Exercise</b-button>
                </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '../sub-components/SearchBar.vue'
import ViewMatchedExercise from '../sub-components/ViewMatchedExercise.vue'

export default {
  components: { SearchBar, ViewMatchedExercise },
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
        },
        showExerciseDetails (exerciseName) {
            this.$emit('showExerciseDetails', exerciseName)
        }
    }
}
</script>
