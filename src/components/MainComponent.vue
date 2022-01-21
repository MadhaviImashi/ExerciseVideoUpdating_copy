<template>
  <div class="video-updating-app-container">
      <b-container >
        <div class="video-updating-app">
          <!--heading -->
          <b-row class="video-updating-app__header" cols="1" cols-sm="1" cols-md="2" cols-lg="2">
            <b-col class="video-updating-app__header--left"></b-col>
            <b-col class="video-updating-app__header--right"><p>{{currentVideoIndex+1}} / {{videos.length}}</p></b-col>
          </b-row>

          <!--body -->
          <b-row v-if="!showSuccessMsg" class="video-updating-app__body" cols="1" cols-sm="1" cols-md="2" cols-lg="2">
              <!-- video thumbnail will be shown on the left side -->
              <b-col class="video-updating-app__body--left">
                  <video-thumbnail :videoImgSrc="'https://martech.org/wp-content/uploads/2015/01/video-generic-ss-1920.jpg'"  :videoDetails="videos[currentVideoIndex]"></video-thumbnail>
              </b-col>
              <b-col class="video-updating-app__body--right">
                <!-- video matching options Or form to update/add new exercise will be shown on the right side-->
                  <div v-if="showOptionsToMatch">
                    <match-video :videoDetails="videos[currentVideoIndex]" @showNewExerciseForm="showAddExerciseForm" @showExerciseDetails="showExerciseUpdateForm"></match-video>
                  </div>
                  <div v-else >
                    <form-add-new-exercise v-if="showNewExerciseForm" @showMatchVideoOptions="showMatchVideoOptions" @showResult="showSuccessMsgModal($event)"></form-add-new-exercise>
                    <form-update-exercise v-if="showUpdateExerciseForm" @showMatchVideoOptions="showMatchVideoOptions" @showResult="showSuccessMsgModal($event)" :videoDetails="videos[currentVideoIndex]"></form-update-exercise>
                  </div>
              </b-col>
          </b-row>

          <!-- Footer -->
          <b-row class="video-updating-app__footer">
              <b-col v-if="showOptionsToMatch" class="video-updating-app__footer--skip">
                <b-button @click="openNextVideo">Skip</b-button>
              </b-col>
              <b-col v-if="showNewExerciseForm" class="video-updating-app__footer--delete">
                <b-button variant="danger">Delete Video</b-button>
              </b-col>
              <b-col>    
              </b-col>
          </b-row>

          <!--success modal-->
          <div v-if="showSuccessMsg">
            <modal-success @showNextVideo="openNextVideo" :exerciseVidName="videos[currentVideoIndex].Exercisename" :statusMsg="successStatus"></modal-success>
          </div>
        </div>
      </b-container>
  </div>
</template>

<script>

import matchReport from '../convertCsvToJson/matchReport.json'
import FormAddNewExercise from './layouts/FormAddNewExercise.vue'
import FormUpdateExercise from './layouts/FormUpdateExercise.vue'
import MatchVideo from './layouts/MatchVideo.vue'
import VideoThumbnail from './layouts/VideoThumbnail.vue'
import ModalSuccess from './sub-components/ModalSuccess.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'MainComponent',
  components: {
    VideoThumbnail,
    MatchVideo,
    FormAddNewExercise,
    FormUpdateExercise,
    ModalSuccess

  },
  data: function () {
      return {
          videos: matchReport,
          showOptionsToMatch: true,
          showNewExerciseForm: false,
          showSuccessMsg: false,
          showUpdateExerciseForm: false,
          successStatus: ''
      }
  },
  methods: {
    ...mapMutations([
      'incrementCurrentIndexByOne'
    ]),
    showAddExerciseForm () {
      this.showOptionsToMatch = false,
      this.showUpdateExerciseForm = false,
      this.showNewExerciseForm = true
    },
    showExerciseUpdateForm() {
      this.showOptionsToMatch = false,
      this.showNewExerciseForm = false,
      this.showUpdateExerciseForm = true
    },
    showMatchVideoOptions () {
      this.showNewExerciseForm = false,
      this.showOptionsToMatch = true
    },
    showSuccessMsgModal (message) {
      this.successStatus = message
      this.showNewExerciseForm = false,
      this.showOptionsToMatch = false,
      this.showSuccessMsg = true
    },
    openNextVideo () {
      //increment the current video index by one.
      this.incrementCurrentIndexByOne()
      //display video matching options window again
      this.showSuccessMsg = false,
      this.showOptionsToMatch = true
    }
  },
  computed: {
    currentVideoIndex () {
      return this.$store.getters.getCurrentVidIndex
    }
  }
}
</script>

