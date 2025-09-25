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

      <!-- Hero -->
      <section id="home" class="h-screen flex flex-col justify-center items-center text-center relative">
        <!-- Overlay for dark mode -->
        <div class="absolute inset-0 transition-colors duration-500" :class="isDark ? 'bg-gray-900/80' : 'bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700/80'"></div>
        <div class="relative z-10">
          <h1 class="text-7xl md:text-8xl font-extrabold mb-4 opacity-0 animate-fadeIn text-white">Сайн уу, би Бат-Эрдэнэ 👋</h1>
          <p class="text-2xl md:text-4xl mb-6 opacity-0 animate-fadeIn delay-500 text-white">Ирээдүйн IT инженер | Вэб хөгжүүлэгч</p>
          <a href="#projects" class="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transform hover:scale-105 transition duration-300 animate-pulse">
            Миний ажлууд
          </a>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gradient-to-r from-blue-100 via-purple-200 to-blue-300 text-gray-900'">
        <div class="container mx-auto max-w-3xl">
          <h2 class="text-4xl font-bold mb-6">Миний тухай</h2>
          <p class="leading-relaxed text-lg">
            Намайг Б. Бат-Эрдэнэ гэдэг. Би мэдээллийн технологийн салбарт сонирхолтой ба ирээдүйд IT инженер болох зорилготой.
          </p>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gradient-to-r from-blue-200 via-purple-300 to-blue-400 text-gray-900'">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-10">Миний ур чадвар</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">C / C++</div>
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">Unity / Unreal Engine</div>
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">SQL</div>
            <div class="shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">Vue / React</div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 text-gray-900'">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-4xl font-bold mb-10">Миний төслүүд</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">
              <h3 class="font-bold mb-2">Portfolio Web</h3>
              <p class="text-gray-600 dark:text-gray-300">Vue + TailwindCSS ашиглан бүтээж буй хувийн вебсайт.</p>
            </div>
            <div class="shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">
              <h3 class="font-bold mb-2">Unity</h3>
              <p class="text-gray-600 dark:text-gray-300">Unity ашиглан бүтээсэн AR тоглоом.</p>
            </div>
            <div class="shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl" :class="isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'">
              <h3 class="font-bold mb-2">Шинэ төслүүд</h3>
              <p class="text-gray-600 dark:text-gray-300">Тун удахгүй нэмэгдэнэ...</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-20 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 text-gray-900'">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-6">Холбоо барих</h2>
          <p class="mb-10">Надтай хамтран ажиллахыг хүсвэл холбогдоорой!</p>

          <!-- Contact Form component -->
          <ContactForm />
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-6 text-center transition-colors duration-500" :class="isDark ? 'bg-gray-800 text-gray-200' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white'">
        <p>© 2025 Бат-Эрдэнэ. Бүх эрх хуулиар хамгаалагдсан.</p>
      </footer>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ContactForm from '~/components/ContactForm.vue'

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
