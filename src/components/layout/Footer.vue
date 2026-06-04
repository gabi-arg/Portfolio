<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
  <footer class="border-t border-white/10 bg-surface/80 py-8 mt-16 text-center text-sm text-white">
    <div class="mx-auto flex max-w-2xl justify-around items-center gap-4 px-4">
      <p class="text-text-secondary">© 2026 Gabriela Duran</p>
      <div class="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/gabriela-duran-/"
          target="_blank"
          class=" flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200"
        >
          <Icon icon="mdi:linkedin" class="w-10 h-10"/>
        </a>
        <a
          href="https://github.com/gabi-arg"
          target="_blank"
          class=" flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200"
        >
          <Icon icon="line-md:github" class="w-10 h-9"/>
        </a>
      </div>
    </div>
  </footer>
</template>