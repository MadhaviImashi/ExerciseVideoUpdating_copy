<template>
  <div class="video-uploading-app">
    <div class="video-uploading-app__container">
      <!--heading -->
      <div class="video-uploading-app__container-header">
        <p>{{currentVideoIndex+1}} / {{videos.length}}</p>
      </div>

      <!--body -->
      <div v-if="!showSuccessMsg" class="video-uploading-app__container-body">
        <!-- video thumbnail will be shown on the left side -->
        <div class="video-uploading-app__container-body--left">
          <video-thumbnail :videoImgSrc="videos[currentVideoIndex].VimeoImage"  :videoDetails="videos[currentVideoIndex]"></video-thumbnail>
        </div>
        <!-- video matching options Or form to update/add new exercise will be shown on the right side-->
        <div class="video-uploading-app__container-body--right">
          <div v-if="showOptionsToMatch">
            <match-video :videoDetails="videos[currentVideoIndex]" @showNewExerciseForm="showExerciseForm" @showExerciseDetails="showExerciseUpdateForm"></match-video>
          </div>
          <div v-else >
            <form-add-new-exercise v-if="showNewExerciseForm" @showMatchVideoOptions="showMatchVideoOptions" @showResult="showSuccessMsgModal($event)"></form-add-new-exercise>
            <form-update-exercise v-if="showUpdateExerciseForm" @showMatchVideoOptions="showMatchVideoOptions" @showResult="showSuccessMsgModal($event)" :videoDetails="videos[currentVideoIndex]"></form-update-exercise>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="video-uploading-app__container-footer">
        <div v-if="showOptionsToMatch" class="video-uploading-app__container-footer--skip">
          <b-button @click="openNextVideo">Skip</b-button>
        </div>
        <!-- <div v-if="!showNewExerciseForm&&!showOptionsToMatch&&!showSuccessMsg" class="video-uploading-app__container-footer--next">
          <b-button variant="success" size="lg">Next</b-button>
        </div> -->
        <div v-if="showNewExerciseForm" class="video-uploading-app__container-footer--delete">
          <b-button variant="danger">Delete Video</b-button>
        </div>
        <div v-if="showSuccessMsg">
          <modal-success @showNextVideo="openNextVideo" :exerciseVidName="videos[currentVideoIndex].Exercisename" :statusMsg="successStatus"></modal-success>
        </div>
      </div>
    </div>
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
    showExerciseForm () {
      this.showOptionsToMatch = false,
      this.showNewExerciseForm = true
    },
    showExerciseUpdateForm() {
      this.showOptionsToMatch = false,
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

