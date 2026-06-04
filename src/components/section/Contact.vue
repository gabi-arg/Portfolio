<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue';
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const message = ref('')
const maxChars = 300
const loading = ref(false)
const feedbackMessage = ref('')
const feedbackType = ref<'success' | 'error'>('success')

const messageCount = computed(() => message.value.length)

// Inicializar EmailJS con manejo de errores
try {
  if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }
} catch (error) {
  console.error('EmailJS init error:', error)
}

async function sendMessage() {
  if (!name.value || !email.value || !message.value) {
    feedbackMessage.value = 'Please fill in all fields'
    feedbackType.value = 'error'
    return
  }

  loading.value = true
  feedbackMessage.value = ''

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: name.value,
        email: email.value,
        message: message.value,
      }
    )

    feedbackMessage.value = '✓ Message sent successfully!'
    feedbackType.value = 'success'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    feedbackMessage.value = 'Failed to send message. Try again later.'
    feedbackType.value = 'error'
    console.error('EmailJS error:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="min-h-screen px-6 lg:px-16 py-2 flex flex-col items-center">

    <!-- Título -->
    <div class="flex flex-col gap-2 mb-16 items-center">
      <h2 class="text-4xl font-bold text-text-primary">
        Do you like my work?
      </h2>
      <div class="w-16 h-1 bg-accent rounded-full" />
    </div>

    <!-- Formulario -->
    <div class="w-full z-50 max-w-2xl flex flex-col gap-6">

      <!-- Name -->
      <div class="flex flex-col gap-2">
        <label class="text-text-primary text-sm font-medium">Name *</label>
        <input
          v-model="name"
          type="text"
          placeholder="Your name"
          class="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-200"
        />
      </div>

      <!-- Email -->
      <div class="flex flex-col gap-2">
        <label class="text-text-primary text-sm font-medium">E-mail *</label>
        <input
          v-model="email"
          type="email"
          placeholder="Your e-mail"
          class="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-200"
        />
      </div>

      <!-- Message -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <label class="text-text-primary text-sm font-medium">Message *</label>
          <span class="text-text-secondary text-xs">{{ messageCount }} / {{ maxChars }}</span>
        </div>
        <textarea
          v-model="message"
          :maxlength="maxChars"
          placeholder="Your message"
          rows="6"
          class="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
        />
      </div>

      <!-- Botón enviar -->
      <div class="flex flex-col gap-2">
        <button
          @click="sendMessage"
          :disabled="loading"
          class="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
          <Icon icon="mynaui:send-solid" :size="16" />
        </button>
        <span
          v-if="feedbackMessage"
          :class="[
            'text-sm text-center',
            feedbackType === 'success' ? 'text-green-400' : 'text-red-400'
          ]"
        >
          {{ feedbackMessage }}
        </span>
      </div>

    </div>
  </section>
</template>