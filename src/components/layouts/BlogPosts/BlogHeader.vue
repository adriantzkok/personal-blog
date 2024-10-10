<template>
  <div class="blog-background">
    <div class="blog-header">
      <h1>{{ header }}</h1>
      <p>{{ date }}</p>
    </div>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
import { fetchPostMetadata } from '@/api/db/queries'

export default {
  props: ['Header'],
  data() {
    return {
      header: null,
      author: 'By: Adrian Kok',
      date: null,
      error: null
    }
  },
  methods: {
    async getPostMetadata() {
      try {
        const post = await fetchPostMetadata(+this.$route.params.id)
        this.header = post.title

        this.date = post.created_at.split('T')[0]
        console.log(this.date)
      } catch (err) {
        this.error = 'Failed to load post content.'
        console.error(err)
      }
    }
  },
  mounted() {
    this.getPostMetadata()
  }
}
</script>

<style scoped>
.blog-background {
  padding: 0 1.5rem 0rem 1.5rem;
}
.blog-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h1 {
  font-weight: 500;
  font-size: 2.5rem;
  letter-spacing: 1.5px;
}

.blog-header h2,
.blog-header h1,
.blog-header p {
  margin: 0; /* Apply margin: 0 to each element */
}
</style>
