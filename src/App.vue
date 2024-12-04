<script setup lang="ts">
import NavigationItem from './components/NavigationItem.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>

    <RouterView />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>
