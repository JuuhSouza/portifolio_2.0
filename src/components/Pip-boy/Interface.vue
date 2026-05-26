<template>
   <div class="pipboy-content">
    <header class="pipboy-header">
      <h1>PIP-BOY 3000 PLUS</h1>
        <NavBar/>
    </header>
    
    <main class="pipboy-main">
      <h2>BEM-VINDO, RECRUTA.</h2>
      <p>Este é o seu novo painel Pip-Boy segregado em componentes!</p>
    </main>
  </div>
</template>

<script>
import NavBar from '../NavBar.vue'

export default {
  components: {
    NavBar
  }
}

</script>

<style scoped>
.pipboy-header {
  border-bottom: 2px solid var(--color-pip-boy);
  padding-bottom: 15px;
  margin-bottom: 30px;
}
.pipboy-header h1 {
  margin: 0 0 15px 0;
  font-size: 2rem;
}
.pipboy-nav {
  display: flex;
  gap: 20px;
}
.nav-btn {
  background: none;
  border: none;
  color: var(--color-pip-boy);
  font-family: inherit;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 10px;
}
.nav-btn:hover, .nav-btn.active {
  background-color: var(--color-pip-boy);
  color: var(--color-dark-green);
  font-weight: bold;
}
</style>