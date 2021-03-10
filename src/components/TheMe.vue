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
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

img {
  border-radius: 50%;
  max-width: 300px;
  filter: drop-shadow(10px 10px 10px #222);
}
</style>
