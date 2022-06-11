import { Workout, Exercise } from "./entities";

const WORKOUTS_STORAGE_KEY = "@manager/workout";

export function cacheWorkouts(workouts: Workout[]) {
  localStorage.setItem(WORKOUTS_STORAGE_KEY, JSON.stringify(workouts));
}

export function getCachedWorkouts(): Workout[] {
  const data = localStorage.getItem(WORKOUTS_STORAGE_KEY);

  if (data) {
    return JSON.parse(data);
  }

  return [];
}

export function getWorkoutById(id: number): Workout | undefined {
  const workouts = getCachedWorkouts();

  return workouts.find((workout: Workout) => workout.id === id);
}

export function deleteWorkoutById(id: number) {
  const workouts = getCachedWorkouts();

  const filteredWorkouts = workouts.filter(
    (workout: Workout) => workout.id !== id
  );

  localStorage.setItem(WORKOUTS_STORAGE_KEY, JSON.stringify(filteredWorkouts));
}

export function cacheExercises(workoutId: number, exercises: Exercise[]) {
  const workouts = getCachedWorkouts();

  const newWorkouts = workouts.map((workout: Workout) => {
    if (workout.id === workoutId) {
      return {
        ...workout,
        exercises,
      };
    }

    return workout;
  });

  cacheWorkouts(newWorkouts);
}

export function getCachedExercises(workoutId: number) {
  const workouts = getCachedWorkouts();

  const workout = workouts.find((workout: Workout) => workout.id === workoutId);

  if (workout) {
    return workout.exercises;
  }

  return [];
}

export function addExerciseToWorkout(workoutId: number, exercise: Exercise) {
  const workouts = getCachedWorkouts();

  const newWorkouts = workouts.map((workout: Workout) => {
    if (workout.id === workoutId) {
      return {
        ...workout,
        exercises: [exercise, ...workout.exercises],
      };
    }

    return workout;
  });

  cacheWorkouts(newWorkouts);
}
