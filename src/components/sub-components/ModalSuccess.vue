<template>
  <div class="modal-success" style="background-color: #fff; padding: 100px; border-radius: 10px;">
    <a-result :title="getTitle">
        <template #icon>
            <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
        </template>
        <template #extra>
            <b-button variant="success" size="lg" style="padding: 10px 50px 10px 50px;" @click="showNextVideo">
                Next
            </b-button>
        </template>
  </a-result>
  </div>
</template>
<script>
export default {
    name: 'ModalSuccess',
  data() {
    return {};
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
          return this.exerciseVidName+' exericise has been ' + this.statusMsg+ '!'
      }
  }
};
</script>
