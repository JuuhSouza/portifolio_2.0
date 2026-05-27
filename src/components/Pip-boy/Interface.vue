<template>
  <div v-if="currentTab" class="pipboy-content">

    <main class="pipboy-main">
      <component :is="tabComponents[currentTab]" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StatusTab from '../Tabs/StatusTab.vue'

const currentTab = ref('STATUS')

const tabComponents = {
  STATUS: StatusTab
}
</script>