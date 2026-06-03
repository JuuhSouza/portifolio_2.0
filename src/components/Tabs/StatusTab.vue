<template>
  <div class="status-tab">
    <AboutTab  v-if="props.activeSub === 'SOBRE'" />
    <StatusContent v-else />
  </div>
</template>

<script setup>
import AboutTab from './AboutTab.vue';
import StatusContent from './StatusMainTab.vue'

const props = defineProps({
  activeSub: { type: String, default: 'STATUS' }
})
</script>

<style scoped>
.status-tab { height: 100%; }
</style>