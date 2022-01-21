<template>
    <div class="video-thumbnail-section">
        <div class="video-thumbnail-section__title">Video</div>
        <div class="video-thumbnail-section__video-name">{{videoDetails.Exercisename}}</div>
        <div class="video-thumbnail-section__description">50 MB 720px X 800px 10/10/2022 8:00 pm</div>
        <div class="video-thumbnail-section__image">
            <img 
            :src="videoImgSrc"
            @click="openUploadImg"
            alt="video thumbnail"
            >
        </div>
        <div class="video-thumbnail-section__img-upload-btn">
            <b-button >
            <label for="file-field">change thumbnail</label>
            <input name="image" type="file" id="file-field" @change="updateImgPreview">
        </b-button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'VideoThumbnail',
    props: {
        videoDetails: {
            type: Object
        },
        videoImgSrc: {
            type: String,
            default: '../../assets/images/thumbnail_img.png'
        }
    },
    methods: {
        openUploadImg () {
            console.log('dkd')
        },
        updateImgPreview () {
            console.log('dkskl')
        }
    }
}
</script>