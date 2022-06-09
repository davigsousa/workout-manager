import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/bulma"],
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      postcssOptions: {
        preset: {
          features: {
            customProperties: false,
          },
        },
      },
    },
  },
});
