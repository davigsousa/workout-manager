<template>
  <div>
    <PageHeader
      icon-name="plus-circle-fill"
      page-title="New exercise"
      :back-to="'/workout/' + $route.params.id"
    />

    <form class="px-4" @submit="handleSubmit">
      <div class="mb-3">
        <label for="nameInput" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="nameInput"
          placeholder="Bench Press"
          v-model="name"
        />
      </div>

      <div class="mb-3">
        <label for="setsInput" class="form-label">Sets</label>
        <input
          type="text"
          class="form-control"
          id="setsInput"
          placeholder="3"
          v-model="sets"
        />
      </div>

      <div class="mb-3">
        <label for="repsInput" class="form-label">Reps</label>
        <input
          type="text"
          class="form-control"
          id="repsInput"
          placeholder="12"
          v-model="reps"
        />
      </div>

      <div class="mb-3">
        <label for="loadInput" class="form-label">Load</label>
        <input
          type="text"
          class="form-control"
          id="loadInput"
          placeholder="20"
          v-model="load"
        />
      </div>

      <div class="mb-4">
        <label for="observationInput" class="form-label">Observation</label>
        <input
          type="text"
          class="form-control"
          id="observationInput"
          placeholder="..."
          v-model="observation"
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        <i class="bi bi-check-circle me-1"></i>
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { generateId } from "~~/utils/common";
import { addExerciseToWorkout } from "~~/utils/storage";

const router = useRouter();
const workoutId = useRoute().params.id as string;

const name = ref("");
const sets = ref("");
const reps = ref("");
const load = ref("");
const observation = ref("");

const handleSubmit = (e: Event) => {
  e.preventDefault();

  addExerciseToWorkout(Number(workoutId), {
    id: generateId(),
    name: name.value,
    sets: sets.value,
    reps: reps.value,
    load: load.value,
    observation: observation.value,
  });

  router.push("/workout/" + workoutId);
};
</script>
