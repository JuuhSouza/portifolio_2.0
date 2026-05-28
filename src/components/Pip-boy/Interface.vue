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
import StatusTab   from '../Tabs/StatusTab.vue'
import ProjectsTab from '../Tabs/ProjectsTab.vue'

const currentTab = ref('status')
const currentSub = ref('STATUS')

const tabComponents = {
  status:   StatusTab,
  skills:   SkillsTab,
  formacao: FormacaoTab,
  projetos: ProjectsTab,
}
</script>

<style scoped>
.pipboy-content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.pipboy-main {
  flex: 1;
  padding: 8px 0;
}
</style>