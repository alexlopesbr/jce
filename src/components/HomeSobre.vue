<template>
  <section>
    <div class="sobre sobre--deprecao">
      <figure>
        <img src="../assets/depressao.jpeg" alt="depressao" />
      </figure>
      <div>
        <h2>DEPRESSÃO</h2>

        <p>
          A hipnoterapia é uma alternativa muito eficaz para tratar a depressão.
          Em diversos casos, ela pode ser mais rápida e eficaz. Através da
          hipnose é possível descobrir as causas da depressão e agir diretamente
          no problema. Depois que forem entendidas e trabalhadas, essas causas
          deixam de existir. A pessoa passa então a desenvolver sentimentos
          saudáveis que antes não conseguia experimentar. Se você sofre com esse
          problema agende uma avaliação clicando abaixo.
        </p>

        <a
          href="https://wa.me/5521988294990?text=Oi.%20Gostaria%20de%20saber%20como%20faço%20para%20agendar%20um%20atendimento."
          target="_blank"
          rel="WhatsApp JCE Hipnoterapeuta"
          ><button class="sobre__btn">Agende uma consulta</button></a
        >
      </div>
    </div>

    <div class="sobre sobre--ansiedade">
      <figure>
        <img src="../assets/ansiedade.jpeg" alt="ansiedade" />
      </figure>

      <div>
        <h2>ANSIEDADE</h2>

        <p>
          Causa muito sofrimento e interfere na qualidade de vida e no
          desempenho familiar, social e profissional das pessoas. Diferentemente
          de outros tratamentos convencionais, a hipnoterapia consegue ir à
          causa emocional que gerou o início desse sofrimento, e então ajuda o
          cliente a trilhar um novo rumo, livre de toda a dor sofrida por causa
          da ansiedade. Além disso, te ensinarei técnicas para que você reeduque
          seu corpo a não entrar num ataque de pânico sem motivo. Clique abaixo
          e agende uma avaliação.
        </p>

        <a
          href="https://wa.me/5521988294990?text=Oi.%20Gostaria%20de%20saber%20como%20faço%20para%20agendar%20um%20atendimento."
          target="_blank"
          rel="WhatsApp JCE Hipnoterapeuta"
          ><button class="sobre__btn">Agende uma consulta</button></a
        >
      </div>
    </div>

    <div class="sobre sobre--insonia">
      <figure>
        <img src="../assets/insonia.jpeg" alt="insonia" />
      </figure>
      <div>
        <h2>INSÔNIA</h2>

        <p>
          A hipnoterapia oferece uma excelente alternativa de tratamento para
          que você não precise mais se dopar para conseguir dormir. Usando
          diversas técnicas combinadas, reeducamos as emoções que estão causando
          a perturbação no sono e o cliente já nota a diferença desde a primeira
          sessão. Volte a dormir tranquilamente sem precisar do famoso
          "remedinho pra dormir". Clique abaixo e agende sua avaliação.
        </p>
        <a
          href="https://wa.me/5521988294990?text=Oi.%20Gostaria%20de%20saber%20como%20faço%20para%20agendar%20um%20atendimento."
          target="_blank"
          rel="WhatsApp JCE Hipnoterapeuta"
          ><button class="sobre__btn">Agende uma consulta</button></a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre {
  display: grid;
  /* grid-template-columns: minmax(250px, 1fr) 2fr; */
  grid-template-columns: 1fr;
  align-items: top;
  grid-gap: 20px;

  margin-bottom: 30px;
  padding: 20px;
  margin: 30px 10px;

  border-radius: 50px;
}
.sobre--deprecao {
  background: #6df1db;
}
.sobre--ansiedade {
  background: #83cdf7;
}
.sobre--insonia {
  background: #efafd5;
}

.sobre img {
  width: 100%;
  border-radius: 10px;
}

.sobre__btn {
  height: 50px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid white;

  background: #b698de;
  color: black;

  transition: 0.3s;

  float: right;
}

.sobre__btn:hover {
  background: #9c11e2;
}

p {
  color: black;
}
</style>
