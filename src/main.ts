import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vScrollReveal } from './directives/vScrollReveal'

createApp(App).directive('scroll-reveal', vScrollReveal).mount('#app')
