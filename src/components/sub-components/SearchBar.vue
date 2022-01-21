<template>
<div class="control_wrapper exercise-search-bar-wrapper" style="" >
    <ejs-autocomplete 
    id='multiselect' 
    :dataSource='localData'
    placeholder='Search'
    :highlight="true"
    >
    </ejs-autocomplete>
</div>
</template>

<script>
import matchReport from '../../convertCsvToJson/matchReport.json'

let result = matchReport.map( item => item.Exercisename)

export default {

  data: function() {
    return {
        localData: result,
    }
  }
}

</script>


<style>
</style>