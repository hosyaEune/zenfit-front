import { type Workout, WorkoutDifficulty } from "@/@model";

export const REST_ID = 0;

export const ExercisesMap = {
  приседания: {
    id: 2,
    name: "приседания",
    image: {
      src: "/stock-cell.png",
    },
  },
  "становая тяга": {
    id: 3,
    name: "становая тяга",
    image: {
      src: "/stock-cell.png",
    },
  },
  "тяга в наклоне": {
    id: 4,
    name: "тяга в наклоне",
    image: {
      src: "/stock-cell.png",
    },
  },
  выпады: {
    id: 5,
    name: "выпады",
    image: {
      src: "/stock-cell.png",
    },
  },
  гиперэкстензия: {
    id: 6,
    name: "гиперэкстензия",
    image: {
      src: "/stock-cell.png",
    },
  },
  "подъемы таза (левая нога)": {
    id: 7,
    name: "подъемы таза (левая нога)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "подъемы таза (правая нога)": {
    id: 8,
    name: "подъемы таза (правая нога)",
    image: {
      src: "/stock-cell.png",
    },
  },
  скручивания: {
    id: 9,
    name: "скручивания",
    image: {
      src: "/stock-cell.png",
    },
  },
  "косые скручивания": {
    id: 10,
    name: "косые скручивания",
    image: {
      src: "/stock-cell.png",
    },
  },
  "подъем на носке (левая нога)": {
    id: 11,
    name: "подъем на носке (левая нога)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "подъем на носке (правая нога)": {
    id: 12,
    name: "подъем на носке (правая нога)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "подъем на носке (обе ноги)": {
    id: 13,
    name: "подъем на носке (обе ноги)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "разведение гантелей лёжа": {
    id: 14,
    name: "разведение гантелей лёжа",
    image: {
      src: "/stock-cell.png",
    },
  },
  "разгибение за спиной (левая рука)": {
    id: 15,
    name: "разгибение за спиной (левая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "разгибение за спиной (правая рука)": {
    id: 16,
    name: "разгибение за спиной (правая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "сгибание на бицепс с гантелей (левая рука)": {
    id: 17,
    name: "сгибание на бицепс (левая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "сгибание на бицепс с гантелей (правая рука)": {
    id: 18,
    name: "сгибание на бицепс (правая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "выпады назад (на каждую ногу)": {
    id: 19,
    name: "выпады назад",
    image: {
      src: "/stock-cell.png",
    },
  },
  "сгибание кисти с гантелей (левая рука)": {
    id: 20,
    name: "сгибание кисти с гантелей (левая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "сгибание кисти с гантелей (правая рука)": {
    id: 21,
    name: "сгибание кисти с гантелей (правая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "беговая дорожка": {
    id: 22,
    name: "беговая дорожка",
    image: {
      src: "/stock-cell.png",
    },
  },
  планка: {
    id: 23,
    name: "планка",
    image: {
      src: "/stock-cell.png",
    },
  },
  "охотничья собака (левая рука)": {
    id: 24,
    name: "охотничья собака (левая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
  "охотничья собака (правая рука)": {
    id: 25,
    name: "охотничья собака (правая рука)",
    image: {
      src: "/stock-cell.png",
    },
  },
} as const;

export const ITEMS: Workout[] = [
  {
    id: 1,
    name: "light",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 900,
    image: {
      src: "/stock-row.png",
    },
    sets: [
      {
        repeatCount: 2,
        restSeconds: 90,
        exercises: [
          {
            exercise: ExercisesMap["охотничья собака (левая рука)"],
            count: 6,
            type: "reps",
          },
          {
            exercise: ExercisesMap["охотничья собака (правая рука)"],
            count: 6,
            type: "reps",
          },
          {
            exercise: ExercisesMap["скручивания"],
            count: 15,
            type: "reps",
          },
          {
            exercise: ExercisesMap["подъемы таза (левая нога)"],
            count: 6,
            type: "reps",
          },
          {
            exercise: ExercisesMap["подъемы таза (правая нога)"],
            count: 6,
            type: "reps",
          },
          {
            exercise: ExercisesMap["планка"],
            count: 20,
            type: "time",
          },
          {
            exercise: ExercisesMap["подъем на носке (обе ноги)"],
            count: 15,
            type: "reps",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Full body A",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 3000,
    image: {
      src: "/stock-row.png",
    },
    sets: [
      {
        repeatCount: 4,
        restSeconds: 110,
        exercises: [
          {
            exercise: ExercisesMap["становая тяга"],
            count: 7,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 4,
        restSeconds: 110,
        exercises: [
          {
            exercise: ExercisesMap["приседания"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          {
            exercise: ExercisesMap["тяга в наклоне"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 52,
        exercises: [
          {
            exercise: ExercisesMap["подъемы таза (левая нога)"],
            count: 13,
            type: "reps",
          },
          {
            exercise: ExercisesMap["подъемы таза (правая нога)"],
            count: 13,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["косые скручивания"],
            count: 20,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["подъем на носке (левая нога)"],
            count: 20,
            type: "reps",
          },
          {
            exercise: ExercisesMap["подъем на носке (правая нога)"],
            count: 20,
            type: "reps",
          },
          {
            exercise: ExercisesMap["подъем на носке (обе ноги)"],
            count: 20,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["гиперэкстензия"],
            count: 12,
            type: "reps",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Full body B",
    difficulty: WorkoutDifficulty.Beginner,
    averageDurationSeconds: 3000,
    image: {
      src: "/stock-row.png",
    },
    sets: [
      {
        repeatCount: 4,
        restSeconds: 90,
        exercises: [
          {
            exercise: ExercisesMap["разведение гантелей лёжа"],
            count: 8,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["разгибение за спиной (левая рука)"],
            count: 6,
            type: "reps",
          },
          {
            exercise: ExercisesMap["разгибение за спиной (правая рука)"],
            count: 6,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise:
              ExercisesMap["сгибание на бицепс с гантелей (левая рука)"],
            count: 6,
            type: "reps",
          },
          {
            exercise:
              ExercisesMap["сгибание на бицепс с гантелей (правая рука)"],
            count: 6,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 90,
        exercises: [
          {
            exercise: ExercisesMap["выпады назад (на каждую ногу)"],
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
            exercise: ExercisesMap["скручивания"],
            count: 20,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 3,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["сгибание кисти с гантелей (левая рука)"],
            count: 10,
            type: "reps",
          },
          {
            exercise: ExercisesMap["сгибание кисти с гантелей (правая рука)"],
            count: 10,
            type: "reps",
          },
        ],
      },
      {
        repeatCount: 1,
        restSeconds: 60,
        exercises: [
          {
            exercise: ExercisesMap["беговая дорожка"],
            count: 900,
            type: "time",
          },
        ],
      },
    ],
  },
];
