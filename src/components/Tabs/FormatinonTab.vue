<template>
  <div class="formation-tab">
    <div class="formation-mode-line">FORMAÇÕES</div>
    <div class="formation-body formation-screen">
      <div class="formation-list">
        <div
          v-for="formation in formationsFiltradas"
          :key="formation.id"
          class="formation-item"
          :class="{ 'active-item': selectedFormation?.id === formation.id }"
          @click="selectedFormation = formation"
        >
          {{ formation.nomeInstituicao }}
        </div>
      </div>

      <div class="formation-details" v-if="selectedFormation">
        <div class="formation-wrapper">
          <div class="formation-preview-box">
            <img
              :src="selectedFormation.image"
              :alt="selectedFormation.nomeInstituicao"
              class="formation-image"
            />
            <div class="formation-overlay"></div>
          </div>

          <div class="formation-description">
            <h3 class="formation-title">{{ selectedFormation.nomeInstituicao }}</h3>
            <div class="formation-course-list">
              <span
                v-for="(curso, index) in selectedFormation.curso"
                :key="index"
              ><h3>{{ curso }}</h3>
              </span>
            </div>
            
            <div class="formation-language-list">
              <h4>Aprendizados:</h4>
              <span
                v-for="(lang, index) in selectedFormation.linguagens"
                :key="index"
              >
                {{ lang }}
              </span>
            </div>

            <p class="formation-text">{{ selectedFormation.description }}</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  activeSub: { type: String, default: 'CURSOS' }
})

const activeCategory = computed(() =>
  props.activeSub === 'FACULDADE' ? 'faculdade' : 'cursos'
)

const formations = ref([
  {
    id: 1,
    categoria: 'cursos',
    nomeInstituicao: "Cesmar",
    curso: ["Desenvolvimento Full Stack"],
    linguagens: ["Java", "PostgreSQL", "HTML", "CSS", "Vue"],
    description: "Meu primeiro contato com a programação, onde aprendi os fundamentos do desenvolvimento web e criei projetos práticos para consolidar meu aprendizado.",
    image: new URL('../../assets/img/foto_cesmar.png', import.meta.url).href,
  },
  {
    id: 2,
    categoria: 'cursos',
    nomeInstituicao: "Instituto da Oportunidade Social",
    curso: ["Desenvolvimento Web Full Stack"],
    linguagens: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    description: "Primeira interação no mundo da programação.",
    image: new URL('../../assets/img/foto_IOS.jpg', import.meta.url).href,
  },
  {
    id: 3,
    categoria: 'cursos',
    nomeInstituicao: "Pão dos Pobres",
    curso: ["Corte, Costura e modelagem sustentável"],
    linguagens: ["Costura industrial", "Modelagem", "Sustentabilidade"],
    description: "Curso de corte e costura, onde aprendi técnicas de modelagem, costura industrial e sustentabilidade, aplicando esses conhecimentos em projetos práticos para desenvolver habilidades na área têxtil.",
    image: new URL('../../assets/img/foto_pao.png', import.meta.url).href,
  },
  {
    id: 4,
    categoria: 'faculdade',
    nomeInstituicao: "UNISINOS",
    curso: ["Tecnólogo em Marketing"],
    linguagens: ["Composores de Marketing", "Gestão de Marcas", "Pesquisa de Mercado"],
    description: "Minha primeira formção acadêmica, onde adquiri conhecimentos em marketing digital, estratégias de mercado e análise de dados, complementando minha formação técnica com uma visão mais ampla do mercado e do comportamento do consumidor.",
    image: new URL('../../assets/img/foto_unisinos.png', import.meta.url).href,
  },
])

const formationsFiltradas = computed(() =>
  formations.value.filter(f => f.categoria === activeCategory.value)
)

const selectedFormation = ref(formationsFiltradas.value[0] ?? null)

watch(activeCategory, () => {
  selectedFormation.value = formationsFiltradas.value[0] ?? null
})
</script>

<style scoped>
.formation-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
}

.formation-mode-line {
  text-align: start;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  opacity: 0.7;
  padding: 0 18px 0;
  margin-top: -0.5rem;
}

.formation-screen {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  flex: 1;
  padding: 12px 16px;
  min-height: 190px;
  gap: 20px;
}

.formation-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: hidden;
}

.formation-item {
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

.formation-item.active-item {
  background: var(--color-pip-boy);
  color: #000;
  font-weight: bold;
  opacity: 1;
  box-shadow: 0 0 8px var(--color-pip-boy);
}

.formation-item:hover:not(.active-item) {
  opacity: 1;
  border-left: 3px solid var(--color-pip-boy);
  padding-left: 9px;
}

.formation-details {
  flex: 1.2;
  border-left: 1px dashed rgba(0, 255, 0, 0.2);
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}

.formation-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}

.formation-preview-box {
  position: relative;
  width: 100%;
  height: 360px;
  border: 1px solid var(--color-pip-boy);
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);
}

.formation-image {
  width: 100%;
  height: 100%;
}

.formation-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 6px 100%;
  pointer-events: none;
}

.formation-description {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.formation-title {
  font-size: 1rem;
  margin: 0;
  color: var(--color-pip-boy);
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(0, 255, 0, 0.3);
  padding-bottom: 5px;
}

.formation-text {
  font-size: 1rem;
  line-height: 1.2;
  color: var(--color-pip-boy);
  opacity: 0.85;
}

.formation-course-list {
  display: flex;
  margin: 0 -1rem 0 ;
  gap: 1rem;
}

.formation-course-list span {
  color: var(--color-projects);
  text-align: center;
  padding: 0.1rem 1rem;
  font-size: 1rem;
}

.formation-language-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.formation-language-list span {
  color: var(--color-projects);
  text-align: center;
  border: 1px solid var(--border-language);
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
}

@media (max-width: 1024px) {
.formation-mode-line {
    display: none;
  }

.formation-screen {
  flex-direction: column;
  padding: 20px 16px 100px;
}
.formation-item {
  font-size: 1.5rem;
}

.formation-details {
  border-left: none;
  padding-left: 0;
}

.formation-title {
  font-size: 2rem;
}

.formation-preview-box {
  height: 480px;
}

.formation-text {
  font-size: 2rem;
}

.formation-course-list span {
  text-align: start;
  font-size: 2rem;
}

.formation-language-list span {
  font-size: 2rem;
}
.formation-language-list h4 {
  font-size: 2rem;
}
}

@media (max-width: 768px) {
  .formation-mode-line {
    display: none;
  }

.formation-screen {
  flex-direction: column;
  padding: 20px 16px 100px;
}
.formation-item {
  font-size: 1.3rem;
}

.formation-details {
  border-left: none;
  padding-left: 0;
}

.formation-title {
  font-size: 1.5rem;
}

.formation-preview-box {
  height: 380px;
}

.formation-text {
  font-size: 1.5rem;
}

.formation-course-list span {
  text-align: start;
}

.formation-language-list span {
  font-size: 2rem;
}
.formation-language-list h4 {
  font-size: 2rem;
}
}

@media (max-width: 480px) {
  .formation-mode-line {
    display: none;
  }

.formation-screen {
  flex-direction: column;
  padding: 20px 16px 100px;
}
.formation-item {
  font-size: 0.9rem;
}

.formation-details {
  border-left: none;
  padding-left: 0;
}

.formation-preview-box {
  height: 160px;
}

.formation-text {
  font-size: 1.1rem;
}

.formation-course-list span {
  text-align: start;
  font-size: 1.3rem;
}

.formation-language-list span {
  font-size: 1rem;
}
.formation-language-list h4 {
  font-size: 1.2rem;
}
}
</style>