<template>
  <div>
    <PageHeader icon-name="list-stars" :page-title="workoutName" back-to="/" />

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
      <li class="card my-2 d-flex flex-row" v-for="exercise in exercises">
        <div
          @click="toggleShowDeleteExercise(exercise.id)"
          class="card-body text-decoration-none d-flex flex-column"
        >
          <div class="d-flex flex-row">
            <h5 class="card-title flex-grow-1 text-wrap text-break m-0">
              {{ exercise.name }}
            </h5>

            <span class="text-nowrap fs-5"
              >{{ exercise.sets }} x {{ exercise.reps }}</span
            >
          </div>

          <div class="d-flex flex-row flex-wrap">
            <strong v-if="!!exercise.load" class="me-2">Load:</strong>
            <span v-if="!!exercise.load" class="me-2 text-muted text-break">{{
              exercise.load
            }}</span>

            <strong v-if="!!exercise.rest" class="me-2">Rest:</strong>
            <span v-if="!!exercise.rest" class="text-muted text-break">{{
              exercise.rest
            }}</span>
          </div>

          <div v-if="!!exercise.observation" class="d-flex flex-row flex-wrap">
            <strong class="me-2">OBS:</strong>
            <span class="text-muted text-break">{{
              exercise.observation
            }}</span>
          </div>
        </div>

        <button
          v-if="showDeleteExercise[exercise.id]"
          class="btn btn-danger rounded-0"
          @click="handleDeleteExercise(exercise.id)"
        >
          <i class="bi bi-trash-fill"></i>
        </button>
      </li>
    </ul>

    <div class="w-100 px-4 py-4">
      <button @click="handleDeleteWorkout" class="btn btn-danger w-100">
        <i class="bi bi-trash me-1"></i>

        Delete workout
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { deleteWorkoutById, getWorkoutById } from "@/utils/storage";
import { isNumeric } from "@/utils/common";

const router = useRouter();
const paramsId = useRoute().params.id as string;
const { exercises, deleteExercise } = useExerciseList(Number(paramsId));

const workoutId = ref<number | null>(null);
const workoutName = ref("");

interface ShowDeleteExercise {
  [id: string]: boolean;
}
const showDeleteExercise = ref<ShowDeleteExercise>({});
const toggleShowDeleteExercise = (id: number) => {
  showDeleteExercise.value[id] = !showDeleteExercise.value[id];
};

const handleDeleteWorkout = () => {
  const shouldDelete = confirm("Are you sure?");

  if (!shouldDelete) return;

  deleteWorkoutById(workoutId.value);
  router.push("/");
};

const handleDeleteExercise = (id: number) => {
  const shouldDelete = confirm("Are you sure?");

  if (!shouldDelete) return;

  deleteExercise(id);
};

onMounted(() => {
  if (isNumeric(paramsId)) {
    workoutId.value = parseInt(paramsId);

    const workout = getWorkoutById(workoutId.value);
    if (workout) {
      workoutName.value = workout.name;
    } else {
      router.push("/");
    }
  } else {
    router.push("/");
  }
});
</script>
