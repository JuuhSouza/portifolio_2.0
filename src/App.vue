<template>
  <div class="app">
  <NavBar/>
  <router-view />
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/navBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components:{
    NavBar, Footer
  }
}
</script>

<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: var(--font);
}
</style>
