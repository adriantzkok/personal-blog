<template>
  <div class="image_container">
    <img v-if="image_url" :src="image_url" alt="Page Image" />
    <img v-else :src="defaultImage" alt="Default Image" />
  </div>
</template>

<script>
import bg from '@/assets/bg-min.jpeg'

export default {
  data() {
    return {
      image_url: null,
      defaultImage: bg // Default image URL
    }
  }
}
</script>

<style scoped>
.image_container {
  margin-top: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 15rem;
  width: 100%;
  overflow: hidden;
}

.image_container img {
  object-fit: cover; /* Change to cover for proper scaling */
  width: 100%; /* Ensure the image takes full width */
  height: 100%; /* Ensure the image takes full height */
}

@media (max-width: 600px) {
  .image_container {
    padding: 10px; /* Reduces padding on smaller screens */
  }
}
</style>
