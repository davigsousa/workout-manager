<script lang="ts" setup>
import { getWorkouts } from "@/utils/common";

const workouts = getWorkouts();
</script>

<template>
  <div class="workouts">
    <h1 class="title">Workouts</h1>
    <ul>
      <li v-for="workout in workouts">
        <NuxtLink :to="'/workouts/' + workout.id">
          {{ workout.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
