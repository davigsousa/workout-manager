<template>
  <div class="main-background min-vh-100 d-flex justify-content-center pb-4">
    <main class="w-100" style="max-width: 700px">
      <NuxtPage />

      <template v-if="ReloadPWAPrompt">
        <ReloadPWAPrompt />
      </template>
    </main>
  </div>
</template>

<script language="ts" setup>
const {
  public: { isDev },
} = useRuntimeConfig();

useHead({
  title: "Workout Manager",
  link: [
    isDev || {
      rel: "manifest",
      href: "/_nuxt/manifest.webmanifest",
    },
    {
      rel: "alternate icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
  ],
  meta: {
    name: "theme-color",
    content: "#ffffff",
  },
});

const ReloadPWAPrompt =
  typeof window !== "undefined"
    ? defineAsyncComponent(() => import("./components/pwa/ReloadPrompt.vue"))
    : null;
</script>

<style>
.main-background {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 245, 245, 1) 55%,
    rgba(210, 210, 210, 1) 100%
  );
}
</style>
