<template>
  <div>
    <header class="p-4" style="max-width: 500px">
      <img class="w-25 mb-3" src="~/assets/icon.png" alt="Workout Manager" />
      <h1>Workout Manager</h1>
      <h3 class="fs-5 text-muted">See all your workouts in one place</h3>
    </header>

    <form class="w-100 px-4 pb-2" @submit="submitNewWorkout">
      <div class="mb-3" v-if="showNameInput">
        <label for="nameInput" class="form-label">Workout name</label>
        <input
          type="text"
          class="form-control"
          id="nameInput"
          placeholder="Some nice name!"
          v-model="workoutName"
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        <i :class="'bi bi-' + submitInfos.iconName + ' me-1'"></i>

        {{ submitInfos.label }}
      </button>
    </form>

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
import { generateId } from "@/utils/common";

const { workouts, addWorkout } = useWorkoutList();

const showNameInput = ref(false);
const submitInfos = computed(() => ({
  label: showNameInput.value ? "Submit" : "Create new Workout",
  iconName: showNameInput.value ? "check" : "plus-circle",
}));

const workoutName = ref("");

const submitNewWorkout = (e: Event) => {
  e.preventDefault();

  if (!showNameInput.value) {
    showNameInput.value = true;
    return;
  }

  addWorkout({
    id: generateId(),
    name: workoutName.value,
    exercises: [],
  });
  workoutName.value = "";
  showNameInput.value = false;
};
</script>
