<template>
  <div id="app">
    <main-component></main-component>
  </div>
</template>

<script>
import mainComponent from './components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    mainComponent
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
