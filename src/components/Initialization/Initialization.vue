<template>
  <div class="crt-container">
    <div v-if="isBooting" class="boot-screen">
      <div v-for="(line, index) in visibleLines" :key="index" class="boot-line">
        {{ line }}
      </div>
      <span class="cursor">_</span>
    </div>

    <div v-else class="pipboy-content">
      <header class="pipboy-header">
        <NavBar
          v-model="currentTab"
          @update:sub="currentSub = $event"
        />
      </header>

      <main class="pipboy-main">
        <component
          :is="tabComponents[currentTab]"
          :activeSub="currentSub"
        />
          <Footer/>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
import StatusTab   from '../Tabs/StatusTab.vue'
import ProjectsTab from '../Tabs/ProjectsTab.vue'
import FormatinonTab from '../Tabs/FormatinonTab.vue'
import SkillsTab from '../Tabs/SkillsTab.vue'
import AboutTab from '../Tabs/AboutTab.vue'

const isBooting = ref(true)
const currentTab = ref('status')
const currentSub = ref('STATUS')

const tabComponents = {
  status: StatusTab,
  sobre: AboutTab,
  skills: SkillsTab,
  formacoes: FormatinonTab,
  projetos: ProjectsTab,
}

const bootLines = [
  "WELCOME TO ROBCO INDUSTRIES (TM) TERMLINK",
  "COPYRIGHT 2075-2077 ROBCO INDUSTRIES",
  "----------------------------------------",
  "LOADER V1.10 FOUND",
  "INITIALIZING MEMORY TEST...",
  "640KB RAM OK",
  "LOADING BIOS COMPONENTS...",
  "DETECTING PIP-BOY HARDWARE... OK",
  "CONNECTING TO THE WASTELAND NETWORK...",
  "LOAD SUCCESSFUL!",
  "STARTING INTERFACE..."
]

const visibleLines = ref([])

const printBootSequence = async () => {
  for (const line of bootLines) {
    visibleLines.value.push(line)
    const delay = Math.random() * 400 + 200
    await new Promise(resolve => setTimeout(resolve, delay))
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  isBooting.value = false
}

onMounted(() => {
  printBootSequence()
})
</script>

<style scoped>
.crt-container {
  background-color: var(--background-color);
  color: var(--color-pip-boy);
  font-family: var(--font);
  padding: 30px 30px 0 30px;
  box-sizing: border-box;
  position: relative;
  text-shadow: var(--text-shadow);
  overflow: hidden;
}

.boot-screen {
  font-size: 1.1rem;
  line-height: 1.6;
}

.boot-line {
  margin-bottom: 5px;
}

.cursor {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.pipboy-content {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  overflow: hidden;
}

.pipboy-header {
  margin-bottom: 8px;
}

.pipboy-main {
  flex: 1;
  padding: 8px 0;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .crt-container {
    padding: 20px;
  }

  .boot-screen {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .crt-container {
    padding: 16px;
  }

  .boot-screen {
    font-size: 0.85rem;
    line-height: 1.8;
  }

  .boot-line {
    margin-bottom: 3px;
  }

    .pipboy-header {
    margin-bottom: 4px;
  }

  .pipboy-main {
    padding: 4px 0 60px 0;
  }
}

@media (max-width: 480px) {
  .crt-container {
    padding: 12px;
  }

  .boot-screen {
    font-size: 0.75rem;
    margin-left: 1rem;
  }
}
</style>