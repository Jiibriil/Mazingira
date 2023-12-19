// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "radix-vue/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/css/tailwind.css"],

  googleFonts: {
    families: {
      Merriweather: true,
      Cinzel: true,
    },
  },
  extends: ["nuxt-seo-kit"],
});
