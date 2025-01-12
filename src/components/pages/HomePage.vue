<template>
  <div class="content">
    <page-image></page-image>
    <posts-container
      title="All Posts"
      layout="blog-posts-row"
      :filtertoggle="true"
    ></posts-container>
    <posts-container
      title="Learning of the Week"
      layout="blog-posts-row"
      :filtertoggle="true"
      titlefilter="LotW"
      tagfilter="Tech,Learning"
    ></posts-container>
  </div>
</template>

<script>
import PostsContainer from '../layouts/PostsContainer.vue'

export default {
  components: { PostsContainer }
}
</script>

<style></style>
