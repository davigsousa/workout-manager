<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <NuxtLink
        :to="props.backTo"
        class="d-flex flex-row align-items-center px-4 text-secondary text-decoration-none"
      >
        <i :class="'bi bi-chevron-left'"></i>

        <h5 class="m-0 ps-2">Back to previous page</h5>
      </NuxtLink>
    </nav>

    <header
      class="d-flex flex-row align-items-center p-4"
      style="max-width: 500px"
    >
      <i :class="'fs-1 bi bi-' + props.iconName"></i>

      <h1 class="m-0 ms-2 mb-1 text-wrap text-break">{{ props.pageTitle }}</h1>
    </header>
  </div>
</template>

<script lang="ts" setup>
interface PageHeaderProps {
  pageTitle: string;
  backTo: string;
  iconName: string;
}

const props = defineProps<PageHeaderProps>();
</script>
