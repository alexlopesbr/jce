<template>
  <footer>
    <hr />
    <section class="footer">
      <div class="local">
        <figure>
          <img src="../assets/logo.svg" alt="Logo JCE Hipnoterapeuta" />
        </figure>
        <p>JCE Hipnoterapeuta</p>
      </div>

      <div class="social">
        <ul>
          <li>
            <figure>
              <img src="../assets/icoFace.svg" alt="Link para o Facebook" />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="../assets/icoInstagram.svg"
                alt="Link para o Instagram"
              />
            </figure>
          </li>
          <li>
            <figure>
              <img src="../assets/icoWhatsapp.svg" alt="Link para Whatsapp" />
            </figure>
          </li>
        </ul>
      </div>

      <div class="adress">
        <p>Rua Acadêmico Walter Gonçalvez 01</p>
        <p>Sala 903</p>
        <p>Niterói - RJ</p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'FooterFooter',
};
</script>

<style scoped>
footer {
  margin-top: 75px;
  top: 255px;
  padding-bottom: 30px;
  background-color: #f5f5dc;
}

.footer {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;

  margin: 0 auto;
}

p {
  text-align: center;
}

.local {
  margin: 0 auto;
}

.social {
  margin: 0 auto;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
