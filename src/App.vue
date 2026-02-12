<template>
  <NavBar/>
<!--   <Home/> -->
  <router-view />
</template>

<script>
import NavBar from './components/navBar.vue'
/* import Home from './views/Home.vue'; */

export default {
  name: "App",
  components:{
    NavBar/* Home */
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
