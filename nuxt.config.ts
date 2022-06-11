import { defineNuxtConfig } from "nuxt";
import pwa from "./pwa/configuration";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],
  vite: {
    plugins: [pwa(false)],
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
      isDev: process.env.IS_DEV === "true",
    },
  },

  serverHandlers: [
    process.env.IS_DEV !== "true" && {
      path: "/",
      handler: "~/pwa/middleware.js",
    },
  ].filter(Boolean),

  head: {
    link: [
      process.env.IS_DEV !== "true" && {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },
    ].filter(Boolean),
  },
});
