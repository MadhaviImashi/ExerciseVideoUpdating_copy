<template>
    <div class="match-video-with-exercises-section">
        <div class="match-video-with-exercises-section__title">Exercise</div>

        <div v-if="videoDetails.Matched === 'No'" class="match-video-with-exercises-section__description">{{descriptionForUnmatchedVideos}}</div>
        <div v-if="videoDetails.Matched === 'Yes'" class="match-video-with-exercises-section__description">{{descriptionForMatchedVideos}}</div>

         <div class="match-video-with-exercises-section__options">
                <div v-if="videoDetails.Matched === 'Yes'">
                    <b-row  class="view-video-info">
                        <b-col cols="1" sm="1" class="view-video-info__name-with-icon-eye">
                            <a>
                                <b-icon-eye class="view-video__icon-eye" :variant="'white'" scale="1.5" id="show-btn" @click="$bvModal.show('bv-modal-example', {centered: true})"></b-icon-eye>
                                <b-modal id="bv-modal-example" hide-footer>
                                    <div class="d-block text-center">
                                        <iframe :src="'https://player.vimeo.com/video/665732096?h=600f1855e3'" width="420" height="350" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </b-modal>
                            </a>
                            <span>{{videoDetails.Exercisename}}</span>
                        </b-col>
                        <b-col class="view-video-info__view-form">
                            <b-button @click="showExerciseDetails" size="sm">view details</b-button>
                        </b-col>
                    </b-row>
                    <p class="plain-text">or Search from entire exercise list</p>
                </div>

                <div  v-if="videoDetails.Matched === 'No'"><p class="plain-text">Search from entire exercise list</p></div>

                <div class="search-bar">
                    <search-bar></search-bar>
                </div>
                
                <p class="plain-text">or</p>

                <div class="add-new-exercise">
                    <b-button size="lg" @click="showNewExerciseForm">Create New exercise</b-button>
                </div>
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
        },
        showExerciseDetails () {
            this.$emit('showExerciseDetails', true)
        }
    }
}
</script>
