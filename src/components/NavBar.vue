<template>
  <nav class="pipboy-nav">
    <div class="nav-main">
      <span class="nav-gear"><i class="fa-solid fa-gear"></i></span>

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

      <button class="terminal-btn" @click="toggleMenu">
        <span class="terminal-prefix">C:\&gt;</span>
        <span class="terminal-label">{{ activeMain.toUpperCase() }}</span>
        <i class="fa-solid" :class="menuOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
      </button>

      <span class="nav-gear"><i class="fa-solid fa-address-card"></i></span>
    </div>

    <Transition name="terminal-drop">
      <div class="terminal-menu" v-if="menuOpen">
        <div class="terminal-line prefix-line">
          <span class="t-prefix">ROBCO INDUSTRIES TERMLINK</span>
        </div>
        <div class="terminal-line prefix-line">
          <span class="t-prefix">SELECT MODULE:</span>
        </div>
        <div class="terminal-line prefix-line">
          <span class="t-prefix">————————————————</span>
        </div>
        <button
          v-for="(tab, index) in mainTabs"
          :key="tab.id"
          class="terminal-item"
          :class="{ active: activeMain === tab.id }"
          :style="{ animationDelay: index * 0.08 + 's' }"
          @click="selectMainMobile(tab.id)"
        >
          <span class="t-prefix">&gt;&gt;</span>
          {{ tab.label }}
          <span v-if="activeMain === tab.id" class="t-active">[ ACTIVE ]</span>
        </button>
      </div>
    </Transition>

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
  modelValue: { type: String, default: 'status' }
})
const emit = defineEmits(['update:modelValue', 'update:sub'])

const activeMain = ref(props.modelValue)
const activeSub  = ref('STATUS')
const menuOpen   = ref(false)

const mainTabs = [
  { id: 'status',   label: 'STATUS'    },
  { id: 'skills',   label: 'SKILLS'    },
  { id: 'formacoes', label: 'FORMAÇÕES' },
  { id: 'projetos', label: 'PROJETOS'  },
]

const subTabMap = {
  status:   ['STATUS', 'SOBRE'],
  skills:   ['SOFT SKILLS', 'HARD SKILLS'],
  formacoes: ['CURSOS', 'FACULDADE'],
  projetos: ['FRONT-END', 'BACK-END'],
}

const currentSubTabs = computed(() => subTabMap[activeMain.value] ?? [])

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const selectMain = (id) => {
  activeMain.value = id
  activeSub.value  = subTabMap[id]?.[0] ?? ''
  emit('update:modelValue', id)
  emit('update:sub', activeSub.value)
}

const selectMainMobile = (id) => {
  selectMain(id)
  menuOpen.value = false 
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
  position: relative;
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
  flex-shrink: 0;
}

.nav-gear i {
  color: var(--color-pip-boy);
}

.main-tabs {
  display: flex;
  gap: 4px;
  align-items: center;
  flex: 1;
  justify-content: center;
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
  border-bottom: none;
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

.terminal-btn {
  display: none;
  background: none;
  border: 1px solid var(--color-pip-boy);
  color: var(--color-pip-boy);
  font-family: var(--font);
  font-size: 1rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  padding: 4px 12px;
  gap: 8px;
  align-items: center;
  flex: 1;
  justify-content: center;
  text-shadow: inherit;
}

.terminal-prefix {
  opacity: 0.5;
  font-size: 0.85rem;
}

.terminal-label {
  font-weight: bold;
}

.terminal-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  border: 1px solid var(--color-pip-boy);
  border-top: none;
  z-index: 100;
  padding: 8px 16px 12px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.15);
}

.terminal-line {
  font-size: 0.75rem;
  opacity: 0.4;
  letter-spacing: 0.1em;
  padding: 2px 0;
}

.t-prefix {
  opacity: 0.5;
  margin-right: 8px;
  font-size: 0.85rem;
}

.terminal-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: none;
  border: none;
  color: var(--color-pip-boy);
  font-family: var(--font);
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  cursor: pointer;
  padding: 8px 4px;
  opacity: 0.55;
  text-shadow: inherit;
  text-align: left;
  border-bottom: 1px solid rgba(0, 255, 0, 0.08);
  animation: type-in 0.3s ease-out both;
}

.terminal-item:last-child {
  border-bottom: none;
}

.terminal-item:hover {
  opacity: 0.9;
  background: rgba(0, 255, 0, 0.05);
}

.terminal-item.active {
  opacity: 1;
  font-weight: bold;
}

.t-active {
  margin-left: auto;
  font-size: 0.75rem;
  opacity: 0.6;
  letter-spacing: 0.1em;
}

@keyframes type-in {
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 0.55;
    transform: translateX(0);
  }
}

.terminal-item.active {
  animation: type-in 0.3s ease-out both;
  opacity: 1;
}

.terminal-drop-enter-active {
  transition: all 0.2s ease-out;
}
.terminal-drop-leave-active {
  transition: all 0.15s ease-in;
}
.terminal-drop-enter-from,
.terminal-drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.nav-divider {
  height: 1px;
  background: var(--color-pip-boy);
  margin: 0 0 10px 0;
}

.nav-sub {
  display: flex;
  align-items: center;
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

@media (max-width: 1024px) {
  .main-tab {
    font-size: 1rem;
    padding: 2px 10px;
    letter-spacing: 0.1em;
  }
}

@media (max-width: 768px) {
  .main-tabs {
    display: none;
  }

  .terminal-btn {
    display: flex;
  }

  .nav-main {
    align-items: center;
    padding: 4px 8px;
  }

  .sub-tab {
    font-size: 1rem;
    letter-spacing: 0.08em;
  }

  .nav-sub {
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .sub-tab {
    font-size: 1rem;
    letter-spacing: 0.05em;
  }

  .nav-sub {
    gap: 10px;
    flex-wrap: wrap;
  }
}
</style>