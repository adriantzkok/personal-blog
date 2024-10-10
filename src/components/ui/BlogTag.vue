<template>
  <span class="badge" v-for="(area, index) in areas" :key="index">{{ area }}</span>
</template>

<script>
export default {
  props: {
    areas: {
      type: Array,
      default: () => ['default', 'default']
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #dbe1eb; /* A more appealing blue color */
  color: rgb(91, 89, 89); /* Better contrast */
  display: inline-block; /* Keeps it from taking full width */
  margin-right: 0.5rem;
  font-size: 0.65rem; /* Slightly larger font size */
  padding: 0.2rem 1rem; /* Adjusted padding */
  border-radius: 2px; /* More rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}
</style>
