<template>
  <base-content>
    <div class="postheading">
      <h2 class="postscontainertitle">{{ title }}</h2>
      <div class="postfilter" v-if="filtertoggle">
        <input class="styled-input" placeholder="Search Posts..." v-model="filter.title" />
      </div>
    </div>
  </base-content>
  <base-content>
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
  </base-content>
</template>

<script>
import BlogCard from '@/components/ui/BlogCard.vue'
import { mapState } from 'pinia'
import { useBlogStore } from '@/stores'
import BaseContent from '../ui/BaseContent.vue'

export default {
  props: {
    title: {
      required: true
    },
    filtertoggle: { required: true },
    titlefilter: { default: '' },
    topicfilter: { default: '' },
    tagfilter: { default: '' },
    layout: {
      default: 'blog-posts-grid'
    }
  },
  data() {
    return {
      posts: [],
      filter: { title: '', topic: '', tags: '' },
      adminfilter: {
        title: this.titlefilter,
        topic: this.topicfilter,
        tag: this.tagfilter.split(',')
      }
    }
  },
  components: { BlogCard, BaseContent },
  computed: {
    ...mapState(useBlogStore, ['blog_posts', 'getBlogPosts', 'filteredBlogPosts'])
  },
  methods: {
    async getPosts() {
      await this.getBlogPosts()
      if (this.titlefilter || this.topicfilter || this.tagfilter.length > 0) {
        this.posts = this.filteredBlogPosts(this.adminfilter)
      } else this.posts = this.blog_posts
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
      }
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style scoped>
.postheading {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: space-between;
  align-items: center; /* Center vertically */
  flex-wrap: wrap; /* Allow items to wrap */
}

.postfilter {
  display: flex;
  column-gap: 10%;
  height: 70%;
  align-content: center;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center; /* Center vertically */
}

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

.multi-select-tags {
  width: 20rem;
  z-index: 10000;
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

@media (max-width: 600px) {
  .postheading {
    flex-direction: column; /* Stack items vertically on mobile */
    align-items: center; /* Align items to the start */
    justify-content: center;
  }

  .postfilter {
    width: 100%; /* Full width for the input on mobile */
    margin-top: 10px; /* Space between title and input */
    justify-content: center;
  }

  .postscontainertitle {
    text-align: center; /* Center title */
    width: 100%; /* Full width */
  }
}
</style>
