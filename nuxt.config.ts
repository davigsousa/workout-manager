import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  modules: ["@nuxtjs/pwa"],
  pwa: {
    meta: {
      title: "Workout Manager",
    },
    manifest: {
      name: "Workout Manager",
      short_name: "Workouts",
      description: "Manage your workouts",
      background_color: "#fafafa",
      theme_color: "#fafafa",
      display: "standalone",
      lang: "en",
    },
  },
});
