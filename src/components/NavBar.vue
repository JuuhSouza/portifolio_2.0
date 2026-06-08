<template>
  <nav class="pipboy-nav">
    <div class="nav-main">
      <span class="nav-gear"><i class="fa-solid fa-gear"></i></span>
      <button class="arrow-btn" @click="scrollTabs(-1)">
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <div class="main-tabs" ref="tabsRef">
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

      <button class="arrow-btn" @click="scrollTabs(1)">
        <i class="fa-solid fa-chevron-right"></i>
      </button>

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

const tabsRef = ref(null)

const scrollTabs = (dir) => {
  if (tabsRef.value) {
    tabsRef.value.scrollBy({ left: dir * 120, behavior: 'smooth' })
  }
}
const props = defineProps({
  modelValue: { type: String, default: 'stat' }
})
const emit = defineEmits(['update:modelValue', 'update:sub'])

const activeMain = ref(props.modelValue)
const activeSub  = ref('STATUS')

const mainTabs = [
  { id: 'status',  label: 'STATUS'  },
  { id: 'skills',   label: 'SKILLS'   },
  { id: 'formacoes',  label: 'FORMAÇÕES'  },
  { id: 'projetos',   label: 'PROJETOS'   }
]

const subTabMap = {
  status:  ['STATUS', 'SOBRE'],
  skills:   ['SOFT SKILLS', 'HARD SKILLS'],
  formacoes:  ['CURSOS', 'FACULDADE'],
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

.main-tabs-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.arrow-btn {
  display: none;
  background: none;
  border: none;
  color: var(--color-pip-boy);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 4px 6px;
  opacity: 0.7;
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.arrow-btn:hover { 
  opacity: 1; 
}

.nav-sub {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 0 0;
}

.sub-tabs-inner {
  display: flex;
  gap: 24px;
}

@media (max-width: 1024px) {
  .main-tab {
    font-size: 1.6rem;
  }

  .sub-tab {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .main-tab {
    font-size: 1.2rem;
  }

  .nav-gear {
    font-size: 0.875rem;
  }

 .nav-main {
    align-items: center;
    padding: 4px 8px;
    justify-content: space-between; 
  }
}

@media (max-width: 480px) {
  .main-tabs {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .main-tabs::-webkit-scrollbar {
    display: none;
  }
  .arrow-btn {
    display: flex; 
    align-items: center;
  }

  .sub-tab {
    font-size: 0.9rem;
  }
}
</style>