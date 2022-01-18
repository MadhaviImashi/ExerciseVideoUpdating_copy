<template>
  <div class="video-uploading-app">
    <div class="video-uploading-app__container">
      <div class="video-uploading-app__container-header"></div>

      <div class="video-uploading-app__container-body">
        <div class="video-uploading-app__container-body--left">
          <video-thumbnail :videoImgSrc="videos[0].VimeoImage"  :videoDetails="videos[0]"></video-thumbnail>
        </div>
        <div v-if="showOptionsToMatch" class="video-uploading-app__container-body--right">
          <match-video :videoDetails="videos[0]" @showNewExerciseForm="changeComponent"></match-video>
        </div>
        <div v-if="showNewExerciseForm" class="video-uploading-app__container-body--right">
          <form-add-new-exercise></form-add-new-exercise>
        </div>
      </div>

      <div class="video-uploading-app__container-footer">
        <b-button>Skip/Next</b-button>
      </div>
    </div>
  </div>
</template>

<script>

import matchReport from '../convertCsvToJson/matchReport.json'
import FormAddNewExercise from './layouts/FormAddNewExercise.vue'
import MatchVideo from './layouts/MatchVideo.vue'
import VideoThumbnail from './layouts/VideoThumbnail.vue'

export default {
  name: 'MainComponent',
  components: {
    VideoThumbnail,
    MatchVideo,
    FormAddNewExercise

  },
  data: function() {
      return {
          videos: matchReport,
          showOptionsToMatch: true,
          showNewExerciseForm: false
      }
  },
  methods: {
    changeComponent () {
      this.showOptionsToMatch = false,
      this.showNewExerciseForm = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';

</style>
