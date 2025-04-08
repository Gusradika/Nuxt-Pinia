import { defineStore } from "pinia";

export const useMyAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<{ email: string } | null>(null);

    const isLoggedIn = computed(() => !!user.value);

    function login(email: string, password: string) {
      // Simulasi login
      if (email && password) {
        user.value = { email };
        return true;
      }
      return false;
    }
    function register(email: string, password: string) {
      // Simulasi registrasi
      if (email && password) {
        user.value = { email };
        return true;
      }
      return false;
    }

    function logout() {
      user.value = null;
    }

    return { user, isLoggedIn, login, register, logout };
  },
  {
    persist: true,
  }
);
