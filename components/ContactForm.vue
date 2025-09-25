<template>
  <form @submit.prevent="sendMail" class="space-y-4 max-w-lg mx-auto">
    <input
      v-model="form.name"
      type="text"
      placeholder="Нэр"
      required
      class="w-full p-3 border rounded"
    />
    <input
      v-model="form.email"
      type="email"
      placeholder="Имэйл"
      required
      class="w-full p-3 border rounded"
    />
    <input
      v-model="form.subject"
      type="text"
      placeholder="Гарчиг"
      required
      class="w-full p-3 border rounded"
    />
    <textarea
      v-model="form.message"
      placeholder="Таны мессеж"
      required
      class="w-full p-3 border rounded"
    ></textarea>
    <button
      type="submit"
      class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
    >
      Илгээх
    </button>
    <p v-if="status" class="mt-2 text-green-600">{{ status }}</p>
  </form>
</template>

<script setup>
import { ref } from "vue"

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
})

const status = ref("")

const sendMail = async () => {
  try {
    const res = await $fetch("/api/sendmail", {
      method: "POST",
      body: { name: form.value.name, email: form.value.email, message: form.value.message },
    })
    if (res.success) {
      status.value = "Амжилттай илгээгдлээ!"
      form.value = { name: "", email: "", subject: "", message: "" }
    } else {
      status.value = "Алдаа гарлаа!"
    }
  } catch (e) {
    console.error(e)
    status.value = "Сервертэй холбогдох боломжгүй байна."
  }
}
</script>
