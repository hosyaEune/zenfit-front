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
  "Oblique Crunch": {
    id: 6,
    name: "Oblique Crunch",
    image: { lqip: 173538, src: "/Oblique_Crunch.png" },
    met: 3.8,
  },
  "Calf Raise (L)": {
    id: 7,
    name: "Calf Raise (L)",
    image: { lqip: 173538, src: "/Calf_Raise.png" },
    met: 4.5,
  },
  "Calf Raise (R)": {
    id: 8,
    name: "Calf Raise (R)",
    image: { lqip: 173538, src: "/Calf_Raise.png" },
    met: 4.5,
  },
  "Calf Raise (Both)": {
    id: 9,
    name: "Calf Raise (Both)",
    image: { lqip: 173538, src: "/Calf_Raise.png" },
    met: 4.5,
  },
  "Back Extension": {
    id: 10,
    name: "Back Extension",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 4.0,
  },

  // Full Body B
  "Chest Fly (Dumbbell)": {
    id: 11,
    name: "Chest Fly (Dumbbell)",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 5.0,
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
  "Rear Lunge": {
    id: 16,
    name: "Rear Lunge",
    image: { lqip: 173538, src: "/Rear_Lunge.png" },
    met: 5.5,
  },
  Crunch: {
    id: 17,
    name: "Crunch",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 3.8,
  },
  "Wrist Curl (L)": {
    id: 18,
    name: "Wrist Curl (L)",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 2.8,
  },
  "Wrist Curl (R)": {
    id: 19,
    name: "Wrist Curl (R)",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 2.8,
  },
  "Treadmill Walk": {
    id: 20,
    name: "Treadmill Walk",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 3.5,
  },

  // Light Day (Core & Mobility)
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
  Vacuum: {
    id: 26,
    name: "Vacuum",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 2.2,
  },
  // Posture
  "Chin Tuck": {
    id: 27,
    name: "Chin Tuck",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 1.9,
  },
  "Wall Angel": {
    id: 28,
    name: "Wall Angel",
    image: { lqip: 173538, src: "/stock-cell.png" },
    met: 1.9,
  },
  "SCM Stretch (L)": {
    id: 29,
    name: "SCM Stretch  (L)",
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
    averageDurationSeconds: 3000,
    image: { src: "/stock-row-small.webp", lqip: 57377 },
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
            exercise: ExercisesMap["Glute Bridge (L)"],
            count: 10,
            type: "reps",
          },
          {
            exercise: ExercisesMap["Glute Bridge (R)"],
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
    image: { src: "/stock-row-small.webp", lqip: 57377 },
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
    image: { src: "/stock-row-small.webp", lqip: 57377 },
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
    name: "Posture & Vacuum Practice (Everyday)",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 900,
    image: { src: "/stock-row-small.webp", lqip: 57377 },
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
          {
            exercise: ExercisesMap["SCM Stretch (L)"],
            count: 30,
            type: "time",
          },
          {
            exercise: ExercisesMap["SCM Stretch (R)"],
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
            exercise: ExercisesMap["Chest Stretch (L)"],
            count: 30,
            type: "time",
          },
          {
            exercise: ExercisesMap["Chest Stretch (R)"],
            count: 30,
            type: "time",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 30,
        exercises: [
          { exercise: ExercisesMap["Vacuum"], count: 20, type: "time" },
        ],
      },
      {
        repeatCount: 2,
        restSeconds: 30,
        exercises: [
          { exercise: ExercisesMap["Side Plank (L)"], count: 20, type: "time" },
          { exercise: ExercisesMap["Side Plank (R)"], count: 20, type: "time" },
        ],
      },
    ],
  },
];
