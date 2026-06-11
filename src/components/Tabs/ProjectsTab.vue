<template>
  <div class="stat-tab">
    <div class="view-mode-line">PROJECTS MODE</div>
    <div class="stat-body execution-screen">
      <div class="projects-list">
        <div
          v-for="project in projetosFiltrados"
          :key="project.id"
          class="project-item"
          :class="{ 'active-item': selectedProject?.id === project.id }"
          @click="selectedProject = project"
        >
          {{ project.name }}
        </div>
      </div>

      <div class="project-details">
        <div class="details-wrapper">
          <div class="project-preview-box">
            <img
              :src="selectedProject.image"
              :alt="selectedProject.name"
              class="project-image"
            />
            <div class="image-overlay"></div>
          </div>

          <div class="project-description">
            <h3 class="project-title">{{ selectedProject.name }}</h3>
            <div v-if="selectedProject?.linguagens" class="project-languages-list">
    <h3>Linguagens utilizadas:</h3>
    <span 
      v-for="(lang, index) in selectedProject.linguagens" 
      :key="index" 
      class="lang-tag"
    >
    {{ lang }}
    </span>
</div>
            <p class="project-text">{{ selectedProject.description }}</p>
            <div class="link-more">
            <a :href="selectedProject.link" class="link-repo">Repositório</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]

const props = defineProps({
  activeSub: { type: String, default: 'FRONT-END' }
})

// mapeia o texto da sub-aba para o id da categoria
const categoriaAtiva = computed(() =>
  props.activeSub === 'BACK-END' ? 'back' : 'front'
)

const projects = ref([
{
    id: 1,
    categoria: 'front',
    name: "Corte e Costura",
    linguagens: [
      "JS", "VUE", "HTML", "CSS"
    ],
    description: "Site ainda em desenvolvimento, primeiras aplicações para estudo em vue.",
    image: new URL('../../assets/img/Projeto_CorteCostura.png', import.meta.url).href,
    link: "https://github.com/JuuhSouza/Site_Corte_Costura"
  },
{
    id: 2,
    categoria: 'front',
    name: "Imperius store",
    linguagens: [
      "JS", "VUE", "HTML", "CSS"
    ],
    description: "Site ainda em desenvolvimento, primeiras aplicações para estudo em vue.",
    image: new URL('../../assets/img/ProdutosImperiusStore.png', import.meta.url).href,
    link: "https://github.com/JuuhSouza/Imperius-Store"
  },
  {
    id: 3,
    categoria: 'front',
    name: "Jogo da velha",
    linguagens: [
      "JS", "HTML", "CSS"
    ],
    description: "Uma das primeiras tentativas de fazer background animado e também fazer algo em JS.",
    image: new URL('../../assets/img/Projeto_JogoDaVelha.png', import.meta.url).href,
    link: "https://github.com/JuuhSouza/JogoDaVelha"
  },
  {
    id: 4,
    categoria: 'front',
    name: "Calculadora",
    linguagens: [
      "JS", "HTML", "CSS"
    ],
    description: "Primeira aplicação em JS",
    image: new URL('../../assets/img/Projeto_Calculadora.png', import.meta.url).href,
    link: "https://github.com/JuuhSouza/calculadora"
  },
  {
    id: 5,
    categoria: 'front',
    name: "To do list",
    linguagens: [
      "JS", "HTML", "CSS"
    ],
    description: "Restauração do sistema tático de combate robótico gigante.",
    image: new URL('../../assets/img/Projeto_ToDoList.png', import.meta.url).href,
    link: "https://github.com/JuuhSouza/ListaDeTarefas"
  },
  {
    id: 6,
    categoria: 'back',
    name: "Souza Pizzaria",
    linguagens: [
      "PHP", "HTML", "CSS"
    ],
    description: "Primeiro projeto feito com PHP.",
    image: new URL('../../assets/img/Projeto_SouzasPizzaria.png', import.meta.url).href,
    link: "https://github.com/JuuhSouza/SouzaPizzaria"
  },
  {
    id: 7,
    categoria: 'back',
    name: "Make your burger",
    linguagens: [
      "Vue", "HTML", "CSS", "API própria", "JS"
    ],
    description: "Primeira aplicação de backend e vue, simulando um banco de dados com uma api própria que registra o pedido do cliente.",
    image: new URL('../../assets/img/Projeto_MakeYourBurger.png', import.meta.url).href,
    link: "#"
  }
])

const projetosFiltrados = computed(() =>
  projects.value.filter(p => p.categoria === categoriaAtiva.value)
)

const selectedProject = ref(projetosFiltrados.value[0])

// seleciona o primeiro projeto
watch(categoriaAtiva, () => {
  selectedProject.value = projetosFiltrados.value[0] ?? null
})

</script>

<style scoped>
.stat-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
}

.view-mode-line {
  text-align: start;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  opacity: 0.7;
  padding: 0 18px 0;
  margin-top: -0.5rem;
}

.execution-screen {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  flex: 1;
  padding: 12px 16px;
  min-height: 190px;
  gap: 20px;
}

.projects-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: hidden;
}

.project-item {
  padding: 6px 12px;
  font-size: 1.03rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  text-transform: uppercase;
  color: var(--color-pip-boy);
  opacity: 0.7;
}

.project-item.active-item {
  background: var(--color-pip-boy);
  color: #000;
  font-weight: bold;
  opacity: 1;
  box-shadow: 0 0 8px var(--color-pip-boy);
}

.project-item:hover:not(.active-item) {
  opacity: 1;
  border-left: 3px solid var(--color-pip-boy);
  padding-left: 9px;
}

.project-details {
  flex: 1.2;
  border-left: 1px dashed rgba(0, 255, 0, 0.2);
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}

.details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}

.project-preview-box {
  position: relative;
  width: 100%;
  height: 360px;
  border: 1px solid var(--color-pip-boy);
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);
}

.project-image {
  width: 100%;
  height: 100%;
}

.image-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 6px 100%;
  pointer-events: none;
}

.project-languages-list {
   display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 0.5rem 0;
}

.project-languages-list span{
color: var(--color-projects);
  border: 1px solid var(--border-language);
  padding: 0.1rem 0.5rem;
  font-size: 0.85rem;
  white-space: nowrap; /* ← tags não quebram */
}

.link-repo{
  padding: 0.2rem;
  text-align: center;
  color: var(--color-link);
  box-shadow: 0 0 8px var(--color-pip-boy);
  background-color: var(--backgroud-color-link);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.link-repo:hover{
  opacity: 0.5;
}

.project-title {
  font-size: 1rem;
  margin: 0;
  color: var(--color-pip-boy);
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(0, 255, 0, 0.3);
  padding-bottom: 5px;
}

.project-text {
  font-size: 1rem;
  line-height: 1.3;
  margin: 4px 0 1rem 0;
  color: var(--color-pip-boy);
  opacity: 0.85;
}

@media (max-width: 1024px) {
.stat-tab {
  height: 100%;
  gap: 0;
}

.view-mode-line {
  display: none;
}

.execution-screen {
  flex-direction: column;
  gap: 20px;
}

.project-item {
  font-size: 1rem;
}

.project-details {
  border-left:none;
}

.link-repo{
  padding: 0.2rem;
  text-align: center;
  font-size: 1rem;
}

.link-more{
  margin: 0 0 2rem;
}

.project-title {
  font-size: 1rem;
  padding-bottom: 5px;
}

.project-text {
  font-size: 1rem;
  margin: 0  0 1rem 0;
}
}

@media (max-width: 768px) {
.link-more{
  margin: 0 0 -1rem 0;
}
}

@media (max-width: 480px) {
.project-item {
  font-size: 1rem;
}

.link-more{
  margin: 0 0 2rem;
}

.project-title {
  font-size: 1rem;
  padding-bottom: 5px;
}

.project-text {
  font-size: 1rem;
}

 .project-languages-list {
    gap: 4px;
}

  .project-languages-list span {
    font-size: 1rem;
    padding: 0.1rem 0.4rem;
  }

.project-preview-box {
  height: 200px;
  margin-left: -0.5rem;
}
}
</style>