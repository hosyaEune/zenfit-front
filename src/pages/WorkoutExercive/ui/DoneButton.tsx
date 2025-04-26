import { useState } from "react";

import { Box, Button, Span, Text } from "@chakra-ui/react";
import type { FC } from "react";
import {
  AiFillCaretRight,
  AiOutlineCheck,
  AiOutlinePause,
} from "react-icons/ai";

import { Timer } from "./Timer";
import type { Props } from "./WorkoutExercive";

import { REST_ID } from "@/@global/mock";
import { App } from "@/@singleton/App";

export const DoneButton: FC<Props> = ({ type, count, onDone, exercise }) => {
  const [isReady, setIsReady] = useState(type === "reps");
  const [isPause, setIsPause] = useState(
    type === "time" && exercise.id !== REST_ID
  );

  return (
    <>
      <Box>
        {type === "reps" ? (
          <Text fontSize="5xl">X{count}</Text>
        ) : (
          <Timer
            count={count}
            stop={isPause}
            onComplete={async () => {
              App.getInstance().settings.pushNotification.execute(
                "Время вышло"
              );
              App.getInstance().settings.vibrate.execute();

              setIsReady(true);
            }}
          />
        )}
      </Box>
      <Box width="100%">
        {isReady ? (
          <Button
            background="blue"
            size="xl"
            rounded="full"
            width="100%"
            onClick={onDone}
          >
            <AiOutlineCheck size={6} />
            <Span textTransform="capitalize">done</Span>
          </Button>
        ) : (
          <Button
            background="blue"
            size="xl"
            rounded="full"
            width="100%"
            onClick={() => setIsPause((prev) => !prev)}
          >
            {isPause ? (
              <AiFillCaretRight size={6} />
            ) : (
              <AiOutlinePause size={6} />
            )}
            <Span textTransform="capitalize">
              {isPause ? "Start" : "Pause"}
            </Span>
          </Button>
        )}
      </Box>
    </>
  );
};
