<template>
  <Banner/>
  <AboutMe/>
  <SoftSkills/>
  <HardSkills/>
  <ProjectsCarousel/>
  <NewProjectsCarousel/>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import Banner from '../components/Banner.vue';
import SoftSkills from '../components/SoftSkills.vue';
import HardSkills from '../components/HardSkills.vue';
import ProjectsCarousel from '../components/ProjectsCarousel.vue';
import NewProjectsCarousel from '../components/NewProjectsCarousel.vue';

  export default {
    name: "Home",
    components:{
      Banner, AboutMe, SoftSkills, HardSkills, ProjectsCarousel, NewProjectsCarousel
    }
  }
</script>

<style scoped>



</style>