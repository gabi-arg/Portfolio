<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
<section class="flex flex-col items-start gap-8  mt-10 lg:mt-35">
      <span class="text-text-primary text-sm">My favorite stack</span>
      <div class="flex items-center gap-8 text-text-secondary">
        <Icon icon="bi:javascript" width="32" />
        <Icon icon="bi:typescript" width="32"/>
        <Icon icon="file-icons:vue" width="32" />
        <Icon icon="devicon-plain:vuetify" width="32" />
        <Icon icon="mdi:tailwind" width="32"/>
        <Icon icon="devicon-plain:playwright" width="38"/>
      </div>
    </section>
</template>
<style scoped>

</style>