import { onMounted, ref, watch } from "vue";
import { Exercise } from "@/utils/entities";
import { cacheExercises, getCachedExercises } from "@/utils/storage";

export function useExerciseList(workoutId: number) {
  const exercises = ref<Exercise[]>([]);
  watch(exercises, () => cacheExercises(workoutId, exercises.value));

  onMounted(async () => {
    exercises.value = getCachedExercises(workoutId);
  });

  const addExercise = (exercise: Exercise) => {
    exercises.value = [exercise, ...exercises.value];
  };

  const deleteExercise = (exerciseId: number) => {
    exercises.value = exercises.value.filter(
      (exercise: Exercise) => exercise.id !== exerciseId
    );
  };

  return { exercises, addExercise, deleteExercise };
}
