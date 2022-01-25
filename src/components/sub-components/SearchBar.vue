<template>
<div>
    <div class="control_wrapper exercise-search-bar-wrapper" >
      <ejs-autocomplete 
      id='multiselect' 
      :dataSource='localData'
      placeholder='Search'
      :highlight="true"
      v-model="value"
      @change="updateSearchValue"
      ref="inputVal"
      >
      </ejs-autocomplete>
    </div>

    <view-matched-exercise v-if="searchedValue!=null" :exerciseName="searchedValue" @showExerciseDetails="showExerciseDetails" :anExerciseIsSearched="true"></view-matched-exercise>
    
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import matchReport from '../../convertCsvToJson/matchReport.json'
import ViewMatchedExercise from './ViewMatchedExercise.vue'

let result = matchReport.map( item => item.Exercisename)

export default {
  components: { ViewMatchedExercise },

  data: function() {
    return {
        localData: result,
        value: '',
    }
  },
  methods: {
        ...mapMutations([
          'setSearchedExerciseValue'
        ]),
        showExerciseDetails (exerciseName) {
            this.$emit('showExerciseDetails', exerciseName)
        },
        updateSearchValue () {
          this.setSearchedExerciseValue (this.value)
        }
  },
  computed: {
    searchedValue () {
      return this.$store.getters.getSearchedExercise
    }
  }
}

</script>


<style>
</style>