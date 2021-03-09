<template>
  <ul>
    <li class="card" v-for="cite of cites" :key="cite.name">
      <blockquote>
        <cite>{{ cite.name }}</cite>
        <br />
        {{ cite.quote }}
      </blockquote>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TestimonialCard',

  data() {
    return {
      cites: [
        {
          pic: '../assets/user3.png',
          name: 'Sra. Dê, 69 anos - Bangu-RJ',
          quote: 'Em minha adolescência sofri um abuso e isso me gerou uma depressão profunda desde então. Isso se agravou após eu perder um filho num acidente de carro. Minha vida era acordar pela manhã e chorar por horas no quarto sozinha, antes de ter coragem para sair para os meus afazeres. Buscando uma solução para meu sofrimento, encontrei o Júlio César, que me estendeu a mão, e através da hipnose me tirou do buraco emocional em que eu vivia. Obrigada Júlio César!',
        },
        {
          pic: '@/assets/user1.png',
          name: 'Luiza - 27 anos, Caxias-RJ',
          quote: 'Me sentia extremamente triste e sem ânimo algum para fazer coisas que antes me davam tanto prazer. Desanimei da faculdade, da igreja e até o relacionamento com meu esposo começou a ser afetado por causa da depressão. Foi então que busquei a ajuda do Júlio César, e através da hipnoterapia minha vida brilhou novamente.',
        },
        {
          pic: '../assets/user2.png',
          name: 'Charles - 35 anos, Nilópolis - RJ',
          quote: 'Após anos de depressão e problemas de baixa autoestima, tentei o suicídio. Foi então que através de uma amiga, soube do trabalho com hipnose do Júlio César. Marquei minha avaliação e logo após a primeira sessão de terapia (onde já notei diferenças fantásticas nos meus sentimentos). Hoje sigo minha vida tranquilo e agradecido por ter encontrado esse ótimo hipnoterapeuta.',
        },

        {
          pic: '../assets/user3.png',
          name: 'Luciane - 31 anos, São Gonçalo-RJ',
          quote: 'Terríveis crises de ansiedade surgiram após eu ser diagnosticada com uma depressão pós-parto. Como se não bastasse, vieram também crises de insônia. Já não aguentava mais essa situação, e quando me indicaram o excelente trabalho do hipnoterapeuta Júlio César, procurei-o e agendei a terapia com hipnose. Gente... O tratamento foi além das minhas expectativas! Hoje consigo viver alegre, em paz e com a ansiedade sob controle.',
        },
        {
          pic: '../assets/user3.png',
          name: 'Irys - 22 anos, São Gonçalo-RJ',
          quote: 'Ao procurar alternativas para minhas instabilidades emocionais, encontrei a hipnoterapia apesar de pouco conhecê-la. O hipnoterapeuta Júlio César apareceu para sanar dúvidas e fornecer mais conhecimento sobre o tratamento com hipnose, e então seguimos com a terapia. Faltam palavras para descrever o que é isso que muda e transforma vidas. Hoje eu tenho o controle sobre meus sentimentos, não mais sofro por eles, e vejo uma perspectiva de vida bem melhor. Eu indico essa terapia para o mundo! Mantenha a mente aberta e se permita.  É real, é transformador e muda nossa qualidade de vida.',
        },
        {
          pic: '../assets/user3.png',
          name: 'Alex - 19 anos, Magé-RJ',
          quote: 'Já havia desistido de encontrar solução para as constantes crises de ansiedade e insônia que sofria desde os meus 15 anos. Em alguns momentos estas crises causavam bulimia, em outras vezes diarreia. Foi então que em 2019 soube da eficácia da hipnoterapia, e com o auxílio do terapeuta Júlio César minha vida se transformou. Aquele sofrimento todo não existe mais. Sou grato.  Recomendo esse profissional.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 500px;
  grid-gap: 30px;

  padding: 20px;

  background: #ffffff;
  box-shadow: 20px 20px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

ul {
  display: flex;
  grid-gap: 30px;
  overflow: auto;
  padding: 30px;
}

blockquote {
  font-family: Avenir, Arial, sans-serif;
  font-size: 18px;
  line-height: 180%;
}

cite {
  font-family: Avenir, Arial, sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 160%;
}
</style>
