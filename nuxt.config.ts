export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  srcDir: 'src',
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
  ],
  css: ['~/assets/sass/global/index.sass'],
})
