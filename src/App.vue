<template>
  <TheHeader />
  <main id="main">
    <router-view />
  </main>
  <FooterFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import FooterFooter from '@/components/FooterFooter.vue';

export default {
  components: {
    TheHeader,
    FooterFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
h3,
p,
figure {
  margin: 0;
  padding: 0px;
}

ul {
  list-style: none;
}

/* GENERAL */

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  /* padding: 0 20px; */
  background-color: #f5f5dc;
}

.home {
  display: grid;
  grid-template-columns: minmax(300px, 900px);
  grid-gap: 50px;
}

h1 {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  line-height: 110%;

  color: #212353;
}

h2 {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;

  color: #212353;
}

h3 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5rem;

  color: #212353;
}

p {
  font-family: Avenir, Arial, sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 160%;

  color: #4b5d68;
}

main {
  margin: auto;

  flex: 1;
}
</style>
