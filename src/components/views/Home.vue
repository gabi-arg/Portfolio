<template>
  <section id="home" class="relative min-h-screen flex flex-col items-center">
    <CodeRain />
    <Hero />
    <Experience />
    <Certifications/>
    <Contact />
  </section>
</template>
<script setup lang="ts">
import Hero from '../section/Hero.vue';
import CodeRain from '../ui/CodeRain.vue';
import Experience from '../section/Experience.vue';
import Contact from '../section/Contact.vue';
import Certifications from '../section/Certifications.vue';
</script>
<style scoped>

</style>