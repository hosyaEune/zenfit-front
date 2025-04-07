import { useState } from "react";

import { Text } from "@chakra-ui/react";
import { useParams } from "wouter";

import { ITEMS } from "@/@mock";
import type { Workout } from "@/@model";
import { WorkoutExercive } from "@/pages/WorkoutExercive";
import { WorkoutPreview } from "@/pages/WorkoutPreview";
import { useQuery } from "@/shared/utils/hooks/use-query";

export default function Workout() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(-1);

  const params = useParams();
  const { id } = params;

  const { data } = useQuery({
    queryKey: ["workout", id ?? "0"],
    queryFn: async () => ITEMS.find((item) => item.id === Number(id)),
  });

  if (!data) {
    return <Text>Loading...</Text>;
  }

  // TODO: добавить отдых
  const allExercise = data.sets.reduce((acc, set) => {
    const exercises = Array(set.repeatCount)
      .fill(null)
      .flatMap(() => [
        ...set.exercises,
        {
          type: "time",
          count: set.restSeconds,
          exercise: {
            id: 0,
            name: "Отдых",
            image: {
              src: "/stock-cell.png",
            },
          },
        } as Workout["sets"][number]["exercises"][number],
      ]);
    acc.push(...exercises);

    return acc;
  }, [] as Workout["sets"][number]["exercises"]);
  const currentExercise = allExercise[currentExerciseIndex];

  if (!currentExercise) {
    return (
      <WorkoutPreview {...data} onClick={() => setCurrentExerciseIndex(0)} />
    );
  }

  const onNextHandler = () => {
    setCurrentExerciseIndex((prev) => prev + 1);
  };

  const onPrevHandler = () => {
    setCurrentExerciseIndex((prev) => prev - 1);
  };

  return (
    <WorkoutExercive
      {...currentExercise}
      currentExercise={currentExerciseIndex}
      countExercises={allExercise.length}
      onNext={onNextHandler}
      onPrev={onPrevHandler}
    />
  );
}
