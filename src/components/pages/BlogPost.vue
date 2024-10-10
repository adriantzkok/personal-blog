<template>
  <div class="content">
    <page-image></page-image>
    <base-content>
      <blog-header></blog-header>
      <blog-content></blog-content>
    </base-content>
  </div>
</template>

<script>
import BlogContent from '../layouts/BlogPosts/BlogContent.vue'
import BlogHeader from '../layouts/BlogPosts/BlogHeader.vue'
import PageImage from '../ui/PageImage.vue'
export default {
  components: { PageImage, BlogHeader, BlogContent }
}
</script>
<style></style>
