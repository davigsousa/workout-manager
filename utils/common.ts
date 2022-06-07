export const generateId = () => Math.floor(Math.random() * Math.floor(10000));

export const getWorkouts = () => [
  {
    id: generateId(),
    name: "Chest",
    exercises: [
      {
        id: generateId(),
        name: "Bench Press",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
      {
        id: generateId(),
        name: "Incline Bench Press",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
    ],
  },
  {
    id: generateId(),
    name: "Back",
    exercises: [
      {
        id: generateId(),
        name: "Deadlift",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
      {
        id: generateId(),
        name: "Pull-up",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
    ],
  },
];
