<template>
  <div class="content">
    <page-image></page-image>
    <base-content>
      <posts-container title="All Blog Posts"></posts-container>
    </base-content>
  </div>
</template>

<script>
import PostsContainer from '../layouts/PostsContainer.vue'

export default {
  components: { PostsContainer }
}
</script>

<style></style>
