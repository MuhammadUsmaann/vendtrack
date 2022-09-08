<template>
    <div class="main-preview position-relative w-max-content">
        <div id="preview">
            <img v-if="url" :src="url" class="w-100" />
        </div>
        <label class="custom-file-upload rounded-circle text-center position-absolute">
            <img src="../assets/camer.png" alt="">
            <input type="file" @change="onFileChange" />
        </label>
    </div>
</template>

<script>
export default {
    name: 'ImgPreviewerPicker',
    data: () => ({
        url: "data:image/png;base64,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",
    }),
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        }
    }
}
</script>
<style scoped>
#preview {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid #D0D0D0;
    border-radius: 100%;
    overflow: hidden;
    max-width: max-content;
}

#preview img {
    width: calc(100% + 4px) !important;
    height: calc(100% + 3px) !important;
    margin-left: -2px !important;
}

input[type="file"] {
    display: none;
}

.custom-file-upload {
    background: #FF7E1D;
    box-shadow: 0px 4px 6px rgb(255 126 29 / 28%);
    display: inline-block;
    cursor: pointer;
    width: 36.67px;
    height: 36.67px;
    bottom: 0;
    right: 0;
    margin: 0;
    padding-top: 4px;
}
</style>