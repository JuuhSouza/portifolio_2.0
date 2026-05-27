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
        <NavBar/>
      </header>
      
      <main class="pipboy-main">
        <Interface/>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '../NavBar.vue'
import Interface from '../Pip-boy/Interface.vue'

// Estado para controlar qual tela exibir
const isBooting = ref(true)

// Linhas que vão aparecer no terminal
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

// Linhas que já foram processadas e estão visíveis
const visibleLines = ref([])

const printBootSequence = async () => {
  for (const line of bootLines) {
    // Adiciona a linha atual ao array visível
    visibleLines.value.push(line)
    
    // Simula um delay aleatório entre uma linha e outra (entre 200ms e 600ms)
    const delay = Math.random() * 400 + 200
    await new Promise(resolve => setTimeout(resolve, delay))
  }

  // Pequena pausa dramática de 1 segundo após terminar o texto
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Desliga a tela de boot e entra no Pip-Boy
  isBooting.value = false
}

// Dispara a sequência assim que o componente é montado na tela
onMounted(() => {
  printBootSequence()
})
</script>

<style scoped>
.crt-container {
  background-color: var(--background-color);
  color: var(--color-pip-boy);
  font-family: var(--font);
  min-height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  text-shadow: var(--text-shadow);
}

/* .crt-container::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: linear-gradient(rgba(26, 19, 19, 0) 50%, rgba(0, 0, 0, 0.3) 50%);
  background-size: 100% 4px;
  z-index: 10;
  pointer-events: none;
} */

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

.pipboy-header {
  border-bottom: 2px solid var(--color-pip-boy);
  padding-bottom: 15px;
  margin-bottom: 30px;
}
</style>