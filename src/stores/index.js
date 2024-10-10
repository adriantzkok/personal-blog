import { defineStore } from 'pinia'
import { about_me } from './data'
import { fetchBlogs } from '@/api/db/queries'

export const useBlogStore = defineStore('blog_posts', {
  state: () => ({
    blog_posts: [],
    about_me: about_me
  }),

  getters: {
    hasBlogPosts(state) {
      return state.blog_posts && state.blog_posts.length > 0
    },
    filteredBlogPosts: (state) => {
      return (filter) => {
        return state.blog_posts.filter((post) => post.tags.includes(filter))
      }
    }
  },

  actions: {
    async getBlogPosts() {
      this.blog_posts = await fetchBlogs()
    }
  }
})
