<template>
  <div class="about-tab">
    <div class="about-mode-line">SOBRE</div>
    <div class="about-body">
      <div class="about-photo-box">
        <img
          src="../../assets/img/foto_eu.png"
          alt="Júlia Souza"
          class="about-photo"
        />
        <div class="about-overlay"></div>
      </div>

      <div class="about-info">

        <h2 class="about-name">JÚLIA SOUZA</h2>
        <p class="about-role">Frontend Developer</p>

        <div class="about-divider"></div>

        <div class="about-stats">
          <div class="about-stat-row">
            <span class="stat-key">IDADE</span>
            <span class="stat-val">21</span>
          </div>
          <div class="about-stat-row">
            <span class="stat-key">LOCALIZAÇÃO</span>
            <span class="stat-val">Porto Alegre, RS</span>
          </div>
          <div class="about-stat-row">
            <span class="stat-key">STATUS</span>
            <span class="stat-val stat-online">● DISPONÍVEL</span>
          </div>
          <div class="about-stat-row">
            <span class="stat-key">ESPECIALIDADE</span>
            <span class="stat-val">Vue · HTML · CSS · JS</span>
          </div>
        </div>

        <div class="about-divider"></div>

        <p class="about-bio">
          Desenvolvedora frontend apaixonada por criar interfaces bonitas e funcionais.
          Gosto de transformar ideias em experiências digitais interativas,
          com atenção aos detalhes e foco na experiência do usuário.
        </p>

        <div class="about-links">
          <a href="https://github.com/JuuhSouza" target="_blank" class="about-link">
            <i class="fa-brands fa-github"></i> GITHUB
          </a>
          <a href="https://www.linkedin.com/in/j%C3%BAlia-souza-0577572b2" target="_blank" class="about-link">
            <i class="fa-brands fa-linkedin"></i> LINKEDIN
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.about-mode-line {
  text-align: center;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  opacity: 0.7;
  padding: 0 18px;
  margin-top: -0.5rem;
}

.about-body {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 20px 16px;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.about-photo-box {
  position: relative;
  width: 320px;
  min-width: 320px;
  height: 420px;
  border: 1px solid var(--color-pip-boy);
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);
}

.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.8) contrast(1.2) sepia(100%) hue-rotate(60deg) saturate(2.3);
}

.about-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 6px 100%;
  pointer-events: none;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
}

.about-name {
  font-size: 1.6rem;
  letter-spacing: 0.2em;
  margin: 0;
  color: var(--color-pip-boy);
}

.about-role {
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  opacity: 0.6;
  margin: 0;
}

.about-divider {
  height: 1px;
  background: var(--color-pip-boy);
  opacity: 0.3;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about-stat-row {
  display: flex;
  gap: 16px;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
}

.stat-key {
  opacity: 0.5;
  min-width: 130px;
}

.stat-val {
  font-weight: bold;
}

.stat-online {
  color: var(--color-pip-boy);
  animation: blink-online 2s infinite;
}

@keyframes blink-online {
  0%, 100% { 
    opacity: 1; 
}
  50%{ 
    opacity: 0.4; 
}
}

.about-bio {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0;
  max-width: 500px;
}

.about-links {
  display: flex;
  gap: 12px;
  margin-top: 4px;
}

.about-link {
  color: var(--color-link);
  background-color: var(--backgroud-color-link);
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.1em;
  padding: 4px 16px;
  box-shadow: 0 0 8px var(--color-pip-boy);
  transition: opacity 0.2s;
}

.about-link:hover {
  opacity: 0.5;
}
</style>