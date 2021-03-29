<template>
  <div class="home">
    <HomeIntro />
    <HomeSobre />
    <HomeTestimonials />
    <TheMe />
  </div>
</template>

<script>
// @ is an alias to /src

import HomeIntro from '@/components/HomeIntro.vue';
import HomeSobre from '@/components/HomeSobre.vue';
import HomeTestimonials from '@/components/HomeTestimonials.vue';
import TheMe from '@/components/TheMe.vue';

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeSobre,
    HomeTestimonials,
    TheMe,
  },
};
</script>

<style scoped>
</style>
