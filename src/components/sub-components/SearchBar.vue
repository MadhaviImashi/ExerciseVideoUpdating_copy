<template>
<div class="control_wrapper exercise-search-bar-wrapper" style="background-color: transparent;">
    <ejs-multiselect 
    id='multiselect' 
    :dataSource='localData'
    :fields='localFields'
    placeholder='Search from entire exercises list'
    >
    </ejs-multiselect>
</div>
</template>

<script>
import matchReport from '../../convertCsvToJson/matchReport.json'

export default {

  data: function() {
    return {
        localData: matchReport,
        localFields: {value: 'Exercisename', text: 'Exercisename'}
    }
  }
}

</script>


<style>
</style>