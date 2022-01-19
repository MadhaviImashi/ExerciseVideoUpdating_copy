<template>
  <div class="modal-success" style="background-color: #fff; padding: 100px; border-radius: 10px;">
    <a-result title="xxxx exericise has been updated!">
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
  methods: {
      showNextVideo() {
          this.$emit('showNextVideo', true)
      }
  }
};
</script>
