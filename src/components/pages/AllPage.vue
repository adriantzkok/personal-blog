<template>
  <div class="content">
    <page-image></page-image>
    <posts-container title="All Blog Posts" :filtertoggle="true"></posts-container>
  </div>
</template>

<script>
import PostsContainer from '../layouts/PostsContainer.vue'

export default {
  components: { PostsContainer }
}
</script>

<style></style>
