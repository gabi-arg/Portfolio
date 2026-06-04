
<script setup lang="ts">
import Skills from './Skills.vue';
import ImagenPerfil from '../../assets/person.jpg';
import CVFile from '../../assets/CV-GABRIELADURAN.pdf?url'
</script>
<template>
  <section class="relative min-h-screen flex items-center px-6 pt-8 lg:px-16">

    <div class="relative z-10 w-full flex flex-col lg:flex-row items-center gap-8">

      <!-- En mobile: todo en columna centrado -->
      <!-- En desktop: izquierda -->
      <div class="flex flex-col items-center lg:items-start gap-4 flex-1 text-center lg:text-left text-text-primary">

        <!-- Título -->
        <div class="flex flex-col gap-2">
          <h1 class="text-6xl lg:text-8xl font-light text-text-primary leading-none">Frontend</h1>
          <h2 class="text-4xl lg:text-6xl font-black text-text-primary leading-none">Developer</h2>
        </div>

        <!-- Imagen — solo visible en mobile, entre título y botones -->
        <div class="lg:hidden flex justify-center w-full">
          <img :src="ImagenPerfil" alt="Gabriela Duran" class="imagenPerfil w-80 h-80 object-contain" />
        </div>

        <!-- Botones -->
        <div class="flex mt-4 items-center gap-4">
          <a href="#contact" class="bg-accent text-white px-6 py-2 rounded-md font-medium hover:bg-accent/80 transition-colors duration-200">
            Contact me
          </a>
          <a :href="CVFile" download="CV-GABRIELADURAN.pdf"
            class="text-text-primary px-6 py-2 font-medium rounded-md hover:bg-text-secondary/20 transition-colors duration-200">
            Download CV
          </a>
        </div>

        <!-- Skills -->
        <Skills />

      </div>

      <!-- Imagen — solo visible en desktop -->
      <div class="hidden lg:flex flex-1 items-center justify-center">
        <img :src="ImagenPerfil" alt="Gabriela Duran" class="imagenPerfil w-200 h-200 object-contain" />
      </div>

    </div>

  </section>
</template>
<style scoped>
.imagenPerfil {
  mask-image: radial-gradient(circle, black 50%, transparent 55%);
  -webkit-mask-image: radial-gradient(circle, black 50%, transparent 55%);
}
</style>