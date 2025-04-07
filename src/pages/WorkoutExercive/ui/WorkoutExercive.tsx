import { type FC, useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Image,
  Progress,
  Span,
  Text,
} from "@chakra-ui/react";
import { AiFillSound, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import type { Workout } from "@/@model";
import { PageWithPadding } from "@/app";
import { TimeHelper } from "@/shared/utils/helpers/time-helper";

type Props = {
  countExercises: number;
  currentExercise: number;
  onNext: () => void;
  onPrev: () => void;
} & Workout["sets"][number]["exercises"][number];

const Header: FC<Props> = ({ currentExercise, countExercises }) => (
  <Flex height="40px" flex={1} alignItems="center">
    <Button>
      <AiOutlineClose />
    </Button>
    <Box flex={1}>
      <Progress.Root
        value={currentExercise}
        max={countExercises}
        size="lg"
        variant="outline"
      >
        <Progress.Track borderRadius="xl" background="gray.100">
          <Progress.Range background="blue.600" />
        </Progress.Track>
      </Progress.Root>
    </Box>
    <Button>
      <AiFillSound />
    </Button>
  </Flex>
);

const Timer: FC<{
  count: number;
  onComplete?: () => number;
}> = ({ count, onComplete }) => {
  const [remaining, setRemaining] = useState(count);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    }

    if (remaining === 0 && isRunning) {
      setIsRunning(false);
      onComplete?.();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, remaining, onComplete]);

  return (
    <Text color="black" fontSize="5xl">
      {TimeHelper.formatDuration(remaining)}
    </Text>
  );
};
// TODO: опечатка
export default function WorkoutExercive(props: Props) {
  const {
    count,
    exercise: { image, name },
    currentExercise,
    countExercises,
    onNext,
    onPrev,
    type,
  } = props;

  const isFirstExercive = currentExercise === 0;
  const isLastExercive = currentExercise === countExercises - 1;

  return (
    <Flex direction="column" flex={1}>
      <Box>
        <Header {...props} />
      </Box>

      <PageWithPadding>
        <Box padding={4}>
          <Image
            src={image.src}
            alt="exercive image"
            maxWidth="100%"
            aspectRatio="1/1"
          />
        </Box>
        <Flex
          direction="column"
          justifyContent="space-between"
          flex={1}
          alignItems="center"
        >
          <Box>
            <Text
              color="black"
              fontSize="xl"
              _firstLetter={{ textTransform: "uppercase" }}
              lineClamp={1}
            >
              {name}
            </Text>
          </Box>
          <Box>
            {type === "reps" ? (
              <Text color="black" fontSize="5xl">
                X{count}
              </Text>
            ) : (
              <Timer count={count} />
            )}
          </Box>
          <Box width="100%">
            <Button background="blue.600" size="xl" rounded="full" width="100%">
              <Span color="white" textTransform="capitalize">
                done
              </Span>
              <AiOutlineCheck color="white" />
            </Button>
          </Box>
          <Flex gap={4} width="100%">
            <Button
              flex={1}
              background="blue.100"
              size="xl"
              rounded="full"
              onClick={onPrev}
            >
              <Span textTransform="capitalize" color="blue.600">
                {isFirstExercive ? "cancel" : "prev"}
              </Span>
            </Button>
            <Button
              flex={1}
              background="blue.600"
              size="xl"
              rounded="full"
              onClick={onNext}
            >
              <Span textTransform="capitalize" color="white">
                {isLastExercive ? "finish" : "skip"}
              </Span>
            </Button>
          </Flex>
        </Flex>
      </PageWithPadding>
    </Flex>
  );
}
