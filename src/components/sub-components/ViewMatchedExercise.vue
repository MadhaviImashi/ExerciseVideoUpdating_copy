<template>
        <b-row :class="componentClasses">
            <b-col cols="1" sm="1" class="view-video-info__name-with-icon-eye">
                <a>
                    <b-icon-eye v-if="displayEyeIcon" class="view-video__icon-eye" :variant="'white'" scale="1.5" id="show-btn" @click="$bvModal.show('bv-modal-example', {centered: true})"></b-icon-eye>
                    <b-modal id="bv-modal-example" hide-footer>
                        <div class="d-block text-center">
                            <iframe :src="'https://player.vimeo.com/video/665732096?h=600f1855e3'" width="420" height="350" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </b-modal>
                </a>
                <span>{{exerciseName}}</span>
            </b-col>
            <b-col class="view-video-info__view-form">
                <b-button @click="showExerciseDetails(exerciseName)" size="sm">Select</b-button>
            </b-col>
        </b-row>
</template>

<script>

export default {
    name: 'ViewMatchedExercise',
    props: {
        exerciseName: {
            type: String
        },
        displayEyeIcon: {
            type: Boolean,
            default: false
        },
        anExerciseIsSearched: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        showExerciseDetails (exerciseName) {
            this.$emit('showExerciseDetails', exerciseName)
        }
    },
    computed: {
        componentClasses () {
            if(this.anExerciseIsSearched) {
                return {'view-searched-exercise': true}
            } else {
                return {'view-video-info': true}
            }
        }
    }
}
</script>
