<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'
import { ExternalLink } from 'lucide-vue-next'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  type: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HumanaMente',
    type: 'Freelancer',
    description: 'Landing page personal con Vue 3, Tailwind y animaciones CSS.',
    image: '/src/assets/portfolio.png',
    tags: ['Vue 3', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/',
    demo: 'https://demo.com/',
  },
  {
    id: 2,
    title: 'Jéssica Rodrigues',
    type: 'Freelancer',
    description: 'Professional website designed to present psychological services.',
    image: '/src/assets/portfolio.png',
    tags: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/',
    demo: 'https://demo.com/',
  },
  {
    id: 3,
    title: 'MelhorPreco.app',
    type: 'Freelancer',
    description: 'Landing page personal con Vue 3, Tailwind y animaciones CSS.',
    image: '/src/assets/portfolio.png',
    tags: ['Vue 3', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/',
    demo: 'https://demo.com/',
  },
  {
    id: 4,
    title: 'Vue Migration Tool',
    type: 'Personal',
    description: 'Landing page personal con Vue 3, Tailwind y animaciones CSS.',
    image: '/src/assets/portfolio.png',
    tags: ['Angular', 'TypeScript'],
    github: 'https://github.com/',
    demo: 'https://demo.com/',
  },
]

const projectRows = computed(() => {
  const rows = []
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2))
  }
  return rows
})

function updateCards() {
  const rows = document.querySelectorAll<HTMLElement>('.project-row')
  rows.forEach((row) => {
    const rect = row.getBoundingClientRect()
    // Ajustamos el disparador: empieza a achicarse cuando llega a los 100px del top
    const progress = Math.min(Math.max((100 - rect.top) / 500, 0), 1)
    const scale = 1 - progress * 0.05 
    row.style.setProperty('--scale', scale.toFixed(3))
  })
}

onMounted(() => {
  updateCards()
  window.addEventListener('scroll', updateCards, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCards)
})
</script>

<template>
  <section id="projects" class="px-6 lg:px-16 pt-24 pb-[50vh] max-w-7xl mx-auto bg-black text-white">

    <div class="flex flex-col gap-2 mb-24 text-center">
      <h2 class="text-5xl font-bold text-white">Projects</h2>
      <p class="text-amber-500 font-medium">A reflection of my growth and passion</p>
    </div>

    <div class="relative flex flex-col"> 
      
      <div
        v-for="(row, rowIndex) in projectRows"
        :key="rowIndex"
        class="project-row sticky grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full bg-black"
        :style="{ 
          top: '100px', 
          zIndex: rowIndex + 1,
          paddingBottom: '150px' /* <- Clave: Este espacio vacío permite que la siguiente fila suba por completo */
        }"
      >
        <div
          v-for="project in row"
          :key="project.id"
          class="bg-[#1c1c1e] rounded-2xl overflow-hidden border border-white/5 flex flex-col h-[480px] shadow-2xl"
        >
          <div class="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-[#242426]">
            <span class="text-sm font-medium text-gray-400">{{ project.type }}</span>
            <a :href="project.demo" target="_blank" class="text-amber-500 hover:text-amber-400 transition-colors">
              <ExternalLink :size="18" />
            </a>
          </div>

          <div class="w-full h-52 relative overflow-hidden bg-zinc-800">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
          </div>

          <div class="flex flex-col gap-4 p-6 flex-1 bg-[#1c1c1e]">
            <h3 class="text-xl font-bold text-amber-500">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">{{ project.description }}</p>

            <div class="mt-auto flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="text-xs px-3 py-1 rounded-full text-amber-400/90 border border-amber-500/20 bg-amber-500/5 font-mono">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.project-row {
  transform: scale(var(--scale, 1));
  transform-origin: top center;
  transition: transform 0.05s linear;
  will-change: transform;
}

/* Sombreado de retroalimentación para que se note la superposición */
.project-row::after {
  content: '';
  position: absolute;
  inset: 0;
  bottom: 150px; /* Evita sombrear el padding de arrastre */
  background: black;
  border-radius: 1rem;
  opacity: calc((1 - var(--scale, 1)) * 4); 
  pointer-events: none;
  z-index: 50;
  transition: opacity 0.05s linear;
}
</style>