<template>
  <footer>
    <hr />
    <p>© 2024 Adrian Kok. All rights reserved.</p>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.9;
  background-color: #f8f8f8;
  padding: 2rem;
  margin-top: 10rem;
}

hr {
  width: 100%;
  border: 4rem;
  height: 1px;
  background-color: #4e4d4d;
}

p {
  margin: 0;
  font-size: 1rem;
  color: #525050;
  text-align: left;
  font-family: 'Arial', sans-serif;
  opacity: 75%;
  font-style: italic;
}

@media (max-width: 600px) {
  footer {
    height: 4rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
