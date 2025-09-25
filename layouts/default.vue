<template>
  <div :class="['transition-colors duration-500 min-h-screen', isDark ? 'dark bg-gray-900 text-gray-200' : 'bg-white text-gray-900']">
    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-lg fixed w-full z-50">
      <div class="container mx-auto flex justify-between items-center p-6">
        <a class="text-white font-bold text-4xl">Бат-Эрдэнэ</a>

        <nav class="hidden md:flex space-x-6">
          <a href="#home" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Нүүр</a>
          <a href="#about" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Тухай</a>
          <a href="#skills" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Ур чадвар</a>
          <a href="#projects" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Төслүүд</a>
          <a href="#contact" class="text-white font-bold hover:text-blue-300 transition duration-500 transform hover:scale-110">Холбоо барих</a>
        </nav>

        <div class="flex items-center space-x-4">
          <!-- Theme toggle -->
          <button 
            @click="toggleTheme"
            :aria-pressed="isDark"
            class="p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
            title="Toggle dark / light"
          >
            <span v-if="!isDark" class="text-xl">🌙</span>
            <span v-else class="text-xl">☀️</span>
          </button>

          <!-- CTA -->
          <a href="#contact" class="hidden md:inline-block bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-100 transition duration-300 animate-pulse">
            Ажлын санал
          </a>         
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="pt-24">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-6 text-center">
      <p>© 2025 Бат-Эрдэнэ. Бүх эрх хуулиар хамгаалагдсан.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) isDark.value = savedTheme === 'dark'
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
    }
    document.documentElement.classList.toggle('dark', isDark.value)
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}
</script>