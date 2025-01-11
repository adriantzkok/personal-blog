import { defineStore } from 'pinia'
import { about_me } from './data'
import { fetchBlogs } from '@/api/db/queries'

export const useBlogStore = defineStore('blog_posts', {
  state: () => ({
    blog_posts: [],
    about_me: about_me,
    name: 'Adrian Kok'
  }),

  // {
  //   "id": 10,
  //   "created_at": "2024-10-14T02:19:17.906712+00:00",
  //   "title": "LotW Second Week of Oct",
  //   "tags": [
  //     "Oct",
  //     "LotW"
  //   ],
  //   "topic": "Weekly Learnings",
  //   "IMAGE_URL": "url"
  // }

  getters: {
    hasBlogPosts(state) {
      return state.blog_posts && state.blog_posts.length > 0
    },

    filteredBlogPosts: (state) => {
      return (filter) => {
        filter = JSON.parse(filter)

        let blogPosts = state.blog_posts

        for (const [key, value] of Object.entries(filter)) {
          if (key == 'topic') {
            blogPosts = blogPosts.filter((post) => value.includes(post.topic))
          } else if (key == 'tags') {
            blogPosts = blogPosts.filter((post) =>
              value.every((filtertag) => post.tags.includes(filtertag))
            )
          } else {
            blogPosts = blogPosts.filter((post) => post.title.includes(value[0]))
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
