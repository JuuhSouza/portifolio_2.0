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
        <span class="seg-value">{{ xpPercent }}/06/2026</span>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const age = ref(21)
const xpPercent = ref(15)

</script>

<style scoped>
.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--color-pip-boy);
  padding: 8px 30px;
  margin-bottom: 1rem;
  gap: 16px;
  background: rgba(0, 255, 0, 0.04);
  position: absolute;
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

@media (max-width: 1024px) {
  .status-bar {
  padding: 9px 22px;
  margin-bottom: 0rem;
  gap: 6px;
  left: 0;
  right: 0;
}

.status-seg {
  gap: 8px;
  font-size: 1.2rem;
}
}

@media (max-width: 768px) {
 .status-bar {
    margin-bottom: 0;
    position: absolute;
}

.status-seg {
  gap: 8px;
  font-size: 1rem;
}
}

@media (max-width: 480px) {
.status-seg {
  font-size: 0.8rem;
}
}
</style>