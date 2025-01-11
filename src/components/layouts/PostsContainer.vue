<template>
  <h2 class="postscontainertitle">{{ title }}</h2>
  <div>
    <input class="styled-input" placeholder="Search..." v-model="filter.title" />
  </div>
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
    }
  },
  data() {
    return {
      posts: [],
      filter: { title: '', topic: '', tags: '' }
    }
  },
  components: { BlogCard },
  computed: {
    ...mapState(useBlogStore, ['blog_posts', 'getBlogPosts', 'filteredBlogPosts'])
  },
  methods: {
    async getPosts() {
      await this.getBlogPosts()
<<<<<<< HEAD:src/components/layouts/PostsContainer.vue
      try {
        if (this.filter) {
          this.posts = this.filteredBlogPosts(this.filter)
        } else {
          this.posts = this.blog_posts
        }
      } catch (error) {
        console.error('Error', error)
=======
      this.posts = this.blog_posts
    },
    filterPosts() {
      if (this.filter.title || this.filter.topic || this.filter.tags) {
        this.posts = this.filteredBlogPosts(this.filter)
      } else {
        this.posts = this.blog_posts
      }
    }
  },
  watch: {
    filter: {
      deep: true,
      handler() {
        this.filterPosts()
>>>>>>> main:src/components/layouts/HomePage/PostsContainer.vue
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
  overflow: scroll;
  white-space: nowrap;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

.styled-input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.styled-input:focus {
  border-color: #007bff; /* Change to your desired focus color */
  outline: none;
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

@media (max-width: 600px) {
  .postscontainertitle {
    text-align: center;
  }
}
</style>
