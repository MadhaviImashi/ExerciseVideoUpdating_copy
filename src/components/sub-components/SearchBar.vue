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
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import matchReport from '../../convertCsvToJson/matchReport.json'

let result = matchReport.map( item => item.Exercisename)

export default {

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
          // call the showExerciseDetails() method in MatchVideo component to show the Exercise form
          this.$emit('showExerciseDetails', exerciseName)
        },
        updateSearchValue () {
          if(this.localData.includes(this.value)){
            this.setSearchedExerciseValue (this.value)
            if(this.searchedValue!=null){
              this.showExerciseDetails(this.searchedValue)
            }
          }
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