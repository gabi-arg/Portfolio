<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Home from './components/views/Home.vue';
import Navbar from './components/layout/Navbar.vue';
import Sidebar from './components/layout/Sidebar.vue';
import { Icon } from '@iconify/vue';
import Footer from './components/layout/Footer.vue';

const menuOpen = ref(false);
const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="bg-bg min-h-screen flex flex-col">
    <Navbar @toggle-menu="menuOpen = !menuOpen"/>
    <Sidebar :menu-open="menuOpen" @close-menu="menuOpen = false" />
    <main class="flex-1 lg:ml-16 pt-16">
      <Home />
    </main>
    <Footer />
    <button
      v-if="showScrollButton"
      @click="scrollToTop"
      aria-label="Volver arriba"
      class="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-accent"
    >
      <Icon icon="ep:arrow-up-bold" class="h-6 w-6" />
    </button>
  </div>
</template>
