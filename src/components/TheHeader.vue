<template>
  <header>
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/contact">Contato</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};

</script>

<style scoped>
#nav {
  margin: 0 auto;
  padding: 30px;

  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #9c69e2;
}
</style>
