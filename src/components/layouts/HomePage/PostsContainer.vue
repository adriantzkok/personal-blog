<template>
  <h2>{{ title }}</h2>
  <div :class="layout">
    <blog-card
      v-for="card in posts"
      :key="card.id"
      :id="card.id"
      :title="card.title"
      :topic="card.topic"
      :img-url="card.IMAGE_URL"
      :areas="card.tags"
    ></blog-card>
  </div>
</template>

<script>
import BlogCard from '@/components/ui/BlogCard.vue'
import { mapState } from 'pinia'
import { useBlogStore } from '@/stores'

export default {
  props: {
    title: {
      required: true
    },
    layout: {
      default: 'blog-posts-grid'
    },
    filter: {}
  },
  data() {
    return {
      posts: []
    }
  },
  components: { BlogCard },
  computed: {
    ...mapState(useBlogStore, ['blog_posts', 'getBlogPosts', 'filteredBlogPosts'])
  },
  methods: {
    async getPosts() {
      await this.getBlogPosts()
      try {
        if (this.filter) {
          this.posts = this.filteredBlogPosts(this.filter)
        } else {
          this.posts = this.blog_posts
        }
      } catch (error) {
        console.error('Error')
      }
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style scoped>
.blog-posts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

.blog-posts-row {
  display: flex;
  overflow: auto;
  white-space: nowrap;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

h2 {
  font-size: 1.8rem;
  letter-spacing: 1.5px;
  font-weight: 400;
}

@media (max-width: 768px) {
  .blog-posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .blog-posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
