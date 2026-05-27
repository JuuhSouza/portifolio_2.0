<template>
  <nav class="pipboy-nav">
    <div class="nav-main">
      <span class="nav-gear"> <i class="fa-solid fa-gear"></i> </span>

      <div class="main-tabs">
        <button
          v-for="tab in mainTabs"
          :key="tab.id"
          class="main-tab"
          :class="{ active: activeMain === tab.id }"
          @click="selectMain(tab.id)"
        >
          <span v-if="activeMain === tab.id" class="bracket">⌐</span>
          {{ tab.label }}
          <span v-if="activeMain === tab.id" class="bracket">¬</span>
        </button>
      </div>

      <span class="nav-gear"><i class="fa-solid fa-address-card"></i></span>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-sub" v-if="currentSubTabs.length">
      <button
        v-for="sub in currentSubTabs"
        :key="sub"
        class="sub-tab"
        :class="{ active: activeSub === sub }"
        @click="selectSub(sub)"
      >
        {{ sub }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: 'stat' }
})
const emit = defineEmits(['update:modelValue', 'update:sub'])

const activeMain = ref(props.modelValue)
const activeSub  = ref('STATUS')

const mainTabs = [
  { id: 'status',  label: 'STATUS'  },
  { id: 'skills',   label: 'SKILLS'   },
  { id: 'formacao',  label: 'FORMAÇÕES'  },
  { id: 'projetos',   label: 'PROJETOS'   }
]

// cada aba principal tem suas próprias sub-abas
const subTabMap = {
  status:  ['STATUS', 'SOBRE'],
  skills:   ['SOFT SKILLS', 'HARD SKILLS'],
  formacao:  ['CURSOS', 'FACULDADE'],
  projetos:   ['FRONT-END', 'BACK-END']
}

const currentSubTabs = computed(() => subTabMap[activeMain.value] ?? [])

const selectMain = (id) => {
  activeMain.value = id
  activeSub.value  = subTabMap[id]?.[0] ?? ''
  emit('update:modelValue', id)
  emit('update:sub', activeSub.value)
}

const selectSub = (sub) => {
  activeSub.value = sub
  emit('update:sub', sub)
}

watch(() => props.modelValue, (val) => {
  activeMain.value = val
  activeSub.value  = subTabMap[val]?.[0] ?? ''
})
</script>

<style scoped>
.pipboy-nav {
  width: 100%;
}

.nav-main {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 4px 8px 0 8px;
}

.nav-gear {
  font-size: 1rem;
  opacity: 0.9;
  background-color: var(--icon-background-color);
  padding: 6px 6px;
  line-height: 1;
  margin: 4px;
  color: var(--color-pip-boy);
}

.nav-gear i {
  color: var(--color-pip-boy);
}

.main-tabs {
  display: flex;
  gap: 4px;
  align-items: center;
}

.main-tab {
  background: none;
  border: none;
  color: var(--color-pip-boy);
  font-family: var(--font);
  font-size: 1.2rem;
  letter-spacing: 0.20em;
  cursor: pointer;
  padding: 2px 14px;
  opacity: 0.45;
  text-shadow: inherit;
  transition: opacity 0.4s, border-color 0.3s;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 2px;
}

.main-tab:hover { 
  opacity: 0.8; 
}

.main-tab.active {
  opacity: 1;
  font-weight: bold;
  border: 1px solid var(--color-pip-boy);
  border-bottom:none ;
  margin-bottom: -1px;
  position: relative;
  z-index: 1;
  background-color: var(--background-color);
  animation: pip-select 0.4s ease-out;
}

.bracket {
  font-size: 1.2rem;
  line-height: 1;
}

.nav-divider {
  height: 1px;
  background: var(--color-pip-boy);
  margin: 0 0 10px 0;
}

.nav-sub {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 4px 0 0;
}

.sub-tab {
  background: none;
  border: none;
  color: var(--color-pip-boy);
  font-family: var(--font);
  font-size: 1rem;
  letter-spacing: 0.12em;
  cursor: pointer;
  padding: 2px 4px;
  opacity: 0.45;
  text-shadow: inherit;
  transition: opacity 0.1s;
}

.sub-tab:hover { 
  opacity: 0.8; 
}

.sub-tab.active {
  opacity: 1;
  font-weight: bold;
}

@keyframes pip-select {
  0%   { opacity: 0.2; }
  20%  { opacity: 1;   }
  35%  { opacity: 0.4; }
  50%  { opacity: 1;   }
  70%  { opacity: 0.7; }
  100% { opacity: 1;   }
}
</style>