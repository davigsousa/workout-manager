<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <NuxtLink
      :to="props.to"
      class="d-flex flex-row align-items-center px-4 text-secondary text-decoration-none"
    >
      <i class="bi bi-chevron-double-left"></i>

      <h5 class="m-0 ps-2">Back to previous page</h5>
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
interface BackHeaderProps {
  to: string;
}

const props = defineProps<BackHeaderProps>();
</script>
