export const generateId = () => Math.floor(Math.random() * Math.floor(10000));

export const getWorkouts = () => [
  {
    id: 1,
    name: "Chest",
    exercises: [
      {
        id: 1,
        name: "Bench Press",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
      {
        id: 2,
        name: "Incline Bench Press",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
    ],
  },
  {
    id: 2,
    name: "Back",
    exercises: [
      {
        id: 1,
        name: "Deadlift",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
      {
        id: 2,
        name: "Pull-up",
        sets: "10",
        reps: "10",
        load: "10",
        observation: "very good exercise",
      },
    ],
  },
];
