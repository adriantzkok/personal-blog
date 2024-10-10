<template>
  <div class="content">
    <page-image></page-image>
    <base-content> <text-area></text-area></base-content>
  </div>
</template>

<script>
import TextArea from '../layouts/AdminPage/TextArea.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import PageImage from '../ui/PageImage.vue'
export default {
  components: { PageImage, TextArea }
}
</script>
<style></style>
