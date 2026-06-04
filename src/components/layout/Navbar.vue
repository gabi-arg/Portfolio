<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
const emit = defineEmits<{
  toggleMenu: []
}>()
</script>
<template>
    <nav class="fixed top-10 left-0 w-full h-16 flex items-center justify-between px-6 z-40">
      <span class="text-xl lg:text-3xl">
        <span class="text-text-secondary">&lt;</span>
        <span class="text-text-primary">Gabriela Duran</span>
        <span class="text-text-secondary" >&sol;&gt;</span>
      </span>
      <button
      class="lg:hidden text-text-secondary hover:text-white transition-colors duration-200"
      @click="emit('toggleMenu')"
    >
      <Menu :size="28" class="text-accent" />
    </button>
    </nav>
    
  </template>
<style scoped>

</style>