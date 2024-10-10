<template>
  <div class="post_content_style">
    <section v-if="post_content">
      <blockquote v-if="preface">{{ preface }}</blockquote>
      <div v-html="post_content" :id="$style.mdcontainer"></div>
    </section>
    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import { fetchPost } from '@/api/db/queries'
import mdparser from '@/api/parser/markdownparser'
import DOMPurify from 'dompurify'

export default {
  data() {
    return {
      preface: null,
      post_content: null,
      error: null
    }
  },
  methods: {
    async getPost() {
      try {
        const post = await fetchPost(+this.$route.params.id)
        this.preface = post.preface
        this.post_content = DOMPurify.sanitize(mdparser(post.post_content))
      } catch (err) {
        this.error = 'Failed to load post content.'
        console.error(err)
      }
    }
  },
  mounted() {
    this.getPost()
  }
}
</script>

<style scoped>
.post_content_style {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.section {
  margin: 0;
}

.content {
  line-height: 1.5rem;
}

/* Blockquote styles */
blockquote {
  padding: 1rem;
  margin: 1.5rem 0;
  border-left: 4px solid #000000;
  font-style: italic;
  color: #333;
  border-radius: 5px;
}
</style>

<style module>
#mdcontainer pre {
  padding: 1.5rem; /* Increased padding */
  border-radius: 5px; /* Rounded corners */
  overflow-x: auto; /* Enable horizontal scrolling for long lines */
  font-family: 'Courier New', Courier, monospace; /* Monospace font for code */
  line-height: 1.5; /* Improved line height for readability */
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
}

#mdcontainer img {
  object-fit: scale-down;
  width: 30%;
  overflow: hidden;
}
</style>
