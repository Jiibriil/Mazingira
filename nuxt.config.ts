// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },
 modules: ["radix-vue/nuxt", "@vueuse/nuxt"],
 css: [
  "~/assets/css/bootstrap.css",
  "~/assets/css/style.css",
  "~/assets/css/fonts.css",
 ],
})
