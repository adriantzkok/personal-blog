<template>
  <Analytics />
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from './components/layouts/TheFooter.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import { Analytics } from '@vercel/analytics/vue'
export default {
  components: { TheHeader, TheFooter, Analytics }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Inter', sans-serif;
}

body {
  margin: 0;
}

h1 {
  font-weight: 300;
}

h2 {
  font-weight: 300;
}

p {
  font-size: 1.2rem;
}

.content {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
