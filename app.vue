<template>
  <div class="main-background min-vh-100 d-flex justify-content-center pb-4">
    <main class="w-100" style="max-width: 700px">
      <NuxtPage />
    </main>
  </div>
</template>

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
