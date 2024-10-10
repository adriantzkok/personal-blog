<template>
  <div class="textarea">
    <div>
      <quill-editor :v-model="text" theme="snow"></quill-editor>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  components: { QuillEditor },
  data() {
    return {
      text: '' // Initialize as an empty string
    }
  }
}
</script>

<style scoped></style>
