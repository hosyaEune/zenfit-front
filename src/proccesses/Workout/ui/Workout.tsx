import { useRef, useState } from "react";

import { Text } from "@chakra-ui/react";
import { useParams } from "wouter";

import { ITEMS, REST_ID, user } from "@/@global/mock";
import type { Workout } from "@/@global/types";
import { WorkoutCogratulations } from "@/pages/WorkoutCogratulations";
import { WorkoutExercive } from "@/pages/WorkoutExercive";
import { WorkoutPreview } from "@/pages/WorkoutPreview";
import { TimeHelper } from "@/shared/utils/helpers/time-helper";
import { useQuery } from "@/shared/utils/hooks/use-query";

const previewIndex = -1;

const exerciseCalories = (MET: number, weight: number, minutes: number) =>
  0.0175 * MET * weight * minutes;

const useGetWorkoutById = (id: string | number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["workout", id],
    queryFn: async () => ITEMS.find((item) => item.id === Number(id)),
  });

  const allExercise = (data?.sets ?? []).reduce((acc, set) => {
    const exercises = Array(set.repeatCount)
      .fill(null)
      .flatMap(() => {
        const setExercises = [...set.exercises];

        if (set.restSeconds > 0) {
          setExercises.push({
            type: "time",
            count: set.restSeconds,
            exercise: {
              id: REST_ID,
              name: "Отдых",
              image: {
                src: "/Rest.png",
              },
              met: 1.7,
            },
          } as Workout["sets"][number]["exercises"][number]);
        }

        return setExercises;
      });

    acc.push(...exercises);

    return acc;
  }, [] as Workout["sets"][number]["exercises"]);
  // удаляем последний отдых
  if (allExercise[allExercise.length - 1]?.exercise?.id === REST_ID) {
    allExercise.pop();
  }

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
  const calRef = useRef<number>(0);
  const exerciseStartTime = useRef(new Date());
  const { id } = params;
  const { allExercise, restCount, workout } = useGetWorkoutById(id ?? "0");

  if (currentExerciseIndex > allExercise.length - 1) {
    return (
      <WorkoutCogratulations
        expendSeconds={TimeHelper.getMinutes(
          (Number(new Date()) - Number(startDate.current)) / 1000
        )}
        countExercises={allExercise.length - restCount - skipCount.current}
        expendCalories={Number(calRef.current.toFixed(0))}
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
    const deltaSecound =
      (Number(new Date()) - Number(exerciseStartTime.current)) / 1000;

    const MET = allExercise[currentExerciseIndex].exercise.met;
    const calories = exerciseCalories(MET, user.weight, deltaSecound / 60);

    calRef.current += calories;

    exerciseStartTime.current = new Date();
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
