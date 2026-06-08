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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const skills = ref([
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 80 },
  { name: 'Vue', level: 60 },
  { name: 'JS', level: 50 },
  { name: 'Git', level: 60 },
  { name: 'Node', level: 30 },
])

const containerSize = ref(600)

const updateContainerSize = () => {
  if (window.innerWidth <= 480) {
    containerSize.value = 300
  } else if (window.innerWidth <= 768) {
    containerSize.value = 480
  } else if (window.innerWidth <= 1024) {
    containerSize.value = 700
  } else {
    containerSize.value = 500
  }
}

onMounted(() => {
  updateContainerSize()
  window.addEventListener('resize', updateContainerSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateContainerSize)
})

const getOrbitStyle = (index, total) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2

  const radius = containerSize.value * 0.5

  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  return {
    position: 'absolute',
    top: '50%',
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
  margin-top: -1rem;
}

.avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 300px;
  position: relative;
  z-index: 2;
  mix-blend-mode: screen;
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
  font-size: 1rem;
  letter-spacing: 0.1em;
  white-space: nowrap;
  color: var(--color-pip-boy);
}

.skill-bar-track {
  width: 80px;
  height: 10px;
  border: 1px solid var(--color-pip-boy);
}

.skill-bar-fill {
  height: 100%;
  background: var(--color-pip-boy);
  box-shadow: 0 0 6px var(--color-pip-boy);
  transition: width 0.6s ease;
}

.skill-value {
  font-size: 0.8rem;
  color: var(--color-pip-boy);
}

@media (max-width: 1024px) {
  .info {
    display: none;
  }

  .content {
    margin-top: 8rem;
  }

  .avatar {
    width: 400px;
  }

  .skill-bar-track {
    width: 100px;
    height: 12px;
  }

  .skill-label {
    font-size: 2rem;
  }

  .skill-value {
    font-size: 1.7rem;
  }
}

@media (max-width: 768px) {
  .avatar {
    width: 280px;
  }

  .skill-bar-track {
    width: 90px;
    height: 10px;
  }

  .skill-label {
    font-size: 1.5rem;
  }

  .skill-value {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .avatar {
    width: 180px;
  }

  .skill-bar-track {
    width: 50px;
    height: 8px;
  }

  .skill-label {
    font-size: 1rem;
  }

  .skill-value {
    font-size: 0.8rem;
  }
}
</style>