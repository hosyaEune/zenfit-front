import { type Workout, WorkoutDifficulty } from "@/@model";

export const REST_ID = 0;

export const ExercisesMap = {
  // Full Body A
  "Romanian Deadlift": {
    id: 1,
    name: "Romanian Deadlift",
    image: { src: "/Romanian_Deadlift.png" },
  },
  "Bodyweight Squat": {
    id: 2,
    name: "Bodyweight Squat",
    image: { src: "/stock-cell.png" },
  },
  "Bent-over Row": {
    id: 3,
    name: "Bent-over Row",
    image: { src: "/Bent-over_Row.png" },
  },
  "Glute Bridge (Left)": {
    id: 4,
    name: "Glute Bridge (Left)",
    image: { src: "/Glute_Bridge.png" },
  },
  "Glute Bridge (Right)": {
    id: 5,
    name: "Glute Bridge (Right)",
    image: { src: "/Glute_Bridge.png" },
  },
  "Oblique Crunch": {
    id: 6,
    name: "Oblique Crunch",
    image: { src: "/Oblique_Crunch.png" },
  },
  "Calf Raise (Left)": {
    id: 7,
    name: "Calf Raise (Left)",
    image: { src: "/Calf_Raise.png" },
  },
  "Calf Raise (Right)": {
    id: 8,
    name: "Calf Raise (Right)",
    image: { src: "/Calf_Raise.png" },
  },
  "Calf Raise (Both)": {
    id: 9,
    name: "Calf Raise (Both)",
    image: { src: "/Calf_Raise.png" },
  },
  "Back Extension": {
    id: 10,
    name: "Back Extension",
    image: { src: "/stock-cell.png" },
  },

  // Full Body B
  "Chest Fly (Dumbbell)": {
    id: 11,
    name: "Chest Fly (Dumbbell)",
    image: { src: "/stock-cell.png" },
  },
  "Dumbbell One Arm Triceps Extension (L)": {
    id: 12,
    name: "Dumbbell One Arm Triceps Extension (L)",
    image: { src: "/stock-cell.png" },
  },
  "Dumbbell One Arm Triceps Extension (R)": {
    id: 13,
    name: "Dumbbell One Arm Triceps Extension (R)",
    image: { src: "/stock-cell.png" },
  },
  "Bicep Curl (L)": {
    id: 14,
    name: "Bicep Curl (L)",
    image: { src: "/stock-cell.png" },
  },
  "Bicep Curl (R)": {
    id: 15,
    name: "Bicep Curl (R)",
    image: { src: "/stock-cell.png" },
  },
  "Rear Lunge": {
    id: 16,
    name: "Rear Lunge",
    image: { src: "/stock-cell.png" },
  },
  Crunch: { id: 17, name: "Crunch", image: { src: "/stock-cell.png" } },
  "Wrist Curl (L)": {
    id: 18,
    name: "Wrist Curl (L)",
    image: { src: "/stock-cell.png" },
  },
  "Wrist Curl (R)": {
    id: 19,
    name: "Wrist Curl (R)",
    image: { src: "/stock-cell.png" },
  },
  "Treadmill Walk": {
    id: 20,
    name: "Treadmill Walk",
    image: { src: "/stock-cell.png" },
  },

  // Light Day (Core & Mobility)
  "Cat Cow": { id: 21, name: "Cat Cow", image: { src: "/Cat_Cow.png" } },
  "Bird Dog": { id: 22, name: "Bird Dog", image: { src: "/Bird_Dog.png" } },
  "Dead Bug": { id: 23, name: "Dead Bug", image: { src: "/stock-cell.png" } },
  "Side Plank (L)": {
    id: 24,
    name: "Side Plank (L)",
    image: { src: "/Side_Plank.png" },
  },
  "Side Plank (R)": {
    id: 25,
    name: "Side Plank (R)",
    image: { src: "/Side_Plank.png" },
  },
  Vacuum: { id: 26, name: "Vacuum", image: { src: "/stock-cell.png" } },
} as const;

export const ITEMS: Workout[] = [
  {
    id: 1,
    name: "Full Body A (Thu)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 3000,
    image: { src: "/stock-row.png" },
    sets: [
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          {
            exercise: ExercisesMap["Romanian Deadlift"],
            count: 8,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          {
            exercise: ExercisesMap["Bodyweight Squat"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          { exercise: ExercisesMap["Bent-over Row"], count: 8, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["Glute Bridge (Left)"],
            count: 10,
            type: "reps",
          },
          {
            exercise: ExercisesMap["Glute Bridge (Right)"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          { exercise: ExercisesMap["Oblique Crunch"], count: 20, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 45,
        exercises: [
          { exercise: ExercisesMap["Back Extension"], count: 12, type: "reps" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Full Body B (Sun)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 3000,
    image: { src: "/stock-row.png" },
    sets: [
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          {
            exercise: ExercisesMap["Chest Fly (Dumbbell)"],
            count: 8,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["Dumbbell One Arm Triceps Extension (L)"],
            count: 6,
            type: "reps",
          },
          {
            exercise: ExercisesMap["Dumbbell One Arm Triceps Extension (R)"],
            count: 6,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          { exercise: ExercisesMap["Bicep Curl (L)"], count: 6, type: "reps" },
          { exercise: ExercisesMap["Bicep Curl (R)"], count: 6, type: "reps" },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          { exercise: ExercisesMap["Rear Lunge"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          { exercise: ExercisesMap["Crunch"], count: 20, type: "reps" },
        ],
      },
      {
        repeatCount: 1,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["Treadmill Walk"],
            count: 600,
            type: "time",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Core & Mobility (Tue)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 1800,
    image: { src: "/stock-row.png" },
    sets: [
      {
        repeatCount: 2,
        restSeconds: 30,
        exercises: [
          { exercise: ExercisesMap["Cat Cow"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 45,
        exercises: [
          { exercise: ExercisesMap["Bird Dog"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 45,
        exercises: [
          { exercise: ExercisesMap["Dead Bug"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 45,
        exercises: [
          { exercise: ExercisesMap["Side Plank (L)"], count: 30, type: "time" },
          { exercise: ExercisesMap["Side Plank (R)"], count: 30, type: "time" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Vacuum Practice (Mon/Wed/Fri)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 600,
    image: { src: "/stock-row.png" },
    sets: [
      {
        repeatCount: 3,
        restSeconds: 30,
        exercises: [
          { exercise: ExercisesMap["Vacuum"], count: 20, type: "time" },
        ],
      },
    ],
  },
];
