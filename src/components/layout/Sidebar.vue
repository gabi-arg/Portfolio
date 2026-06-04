
<script setup lang="ts">
import { Home, Briefcase, Mail, ShieldCheck, X } from 'lucide-vue-next'

const props = defineProps<{
  menuOpen: boolean
}>()

const emit = defineEmits<{
  closeMenu: []
}>()

const navItems = [
  { id: 'home',       icon: Home,       label: 'Home' },
  { id: 'experience', icon: Briefcase,  label: 'Experiencia' },
 // { id: 'projects',   icon: FolderGit2, label: 'Projects' },
  { id: 'certifications',   icon: ShieldCheck, label: 'Certificaciones' },
  { id: 'contact',    icon: Mail,       label: 'Contactame' },
]

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (!section) return
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  emit('closeMenu')
}
</script>
<template>
  <aside class="hidden lg:flex fixed left-10 top-60 h-screen flex-col items-center py-8 gap-6 z-50">
		<a
			v-for="item in navItems"
			:key="item.id"
			:href="`#${item.id}`"
			class="w-14 h-14 rounded-full bg-text-secondary/40 flex items-center justify-center"
			@click.prevent="scrollToSection(item.id)"
		>
			<component :is="item.icon" :size="30" class="text-text-secondary" />
		</a>
	</aside>
	<Transition name="slide">
    <div
      v-if="menuOpen"
      class="lg:hidden fixed inset-0 z-50 flex"
    >
      <!-- Fondo oscuro -->
      <div class="absolute inset-0 bg-black/60" @click="emit('closeMenu')" />

      <!-- Panel -->
      <nav class="relative z-10 w-64 h-full bg-surface flex flex-col gap-6 px-6 py-10">
        
        <!-- Cerrar -->
        <button class="self-end text-text-secondary hover:text-white" @click="emit('closeMenu')">
          <X :size="24" />
        </button>

        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click.prevent="scrollToSection(item.id)"
          class="flex items-center gap-4 text-text-secondary hover:text-white transition-colors duration-200"
        >
          <component :is="item.icon" :size="22" />
          <span class="text-base font-medium">{{ item.label }}</span>
        </a>
      </nav>
    </div>
  </Transition>
</template>