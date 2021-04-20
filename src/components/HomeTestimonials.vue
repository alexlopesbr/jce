<template>
  <section class="testimonials">
    <div>
      <h2>Depoimentos</h2>
      <TestimonialCard />
    </div>
  </section>
  <a
      href="https://wa.me/5521988294990?text=Oi.%20Gostaria%20de%20saber%20como%20faço%20para%20agendar%20um%20atendimento."
      target="_blank"
      rel="WhatsApp JCE Hipnoterapeuta"
      ><button class="intro--btn">Agende uma consulta</button></a
    >
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

  padding: 45px 0;
  margin-bottom: 30px;
  /* border-radius: 50px; */

  background: #b698de;
}

/* .testimonials::before {
  position: absolute;
  top: 0;
  content: '';

  height: 100%;
  width: 30px;
  border-radius: 50px 0 0 50px;

  background-image: linear-gradient(to right, #b698de 15px, rgba(255, 0, 0, 0));
} */

/* .testimonials::after {
  position: absolute;
  top: 0;
  right: 0;
  content: '';

  height: 100%;
  width: 30px;
  border-radius: 0 50px 50px 0;

  background-image: linear-gradient(to left, #b698de 15px, rgba(255, 0, 0, 0));
} */

a {
  text-align: center;
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
  width: 90%;
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
  transform: scale(1.05);
}
</style>
