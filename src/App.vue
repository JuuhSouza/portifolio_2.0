<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components:{
  }
}
</script>

<style>
*, *::before, 
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: var(--font);
}
</style>
