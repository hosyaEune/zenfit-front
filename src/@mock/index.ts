import { type Workout, WorkoutDifficulty } from "@/@model";

export const REST_ID = 0;
export const user = {
  weight: 79,
};

export const ExercisesMap = {
  // Full Body A
  "Romanian Deadlift": {
    id: 1,
    name: "Romanian Deadlift",
    image: { src: "/Romanian_Deadlift.png" },
    met: 6.0,
  },
  Squat: {
    id: 2,
    name: "Squat",
    image: { src: "/Squat.png" },
    met: 5.0,
  },
  "Bent-over Row": {
    id: 3,
    name: "Bent-over Row",
    image: { src: "/Bent-over_Row.png" },
    met: 6.0,
  },
  "Glute Bridge (Left)": {
    id: 4,
    name: "Glute Bridge (Left)",
    image: { src: "/Glute_Bridge.png" },
    met: 3.5,
  },
  "Glute Bridge (Right)": {
    id: 5,
    name: "Glute Bridge (Right)",
    image: { src: "/Glute_Bridge.png" },
    met: 3.5,
  },
  "Oblique Crunch": {
    id: 6,
    name: "Oblique Crunch",
    image: { src: "/Oblique_Crunch.png" },
    met: 3.8,
  },
  "Calf Raise (Left)": {
    id: 7,
    name: "Calf Raise (Left)",
    image: { src: "/Calf_Raise.png" },
    met: 4.5,
  },
  "Calf Raise (Right)": {
    id: 8,
    name: "Calf Raise (Right)",
    image: { src: "/Calf_Raise.png" },
    met: 4.5,
  },
  "Calf Raise (Both)": {
    id: 9,
    name: "Calf Raise (Both)",
    image: { src: "/Calf_Raise.png" },
    met: 4.5,
  },
  "Back Extension": {
    id: 10,
    name: "Back Extension",
    image: { src: "/stock-cell.png" },
    met: 4.0,
  },

  // Full Body B
  "Chest Fly (Dumbbell)": {
    id: 11,
    name: "Chest Fly (Dumbbell)",
    image: { src: "/stock-cell.png" },
    met: 5.0,
  },
  "Dumbbell One Arm Triceps Extension (L)": {
    id: 12,
    name: "Dumbbell One Arm Triceps Extension (L)",
    image: { src: "/Dumbbell_One Arm_Triceps_Extension.png" },
    met: 4.0,
  },
  "Dumbbell One Arm Triceps Extension (R)": {
    id: 13,
    name: "Dumbbell One Arm Triceps Extension (R)",
    image: { src: "/Dumbbell_One Arm_Triceps_Extension.png" },
    met: 4.0,
  },
  "Bicep Curl (L)": {
    id: 14,
    name: "Bicep Curl (L)",
    image: { src: "/Bicep_Curl.png" },
    met: 4.0,
  },
  "Bicep Curl (R)": {
    id: 15,
    name: "Bicep Curl (R)",
    image: { src: "/Bicep_Curl.png" },
    met: 4.0,
  },
  "Rear Lunge": {
    id: 16,
    name: "Rear Lunge",
    image: { src: "/Rear_Lunge.png" },
    met: 5.5,
  },
  Crunch: {
    id: 17,
    name: "Crunch",
    image: { src: "/stock-cell.png" },
    met: 3.8,
  },
  "Wrist Curl (L)": {
    id: 18,
    name: "Wrist Curl (L)",
    image: { src: "/stock-cell.png" },
    met: 2.8,
  },
  "Wrist Curl (R)": {
    id: 19,
    name: "Wrist Curl (R)",
    image: { src: "/stock-cell.png" },
    met: 2.8,
  },
  "Treadmill Walk": {
    id: 20,
    name: "Treadmill Walk",
    image: { src: "/stock-cell.png" },
    met: 3.5,
  },

  // Light Day (Core & Mobility)
  "Cat Cow": {
    id: 21,
    name: "Cat Cow",
    image: { src: "/Cat_Cow.png" },
    met: 2.2,
  },
  "Bird Dog": {
    id: 22,
    name: "Bird Dog",
    image: { src: "/Bird_Dog.png" },
    met: 3.0,
  },
  "Dead Bug": {
    id: 23,
    name: "Dead Bug",
    image: { src: "/stock-cell.png" },
    met: 3.0,
  },
  "Side Plank (L)": {
    id: 24,
    name: "Side Plank (L)",
    image: { src: "/Side_Plank.png" },
    met: 3.3,
  },
  "Side Plank (R)": {
    id: 25,
    name: "Side Plank (R)",
    image: { src: "/Side_Plank.png" },
    met: 3.3,
  },
  Vacuum: {
    id: 26,
    name: "Vacuum",
    image: { src: "/stock-cell.png" },
    met: 2.2,
  },
  // Posture
  "Chin Tuck": {
    id: 27,
    name: "Chin Tuck",
    image: { src: "/stock-cell.png" },
    met: 2.1,
  },
  "Wall Angel": {
    id: 28,
    name: "Wall Angel",
    image: { src: "/stock-cell.png" },
    met: 2.1,
  },
  "SCM Stretch": {
    id: 29,
    name: "SCM Stretch",
    image: { src: "/stock-cell.png" },
    met: 2.1,
  },
  "Chest Stretch": {
    id: 30,
    name: "Chest Stretch",
    image: { src: "/stock-cell.png" },
    met: 2.1,
  },
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
            exercise: ExercisesMap["Squat"],
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
    name: "Posture & Vacuum Practice (Mon/Wed/Fri)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 900,
    image: { src: "/stock-row.png" },
    sets: [
      {
        repeatCount: 3,
        restSeconds: 30,
        exercises: [
          { exercise: ExercisesMap["Chin Tuck"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 30,
        exercises: [
          { exercise: ExercisesMap["Wall Angel"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 20,
        exercises: [
          { exercise: ExercisesMap["SCM Stretch"], count: 30, type: "time" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 20,
        exercises: [
          { exercise: ExercisesMap["Chest Stretch"], count: 30, type: "time" },
        ],
      },
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
