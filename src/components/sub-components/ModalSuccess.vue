<template>
  <div class="modal-success" style=" color: #e5e5e5; height: 100%">
          <!--heading -->
          <b-row class="modal-success__header" cols="2">
            <b-col class="modal-success__header--left"></b-col>
            <b-col class="modal-success__header--right"><p>{{currentVideoIndex+1}} / {{videos.length}}</p></b-col>
          </b-row>
          <!-- success message -->
          <b-row class="modal-success__body" >
            <div class="modal-success__body--success-icon">
                <b-list-group class="icon-group">
                    <b-list-group-item class="d-flex justify-content-between align-items-center icon-group__svg">
                        <b-icon icon="check-square" scale="5" variant="success"></b-icon>
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="modal-success__body--message">{{getTitle}}</div>
            <!-- <div class="modal-success__body--action">
                <b-button variant="success" @click="showNextVideo">
                    Next Video
                </b-button>
            </div> -->
          </b-row>
  </div>
</template>
<script>

import matchReport from '../../convertCsvToJson/matchReport.json'

export default {
    name: 'ModalSuccess',
  data() {
    return {
        videos: matchReport
    };
  },
  props: {
      exerciseVidName: {
          type: String,
          default: ''
      },
      statusMsg: {
          type: String,
          default: ''
      }
  },
  methods: {
      showNextVideo() {
          this.$emit('showNextVideo', true)
      }
  },
  computed: {
      getTitle() {
        if(this.statusMsg==='skipped'){
          return this.exerciseVidName+' exercise video skipped'
        }
        else {
          return this.exerciseVidName+' exericise has been ' + this.statusMsg+ '!'
        }
      },
    currentVideoIndex () {
      return this.$store.getters.getCurrentVidIndex
    }
  }
};
</script>
