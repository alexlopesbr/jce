<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/contact">Contato</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};

</script>

<style scoped>
nav {
  margin: 0 auto;
  padding: 30px;

  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav a {
  padding: 8px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.2s;
}

nav a:hover {
  color: #fff;
  background-color: #9c69e2;
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: #9c69e2;
}
</style>
