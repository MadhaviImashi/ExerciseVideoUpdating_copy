<template>
<div>
    <div class="control_wrapper exercise-search-bar-wrapper" >
      <ejs-autocomplete 
      id='multiselect' 
      :dataSource='localData'
      placeholder='Search'
      :highlight="true"
      v-model="value"
      >
      </ejs-autocomplete>
    </div>

    <div style="">
      <view-matched-exercise v-if="value!=null" :exerciseName="value" @showExerciseDetails="showExerciseDetails" :anExerciseIsSearched="true"></view-matched-exercise>
    </div>       
    

</div>
</template>

<script>
import matchReport from '../../convertCsvToJson/matchReport.json'
import ViewMatchedExercise from './ViewMatchedExercise.vue'

let result = matchReport.map( item => item.Exercisename)

export default {
  components: { ViewMatchedExercise },

  data: function() {
    return {
        localData: result,
        value: null,
    }
  },
  methods: {
        showExerciseDetails (exerciseName) {
            this.$emit('showExerciseDetails', exerciseName)
        }
    }
}

</script>


<style>
</style>