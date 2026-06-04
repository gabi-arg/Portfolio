<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const sceneRef = ref<HTMLDivElement>()
const chars = '01{}[]<>/=;()abcdefABCDEF#$!?+-*'
const intervals: ReturnType<typeof setInterval>[] = []

function randChar() {
  return chars[Math.floor(Math.random() * chars.length)]
}

function createCols(count = 50, speed = 1, color = '#90909080') {
  if (!sceneRef.value) return
  sceneRef.value.querySelectorAll('.col').forEach(c => c.remove())
  intervals.forEach(clearInterval)
  intervals.length = 0

  const sceneW = sceneRef.value.offsetWidth
  const spacing = sceneW / count

  for (let i = 0; i < count; i++) {
    const col = document.createElement('div')
    col.className = 'col'
    const len = 6 + Math.floor(Math.random() * 10)
    const duration = (3 + Math.random() * 4) / speed * 3
    const delay = Math.random() * 5

    for (let j = 0; j < len; j++) {
      const span = document.createElement('span')
      span.textContent = randChar()
      span.style.color = color
      span.style.opacity = String(1 - (j / len) * 0.75)
      col.appendChild(span)
    }

    col.style.left = (i * spacing + Math.random() * spacing * 0.5) + 'px'
    col.style.animationDuration = duration + 's'
    col.style.animationDelay = delay + 's'
    sceneRef.value.appendChild(col)

    const id = setInterval(() => {
      col.querySelectorAll('span').forEach(s => {
        if (Math.random() > 0.8) s.textContent = randChar()
      })
    }, 300 + Math.random() * 400)
    intervals.push(id)
  }
}

onMounted(() => createCols())
onUnmounted(() => intervals.forEach(clearInterval))
</script>

<template>
  <div ref="sceneRef" class="code-rain" />
</template>

<style scoped>
.code-rain {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}
.code-rain :deep(.col) {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  animation: fall linear infinite;
}
@keyframes fall {
  0%   { transform: translateY(-200px); opacity: 0; }
  5%   { opacity: 1; }
  85%  { opacity: 0.8; }
  100% { transform: translateY(110vh); opacity: 0; }
}
</style>