// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  windicss: {
    analyze: true,
    config: {
      attributify: true,
    },
  },
  css: ['@/assets/font.css'],
  modules: ['nuxt-windicss'],
})
