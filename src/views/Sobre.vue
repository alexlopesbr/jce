<template>
  <section class="sobre">
    <h1>Sobre o que gostaria de ler?</h1>

    <nav>
      <router-link to="/sobre/hipnose">Hipnose</router-link>
      <router-link to="/sobre/mitos">Mitos</router-link>
      <router-link to="/sobre/hipnoterapia">Hipnoterapia</router-link>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'Sobre',
};
</script>

<style>
.sobre {
  padding: 20px;
}

.sobre nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 15px;
  padding: initial;
}

.sobre nav a {
  margin: 10px 0;
}

.sobre h1 {
  text-align: center;
  font-size: 1.5rem;
}

.sobre h2 {
  font-size: initial;
  text-align: center;
  margin-top: 15px;
}
</style>
