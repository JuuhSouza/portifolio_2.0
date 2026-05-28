<template>
  <div class="pipboy-content">
    <main class="pipboy-main">
      <component
        :is="tabComponents[currentTab]"
        :activeSub="currentSub"
      />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatusTab from '../Tabs/StatusTab.vue'
import SkillsTab from '../Tabs/SkillsTab.vue'
import FormacaoTab from '../Tabs/FormatinonTab.vue'
import ProjectsTab from '../Tabs/ProjectsTab.vue'

const props = defineProps({
  currentTab: { type: String, default: 'status' },
  currentSub: { type: String, default: 'STATUS' },
})

const tabComponents = {
  status: StatusTab,
  skills: SkillsTab,
  formacoes: FormacaoTab,
  projetos: ProjectsTab,
}
</script>

<style scoped>
.pipboy-content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.pipboy-header {
  margin-bottom: 8px;
}

.pipboy-main {
  flex: 1;
  padding: 8px 0;
}
</style>