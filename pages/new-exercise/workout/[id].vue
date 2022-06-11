<template>
  <div>
    <PageHeader
      icon-name="plus-circle-fill"
      page-title="New exercise"
      :back-to="'/workout/' + $route.params.id"
    />

    <form class="px-4">
      <div class="mb-3">
        <label for="nameInput" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="nameInput"
          placeholder="Bench Press"
        />
      </div>

      <div class="mb-3">
        <label for="setsInput" class="form-label">Sets</label>
        <input
          type="text"
          class="form-control"
          id="setsInput"
          placeholder="3"
        />
      </div>

      <div class="mb-3">
        <label for="repsInput" class="form-label">Reps</label>
        <input
          type="text"
          class="form-control"
          id="repsInput"
          placeholder="12"
        />
      </div>

      <div class="mb-3">
        <label for="loadInput" class="form-label">Load</label>
        <input
          type="text"
          class="form-control"
          id="loadInput"
          placeholder="20"
        />
      </div>

      <div class="mb-4">
        <label for="observationInput" class="form-label">Observation</label>
        <input
          type="text"
          class="form-control"
          id="observationInput"
          placeholder="..."
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        <i class="bi bi-check-circle me-1"></i>
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup></script>
