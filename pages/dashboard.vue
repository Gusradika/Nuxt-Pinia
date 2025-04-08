<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold">Selamat datang, {{ auth.user?.email }}</h1>
        <button @click="handleLogout()" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Logout
        </button>
    </div>
</template>
<script setup>
definePageMeta({ middleware: 'auth' })

const auth = useAuthStore()

const router = useRouter()

function handleLogout() {
    auth.logout();
    router.push('/login');
    // const success = auth.login(email.value, password.value)
    // if (success) {
    //     router.push('/dashboard')
    // } else {
    //     error.value = 'Gagal login'
    // }
}
</script>
