<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h1 class="text-2xl font-bold mb-4">Login</h1>
        <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full mb-2" />
        <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-2" />
        <div class="text-red-500 mb-2">{{ error }}</div>
        <button @click="handleLogin" class="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
        <p class="text-sm mt-4">Belum punya akun? <NuxtLink to="/register" class="text-blue-500">Daftar</NuxtLink>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
    middleware: 'guest' // ⬅ Tambahkan ini
})
const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function handleLogin() {
    const success = auth.login(email.value, password.value)
    if (success) {
        router.push('/dashboard')
    } else {
        error.value = 'Gagal login'
    }
}
</script>
