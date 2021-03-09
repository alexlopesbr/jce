<template>
  <HeaderHeader />
  <main id="main">
    <router-view />
  </main>
  <FooterFooter />
</template>

<script>
// @ is an alias to /src

import HeaderHeader from '@/components/HeaderHeader.vue';
import FooterFooter from '@/components/FooterFooter.vue';

export default {
  components: {
    FooterFooter,
    HeaderHeader,
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
h3 p {
  margin: 0;
  padding: 0px;
}

ul {
  list-style: none;
}

/* GENERAL */

#app {
  max-width: 1024px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0 auto;
}

.home {
  display: grid;
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
  line-height: 130%;

  color: #212353;
}

h3 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 130%;

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
