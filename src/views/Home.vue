<template>
  <Banner/>
  <AboutMe/>
  <SoftSkills/>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import Banner from '../components/Banner.vue';
import SoftSkills from '../components/SoftSkills.vue';

  export default {
    name: "Home",
    components:{
      Banner, AboutMe, SoftSkills
    }
  }
</script>

<style scoped>



</style>