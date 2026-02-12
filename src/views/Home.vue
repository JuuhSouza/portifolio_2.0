<template>
  <Banner/>
  <AboutMe/>
  <SoftSkills/>
  <HardSkill/>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import Banner from '../components/Banner.vue';
import SoftSkills from '../components/SoftSkills.vue';
import HardSkill from '../components/HardSkill.vue';

  export default {
    name: "Home",
    components:{
      Banner, AboutMe, SoftSkills, HardSkill
    }
  }
</script>

<style scoped>



</style>