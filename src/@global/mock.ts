import type { Exercise, Workout } from "./types";
import { WorkoutDifficulty } from "./types";

export const REST_ID = 0;
export const user = {
  weight: 79,
};

export const EXERCISES_MAP: Record<string, Exercise> = {
  // Full Body A
  "Romanian Deadlift": {
    id: 1,
    name: "Romanian Deadlift",
    image: { lqip: 173538, src: "/Romanian_Deadlift.png" },
    met: 6.0,
  },
  Squat: {
    id: 2,
    name: "Squat",
    image: { lqip: 173538, src: "/Squat.png" },
    met: 5.0,
  },
  "Bent-over Row": {
    id: 3,
    name: "Bent-over Row",
    image: { lqip: 173538, src: "/Bent-over_Row.png" },
    met: 6.0,
  },
  "Dumbbell Shrug (L)": {
    id: 39,
    name: "Dumbbell Shrug (L)",
    image: { lqip: 173538, src: "/Dumbbell_Shrug.png" },
    met: 3.8,
  },
  "Dumbbell Shrug (R)": {
    id: 40,
    name: "Dumbbell Shrug (R)",
    image: { lqip: 173538, src: "/Dumbbell_Shrug.png" },
    met: 3.8,
  },
  "Oblique Crunch": {
    id: 6,
    name: "Oblique Crunch",
    image: { lqip: 173538, src: "/Oblique_Crunch.png" },
    met: 3.8,
  },

  // Full Body B
  "Chest Fly (Dumbbell)": {
    id: 11,
    name: "Chest Fly (Dumbbell)",
    image: { lqip: 173538, src: "/Dumbbell_Fly.png" },
    met: 5.0,
  },
  "Dumbbell Shoulder Press": {
    id: 33,
    name: "Dumbbell Shoulder Press",
    image: { lqip: 173538, src: "/Dumbbell_Shoulder_Press.png" },
    met: 5.0,
  },
  "Rear Lunge": {
    id: 16,
    name: "Rear Lunge",
    image: { lqip: 173538, src: "/Rear_Lunge.png" },
    met: 5.5,
  },
  "Bicep Curl (L)": {
    id: 14,
    name: "Bicep Curl (L)",
    image: { lqip: 173538, src: "/Bicep_Curl.png" },
    met: 4.0,
  },
  "Bicep Curl (R)": {
    id: 15,
    name: "Bicep Curl (R)",
    image: { lqip: 173538, src: "/Bicep_Curl.png" },
    met: 4.0,
  },
  "Dumbbell One Arm Triceps Extension (L)": {
    id: 12,
    name: "Dumbbell One Arm Triceps Extension (L)",
    image: { lqip: 173538, src: "/Dumbbell_One Arm_Triceps_Extension.png" },
    met: 4.0,
  },
  "Dumbbell One Arm Triceps Extension (R)": {
    id: 13,
    name: "Dumbbell One Arm Triceps Extension (R)",
    image: { lqip: 173538, src: "/Dumbbell_One Arm_Triceps_Extension.png" },
    met: 4.0,
  },
  Crunch: {
    id: 17,
    name: "Crunch",
    image: { lqip: 173538, src: "/Crunch.png" },
    met: 3.8,
  },

  // Full Body C
  "Bulgarian Split Squat (L)": {
    id: 35,
    name: "Bulgarian Split Squat (L)",
    image: { lqip: 173538, src: "/Bulgarian_Split_Squat.png" },
    met: 5.5,
  },
  "Bulgarian Split Squat (R)": {
    id: 36,
    name: "Bulgarian Split Squat (R)",
    image: { lqip: 173538, src: "/Bulgarian_Split_Squat.png" },
    met: 5.5,
  },
  "Glute Bridge (L)": {
    id: 4,
    name: "Glute Bridge (L)",
    image: { lqip: 173538, src: "/Glute_Bridge.png" },
    met: 3.5,
  },
  "Glute Bridge (R)": {
    id: 5,
    name: "Glute Bridge (R)",
    image: { lqip: 173538, src: "/Glute_Bridge.png" },
    met: 3.5,
  },
  "Lateral Raise": {
    id: 34,
    name: "Lateral Raise",
    image: { lqip: 173538, src: "/Lateral_Raise.png" },
    met: 4.5,
  },
  "Dumbbell Row (L)": {
    id: 37,
    name: "Dumbbell Row (L)",
    image: { lqip: 173538, src: "/Dumbbell_Row.png" },
    met: 5.0,
  },
  "Dumbbell Row (R)": {
    id: 38,
    name: "Dumbbell Row (R)",
    image: { lqip: 173538, src: "/Dumbbell_Row.png" },
    met: 5.0,
  },
  Vacuum: {
    id: 26,
    name: "Vacuum",
    image: { lqip: 173538, src: "/Vacuum.png" },
    met: 2.2,
  },
  "Front Plank": {
    id: 24,
    name: "Front Plank",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 3.3,
  },
  "Side Plank (L)": {
    id: 24,
    name: "Side Plank (L)",
    image: { lqip: 173538, src: "/Side_Plank.png" },
    met: 3.3,
  },
  "Side Plank (R)": {
    id: 25,
    name: "Side Plank (R)",
    image: { lqip: 173538, src: "/Side_Plank.png" },
    met: 3.3,
  },

  // Light Day (Core & Mobility) - unchanged
  "Cat Cow": {
    id: 21,
    name: "Cat Cow",
    image: { lqip: 173538, src: "/Cat_Cow.png" },
    met: 2.2,
  },
  "Bird Dog": {
    id: 22,
    name: "Bird Dog",
    image: { lqip: 173538, src: "/Bird_Dog.png" },
    met: 3.0,
  },
  "Dead Bug": {
    id: 23,
    name: "Dead Bug",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 3.0,
  },

  // Posture & Stretch - unchanged
  "Chin Tuck": {
    id: 27,
    name: "Chin Tuck",
    image: { lqip: 173538, src: "/Chin_Tuck.png" },
    met: 1.9,
  },
  "Wall Angel": {
    id: 28,
    name: "Wall Angel",
    image: { lqip: 173538, src: "/Wall_Angel.png" },
    met: 1.9,
  },
  "SCM Stretch (L)": {
    id: 29,
    name: "SCM Stretch (L)",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 1.9,
  },
  "SCM Stretch (R)": {
    id: 30,
    name: "SCM Stretch (R)",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 1.9,
  },
  "Chest Stretch (L)": {
    id: 31,
    name: "Chest Stretch (L)",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 1.9,
  },
  "Chest Stretch (R)": {
    id: 32,
    name: "Chest Stretch (R)",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 1.9,
  },
} as const;

export const ITEMS: Workout[] = [
  {
    id: 1,
    name: "Full Body A (Thu)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 3300,
    image: { src: "/stock-row-small.webp", lqip: 57377 },
    sets: [
      {
        repeatCount: 4,
        restSeconds: 90,
        exercises: [
          {
            exercise: EXERCISES_MAP["Romanian Deadlift"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          { exercise: EXERCISES_MAP["Squat"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          { exercise: EXERCISES_MAP["Bent-over Row"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: EXERCISES_MAP["Dumbbell Shrug (L)"],
            count: 15,
            type: "reps",
          },
          {
            exercise: EXERCISES_MAP["Dumbbell Shrug (R)"],
            count: 15,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          {
            exercise: EXERCISES_MAP["Oblique Crunch"],
            count: 20,
            type: "reps",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Full Body B (Sun)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 3300,
    image: { src: "/stock-row-small.webp", lqip: 57377 },
    sets: [
      {
        repeatCount: 4,
        restSeconds: 90,
        exercises: [
          {
            exercise: EXERCISES_MAP["Chest Fly (Dumbbell)"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: EXERCISES_MAP["Dumbbell Shoulder Press"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          { exercise: EXERCISES_MAP["Rear Lunge"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: EXERCISES_MAP["Bicep Curl (L)"],
            count: 10,
            type: "reps",
          },
          {
            exercise: EXERCISES_MAP["Bicep Curl (R)"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: EXERCISES_MAP["Dumbbell One Arm Triceps Extension (L)"],
            count: 10,
            type: "reps",
          },
          {
            exercise: EXERCISES_MAP["Dumbbell One Arm Triceps Extension (R)"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          { exercise: EXERCISES_MAP["Crunch"], count: 20, type: "reps" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Full Body C (Tue)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 3300,
    image: { src: "/stock-row-small.webp", lqip: 57377 },
    sets: [
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          {
            exercise: EXERCISES_MAP["Bulgarian Split Squat (L)"],
            count: 8,
            type: "reps",
          },
          {
            exercise: EXERCISES_MAP["Bulgarian Split Squat (R)"],
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
            exercise: EXERCISES_MAP["Glute Bridge (L)"],
            count: 12,
            type: "reps",
          },
          {
            exercise: EXERCISES_MAP["Glute Bridge (R)"],
            count: 12,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          { exercise: EXERCISES_MAP["Lateral Raise"], count: 12, type: "reps" },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: EXERCISES_MAP["Dumbbell Row (L)"],
            count: 10,
            type: "reps",
          },
          {
            exercise: EXERCISES_MAP["Dumbbell Row (R)"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 60,
        exercises: [
          { exercise: EXERCISES_MAP["Vacuum"], count: 30, type: "time" },
          {
            exercise: EXERCISES_MAP["Side Plank (L)"],
            count: 30,
            type: "time",
          },
          {
            exercise: EXERCISES_MAP["Side Plank (R)"],
            count: 30,
            type: "time",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Core & Mobility (Mon)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 1800,
    image: { src: "/stock-row-small.webp", lqip: 57377 },
    sets: [
      {
        repeatCount: 2,
        restSeconds: 30,
        exercises: [
          { exercise: EXERCISES_MAP["Cat Cow"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 45,
        exercises: [
          { exercise: EXERCISES_MAP["Bird Dog"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 45,
        exercises: [
          { exercise: EXERCISES_MAP["Dead Bug"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 45,
        exercises: [
          {
            exercise: EXERCISES_MAP["Side Plank (L)"],
            count: 40,
            type: "time",
          },
          {
            exercise: EXERCISES_MAP["Side Plank (R)"],
            count: 40,
            type: "time",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Posture & Vacuum Practice (Daily)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 900,
    image: { src: "/stock-row-small.webp", lqip: 57377 },
    sets: [
      {
        repeatCount: 3,
        restSeconds: 30,
        exercises: [
          { exercise: EXERCISES_MAP["Chin Tuck"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 30,
        exercises: [
          { exercise: EXERCISES_MAP["Wall Angel"], count: 10, type: "reps" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 20,
        exercises: [
          {
            exercise: EXERCISES_MAP["SCM Stretch (L)"],
            count: 30,
            type: "time",
          },
          {
            exercise: EXERCISES_MAP["SCM Stretch (R)"],
            count: 30,
            type: "time",
          },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 20,
        exercises: [
          {
            exercise: EXERCISES_MAP["Chest Stretch (L)"],
            count: 30,
            type: "time",
          },
          {
            exercise: EXERCISES_MAP["Chest Stretch (R)"],
            count: 30,
            type: "time",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 30,
        exercises: [
          { exercise: EXERCISES_MAP["Vacuum"], count: 20, type: "time" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 30,
        exercises: [
          {
            exercise: EXERCISES_MAP["Front Plank"],
            count: 30,
            type: "time",
          },
          {
            exercise: EXERCISES_MAP["Side Plank (L)"],
            count: 30,
            type: "time",
          },
          {
            exercise: EXERCISES_MAP["Side Plank (R)"],
            count: 30,
            type: "time",
          },
        ],
      },
    ],
  },
];
