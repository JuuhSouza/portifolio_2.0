<template>
  <div class="status-tab">
    <div class="info">
      <h1>[ STATUS ]</h1>
      <p>Nome: <span>Júlia Souza</span></p>
      <p>Classe: <span>Frontend Developer</span></p>
      <p>Status: <span>Online</span></p>
    </div>

    <main class="content">
      <div class="avatar-container">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="skill-orbit"
          :style="getOrbitStyle(index, skills.length)"
        >
          <div class="skill-label">{{ skill.name }}</div>
          <div class="skill-bar-track">
            <div
              class="skill-bar-fill"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
          <div class="skill-value">{{ skill.level }}</div>
        </div>

        <img
          src="../../assets/gif/gifPersonagem.gif"
          alt="personagem pip-boy"
          class="avatar"
        />

      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: "HTML",  level: 80 },
  { name: "CSS",   level: 80 },
  { name: "Vue",   level: 60 },
  { name: "JS",    level: 50 },
  { name: "Git",   level: 60 },
  { name: "Node",  level: 30 },
])

const getOrbitStyle = (index, total) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const radius = 240

  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  return {
    position: 'absolute',
    top:  '50%',
    left: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
  }
}
</script>

<style scoped>
.status-tab {
  display: flex;
  flex-direction: column;
}

.info {
  text-align: start;
  padding: 0 18px;
  margin-top: -0.5rem;
}

.info h1 {
  font-size: 1.5rem;
  margin-bottom: 6px;
  letter-spacing: 0.1em;
}

.info p {
  font-size: 1rem;
  opacity: 0.8;
  margin: 2px 0;
}

.info span {
  color: var(--color-span-status);
  font-weight: bold;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: -7rem;
}

.avatar-container {
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 300px;
  position: relative;
  z-index: 2;
  mix-blend-mode: screen; /* remove background */
  filter: hue-rotate(10deg) brightness(1.3);
}

.skill-orbit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  z-index: 1;
}

.skill-label {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  opacity: 0.9;
  white-space: nowrap;
  color: var(--color-pip-boy);
}

.skill-bar-track {
  width: 80px;
  height: 6px;
  border: 1px solid var(--color-pip-boy);
  background: transparent;
}

.skill-bar-fill {
  height: 100%;
  background: var(--color-pip-boy);
  box-shadow: 0 0 6px var(--color-pip-boy);
  transition: width 0.6s ease;
}

.skill-value {
  font-size: 0.7rem;
  opacity: 0.7;
  color: var(--color-pip-boy);
}
</style>