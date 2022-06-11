<template>
  <div>
    <header class="p-4" style="max-width: 500px">
      <img class="w-25 mb-3" src="~/assets/icon.png" alt="Workout Manager" />
      <h1>Workout Manager</h1>
      <h3 class="fs-5 text-muted">See all your workouts in one place</h3>
    </header>

    <ul class="list-group px-4">
      <li class="card my-2" v-for="workout in workouts">
        <NuxtLink
          class="card-body text-decoration-none d-flex flex-row"
          :to="'/workout/' + workout.id"
        >
          <div class="flex-fill">
            <h5 class="card-title">{{ workout.name }}</h5>
            <p class="card-text">{{ workout.exercises.length }} exercises</p>
          </div>

          <div class="d-flex flex-column justify-content-center">
            <i class="bi bi-chevron-compact-right"></i>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { getWorkouts } from "@/utils/common";

const workouts = getWorkouts();
</script>
