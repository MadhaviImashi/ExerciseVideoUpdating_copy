<template>
    <div class="video-thumbnail-section">
        <div class="video-thumbnail-section__title">Matching the video with exercise</div>
        <div class="video-thumbnail-section__sub-title">Video</div>
        <div class="video-thumbnail-section__video-name">{{videoDetails.Exercisename}}</div>
        <div class="video-thumbnail-section__image">
            <img 
            :src="videoImgSrc"
            @click="openUploadImg"
            alt="video thumbnail"
            >
        </div>
        <div class="video-thumbnail-section__description">50 MB 720px X 800px 10/10/2022 8:00 pm</div>
        
        
        <b-row cols="2" cols-sm="3" cols-md="2" cols-lg="2" cols-xl="3">
            <b-col>
                <div class="video-thumbnail-section__img-upload-btn">
                    <b-button >
                        <label for="file-field">Change Thumbnail</label>
                        <input name="image" type="file" id="file-field" @change="updateImgPreview">
                    </b-button>
                </div>
            </b-col>
            <b-col>
                <!-- show delete video option when user open add new exercise form -->
                <div v-if="showDeleteVideoOption" class="video-thumbnail-section__delete-btn">
                    <b-button variant="outline-danger" @click="showConfirmationBox">Delete Video</b-button>
                </div> 
            </b-col>
        </b-row>
    </div>
</template>

<script>

import {mapMutations} from 'vuex';

export default {
    name: 'VideoThumbnail',
    props: {
        videoDetails: {
            type: Object
        },
        videoImgSrc: {
            type: String,
            default: '../../assets/images/thumbnail_img.png'
        },
        currentIndex: {
            type: Number
        }
    },
    methods: {
        ...mapMutations([
            'deleteAVideoFromVideosArray'
        ]),
        openUploadImg () {
            console.log('dkd')
        },
        updateImgPreview () {
            console.log('dkskl')
        },
        showConfirmationBox () {
            this.$bvModal.msgBoxConfirm('Are you sure you want to delete this video?', {
                title: 'Confirm delete',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: 'Yes',
                cancelTitle: 'No',
                headerClass: 'p-2 border-bottom-0',
                footerClass: 'p-2 border-top-0',
                centered: true
            })
            .then(value => {
                console.log('value: ', value)
                if(value === true) {
                    // delete this video from the video list array
                    this.deleteAVideoFromVideosArray(this.currentIndex)
                    // display the next subsequent video
                    this.$emit('displayNextVideoToBeMatched', true)
                }
            })
            .catch(err => {
                console.log(err)
            })
      },
      goBack () {
          this.$emit('goBack', true)
      }
    },
    computed: {
        showDeleteVideoOption () {
            return this.$store.getters.getShowDeleteVideoOptionStatus;
        }
    }
}
</script>