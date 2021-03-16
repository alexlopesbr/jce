<template>
  <div class="me">
    <img src="../assets/me.png" alt="" />
    <p>
      <b>Júlio César Estarneck</b> <br />
      é hipnólogo e hipnoterapeuta formado pelo Instituto PI Hipnose e Instituto
      Alberto Dell'isola., com certificação em Hipnose Clássica, Hipnose
      Clínica, Hipnose Conversacional e PNL (programação neurolinguística).
      Membro da Sociedade Brasileira de Pesquisa em Hipnose Clínica.
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheMe',
};

</script>

<style scoped>
.me {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

img {
  margin: 0 auto;
  border-radius: 50%;
  max-width: 200px;
  filter: drop-shadow(10px 10px 10px #222);
}
</style>
