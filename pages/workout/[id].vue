<template>
  <div>
    <BackHeader to="/" />

    <header
      class="d-flex flex-row align-items-center p-4"
      style="max-width: 500px"
    >
      <i class="fs-1 bi bi-card-checklist"></i>

      <h1 class="m-0 ms-2 mb-1">{{ workout.name }}</h1>
    </header>

    <div class="w-100 px-4 pb-2">
      <NuxtLink
        :to="'/new-exercise/workout/' + $route.params.id"
        class="btn btn-primary w-100"
      >
        <i class="bi bi-plus-circle me-1"></i>

        Add new exercise
      </NuxtLink>
    </div>

    <ul class="list-group px-4">
      <li class="card my-2" v-for="exercise in workout.exercises">
        <div class="card-body text-decoration-none d-flex flex-column">
          <div class="d-flex flex-row">
            <h5 class="card-title flex-fill">
              {{ exercise.name }}
            </h5>

            <span>{{ exercise.sets }} x {{ exercise.reps }}</span>
          </div>

          <div class="d-flex flex-row flex-wrap">
            <strong class="me-2">Load:</strong>
            <span class="text-muted text-break">{{ exercise.load }}</span>
          </div>

          <div class="d-flex flex-row flex-wrap">
            <strong class="me-2">OBS:</strong>
            <span class="text-muted text-break">{{
              exercise.observation
            }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { getWorkouts } from "@/utils/common";

const workouts = getWorkouts();
const workout = workouts[0];
</script>
