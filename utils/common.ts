export const generateId = () => Math.floor(Math.random() * Math.floor(10000));

export const getWorkouts = () => [
  {
    id: 1,
    name: "Train A",
    exercises: [
      {
        id: 1,
        name: "Bench Press",
        load: "20",
        reps: "10",
        sets: "3",
        observation: "Very good exercise",
      },
      {
        id: 2,
        name: "Squat",
        load: "20",
        reps: "10",
        sets: "3",
        observation: "Very good exercise",
      },
      {
        id: 3,
        name: "Deadlift",
        load: "20",
        reps: "10",
        sets: "3",
        observation: "Very good exercise",
      },
    ],
  },
  {
    id: 2,
    name: "Train B",
    exercises: [
      {
        id: 1,
        name: "Bench Press",
        load: "20",
        reps: "10",
        sets: "3",
        observation: "Very good exercise",
      },
      {
        id: 2,
        name: "Squat",
        load: "20",
        reps: "10",
        sets: "3",
        observation: "Very good exercise",
      },
      {
        id: 3,
        name: "Deadlift",
        load: "20",
        reps: "10",
        sets: "3",
        observation: "Very good exercise",
      },
    ],
  },
];
