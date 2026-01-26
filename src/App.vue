<template>
  <NavBar/>
  <Home/>
  <router-view />
</template>

<script>

import NavBar from './components/navBar.vue'
import Home from './views/Home.vue';

export default {
  name: "App",
  components:{
    NavBar, Home
  }
}
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
