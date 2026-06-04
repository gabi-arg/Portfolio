import type { Directive } from 'vue'

export const vScrollReveal: Directive = {
  mounted(el) {
    el.style.opacity = '0'
    el.style.transform = 'translateY(100px)'
    el.style.transition = 'opacity 1s ease, transform 1s ease'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  },
}