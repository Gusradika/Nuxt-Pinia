// plugins/fetch-auth.ts
export default defineNuxtPlugin((nuxtApp) => {
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  const customFetch = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      // Token hanya dikirim jika ADA dan endpoint butuh (setelah login)
      if (auth.token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${auth.token}`,
        };
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        auth.logout();
      }
    },
  });

  nuxtApp.provide("apiFetch", customFetch);
});
