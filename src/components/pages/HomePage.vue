<template>
  <div class="content">
    <page-image></page-image>
    <base-content>
      <posts-container title="All Posts" layout="blog-posts-row"></posts-container>
    </base-content>
    <base-content></base-content>
    <base-content>
      <posts-container title="Learning of the Week" filter='{"title": ["LotW"]}'></posts-container>
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
