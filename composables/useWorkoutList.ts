import { ref, watch, onMounted } from "vue";
import { cacheWorkouts, getCachedWorkouts } from "@/utils/storage";
import { Workout } from "@/utils/entities";

export function useWorkoutList() {
  const workouts = ref<Workout[]>([]);
  watch(workouts, () => cacheWorkouts(workouts.value));

  onMounted(async () => {
    workouts.value = getCachedWorkouts();
  });

  const addWorkout = (workout: Workout) => {
    workouts.value = [workout, ...workouts.value];
  };

  return { workouts, addWorkout };
}
