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

    <button class="intro--btn">Agende uma consulta</button>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
.intro {
  margin: 0 10px;
}
.intro__presentation {
  display: grid;
  grid-template-columns: 1fr;
}

img {
  border-radius: 50%;
  max-width: 50%;
  margin: 0 auto;

  filter: drop-shadow(10px 10px 10px #222);
}

.intro--btn {
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border-radius: 50px;
  border: none;

  font-size: 20px;
  color: white;
  background: #b698de;
  transition: 0.3s;
}

.intro--btn:hover {
  transform: scale(1.05);
  background: #9c11e2;
}
</style>
