<template>
    <div class="status-bar">
      <div class="status-seg">
        <span class="seg-label">DEV</span>
        <span class="seg-value">FRONT-END</span>
      </div>

      <div class="status-seg level-seg">
        <span class="seg-label">LEVEL {{ age }}</span>
        <div class="xp-track">
          <div class="xp-fill" :style="{ width: xpPercent + '%' }"></div>
        </div>
      </div>

      <div class="status-seg">
        <span class="seg-value">{{ xpPercent }}/05/2026</span>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const age = ref(21)
const xpPercent = ref(27)

</script>

<style scoped>
.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--color-pip-boy);
  padding: 8px 30px;
  gap: 16px;
  background: rgba(0, 255, 0, 0.04);
  position: fixed;
  bottom: 0;
  left: 2rem;
  right: 2rem;
  z-index: 100;
}

.status-seg {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
}

.seg-label { 
  font-weight: bold; 
}

.seg-value { 
  opacity: 0.8; 
}

.level-seg {
  flex: 1;
  justify-content: center;
}

.xp-track {
  width: 100px;
  height: 10px;
  border: 1px solid var(--color-pip-boy);
}

.xp-fill {
  height: 100%;
  background: var(--color-pip-boy);
  box-shadow: 0 0 6px var(--color-pip-boy);
  transition: width 0.5s ease;
}
</style>