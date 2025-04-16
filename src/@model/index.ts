// Уровень сложности тренировки
export enum WorkoutDifficulty {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Athlete = "athlete",
  Elite = "elite",
}

// Картинка (можно расширять до ImageWithAlt или ImageWithMeta)
export type ExerciseImage = {
  src: string;
};

// Конкретное упражнение
export type Exercise = {
  id: number;
  name: string;
  image: ExerciseImage;
  met: number;
};

type CommonSetExercise = {
  exercise: Exercise;
  count: number;
};

// Унифицированный тип упражнения в подходе (по времени или по повторениям)
export type SetExercise =
  | ({
      type: "reps";
    } & CommonSetExercise)
  | ({
      type: "time";
    } & CommonSetExercise);

// Один подход, включает упражнения и параметры повторений/отдыха
export type WorkoutSet = {
  exercises: SetExercise[];
  restSeconds: number;
  repeatCount: number;
};

// Вся тренировка
export type Workout = {
  id: number;
  name: string;
  averageDurationSeconds: number;
  difficulty: WorkoutDifficulty;
  image: ExerciseImage;
  sets: WorkoutSet[];
};
