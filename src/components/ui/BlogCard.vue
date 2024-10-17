<template>
  <router-link :to="generateLink()">
    <div class="card">
      <div class="image-container">
        <img :src="imgUrl" />
      </div>
      <div class="card-content">
        <p>{{ topic }}</p>
        <div class="card-desc">
          <h3>{{ title }}</h3>
        </div>
        <div class="card-tags">
          <blog-tag :areas="areas"></blog-tag>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import cardbg from '@/assets/card-default.jpg'
import BlogTag from './BlogTag.vue'

export default {
  components: { BlogTag },
  props: {
    id: {},
    imgUrl: {
      type: String,
      default: cardbg
    },
    title: {
      type: String
    },
    topic: {
      type: String
    },
    areas: {
      type: Array
    }
  },
  methods: {
    generateLink() {
      return '/blogpost/' + this.id
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: rgb(249, 248, 248);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  min-width: 300px;
}

.card:hover {
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.card-content p,
.card-content h3 {
  margin: 0;
  color: black;
}

.card-desc {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h3 {
  font-weight: 400;
  font-size: 1.3rem;
}

p {
  font-weight: 300;
  font-size: 0.7rem;
}

a {
  text-decoration: none;
}
</style>
