import { type FC, useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Image,
  Progress,
  Span,
  Switch,
  Text,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import {
  AiFillCaretRight,
  AiFillSound,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlinePause,
} from "react-icons/ai";
import { MdOutlineNotifications, MdVibration } from "react-icons/md";

import { REST_ID } from "@/@mock";
import type { Workout } from "@/@model";
import { App } from "@/@singleton/App";
import { PageWithPadding } from "@/app";
import { TimeHelper } from "@/shared/utils/helpers/time-helper";
import { usePromiseLikeBottomSheetModal } from "@/shared/utils/hooks/use-promise-like-bottom-sheet-modal";

type Props = {
  countExercises: number;
  currentExercise: number;
  onSkip: () => void;
  onPrev: () => void;
  onFinish: () => void;
  onCancel: () => void;
  onDone: () => void;
} & Workout["sets"][number]["exercises"][number];
// TODO: говнокод
type SOUND_SETTING_ITEM_PROPS = {
  name: string;
  title: string;
  getIsChecked: () => boolean;
  icon: ReactNode;
  onChange: (isChecked: boolean) => void;
};
const cacheValues = {
  vibration: {
    value: App.getInstance().settings.vibrate.isEnabled,
    onChange: (isChecked: boolean) =>
      App.getInstance().settings.vibrate.onChange(isChecked),
  },
  push: {
    value: App.getInstance().settings.pushNotification.isEnabled,
    onChange: (isChecked: boolean) => {
      App.getInstance()
        .settings.pushNotification.getPermission()
        .then(() =>
          App.getInstance().settings.pushNotification.onChange(isChecked)
        );
    },
  },
};
// TODO: при изменении менять в настройках
const SOUND_SETTING_ITEMS: SOUND_SETTING_ITEM_PROPS[] = [
  {
    name: "vibration",
    title: "enable vibration",
    getIsChecked: () => App.getInstance().settings.vibrate.isEnabled,
    icon: <MdVibration size={20} />,
    onChange: (isChecked: boolean) =>
      (cacheValues["vibration"].value = isChecked),
  },
  {
    name: "push",
    title: "enable push notification",
    getIsChecked: () => App.getInstance().settings.pushNotification.isEnabled,
    icon: <MdOutlineNotifications size={20} />,
    onChange: (isChecked: boolean) => (cacheValues["push"].value = isChecked),
  },
];

const ButtonSoundSettingItem: FC<SOUND_SETTING_ITEM_PROPS> = ({
  icon,
  title,
  getIsChecked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(getIsChecked());

  const onToggle = () => {
    setIsChecked((prev) => {
      const value = !prev;
      onChange(value);

      return value;
    });
  };

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" gap={2}>
        <Flex width={5} justifyContent="center">
          {icon}
        </Flex>
        <Text _firstLetter={{ textTransform: "uppercase" }} fontWeight="bold">
          {title}
        </Text>
      </Flex>

      <Switch.Root defaultChecked={getIsChecked()} onChange={onToggle}>
        <Switch.HiddenInput />
        <Switch.Control bg={isChecked ? "blue" : "blue.300"} />
      </Switch.Root>
    </Flex>
  );
};

const ButtonSoundController: FC = () => {
  const [modal, openModal] = usePromiseLikeBottomSheetModal();

  const onClickHandler = () => {
    openModal({
      renderComponent: () => (
        <Flex direction="column" gap={4}>
          {SOUND_SETTING_ITEMS.map((item) => (
            <ButtonSoundSettingItem key={item.title} {...item} />
          ))}
        </Flex>
      ),
      renderFooter: (onResolve, onReject) => (
        <Flex gap={4} width="100%">
          <Button
            flex={1}
            background="blue.200"
            size="xl"
            rounded="full"
            onClick={() => {
              onReject(undefined);
            }}
          >
            <Span textTransform="capitalize" color="blue">
              cancel
            </Span>
          </Button>
          <Button
            flex={1}
            background="blue"
            size="xl"
            rounded="full"
            onClick={() => {
              onResolve();
            }}
          >
            <Span textTransform="capitalize">ok</Span>
          </Button>
        </Flex>
      ),
      modalProps: {
        title: (
          <Text textAlign="center" w="100%" textTransform="capitalize">
            sound settings
          </Text>
        ),
      },
    })
      .then(() => {
        Object.values(cacheValues).forEach(({ value, onChange }) => {
          onChange(value);
        });

        App.getInstance().saveSettigns();

        console.log("zdec ok");
        console.log(App.getInstance());
      })
      .catch(() => {
        console.log("zdec cancel");
      });
  };

  return (
    <>
      <Button onClick={onClickHandler} variant="ghost">
        <AiFillSound />
      </Button>
      {modal}
    </>
  );
};

const Header: FC<Props> = ({ currentExercise, countExercises, onCancel }) => (
  <Flex height="40px" flex={1} alignItems="center">
    <Button onClick={onCancel} variant="ghost">
      <AiOutlineClose />
    </Button>
    <Box flex={1}>
      <Progress.Root
        value={currentExercise}
        max={countExercises}
        size="lg"
        variant="outline"
        animated={true}
      >
        <Progress.Track borderRadius="xl" background="gray.100">
          <Progress.Range background="blue" />
        </Progress.Track>
      </Progress.Root>
    </Box>
    <ButtonSoundController />
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
          gap={4}
        >
          <Box>
            <Text
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
              background="blue.200"
              size="xl"
              rounded="full"
              onClick={isFirstExercive ? onCancel : onPrev}
            >
              <Span textTransform="capitalize" color="blue">
                {isFirstExercive ? "cancel" : "prev"}
              </Span>
            </Button>
            <Button
              flex={1}
              background="blue"
              size="xl"
              rounded="full"
              onClick={isLastExercive ? onFinish : onSkip}
            >
              <Span textTransform="capitalize">
                {isLastExercive ? "finish" : "skip"}
              </Span>
            </Button>
          </Flex>
        </Flex>
      </PageWithPadding>
    </Flex>
  );
}
