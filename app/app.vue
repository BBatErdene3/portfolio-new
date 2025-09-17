<template>
  <div class="transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-gray-200 min-h-screen">
    <!-- Header -->
    <header class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg fixed w-full z-50">
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
          <!-- Theme solih -->
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

    <!-- Content -->
    <main class="pt-24">
      <!-- Hero Section -->
      <section id="home" class="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
        <h1 class="text-8xl font-extrabold mb-4 opacity-0 animate-fadeIn">Сайн уу, би Бат-Эрдэнэ 👋</h1>
        <p class="text-4xl text-white mb-6 opacity-0 animate-fadeIn delay-500">Ирээдүйн IT инженер | Вэб хөгжүүлэгч</p>
        <a href="#projects" class="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 animate-pulse">
          Миний ажлууд
        </a>
      </section>

      <!-- About -->
      <section id="about" class="py-20 text-center bg-purple-100 dark:bg-gray-800">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-6">Миний тухай</h2>
          <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Намайг Б. Бат-Эрдэнэ гэдэг. Би мэдээллийн технологийн салбарт сонирхолтой ба ирээдүйд IT инженер болох зорилготой.
          </p>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="py-20 text-center bg-purple-200 dark:bg-gray-700">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-10">Миний ур чадвар</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">C / C++</div>
            <div class="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">Unity / Unreal Engine</div>
            <div class="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">SQL</div>
            <div class="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">Vue / React</div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="py-20 text-center bg-purple-300 dark:bg-gray-800">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-10">Миний төслүүд</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 class="font-bold mb-2">Portfolio Web</h3>
              <p class="text-gray-600 dark:text-gray-300">Vue + TailwindCSS ашиглан бүтээж буй хувийн вебсайт.</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 class="font-bold mb-2">Unity</h3>
              <p class="text-gray-600 dark:text-gray-300">Unity ашиглан бүтээсэн AR тоглоом.</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 class="font-bold mb-2">Шинэ төслүүд</h3>
              <p class="text-gray-600 dark:text-gray-300">Тун удахгүй нэмэгдэнэ...</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-20 text-center bg-purple-400 dark:bg-gray-700">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold mb-6">Холбоо барих</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-10">Надтай хамтран ажиллахыг хүсвэл холбогдоорой!</p>

          <a href="mailto:youremail@example.com"
             class="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 mr-4 animate-pulse">
            📧 Имэйл бичих
          </a>

          <a href="/resume.pdf" download
             class="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition duration-300 animate-pulse">
            📄 CV татах
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-6 text-center">
        <p>© 2025 Бат-Эрдэнэ. Бүх эрх хуулиар хамгаалагдсан.</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  try {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light')
    }

    // Browser-д л document ашиглана
    document.documentElement.classList.toggle('dark', isDark.value)
  } catch(e) {
    console.log('Theme тохируулахад алдаа гарлаа', e)
  }
})    

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  try {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  } catch(e) {}
}
</script>


<style>
@layer utilities {
  @keyframes fadeIn { 
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  .delay-500 {
    animation-delay: 0.5s;
  }
}

/* Smooth color transition for the whole page */
html, body {
  transition: background-color .35s ease, color .35s ease;
}
</style>



