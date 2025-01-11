import { defineStore } from 'pinia'
import { about_me } from './data'
import { fetchBlogs } from '@/api/db/queries'

export const useBlogStore = defineStore('blog_posts', {
  state: () => ({
    blog_posts: [],
    about_me: about_me,
    name: 'Adrian Kok'
  }),
  getters: {
    hasBlogPosts(state) {
      return state.blog_posts && state.blog_posts.length > 0
    },

    filteredBlogPosts: (state) => {
      return (filter) => {
        let blogPosts = state.blog_posts

        for (const [key, value] of Object.entries(filter)) {
          if (key == 'topic' && value) {
            blogPosts = blogPosts.filter((post) => value.includes(post.topic))
          } else if (key == 'tags' && value) {
            blogPosts = blogPosts.filter((post) =>
              value.every((filtertag) => post.tags.includes(filtertag))
            )
          } else if (key == 'title' && value) {
            blogPosts = blogPosts.filter((post) =>
              post.title.toLowerCase().includes(value.toLowerCase())
            )
          }
        }
        return blogPosts
      }
    }
  },

  actions: {
    async getBlogPosts() {
      this.blog_posts = await fetchBlogs()
    }
  }
})
