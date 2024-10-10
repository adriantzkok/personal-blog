<template>
  <div class="content">
    <page-image></page-image>
    <base-content>
      <div class="about">
        <div>
          <img :src="img_url" alt="About Me Image" />
        </div>
        <div class="about-text">
          <h2>ABOUT ME</h2>
          <p>{{ about_me }}</p>
          <div class="icons-container">
            <a target="_blank" rel="noopener noreferrer" :href="linkedin_link">
              <v-icon name="bi-linkedin" scale="1.5" />
            </a>
            <a target="_blank" rel="noopener noreferrer" :href="github_link">
              <v-icon name="bi-github" scale="1.5" />
            </a>
          </div>
        </div>
      </div>
    </base-content>
  </div>
</template>

<script>
import hero_image from '@/assets/hero_fp_image.png'
import { mapState } from 'pinia'
import { useBlogStore } from '@/stores'
export default {
  data() {
    return {
      img_url: hero_image,
      linkedin_link: 'https://hk.linkedin.com/in/adrian-kok',
      github_link: 'https://github.com/adriantzkok'
    }
  },
  computed: {
    ...mapState(useBlogStore, ['about_me'])
  }
}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  column-gap: 5rem;
}

.about img {
  object-fit: cover; /* Maintain aspect ratio */
  width: 100%;
  height: 100%;
}

.about h2 {
  font-size: 1.8rem;
}

.about p {
  font-size: 1rem;
  line-height: 1.5rem;
}

.about-text {
  max-width: 60%;
}

.icons-container {
  display: flex;
  gap: 0.7rem;
  width: 100%;
}

.icons-container a {
  text-decoration: none;
  color: black;
}
</style>
