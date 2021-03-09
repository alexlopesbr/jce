<template>
  <section class="testimonials">
    <div>
      <h2>Depoimentos</h2>
      <TestimonialCard />
    </div>
  </section>
  <button>Conheça mais</button>
</template>
<script>
import TestimonialCard from '@/components/TestimonialCard.vue';

export default {
  components: {
    TestimonialCard,
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 50px;
  text-align: center;
  color: white;
}
.testimonials {
  position: relative;
  max-width: 1024px;
  padding: 90px 0;
  margin-bottom: 30px;
  border-radius: 50px;

  background: #9c69e2;
}

.testimonials::before {
  position: absolute;
  top: 0;
  content: '';

  height: 100%;
  width: 60px;
  border-radius: 50px 0 0 50px;

  background-image: linear-gradient(to right, #9c69e2 15px, rgba(255, 0, 0, 0));
}

.testimonials::after {
  position: absolute;
  top: 0;
  right: 0;
  content: '';

  height: 100%;
  width: 60px;
  border-radius: 0 50px 50px 0;

  background-image: linear-gradient(to left, #9c69e2 15px, rgba(255, 0, 0, 0));
}

ul::-webkit-scrollbar {
  height: 10px;
  border-radius: 10px;
}

ul::-webkit-scrollbar-track {
  background-color: #9c69e2;
}

ul::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 5px;
}

button {
  width: 100%;
  height: 60px;
  margin: 0 auto;
  border-radius: 50px;
  border: none;

  font-size: 20px;

  background: tomato;
  color: white;
  transition: 0.3s;
}

button:hover {
  background: #c54c36;
}
</style>
