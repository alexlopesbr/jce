<template>
  <section class="intro">
    <div class="intro__presentation">
      <div>
        <h1>
          Através da Hipnose você pode transformar sua vida. Deixe-me ajudar
          você.
        </h1>
        <p>Online ou Presencial</p>
      </div>

      <img src="../assets/jce.png" alt="" />
    </div>

    <div class="intro__btn">
      <button class="intro__sched">Agende uma consulta</button>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
.intro {
  max-width: 1024px;

  display: grid;
  justify-content: center;
}
.intro__presentation {
  display: grid;
  grid-template-columns: 1fr 350px;
}

h1 {
  width: 645px;
}

img {
  border-radius: 50%;
  max-width: 350px;

  filter: drop-shadow(10px 10px 10px #222);
}

.intro__sched {
  width: 200px;
  height: 60px;
  border-radius: 50px;
  border: none;

  background: #9c69e2;
  color: white;
  transition: 0.3s;
}

.intro__sched:hover {
  background: #9c11e2;
}

.intro__btn {
  margin: 0 auto;
}
</style>
