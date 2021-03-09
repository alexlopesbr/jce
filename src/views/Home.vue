<template>
  <div class="home">
    <HomeIntro />
    <HomeSobre />
    <HomeTestimonials />
  </div>
</template>

<script>
// @ is an alias to /src

import HomeIntro from '@/components/HomeIntro.vue';
import HomeSobre from '@/components/HomeSobre.vue';
import HomeTestimonials from '@/components/HomeTestimonials.vue';

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeSobre,
    HomeTestimonials,
  },
};
</script>
