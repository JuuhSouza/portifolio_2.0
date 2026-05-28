<template>
  <div class="stat-tab">
    <div class="sub-tabs">
      <button
        v-for="cat in categorias"
        :key="cat.id"
        class="sub-tab"
        :class="{ active: categoriaAtiva === cat.id }"
        @click="categoriaAtiva = cat.id"
      >
        {{ cat.label }}
      </button>
    </div>

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
            <p class="project-text">{{ selectedProject.description }}</p>
            <a :href="selectedProject.link" class="link-repo">Ver mais</a>
          </div>
        </div>
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
    name: "PROJECT AQUA",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
    link: "#"
  },
  {
    id: 2,
    categoria: 'front',
    name: "G.E.C.K. INIT",
    description: "Kit de Criação do Jardim do Éden.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80",
    link: "#"
  },
  {
    id: 3,
    categoria: 'back',
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

<style scoped>
.stat-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0;
}

.view-mode-line {
  text-align: center;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  opacity: 0.35;
  padding: 4px 0 8px;
}

.execution-screen {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  flex: 1;
  padding: 12px 16px;
  min-height: 490px;
  gap: 20px;
}

.projects-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
}

.project-item {
  padding: 6px 12px;
  font-size: 0.95rem;
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
  color: #000 !important;
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
  height: 380px;
  border: 1px solid var(--color-pip-boy);
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.8) contrast(1.2) sepia(100%) hue-rotate(60deg) saturate(6);
}

.image-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 6px 100%;
  pointer-events: none;
}

.project-description {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.link-repo{
  margin: 0.5rem 0 0 40rem;
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
  font-size: 0.9rem;
  line-height: 1.3;
  margin: 4px 0 0 0;
  color: var(--color-pip-boy);
  opacity: 0.85;
}

.equipment-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  border-top: 1px solid var(--color-pip-boy);
  border-bottom: 1px solid var(--color-pip-boy);
}

.equip-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  gap: 2px;
  border: 1px solid var(--color-pip-boy);
  padding: 4px 8px;
  min-width: 36px;
  color: var(--color-pip-boy);
}

.equip-slot.diamond {
  border-color: transparent;
}

.equip-icon {
  font-size: 1.1rem;
}

.quick-items {
  display: flex;
  gap: 4px;
  padding: 6px 0;
}

.quick-item {
  border: 1px solid var(--color-pip-boy);
  padding: 3px 14px;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  opacity: 0.85;
  color: var(--color-pip-boy);
}
</style>