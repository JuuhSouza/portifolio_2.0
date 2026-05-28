<template>
  <div class="stat-tab">
    <div class="view-mode-line">FORMAÇÕES</div>
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
            <div class="image-overlay"></div>
          </div>
          <div class="project-description">
            <h3 class="project-title">{{ selectedProject.name }}</h3>
            <p class="project-text">{{ selectedProject.description }}</p>
            <a :href="selectedProject.link" class="link-repo">Ver mais</a>
          </div>
        </div>
      </div>

      <div class="project-details" v-else>
        <span style="opacity: 0.4">— SELECIONE —</span>
      </div>

    </div>

    <div class="quick-items">
      <div class="quick-item">STIMPAK (1)</div>
      <div class="quick-item">RADAWAY (0)</div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  activeSub: { type: String, default: 'STATUS' }
})

const categoriaAtiva = computed(() =>
  props.activeSub === 'STATUS' ? 'status' : 'sobre'
)

watch(() => props.activeSub, (val) => {
  console.log('activeSub recebido:', val)
}, { immediate: true })

const projects = ref([
  {
    id: 1,
    categoria: 'cursos',
    name: "PROJECT AQUA",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
    link: "#"
  },
  {
    id: 2,
    categoria: 'cursos',
    name: "G.E.C.K. INIT",
    description: "Kit de Criação do Jardim do Éden.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80",
    link: "#"
  },
  {
    id: 3,
    categoria: 'faculdade',
    name: "LIBERTY PRIME",
    description: "Restauração do sistema tático de combate robótico gigante.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80",
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