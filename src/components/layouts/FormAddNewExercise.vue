<template>
<div>
  <div class="form-add-new-exercise" style="margin-left: 10%; padding-right: 30px; padding-bottom: 40px;">
    <b-button class="mb-5" style="padding: 10px 30px 10px 30px;" @click="goBack" >
      <b-icon-arrow-left :variant="'white'" scale="2"></b-icon-arrow-left>
    </b-button><br>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row class="mb-3">
        <b-col sm="3"><label for="input-1" >Equipment</label></b-col>
        <b-col sm="9">
          <b-form-input id="input-1" v-model="form.equipment" type="text" placeholder="" required></b-form-input>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="input-2" >Muscle Groups</label></b-col>
        <b-col sm="9">
          <b-form-input id="input-2" v-model="form.priority" type="text" placeholder="Calves" required></b-form-input>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="checkboxes-3" >Gender</label></b-col>
        <b-col sm="9">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-3" :aria-describedby="ariaDescribedby">
            <b-row cols="1">
              <b-form-checkbox value="Men">Men</b-form-checkbox><b-form-checkbox value="Women">Women</b-form-checkbox>
            </b-row>
          </b-form-checkbox-group>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="checkboxes-4" >Location</label></b-col>
        <b-col sm="9">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
            <b-row cols="1">
              <b-form-checkbox value="Home">Home</b-form-checkbox><b-form-checkbox value="Gym">Gym</b-form-checkbox>
            </b-row>
          </b-form-checkbox-group>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="input-5" >Level</label></b-col>
        <b-col sm="9">
          <b-form-input id="input-5" v-model="form.level" type="text" placeholder="Beginner" required></b-form-input>
        </b-col>
      </b-row>

      <b-row class="mb-3"> 
        <b-col sm="3"><label for="input-6" >Priority</label></b-col>
        <b-col sm="9">
          <b-form-input id="input-6" v-model="form.priority" type="text" placeholder="P1" required></b-form-input>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="input-7" >Injuries</label></b-col>
        <b-col sm="9">
          <b-form-input id="input-7" v-model="form.injuries" type="text" placeholder="Legs" required></b-form-input>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="text-area" >Description</label></b-col>
        <b-col sm="9">
          <b-form-textarea rows="1" id="text-area" size="sm"></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="input-9" >Metrics</label></b-col>
        <b-col sm="9">
          <b-form-input id="input-9" v-model="form.metrics" type="text" placeholder="Metrics" required></b-form-input>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col sm="3"><label for="input-10" >Reps</label></b-col>
        <b-col sm="9">
          <b-form-input id="input-10" v-model="form.reps" type="text" placeholder="Reps" required></b-form-input>
        </b-col>
      </b-row>

      <b-button style="float:right; padding: 10px 40px 10px 40px;" type="submit" variant="success" @click="showResult">Save</b-button>
    </b-form>
  </div>
</div>
</template>

<script>
  export default {
  
    name: 'FormAddNewExercise',
    data() {
      return {
        showSuccessMsg: false,
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      goBack() {
        this.$emit('showMatchVideoOptions', true)
      },
      showResult () {
        this.$emit('showResult', true)
      }
    }
  }
</script>