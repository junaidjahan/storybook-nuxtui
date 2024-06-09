// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/storybook", '@nuxtjs/eslint-module'],
  eslint: {
    /* module options */
  }
})