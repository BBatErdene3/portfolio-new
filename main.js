import { createApp } from 'vue'
import App from './index.vue'
import './index.css'

const app = createApp(App)
app.mount('#app')

// Theme тохируулах
try {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  } else {
    // Хэрэв хадгалагдсан theme байхгүй бол системийн dark mode тохиргоог ашиглана
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', prefersDark)
    localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
  }
} catch(e) {
  document.documentElement.classList.remove('dark') // Алдаа гарвал Light mode
}
