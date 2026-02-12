<template>
  <section class="about">
    <img src="../assets/img/brasao.tucano.png" />
    <div class="text-about">
      <h1>Olá meu nome é <span>Júlia Souza</span></h1>
      <p>Residente de Porto Alegre - RS, iniciei minha jornada profissional aos 16 anos, movida pelo desejo de amadurecimento e pela busca de novos desafios no mercado. Nas horas vagas, encontro no artesanato o refúgio perfeito para relaxar e exercitar a paciência. Essa mesma paixão pela criação manual me trouxe à programação: me encanto com a forma como cada linha é planejada e construída. Hoje, meu foco é o Front-end, com o objetivo de expandir meus horizontes para o design e as animações 3D</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};

</script>

<style scoped>
.about {
  min-height: 100vh;
  background: var(--background-color-about);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: -5em;
  margin-top: -3em;
  padding: 18em;
}

.about img{
  width: 300px;
  border: 2px solid var(--border-image);
  box-shadow: 0 0 20px var(--box-shadow-card);
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
}

.about img:hover{
  transform: translateY(-36px);
}

.text-about h1{
  font-size: 2em;
  margin: 20px 1em;
  color: var(--title-color-about);
}

.text-about span{
  color: var(--title-color-span);
}

.text-about p{
  font-size: 1.2em;
  margin: 20px 1em;
  color: var(--p-color-about);
}




</style>