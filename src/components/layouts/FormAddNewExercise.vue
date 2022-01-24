<template>
  <div>
    <div class="form-exercise">
      <div class="form-exercise__button-back">
        <b-button  @click="goBack" >
          <b-icon-arrow-left :variant="'#1a1a1a'" scale="1.3"></b-icon-arrow-left>
        </b-button>
      </div>
      <div class="form-exercise__title">Exercise</div>

      <div class="form-exercise__inputs">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-row class="mb-2">
            <b-col sm="4"><label for="input-1" >Equipment</label></b-col>
            <b-col sm="8">
              <b-form-input id="input-1" v-model="form.equipment" type="text" placeholder="" class="form-inputs" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="4"><label for="input-2" >Muscle Groups</label></b-col>
            <b-col sm="8">
              <b-form-input id="input-2" v-model="form.priority" type="text" placeholder="Calves"  class="form-inputs" required></b-form-input>
            </b-col>
          </b-row>

            <b-form-group >
              <b-row class="mb-2">
                <b-col sm="4"><label >Gender</label></b-col>
                <b-col sm="8">
                  <b-form-checkbox-group
                      v-model="form.checked"
                      :options="genderOptions"
                      plain
                    ></b-form-checkbox-group>
                </b-col>
              </b-row>
            </b-form-group>

          <b-form-group >
              <b-row class="mb-2">
                <b-col sm="4"><label >Location</label></b-col>
                <b-col sm="8">
                  <b-form-checkbox-group
                  checked="checked"
                      v-model="form.checked"
                      :options="locationOptions"
                      plain
                    ></b-form-checkbox-group>
                </b-col>
              </b-row>
            </b-form-group>

          <b-row class="mb-2">
            <b-col sm="4"><label for="input-5" >Level</label></b-col>
            <b-col sm="8">
              <b-form-input id="input-5" v-model="form.level" type="text" placeholder="Beginner" class="form-inputs" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mb-2"> 
            <b-col sm="4"><label for="input-6" >Priority</label></b-col>
            <b-col sm="8">
              <b-form-input id="input-6" v-model="form.priority" type="text" placeholder="P1" class="form-inputs" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="4"><label for="input-7" >Injuries</label></b-col>
            <b-col sm="8">
              <b-form-input id="input-7" v-model="form.injuries" type="text" placeholder="Legs" class="form-inputs" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="4"><label for="text-area" >Description</label></b-col>
            <b-col sm="8">
              <b-form-textarea rows="1" id="text-area" size="sm" class="form-inputs"></b-form-textarea>
            </b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="4"><label for="input-9" >Metrics</label></b-col>
            <b-col sm="8">
              <b-form-input id="input-9" v-model="form.metrics" type="text" placeholder="Metrics" class="form-inputs" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mb-3">
            <b-col sm="4"><label for="input-10" >Reps</label></b-col>
            <b-col sm="8">
              <b-form-input id="input-10" v-model="form.reps" type="text" placeholder="Reps" class="form-inputs" required></b-form-input>
            </b-col>
          </b-row>

          <div class="form-exercise__inputs-button-submit">
              <b-button type="submit" variant="success" @click="showResult">Add Exercise</b-button>
          </div> 
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  
    name: 'FormAddNewExercise',
    data() {
      return {
        genderOptions: [
          {text: 'Men', value: 'Men'},
          {text: 'Women', value: 'Women'}
        ],
        locationOptions: [
          {text: 'Gym', value: 'Gym'},
          {text: 'Home', value: 'Home'}
        ],
        showSuccessMsg: false,
        form: {
          level: '',
          priority: '',
          injuries: '',
          checked: ['Men', 'Gym', 'Women', 'Home']
        },
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
        this.form.level = ''
        this.form.priority = ''
        this.form.injuries = ''
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
        this.$emit('showResult', 'added')
      }
    }
  }
</script>

<style>
</style>