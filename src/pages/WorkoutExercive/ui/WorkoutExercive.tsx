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
import {
  AiFillCaretRight,
  AiFillSound,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlinePause,
} from "react-icons/ai";

import { REST_ID } from "@/@mock";
import type { Workout } from "@/@model";
import { App } from "@/@singleton/App";
import { PageWithPadding } from "@/app";
import { TimeHelper } from "@/shared/utils/helpers/time-helper";

type Props = {
  countExercises: number;
  currentExercise: number;
  onSkip: () => void;
  onPrev: () => void;
  onFinish: () => void;
  onCancel: () => void;
  onDone: () => void;
} & Workout["sets"][number]["exercises"][number];

const Header: FC<Props> = ({ currentExercise, countExercises, onCancel }) => (
  <Flex height="40px" flex={1} alignItems="center">
    <Button onClick={onCancel}>
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
  stop?: boolean;
  onComplete?: () => void;
}> = ({ count, stop = false, onComplete }) => {
  const [remaining, setRemaining] = useState(count);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        if (!stop) {
          setRemaining((prev) => prev - 1);
        }
      }, 1000);
    }

    if (remaining === 0 && isRunning) {
      setIsRunning(false);
      onComplete?.();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, remaining, onComplete, stop]);

  return (
    <Text color="black" fontSize="5xl">
      {TimeHelper.formatDuration(remaining)}
    </Text>
  );
};

const DoneButton: FC<Props> = ({ type, count, onDone, exercise }) => {
  const [isReady, setIsReady] = useState(type === "reps");
  const [isPause, setIsPause] = useState(
    type === "time" && exercise.id !== REST_ID
  );

  return (
    <>
      <Box>
        {type === "reps" ? (
          <Text color="black" fontSize="5xl">
            X{count}
          </Text>
        ) : (
          <Timer
            count={count}
            stop={isPause}
            onComplete={async () => {
              App.getInstance().pushNotify("Время вышло");
              App.getInstance().vibrate();

              setIsReady(true);
            }}
          />
        )}
      </Box>
      <Box width="100%">
        {isReady ? (
          <Button
            background="blue.600"
            size="xl"
            rounded="full"
            width="100%"
            onClick={onDone}
          >
            <AiOutlineCheck color="white" size={6} />
            <Span color="white" textTransform="capitalize">
              done
            </Span>
          </Button>
        ) : (
          <Button
            background="blue.600"
            size="xl"
            rounded="full"
            width="100%"
            onClick={() => setIsPause((prev) => !prev)}
          >
            {isPause ? (
              <AiFillCaretRight color="white" size={6} />
            ) : (
              <AiOutlinePause color="white" size={6} />
            )}
            <Span color="white" textTransform="capitalize">
              {isPause ? "Start" : "Pause"}
            </Span>
          </Button>
        )}
      </Box>
    </>
  );
};

// TODO: опечатка
export default function WorkoutExercive(props: Props) {
  const {
    exercise: { image, name },
    currentExercise,
    countExercises,
    onCancel,
    onFinish,
    onSkip,
    onPrev,
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
          <DoneButton {...props} key={currentExercise} />
          <Flex gap={4} width="100%">
            <Button
              flex={1}
              background="blue.100"
              size="xl"
              rounded="full"
              onClick={isFirstExercive ? onCancel : onPrev}
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
              onClick={isLastExercive ? onFinish : onSkip}
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
