<template>
  <header>
    <nav>
      <h1><router-link to="/">ADRIAN KOK </router-link></h1>
      <ul>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/blog">BLOG</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  width: 100%;
  height: 6rem;
  background-color: #dedbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  opacity: 95%;
}

header a {
  text-decoration: none;
  color: #525050;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  fill: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: black;
  font-weight: 400;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 100%;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

li {
  margin: 0 0.5rem;
}
</style>
