import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'

import PageImage from './components/ui/PageImage.vue'
import BaseContent from './components/ui/BaseContent.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiLinkedin, BiGithub } from 'oh-vue-icons/icons'

addIcons(BiLinkedin, BiGithub)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('page-image', PageImage)

app.component('base-content', BaseContent)
app.component('v-icon', OhVueIcon)

app.mount('#app')
