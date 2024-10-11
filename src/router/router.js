import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import BlogPost from '@/components/pages/BlogPost.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import AdminPage from '@/components/pages/AdminPage.vue'
import AllPage from '@/components/pages/AllPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    {
      path: '/about',
      component: AboutPage,
      name: 'about'
    },
    {
      path: '/blog',
      component: AllPage,
      name: 'blog'
    },
    {
      path: '/blogpost/:id',
      component: BlogPost,
      props: true,
      name: 'path'
      //   children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/admin', component: AdminPage, name: 'admin' }
  ]
})

export default router
