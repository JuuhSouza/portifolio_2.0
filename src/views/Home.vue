<template>
  <div class="crt-container">
    <Transition name="fade" mode="out-in">
      <BootScreen 
        v-if="isBooting" 
        @complete="isBooting = false" 
      />
      <Interface v-else />
    </Transition>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </div>
</template>

<script setup>
import { ref } from 'vue'
import BootScreen from '../components/Initialization/Initialization.vue'
import Interface from '../components/Pip-boy/Interface.vue'

const isBooting = ref(true)
</script>

<style scoped>
.crt-container {
  background-color: var(--background-color);
  color: var(--color-pip-boy);
  font-family: 'Courier New', Courier, monospace;
  min-height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  text-shadow: var(--text-shadow);
}

/* .crt-container::before {
  content: " ";
  display: block;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.226) 50%);
  background-size: 100% 4px;
  z-index: 999;
  pointer-events: none;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .crt-container {
  min-height: 98vh;
  padding: 6px;
}
}
</style>