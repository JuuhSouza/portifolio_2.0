<template>
  <section class="about">
    <img src="../assets/img/brasao.tucano.png" />
    <div class="text-about">
      <h1>Sobre mim</h1>
      <p>Desenvolvedora Front-end focado em experiências visuais.</p>
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
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: -5em;
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
  color: var(--title-color);
}

.text-about p{
  font-size: 1.2em;
  margin: 20px 1em;
  color: var(--p-color);
}




</style>