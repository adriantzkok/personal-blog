import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'
// import VueGtag from 'vue-gtag'

import PageImage from './components/ui/PageImage.vue'
import BaseContent from './components/ui/BaseContent.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiLinkedin, BiGithub } from 'oh-vue-icons/icons'

addIcons(BiLinkedin, BiGithub)

const app = createApp(App)

app.use(createPinia())
app.use(router)

// if (import.meta.env.VITE_GOOGLE_ANALYTICS_ID) {
//   app.use(
//     VueGtag,
//     {
//       pageTrackerScreenviewEnabled: true,
//       config: { id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID },
//       appName: 'adrian-blog'
//     },
//     router
//   )
// }

app.component('page-image', PageImage)

app.component('base-content', BaseContent)
app.component('v-icon', OhVueIcon)

app.mount('#app')
