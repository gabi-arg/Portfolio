<script setup lang="ts">
interface Experience {
  id: number
  company: string
  logo: string
  role: string
  type: string
  period: string
  duration: string
  description: string
  bullets: string[]
  side: 'left' | 'right'
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'MailTeck Group',
    logo: './public/logoMailTeck.jpg',
    role: 'Frontend Developer - QA',
    type: 'Tiempo Completo',
    period: 'Noviembre 2025 - Abril 2026',
    duration: '6 meses',
    description: 'Desarrollo y evolución de aplicaciones web con Vue.js (Vue 3), participando en el ciclo completo de calidad del producto.',
    bullets: [
      'Desarrollo e implementación de componentes reutilizables con Vue.js (Vue 3).',
      'Integración de interfaces UX/UI a partir de diseños en Figma.',
      'Refactorización y optimización de código para mejorar rendimiento y mantenibilidad.',
      'Implementación de pruebas unitarias con Vitest.',
      'Desarrollo y ejecución de pruebas end-to-end (E2E) con Playwright.',
      'Trabajo bajo metodología Scrum y control de versiones con Git/GitHub.',
    ],
    side: 'right',
  },
  {
    id: 2,
    company: 'Social Learning',
    logo: './public/logoSocialLearning.jpg',
    role: 'Frontend Developer Jr',
    type: 'Tiempo Completo',
    period: 'Junio 2024 - Marzo 2025',
    duration: '9 meses',
    description: 'Desde la consultora prestaba servicios para Social Learning, con proyectos para Argentina, Chile y México.',
    bullets: [
      'Desarrollo e implementación de componentes reutilizables con Vue.js.',
      'Integración de diseños UX/UI en colaboración con el equipo de diseño utilizando Figma.',
      'Refactorización de código para mejorar rendimiento.',
      'Participación en reuniones de equipo y metodologías Scrum.',
      'Uso de Git para control de versiones en proyectos colaborativos.',
    ],
    side: 'left',
  },
  {
    id: 3,
    company: 'Teclab Instituto Técnico Superior',
    logo: './public/logoSocialLearning.jpg',
    role: 'Frontend Developer - Pasante',
    type: 'Pasantía',
    period: 'Abril - Mayo 2024',
    duration: '2 meses',
    description: 'Primer experiencia profesional desarrollando proyectos web en entorno educativo.',
    bullets: [
      'Desarrollo de una landing page interactiva con HTML, CSS y JavaScript.',
      'Uso de Git y Jira para gestión de tareas y control de versiones.',
    ],
    side: 'right',
  },
]
</script>

<template>
  <section id="experience" class="min-h-screen px-6 lg:px-16 py-24">

    <!-- Título sección -->
    <div class="flex flex-col gap-2 mb-16 items-center">
      <h2 class="text-4xl font-bold text-text-primary">Experience</h2>
      <div class="w-16 h-1 bg-accent rounded-full" />
    </div>

    <!-- Timeline -->
    <div class="relative">

      <!-- Línea vertical central -->
      <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-text-secondary hidden lg:block" />

      <div class="flex flex-col gap-16">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          v-scroll-reveal
          class="relative flex flex-col lg:flex-row items-start lg:items-center gap-8"
          :class="exp.side === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'"
        >

          <!-- Punto en la línea -->
          <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent border-4 border-bg hidden lg:block" />
          <!-- Fecha — lado opuesto al contenido -->
          <div
            class="hidden lg:flex flex-1 justify-end pr-12"
            :class="exp.side === 'left' ? 'justify-start pl-12 pr-0' : 'justify-end pr-12'"
          >
            <span class="text-text-primary text-sm">{{ exp.period }}</span>
          </div>

          <!-- Card -->
          <div class="flex-1 lg:max-w-[45%]  rounded-xl p-6 flex flex-col gap-4 border border-white/5">

            <!-- Header -->
            <div class="flex items-start justify-between gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="text-xl font-bold text-text-primary">{{ exp.company }}</h3>
                <span class="text-text-secondary text-xs">( {{ exp.type }} )</span>
              </div>
              <img :src="exp.logo" :alt="exp.company" class="w-14 h-14 object-contain rounded-lg bg-white/5 p-1" />
            </div>

            <!-- Badge rol + duración -->
            <div class="flex items-center gap-3">
              <span class="text-accent border border-accent text-xs px-3 py-1 rounded-full font-medium">
                {{ exp.role }}
              </span>
              <span class="text-text-secondary text-xs">{{ exp.duration }}</span>
            </div>

            <!-- Fecha visible solo en mobile -->
            <span class="text-text-secondary text-xs lg:hidden">{{ exp.period }}</span>

            <!-- Descripción -->
            <p class="text-text-secondary text-sm leading-relaxed">{{ exp.description }}</p>

            <!-- Bullets -->
            <ul class="flex flex-col gap-2">
              <li
                v-for="(bullet, i) in exp.bullets"
                :key="i"
                class="flex items-start gap-2 text-sm text-text-primary"
              >
                <span class="text-accent mt-0.5">✓</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>

          </div>

        </div>
      </div>

    </div>

  </section>
</template>
