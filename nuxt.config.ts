// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["radix-vue/nuxt", "@vueuse/nuxt", "nuxt-icons"],
  css: ["~/assets/css/tailwind.css"],
  extends: ["nuxt-seo-kit"],
});
