<template>
  <div class="stat-tab">

    <!-- Sub-linha: STATUS em negrito, SOBRE apagado -->
    <div class="view-mode-line">VIEW MODE</div>

    <!-- Corpo principal -->
    <div class="stat-body">

      <!-- Barras laterais esquerdas -->
      <div class="side-bars">
        <div class="bar-col" v-for="bar in leftBars" :key="bar.id">
          <div class="bar-track">
            <div class="bar-fill" :style="{ height: bar.value + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Vault Boy animado -->
      <div class="vault-boy-wrap">
        <svg
          class="vault-boy"
          viewBox="0 0 100 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Cabeça -->
          <ellipse cx="50" cy="22" rx="18" ry="19" fill="none" stroke="currentColor" stroke-width="2.2"/>
          <!-- Capacete visor -->
          <ellipse cx="50" cy="19" rx="11" ry="8" fill="currentColor" opacity="0.25"/>
          <ellipse cx="50" cy="19" rx="11" ry="8" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <!-- Olhos -->
          <circle cx="44" cy="18" r="2.5" fill="currentColor"/>
          <circle cx="56" cy="18" r="2.5" fill="currentColor"/>
          <!-- Sorriso -->
          <path d="M 43 26 Q 50 31 57 26" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <!-- Pescoço -->
          <rect x="46" y="40" width="8" height="6" fill="currentColor"/>
          <!-- Corpo -->
          <path d="M 28 46 Q 24 54 26 75 L 28 98 L 42 98 L 44 78 L 50 78 L 56 78 L 58 98 L 72 98 L 74 75 Q 76 54 72 46 Z"
                fill="none" stroke="currentColor" stroke-width="2.2"/>
          <!-- Zip -->
          <line x1="50" y1="46" x2="50" y2="76" stroke="currentColor" stroke-width="1.2"/>
          <!-- Número 101 -->
          <text x="50" y="68" text-anchor="middle" font-size="9" fill="currentColor" font-family="monospace" font-weight="bold">101</text>

          <!-- Braço esquerdo animado -->
          <g class="arm-left">
            <path d="M 28 50 Q 16 58 14 68" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="13" cy="72" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
          </g>

          <!-- Braço direito animado (oposto) -->
          <g class="arm-right">
            <path d="M 72 50 Q 84 58 86 68" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="87" cy="72" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
          </g>

          <!-- Perna esquerda animada -->
          <g class="leg-left">
            <path d="M 36 98 Q 34 116 36 132" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <ellipse cx="36" cy="135" rx="9" ry="4" fill="none" stroke="currentColor" stroke-width="2"/>
          </g>

          <!-- Perna direita animada (oposto) -->
          <g class="leg-right">
            <path d="M 62 98 Q 64 116 62 132" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <ellipse cx="62" cy="135" rx="9" ry="4" fill="none" stroke="currentColor" stroke-width="2"/>
          </g>
        </svg>

        <!-- Sombra no chão -->
        <div class="ground-shadow"></div>
      </div>

      <!-- Barras laterais direitas -->
      <div class="side-bars">
        <div class="bar-col" v-for="bar in rightBars" :key="bar.id">
          <div class="bar-track">
            <div class="bar-fill" :style="{ height: bar.value + '%' }"></div>
          </div>
        </div>
      </div>

    </div>

    <!-- Linha de equipamentos -->
    <div class="equipment-row">
      <div class="equip-slot">
        <i class="fa-solid fa-gun equip-icon"></i>
        <span>13</span>
      </div>
      <div class="equip-slot diamond">
        <i class="fa-solid fa-diamond equip-icon"></i>
      </div>
      <div class="equip-slot">
        <i class="fa-solid fa-helmet-safety equip-icon"></i>
        <span>16</span>
      </div>
      <div class="equip-slot">
        <i class="fa-solid fa-bolt equip-icon"></i>
        <span>7</span>
      </div>
      <div class="equip-slot">
        <i class="fa-solid fa-radiation equip-icon"></i>
        <span>15</span>
      </div>
    </div>

    <!-- Itens rápidos -->
    <div class="quick-items">
      <div class="quick-item">STIMPAK (1)</div>
      <div class="quick-item">RADAWAY (0)</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const leftBars = [
  { id: 1, value: 85 },
  { id: 2, value: 60 },
  { id: 3, value: 40 },
]

const rightBars = [
  { id: 4, value: 70 },
  { id: 5, value: 90 },
  { id: 6, value: 55 },
]
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

.stat-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 12px 24px;
  min-height: 240px;
}

.side-bars {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 150px;
}

.bar-col {
  width: 12px;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.bar-track {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--color-pip-boy);
  display: flex;
  align-items: flex-end;
}

.bar-fill {
  width: 100%;
  background: var(--color-pip-boy);
  box-shadow: 0 0 6px var(--color-pip-boy);
  transition: height 0.6s ease;
}

.vault-boy-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.vault-boy {
  width: 130px;
  height: 208px;
  color: var(--color-pip-boy);
  filter: drop-shadow(0 0 10px var(--color-pip-boy));
}

.leg-left  { animation: leg-l 0.5s ease-in-out infinite alternate; transform-origin: 36px 98px; }
.leg-right { animation: leg-r 0.5s ease-in-out infinite alternate; transform-origin: 62px 98px; }
.arm-left  { animation: leg-r 0.5s ease-in-out infinite alternate; transform-origin: 28px 50px; }
.arm-right { animation: leg-l 0.5s ease-in-out infinite alternate; transform-origin: 72px 50px; }

@keyframes leg-l {
  from { transform: rotate(-14deg); }
  to   { transform: rotate(14deg);  }
}
@keyframes leg-r {
  from { transform: rotate(14deg);  }
  to   { transform: rotate(-14deg); }
}

.vault-boy {
  animation: body-bob 0.5s ease-in-out infinite alternate,
             walk-filter 0.5s ease-in-out infinite alternate;
}

@keyframes body-bob {
  from { transform: translateY(0px);  }
  to   { transform: translateY(-4px); }
}

.ground-shadow {
  width: 60px;
  height: 8px;
  background: var(--color-pip-boy);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(3px);
  animation: shadow-pulse 0.5s ease-in-out infinite alternate;
}

@keyframes shadow-pulse {
  from { transform: scaleX(1);    opacity: 0.3; }
  to   { transform: scaleX(0.75); opacity: 0.15; }
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
}

.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--color-pip-boy);
  padding: 6px 12px;
  gap: 16px;
  background: rgba(0, 255, 0, 0.04);
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