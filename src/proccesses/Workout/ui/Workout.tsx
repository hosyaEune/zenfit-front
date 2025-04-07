import { useRef, useState } from "react";

import { Text } from "@chakra-ui/react";
import { useParams } from "wouter";

import { ITEMS, REST_ID } from "@/@mock";
import type { Workout } from "@/@model";
import { WorkoutCogratulations } from "@/pages/WorkoutCogratulations";
import { WorkoutExercive } from "@/pages/WorkoutExercive";
import { WorkoutPreview } from "@/pages/WorkoutPreview";
import { TimeHelper } from "@/shared/utils/helpers/time-helper";
import { useQuery } from "@/shared/utils/hooks/use-query";

const previewIndex = -1;

const useGetWorkoutById = (id: string | number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["workout", id],
    queryFn: async () => ITEMS.find((item) => item.id === Number(id)),
  });

  const allExercise = (data?.sets ?? []).reduce((acc, set) => {
    const exercises = Array(set.repeatCount)
      .fill(null)
      .flatMap(() => [
        ...set.exercises,
        {
          type: "time",
          count: set.restSeconds,
          exercise: {
            id: REST_ID,
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

  const restCount = allExercise.reduce((acc, curr) => {
    if (curr.exercise.id === REST_ID) {
      acc++;
    }

    return acc;
  }, 0);

  return {
    workout: data,
    isLoading,
    allExercise,
    restCount,
  };
};

export default function Workout() {
  const [currentExerciseIndex, setCurrentExerciseIndex] =
    useState<number>(previewIndex);
  const params = useParams();
  const skipCount = useRef(0);
  const startDate = useRef(new Date());
  const { id } = params;
  const { allExercise, restCount, workout } = useGetWorkoutById(id ?? "0");

  if (currentExerciseIndex > allExercise.length - 1) {
    return (
      <WorkoutCogratulations
        expendSeconds={TimeHelper.getMinutes(
          (Number(new Date()) - Number(startDate.current)) / 1000
        )}
        countExercises={allExercise.length - restCount - skipCount.current}
        expendCalories={0}
      />
    );
  }

  const currentExercise = allExercise[currentExerciseIndex];

  if (!workout) {
    return <Text>Loading...</Text>;
  }

  if (!currentExercise) {
    return (
      <WorkoutPreview
        {...workout}
        onClick={() => {
          startDate.current = new Date();
          setCurrentExerciseIndex(0);
        }}
      />
    );
  }

  const onNextHandler = () => {
    setCurrentExerciseIndex((prev) => prev + 1);
  };

  const onPrevHandler = () => {
    if (allExercise[currentExerciseIndex].exercise.id !== REST_ID) {
      skipCount.current -= 1;
    }

    setCurrentExerciseIndex((prev) => prev - 1);
  };

  const onCancelHandler = () => {
    setCurrentExerciseIndex(previewIndex);
  };

  const onSkipHandler = () => {
    if (allExercise[currentExerciseIndex].exercise.id !== REST_ID) {
      skipCount.current += 1;
    }

    onNextHandler();
  };

  return (
    <WorkoutExercive
      {...currentExercise}
      currentExercise={currentExerciseIndex}
      countExercises={allExercise.length}
      onSkip={onSkipHandler}
      onFinish={onNextHandler}
      onCancel={onCancelHandler}
      onPrev={onPrevHandler}
      onDone={onNextHandler}
    />
  );
}
