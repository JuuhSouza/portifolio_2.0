<template>
  <Banner/>
  <AboutMe/>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import Banner from '../components/Banner.vue';

  export default {
    name: "Home",
    components:{
      Banner, AboutMe
    }
  }
</script>

<style scoped>



</style>