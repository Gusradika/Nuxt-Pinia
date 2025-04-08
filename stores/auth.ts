import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const config = useRuntimeConfig();
    const user = ref<any>(null);
    const token = ref<string | null>(null);

    const isLoggedIn = computed(() => !!token.value);

    async function login(email: string, password: string) {
      try {
        const res: any = await $fetch(`${config.public.apiBase}/auth/login`, {
          method: "POST",
          body: { email, password },
        });

        token.value = res.access_token;
        user.value = res.user;
        return true;
      } catch (err: any) {
        console.error("Login gagal:", err);
        return false;
      }
    }

    async function register(email: string, password: string) {
      try {
        const res: any = await $fetch(
          `${config.public.apiBase}/auth/register`,
          {
            method: "POST",
            body: { email, password },
          }
        );

        user.value = res.user;
        return true;
      } catch (err: any) {
        console.error("Register gagal:", err);
        return false;
      }
    }

    function logout() {
      token.value = null;
      user.value = null;
    }

    return { user, token, isLoggedIn, login, register, logout };
  },
  {
    persist: {
      pick: ["token", "user"],
    },
  }
);
