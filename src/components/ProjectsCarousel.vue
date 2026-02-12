<template>
  <section class="projects-section">
<!--     <div class="water-light"></div> -->
    
    <h2 class="title">Meus Projetos</h2>
    
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="project in projects" :key="project.id">
        <div class="water-card">
          <div class="img-box">
             <img :src="project.image" :alt="project.title" />
          </div>
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" class="water-btn">Explorar</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
    name : "ProjectsCarouse",
  components: { Swiper, SwiperSlide },
  setup() {
    const projects = [
      { id: 1, title: 'projeo 1', description: '...', image: new URL('../assets/img/brasao.tucano.png', import.meta.url).href , link: 'https://github.com/JuuhSouza/portifolio_2.0/blob/main/src/components/SoftSkills.vue'
        },
      { id: 2, title: 'projeo 2', description: '...', image: new URL('../assets/img/brasao.tucano.png', import.meta.url).href 
        },
      { id: 3, title: 'projeo 3', description: '...', image: new URL('../assets/img/brasao.tucano.png', import.meta.url).href 
        },
    ];

    return { projects, modules: [EffectCoverflow, Pagination] };
  },
};
</script>

<style scoped>
.projects-section {
  background: var(--background-projects);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

/* .water-light {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
  opacity: 0.1;
  pointer-events: none;
} */

.title {
  text-align: center;
  color: var(--title-color-project);
  font-size: 3rem;
  text-shadow: 0 0 20px #a0e9ff80;
  margin-bottom: 50px;
}

.swiper { padding: 50px 0; }

.swiper-slide {
  width: 320px;
  height: 450px;
  transition: 0.5s;
}

.water-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px); /* Efeito de vidro */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 
              inset 0 0 15px rgba(160, 233, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.img-box {
  width: 100%;
  height: 50%;
  overflow: hidden;
  position: relative;
}

.img-box::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(26, 58, 74, 0.8));
}

.img-box img {
  width: 100%; height: 100%; object-fit: cover;
}

.card-content {
  padding: 20px;
  text-align: center;
}

.card-content h3 { 
    color: var(--h3-color-project); 
    margin-bottom: 10px; 
}

.card-content p { 
    color: var(--p-color-projects); 
    font-size: 0.9rem; 
}

.water-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 30px;
  background: rgba(160, 233, 255, 0.2);
  color: var(--water-btn);
  border: 1px solid #a0e9ff;
  border-radius: 50px;
  text-decoration: none;
  transition: 0.3s;
  color: var(--button-btn);
}

.water-btn:hover {
  background: var(--water-btn-hover-background);
  color: var(--water-btn-hover-color);
  box-shadow: 0 0 20px #a0e9ff;
  cursor: pointer;
}
</style>