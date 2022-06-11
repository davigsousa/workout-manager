export interface Exercise {
  id: number;
  name: string;
  sets: string;
  reps: string;
  load?: string;
  rest?: string;
  observation?: string;
}

export interface Workout {
  id: number;
  name: string;
  exercises: Exercise[];
}
