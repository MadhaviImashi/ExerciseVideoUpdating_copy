<template>
  <div class="video-uploading-app">
    <div class="video-uploading-app__container">

      <div class="video-uploading-app__container-header">
        <p>N / {{videos.length}}</p>
      </div>

      <div v-if="!showSuccessMsg" class="video-uploading-app__container-body">
        <div class="video-uploading-app__container-body--left">
          <video-thumbnail :videoImgSrc="videos[0].VimeoImage"  :videoDetails="videos[0]"></video-thumbnail>
        </div>
        <div v-if="showOptionsToMatch" class="video-uploading-app__container-body--right">
          <match-video :videoDetails="videos[0]" @showNewExerciseForm="showExerciseForm"></match-video>
        </div>
        <div v-if="showNewExerciseForm" class="video-uploading-app__container-body--right">
          <form-add-new-exercise @showMatchVideoOptions="showMatchVideoOptions" @showResult="showSuccessMsgModal"></form-add-new-exercise>
        </div>
      </div>

      <div class="video-uploading-app__container-footer">
        <div v-if="showOptionsToMatch" class="video-uploading-app__container-footer--skip">
          <b-button @click="openNextVideo">Skip</b-button>
        </div>
        <div v-if="!showNewExerciseForm&&!showOptionsToMatch&&!showSuccessMsg" class="video-uploading-app__container-footer--next">
          <b-button variant="success" size="lg">Next</b-button>
        </div>
        <div v-if="showNewExerciseForm" class="video-uploading-app__container-footer--delete">
          <b-button variant="danger">Delete Video</b-button>
        </div>
        <div v-if="showSuccessMsg">
          <modal-success @showNextVideo="openNextVideo"></modal-success>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import matchReport from '../convertCsvToJson/matchReport.json'
import FormAddNewExercise from './layouts/FormAddNewExercise.vue'
import MatchVideo from './layouts/MatchVideo.vue'
import VideoThumbnail from './layouts/VideoThumbnail.vue'
import ModalSuccess from './sub-components/ModalSuccess.vue'

export default {
  name: 'MainComponent',
  components: {
    VideoThumbnail,
    MatchVideo,
    FormAddNewExercise,
    ModalSuccess

  },
  data: function () {
      return {
          videos: matchReport,
          showOptionsToMatch: true,
          showNewExerciseForm: false,
          showSuccessMsg: false
      }
  },
  methods: {
    showExerciseForm () {
      this.showOptionsToMatch = false,
      this.showNewExerciseForm = true
    },
    showMatchVideoOptions () {
      this.showNewExerciseForm = false,
      this.showOptionsToMatch = true
    },
    showSuccessMsgModal () {
      this.showNewExerciseForm = false,
      this.showOptionsToMatch = false,
      this.showSuccessMsg = true
    },
    openNextVideo () {
      //increment the current video index by one.

      //update video states

      //display video matching options window again
      this.showSuccessMsg = false,
      this.showOptionsToMatch = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';

</style>
