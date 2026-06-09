<template>
  <div class="stat-tab">
    <div class="view-mode-line">SKILLS</div>
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

      <div class="project-details" v-if="selectedProject">
        <div class="details-wrapper">
          <div class="project-preview-box">
            <img
              :src="selectedProject.image"
              :alt="selectedProject.name"
              class="project-image"
            />
          </div>
          <div class="project-description">
            <p class="project-text">{{ selectedProject.description }}</p>
          </div>
        </div>
      </div>

      <div class="project-details" v-else>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  activeSub: { type: String, default: 'SOFT SKILLS' }
})

const categoriaAtiva = computed(() =>
  props.activeSub === 'SOFT SKILLS' ? 'soft' : 'hard'
)

watch(() => props.activeSub, (val) => {
  console.log('activeSub recebido:', val)
}, { immediate: true })

const projects = ref([
  {
    id: 1,
    categoria: 'soft',
    name: "Trabalho em Grupo",
    description: "Tenho facilidade para trabalhar em equipe, colaborando de forma organizada e respeitosa para alcançar objetivos em comum. Valorizo a troca de conhecimentos, a comunicação clara e a cooperação entre os membros da equipe, contribuindo para um ambiente produtivo e resultados de qualidade.",
    image: new URL('../../assets/img/softSkill_trabalhoGrupo.png', import.meta.url).href,
    link: "#"
  },
  {
    id: 2,
    categoria: 'soft',
    name: "Proatividade",
    description: "Tenho iniciativa para identificar oportunidades, resolver problemas e agir de forma antecipada, buscando constantemente melhorias e contribuindo para o alcance dos objetivos.",
    image: new URL('../../assets/img/softSkill_proatividade.png', import.meta.url).href,
    link: "#"
  },
  {
    id: 3,
    categoria: 'soft',
    name: "Criatividade",
    description: "Tenho capacidade para gerar ideias novas e inovadoras, pensando fora da caixa e explorando diferentes abordagens para resolver problemas e criar soluções criativas.",
    image: new URL('../../assets/img/softSkill_criatividade.png', import.meta.url).href,
    link: "#"
  },
  {
    id: 4,
    categoria: 'hard',
    name: "GIT e GitHub",
    description: "Conhecimento em controle de versão para gerenciar alterações no código, criar ramificações (branches), realizar merges e manter o histórico de desenvolvimento de projetos.",
    image: new URL('../../assets/img/hardSkill_git.png', import.meta.url).href,
    link: "#"
  },
  {
    id: 5,
    categoria: 'hard',
    name: "HTMl e CSS",
    description: "Conhecimento na estruturação de páginas web utilizando marcação semântica, garantindo organização, acessibilidade e boas práticas de desenvolvimento.",
    image: new URL('../../assets/img/hardSkill_HTML.png', import.meta.url).href,
    link: "#"
  },
  {
    id: 6,
    categoria: 'hard',
    name: "JavaScript e TypeScript",
    description: "Conhecimento no desenvolvimento de funcionalidades interativas para aplicações web, utilizando lógica de programação, manipulação do DOM e integração com APIs.",
    image: new URL('../../assets/img/hardSkill_jsTs.png', import.meta.url).href,
    link: "#"
  },
  {
    id: 7,
    categoria: 'hard',
    name: "VUE e Nuxt",
    description: "Experiência no desenvolvimento de interfaces modernas e reativas, utilizando componentes reutilizáveis para criar aplicações web dinâmicas e eficientes.",
    image: new URL('../../assets/img/hardSkill_vue.png', import.meta.url).href,
    link: "#"
  },
  {
    id: 8,
    categoria: 'hard',
    name: "API",
    description: "Experiência na integração e consumo de APIs REST, realizando requisições, tratamento de dados e comunicação entre aplicações e serviços externos.",
    image: new URL('../../assets/img/hardSkill_api.png', import.meta.url).href,
    link: "#"
  },
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
  align-items: center;
  justify-content: center;
  height: 100%;
}

.project-preview-box {
  position: relative;
  width: 400px;
  height: 340px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  filter: grayscale(100%) brightness(0.8) contrast(1.2) sepia(100%) hue-rotate(60deg) saturate(3.5);
}

.project-description {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 730px;
  text-align: start;
}

.project-text {
  font-size: 1rem;
  line-height: 1.3;
  margin: 8px 0 0 0;
  color: var(--color-pip-boy);
  opacity: 0.85;
}

@media (max-width: 1024px) {
 .project-item {
  font-size: 1rem;
}

  .view-mode-line {
    display: none;
}

  .execution-screen {
    flex-direction: column;
    padding: 20px 16px 100px;
}

.project-preview-box {
  width: 500px;
  height: 400px;
}

.project-description {
  width: 800px;
}

.project-text {
  font-size: 1rem;
}

.project-details {
  border-left: none;
}
}

@media (max-width: 768px) {
  .project-item {
  font-size: 1rem;
}

  .view-mode-line {
    display: none;
}

  .execution-screen {
    flex-direction: column;
}

.project-preview-box {
  width: 400px;
  height: 350px;
}

.project-description {
  width: 600px;
}

.project-text {
  font-size: 1rem;
    margin: 0 0 -10rem 0;
}

.project-details {
  border-left: none;
}
}

@media (max-width: 480px) {
  .project-item {
  font-size: 0.9rem;
}

  .view-mode-line {
    display: none;
}

  .execution-screen {
    flex-direction: column;
}

.project-preview-box {
  width: 300px;
  height: 240px;
}

.project-description {
  width: 370px;
}

.project-text {
  font-size: 1rem;
}

.project-details {
  border-left: none;
}
}

</style>