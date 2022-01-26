<template>
  <div class="video-updating-app-outer-container">
      <b-container >
        <div class="video-updating-app">
          <!--heading -->
          <b-row v-if="!showSuccessMsg" class="video-updating-app__header" cols="1" cols-sm="1" cols-md="2" cols-lg="2">
            <b-col class="video-updating-app__header--left"></b-col>
            <b-col class="video-updating-app__header--right"><p>{{currentVideoIndex+1}} / {{videos.length}}</p></b-col>
          </b-row>

          <!--body -->
          <b-row v-if="!showSuccessMsg" class="video-updating-app__body" cols="1" cols-sm="1" cols-md="2" cols-lg="2">
              <!-- video thumbnail will be shown on the left side -->
              <b-col class="video-updating-app__body--left">
                  <video-thumbnail 
                      :videoImgSrc="'https://martech.org/wp-content/uploads/2015/01/video-generic-ss-1920.jpg'"  
                      :videoDetails="videos[currentVideoIndex]" 
                      :currentIndex="currentVideoIndex" 
                      @displayNextVideoToBeMatched="showMatchVideoOptions"
                      @goBack="openPreviousVideo"
                      :showButtonBack="showOptionsToMatch"></video-thumbnail>
              </b-col>
              <b-col class="video-updating-app__body--right">
                <!-- video matching options Or form to update/add new exercise will be shown on the right side-->
                  <div v-if="showOptionsToMatch">
                    <match-video 
                        :videoDetails="videos[currentVideoIndex]" 
                        @showNewExerciseForm="showAddExerciseForm" 
                        @showExerciseDetails="showExerciseUpdateForm"></match-video>
                  </div>
                  <div v-else >
                    <form-add-new-exercise v-if="showNewExerciseForm" 
                        :exerciseName="videos[currentVideoIndex].Exercisename"
                        @showMatchVideoOptions="showMatchVideoOptions" 
                        @showResult="showSuccessMsgModal($event)">
                    </form-add-new-exercise>
                    <form-update-exercise v-if="showUpdateExerciseForm" 
                        @showMatchVideoOptions="showMatchVideoOptions" 
                        @showResult="showSuccessMsgModal($event)" 
                        :videoDetails="videos[currentVideoIndex]"
                        :exerciseName="selectedExercise">
                    </form-update-exercise>
                  </div>
              </b-col>
          </b-row>

          <!-- Footer -->
          <b-row class="video-updating-app__footer">
              <b-col class="video-updating-app__footer-left">
                <b-row  class="video-updating-app__footer-left-container" cols="2" cols-sm="2" cols-md="3">
                  <b-col v-if="showOptionsToMatch" class="video-updating-app__footer-left-container--skip">
                    <b-button @click="openNextVideo">Skip</b-button>
                  </b-col>
                </b-row>
              </b-col>

              <b-col class="video-updating-app__footer-right">  
              </b-col>
          </b-row>

          <!--success modal-->
            <div v-if="showSuccessMsg">
              <modal-success 
                  @showNextVideo="openNextVideo" 
                  :exerciseVidName="videos[currentVideoIndex].Exercisename" 
                  :statusMsg="successStatus">
              </modal-success>
            </div>
        </div>
      </b-container>
  </div>
</template>

<script>

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
          showOptionsToMatch: true,
          showNewExerciseForm: false,
          showSuccessMsg: false,
          showUpdateExerciseForm: false,
          successStatus: '',
          selectedExercise: ''
      }
  },
  methods: {
    ...mapMutations([
      'incrementCurrentIndexByOne',
      'decrementCurrentIndexByOne',
      'changeVideoDeleteButtonDisplayStatus',
      'refreshSearchBar'
    ]),
    showAddExerciseForm () {
      this.showOptionsToMatch = false,
      this.showUpdateExerciseForm = false,
      this.showNewExerciseForm = true,
      this.changeVideoDeleteButtonDisplayStatus(true)
    },
    showExerciseUpdateForm(exerciseName) {
      this.selectedExercise = exerciseName,
      this.showOptionsToMatch = false,
      this.showNewExerciseForm = false,
      this.showUpdateExerciseForm = true
    },
    showMatchVideoOptions () {
      //refresh searched values in the search bar
      this.refreshSearchBar()
      
      this.showNewExerciseForm = false,
      this.showOptionsToMatch = true,
      this.changeVideoDeleteButtonDisplayStatus(false)
    },
    showSuccessMsgModal (message) {
      this.successStatus = message
      this.showNewExerciseForm = false,
      this.showOptionsToMatch = false,
      this.showSuccessMsg = true,
      this.changeVideoDeleteButtonDisplayStatus(false)
      this.openNextVideo()
    },
    openNextVideo () {
      if(this.showSuccessMsg===false) {
        this.successStatus = 'skipped'
        this.showNewExerciseForm = false,
        this.showOptionsToMatch = false,
        this.showSuccessMsg = true
      }
      setTimeout(() => {
        //refresh searched values in the search bar
        this.refreshSearchBar()
        //increment the current video index by one.
        this.incrementCurrentIndexByOne()
        //display video matching options window again
        this.showSuccessMsg = false,
        this.showOptionsToMatch = true
      }, 300)
    },
    openPreviousVideo () {
      //refresh searched values in the search bar
      this.refreshSearchBar()
      //decrement the current video index by one.
      this.decrementCurrentIndexByOne()
      //display video matching options window again
      this.showOptionsToMatch = true
    }
  },
  computed: {
    currentVideoIndex () {
      return this.$store.getters.getCurrentVidIndex
    },
    videos () {
      return this.$store.getters.getmatchReport
    }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 1000s ease;
}
</style>

