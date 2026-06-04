<script setup lang="ts">
import { ShieldCheck, ExternalLink } from 'lucide-vue-next'

import certTitulo from '../../assets/certTitulo.pdf?url'

interface Certificate {
  id: number
  title: string
  institute: string
  year: string
  link: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Técnico en Programación',
    institute: 'Teclab Instituto Técnico Superior',
    year: '2022 -2024',
    link: certTitulo,
  }
]
</script>

<template>
  <section id="certifications" class=" px-6 lg:px-4 py-4">

    <!-- Título sección -->
    <div class="flex flex-col gap-2 mb-16 items-center">
      <h2 class="text-4xl font-bold text-text-primary">Certificaciones</h2>
      <div class="w-16 h-1 bg-accent rounded-full" />
    </div>

    <!-- Cards en fila con scroll horizontal en mobile -->
    <div class="flex flex-col gap-6 overflow-x-auto pb-4 lg:flex-wrap lg:overflow-visible justify-center">
      <div
        v-for="cert in certificates"
        :key="cert.id"
        v-scroll-reveal
        class="min-w-64 lg:w-172 bg-surface border border-white/5 rounded-xl p-6 flex flex-col gap-4 shrink-0"
      >

        <!-- Icono -->
        <div class="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <ShieldCheck :size="20" class="text-accent" />
        </div>

        <!-- Info -->
        <div class="flex flex-col gap-1 flex-1">
          <h3 class="text-text-primary font-semibold text-base leading-snug">{{ cert.title }}</h3>
          <p class="text-text-secondary text-sm">{{ cert.institute }}</p>
          <span class="text-accent text-xs font-mono mt-1">{{ cert.year }}</span>
        </div>

        <!-- Link certificado -->
        <a
          :href="cert.link"
          target="_blank"
          class="flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors duration-200 border-t border-white/5 pt-4"
        >
          <ExternalLink :size="14" />
          Ver certificado
        </a>

      </div>
    </div>

  </section>
</template>