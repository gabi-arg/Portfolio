# 🚀 Mi Portfolio Personal | Gabriela Durán

¡Hola! 👋 Bienvenido/a al repositorio de mi portfolio web personal. Aquí comparto mi trayectoria como Desarrolladora Frontend, los proyectos que he construido y las tecnologías que domino. Puedes ver la versión en producción aquí: **[gabriela-duran.netlify.app](https://gabriela-duran.netlify.app/)**

---

## 💻 Sobre Mí

Soy una **Desarrolladora Frontend** apasionada por crear experiencias web interactivas, eficientes y visualmente atractivas. Me considero una profesional polivalente; aunque mi enfoque principal está en el desarrollo de la interfaz de usuario, disfruto involucrándome y aportando valor en áreas como el Aseguramiento de la Calidad (QA), bases de datos y la arquitectura del software.

Actualmente resido en **Madrid, España**, y estoy enfocada en seguir creciendo profesionalmente, dominando herramientas modernas del ecosistema de JavaScript/TypeScript y expandiendo mis habilidades de comunicación técnica tanto en español como en inglés.

---

## 🛠️ Tecnologías y Herramientas

Este portafolio ha sido construido utilizando herramientas modernas de desarrollo para garantizar un rendimiento óptimo y una gran experiencia de usuario:

- **Framework Principal:** [Vue 3](https://vuejs.org/) (Composition API)
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/)
- **Estilos y Diseño:** [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje:** TypeScript / JavaScript (ES6+)
- **Despliegue y Hosting:** [Netlify](https://www.netlify.com/)
- **Integraciones:** [EmailJS](https://www.emailjs.com/) (para la gestión del formulario de contacto de manera Serverless)

---

## ✨ Características Destacadas de la Web

- **Diseño Responsive:** Adaptado perfectamente a dispositivos móviles, tablets y ordenadores de escritorio.
- **Efectos Visuales Avanzados:** Incluye componentes dinámicos como un sistema de *stacking cards* (tarjetas apilables) interactivo para la sección de proyectos.
- **Formulario de Contacto Funcional:** Integrado con EmailJS para recibir mensajes directamente en mi correo electrónico sin necesidad de configurar un backend propio.
- **Arquitectura Limpia:** Estructura de componentes reutilizables, escalables y tipados estrictamente con TypeScript.

---

## 📂 Estructura del Proyecto

```bash
├── public/              # Archivos estáticos (favicon, imágenes globales)
├── src/
│   ├── assets/          # Estilos globales, imágenes y recursos multimedia
│   ├── components/      # Componentes reutilizables de la interfaz (Navbar, Footer, Cards)
│   ├── sections/        # Secciones principales (Hero, About, Projects, Contact)
│   ├── App.vue          # Componente raíz de la aplicación
│   ├── main.ts          # Punto de entrada de la aplicación y configuración de TypeScript
│   └── vite-env.d.ts    # Declaraciones de entorno para Vite
├── index.html           # Plantilla HTML principal
├── tailwind.config.js   # Configuración personalizada de Tailwind CSS
├── tsconfig.json        # Configuración del compilador de TypeScript
└── vite.config.ts       # Configuración de compilación y plugins de Vite


